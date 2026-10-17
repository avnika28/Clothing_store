import React, { useState, useRef, useEffect } from 'react';
import { useApp } from '../context/AppContext';
import { PRODUCTS } from '../data/products';

export const PDP: React.FC = () => {
  const {
    selectedProductId,
    openProduct,
    addToCart,
    wishlist,
    toggleWishlist,
    openFitPredictor,
    setIsCheckoutSuccessModalOpen,
    showToast,
  } = useApp();

  const product = PRODUCTS.find((p) => p.id === selectedProductId) || PRODUCTS[0];

  const [activeSlide, setActiveSlide] = useState<number>(0);
  const [selectedColor, setSelectedColor] = useState<string>(product.color);
  const [selectedSize, setSelectedSize] = useState<string>('M');
  const [addingState, setAddingState] = useState<'idle' | 'adding' | 'added'>('idle');

  // Accordion state
  const [openAccordions, setOpenAccordions] = useState<Record<string, boolean>>({
    fit: true,
    fabric: false,
    shipping: false,
  });

  const carouselRef = useRef<HTMLDivElement>(null);

  // Sync selected color and size when product changes
  useEffect(() => {
    setSelectedColor(product.color);
    setSelectedSize(product.sizes[0] || 'M');
    setActiveSlide(0);
    if (carouselRef.current) {
      carouselRef.current.scrollTo({ left: 0, behavior: 'instant' as ScrollBehavior });
    }
  }, [product.id]);

  const handleScroll = () => {
    if (carouselRef.current) {
      const scrollLeft = carouselRef.current.scrollLeft;
      const width = carouselRef.current.clientWidth;
      const index = Math.round(scrollLeft / width);
      setActiveSlide(Math.min(Math.max(index, 0), product.galleryImages.length - 1));
    }
  };

  const scrollToSlide = (index: number) => {
    if (carouselRef.current) {
      const width = carouselRef.current.clientWidth;
      carouselRef.current.scrollTo({ left: width * index, behavior: 'smooth' });
      setActiveSlide(index);
    }
  };

  const toggleAccordion = (key: string) => {
    setOpenAccordions((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const handleAddToBag = () => {
    if (addingState !== 'idle') return;
    setAddingState('adding');
    setTimeout(() => {
      addToCart(product, selectedSize, selectedColor);
      setAddingState('added');
      setTimeout(() => {
        setAddingState('idle');
      }, 1800);
    }, 400);
  };

  const isSaved = wishlist.has(product.id);
  const stockInfo = product.stockPerSize[selectedSize] || 'In Stock';

  // Cross-sell items
  const completeLookItems = [
    PRODUCTS.find((p) => p.id === 'pleated-wide-trousers') || PRODUCTS[1],
    PRODUCTS.find((p) => p.id === 'leather-slide-sandal') || PRODUCTS[9],
  ];

  return (
    <div className="flex flex-col w-full pb-32">
      {/* Editorial Product Showcase Carousel */}
      <section className="relative w-full bg-[#f6f3ed] overflow-hidden">
        {/* Carousel Slides Container */}
        <div
          ref={carouselRef}
          onScroll={handleScroll}
          className="flex w-full overflow-x-auto snap-x snap-mandatory scroll-smooth no-scrollbar"
        >
          {product.galleryImages.map((imgUrl, i) => (
            <div
              key={i}
              className="snap-start shrink-0 w-full relative aspect-[3/4] bg-[#ebe8e2]"
            >
              <img
                className="w-full h-full object-cover select-none"
                src={imgUrl}
                alt={`${product.title} - View ${i + 1}`}
              />
            </div>
          ))}
        </div>

        {/* Floating Top Editorial Badge */}
        <div className="absolute top-4 left-4 z-10">
          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#fcf9f3]/90 backdrop-blur-md text-[#556250] text-[10px] uppercase font-bold tracking-wider shadow-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-[#556250]" />
            {product.badge || 'Artisan Crafted'}
          </span>
        </div>

        {/* Floating Wishlist Button */}
        <button
          aria-label="Add to Wishlist"
          onClick={() => toggleWishlist(product.id)}
          className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-[#fcf9f3]/90 backdrop-blur-md flex items-center justify-center text-primary shadow-sm active:scale-95 transition-transform cursor-pointer"
        >
          <span
            className={`material-symbols-outlined text-[20px] transition-colors ${
              isSaved ? 'text-[#ba1a1a]' : 'text-primary'
            }`}
            style={isSaved ? { fontVariationSettings: "'FILL' 1" } : undefined}
          >
            favorite
          </span>
        </button>

        {/* Carousel Progress Indicator & Fullscreen Zoom Pill */}
        <div className="absolute bottom-4 left-4 right-4 z-10 flex items-center justify-between pointer-events-none">
          <div className="pointer-events-auto px-3 py-1 rounded-full bg-white/85 backdrop-blur-md text-primary text-[10px] tracking-widest font-bold shadow-sm font-sans">
            {activeSlide + 1} / {product.galleryImages.length}
          </div>
          <button
            onClick={() => showToast('High-resolution zoom view active')}
            aria-label="View fullscreen gallery"
            className="pointer-events-auto w-8 h-8 rounded-full bg-white/85 backdrop-blur-md flex items-center justify-center text-primary shadow-sm active:scale-90 transition-transform cursor-pointer"
          >
            <span className="material-symbols-outlined text-[16px]">crop_free</span>
          </button>
        </div>

        {/* Desktop Carousel Thumbnails Indicators */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-10 flex gap-1.5 pointer-events-auto">
          {product.galleryImages.map((_, idx) => (
            <button
              key={idx}
              onClick={() => scrollToSlide(idx)}
              className={`w-1.5 h-1.5 rounded-full transition-all cursor-pointer ${
                activeSlide === idx ? 'w-4 bg-primary' : 'bg-black/30 hover:bg-black/50'
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
      </section>

      {/* Product Editorial Details Section */}
      <section className="flex flex-col px-4 pt-5">
        {/* Category & Reviews Row */}
        <div className="flex items-center justify-between pb-1">
          <p className="text-[11px] font-semibold text-[#556250] tracking-widest uppercase">
            {product.edition || 'Édition No. 04 — Linen'}
          </p>
          <div className="flex items-center gap-1">
            <div className="flex text-primary">
              {[...Array(5)].map((_, i) => (
                <span
                  key={i}
                  className="material-symbols-outlined text-[15px]"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  star
                </span>
              ))}
            </div>
            <button
              onClick={() => showToast(`128 verified customer reviews — 4.9/5 stars`)}
              className="text-[11px] text-on-surface underline underline-offset-2 ml-1 font-semibold cursor-pointer"
            >
              {product.rating} ({product.reviewsCount})
            </button>
          </div>
        </div>

        {/* Product Title & Subtitle */}
        <h1 className="font-serif text-[28px] font-normal text-primary tracking-tight mt-1 leading-snug">
          {product.title}
        </h1>
        <p className="text-[14px] text-on-surface-variant mt-0.5 font-normal">
          {product.subtitle}
        </p>

        {/* Pricing & Financing */}
        <div className="mt-4 flex flex-col gap-1 pb-4">
          <div className="flex items-baseline gap-3">
            <span className="font-sans text-[22px] text-primary font-semibold">
              ${product.price}
            </span>
            <span className="text-[10px] text-[#556250] font-bold uppercase bg-[#d8e7d0]/50 px-2 py-0.5 rounded-full border border-[#d8e7d0]">
              Pre-Washed &amp; Softened
            </span>
          </div>
          <p className="text-[12px] text-on-surface-variant flex items-center gap-1.5 mt-0.5 flex-wrap">
            <span>
              or 4 interest-free payments of <strong>${(product.price / 4).toFixed(2)}</strong> with
            </span>
            <span className="inline-block px-1.5 py-0.5 rounded bg-[#f0eee8] text-[10px] text-primary font-bold">
              Klarna
            </span>
            <span>or</span>
            <span className="inline-block px-1.5 py-0.5 rounded bg-[#f0eee8] text-[10px] text-primary font-bold">
              afterpay
            </span>
          </p>
        </div>

        <div className="w-full h-px bg-[#ebe8e2] my-1" />

        {/* Color Swatches Selection */}
        <div className="flex flex-col pt-4">
          <div className="flex items-center justify-between">
            <span className="text-[11px] text-primary font-bold uppercase tracking-wider">
              Color: <span className="font-normal capitalize text-on-surface">{selectedColor}</span>
            </span>
            <span className="text-[10px] text-[#556250] font-semibold">Natural Vegetable Dye</span>
          </div>

          <div className="flex items-center gap-3 mt-3">
            {product.availableColors.map((col) => {
              const isSelected = selectedColor === col.name;
              return (
                <button
                  key={col.name}
                  aria-label={`Select ${col.name}`}
                  onClick={() => setSelectedColor(col.name)}
                  className={`relative p-1 rounded-full transition-all duration-200 cursor-pointer ${
                    isSelected
                      ? 'bg-primary ring-offset-2 ring-1 ring-primary'
                      : 'hover:scale-105'
                  }`}
                >
                  <span
                    className="block w-7 h-7 rounded-full shadow-inner border border-black/10"
                    style={{ backgroundColor: col.hex }}
                  />
                </button>
              );
            })}
          </div>
        </div>

        {/* Size Selection & Fit Advisor */}
        <div className="flex flex-col mt-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="text-[11px] text-primary font-bold uppercase tracking-wider">
                Select Size
              </span>
              {/* Dynamic stock pill */}
              <span
                className={`px-2 py-0.5 rounded-full text-[10px] font-bold ${
                  stockInfo.includes('Low') || stockInfo.includes('Only')
                    ? 'bg-[#ffdbcf] text-[#793014] animate-pulse'
                    : 'bg-[#d8e7d0] text-[#131e10]'
                }`}
              >
                {stockInfo}
              </span>
            </div>

            {/* Size Guide & Fit Predictor modal trigger */}
            <button
              onClick={() => openFitPredictor(product)}
              className="text-[11px] text-on-surface underline underline-offset-4 flex items-center gap-1 active:opacity-70 transition-opacity font-medium cursor-pointer"
            >
              <span className="material-symbols-outlined text-[15px]">straighten</span>
              Size Guide &amp; Fit Predictor
            </button>
          </div>

          {/* Size Tiles Grid */}
          <div className="grid grid-cols-5 gap-2 mt-3">
            {product.sizes.map((sz) => {
              const isSelected = selectedSize === sz;
              return (
                <button
                  key={sz}
                  onClick={() => setSelectedSize(sz)}
                  className={`h-12 rounded-lg text-[13px] uppercase tracking-wider transition-all cursor-pointer flex items-center justify-center ${
                    isSelected
                      ? 'bg-primary text-white font-bold shadow-sm'
                      : 'bg-[#f0eee8] text-primary hover:bg-[#ebe8e2] font-semibold'
                  }`}
                >
                  {sz}
                </button>
              );
            })}
          </div>

          {/* Fit Prediction Callout Banner */}
          <div className="mt-4 p-4 rounded-xl bg-[#f6f3ed] flex items-start gap-3 border border-[#e5e2dc]/60">
            <span className="material-symbols-outlined text-[#556250] text-[20px] mt-0.5">
              sentiment_satisfied
            </span>
            <div className="flex flex-col">
              <p className="text-[12px] text-primary font-semibold">True to Editorial Fit</p>
              <p className="text-[12px] text-on-surface-variant leading-relaxed">
                Cut intentionally oversized with a relaxed drop-shoulder. For a tailored, closer
                look, order one size down.
              </p>
            </div>
          </div>
        </div>

        {/* Tactile Editorial Accordions */}
        <div className="mt-6 flex flex-col space-y-2">
          {/* Accordion 1: Design & Fit */}
          <div className="rounded-xl bg-white shadow-sm overflow-hidden border border-[#e5e2dc]/60 transition-all">
            <button
              aria-expanded={openAccordions.fit}
              onClick={() => toggleAccordion('fit')}
              className="w-full px-4 py-3.5 flex items-center justify-between text-left cursor-pointer"
            >
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-[18px] text-[#556250]">
                  stylus_note
                </span>
                <span className="font-serif text-[16px] font-medium text-primary">
                  Design &amp; Fit
                </span>
              </div>
              <span
                className={`material-symbols-outlined text-primary text-[20px] transform transition-transform duration-300 ${
                  openAccordions.fit ? 'rotate-180' : ''
                }`}
              >
                expand_more
              </span>
            </button>
            {openAccordions.fit && (
              <div className="px-4 pb-4">
                <p className="text-[13px] text-on-surface-variant leading-relaxed">
                  {product.description}
                </p>
                <ul className="mt-3 space-y-1 text-[12px] text-[#556250]">
                  {product.features.map((feat, idx) => (
                    <li key={idx} className="flex items-center gap-2">
                      <span className="w-1 h-1 rounded-full bg-[#556250]" />
                      {feat}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          {/* Accordion 2: Fabric & Sustainable Impact */}
          <div className="rounded-xl bg-white shadow-sm overflow-hidden border border-[#e5e2dc]/60 transition-all">
            <button
              aria-expanded={openAccordions.fabric}
              onClick={() => toggleAccordion('fabric')}
              className="w-full px-4 py-3.5 flex items-center justify-between text-left cursor-pointer"
            >
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-[18px] text-[#556250]">eco</span>
                <span className="font-serif text-[16px] font-medium text-primary">
                  Fabric &amp; Sustainable Impact
                </span>
              </div>
              <span
                className={`material-symbols-outlined text-primary text-[20px] transform transition-transform duration-300 ${
                  openAccordions.fabric ? 'rotate-180' : ''
                }`}
              >
                expand_more
              </span>
            </button>
            {openAccordions.fabric && (
              <div className="px-4 pb-4">
                <p className="text-[13px] text-on-surface-variant leading-relaxed">
                  {product.sustainability.ecoDescription}
                </p>
                {/* Eco Metrics Bento Row */}
                <div className="grid grid-cols-2 gap-2 mt-3">
                  <div className="p-3 rounded-lg bg-[#f6f3ed] flex flex-col border border-[#e5e2dc]/60">
                    <span className="text-[10px] text-[#556250] uppercase font-bold tracking-wider">
                      Water Conserved
                    </span>
                    <span className="font-serif text-[17px] text-primary font-semibold mt-1">
                      {product.sustainability.waterSaved}
                    </span>
                    <span className="text-[11px] text-on-surface-variant mt-0.5">
                      Versus conventional cotton
                    </span>
                  </div>
                  <div className="p-3 rounded-lg bg-[#f6f3ed] flex flex-col border border-[#e5e2dc]/60">
                    <span className="text-[10px] text-[#556250] uppercase font-bold tracking-wider">
                      Certification
                    </span>
                    <span className="font-serif text-[17px] text-primary font-semibold mt-1">
                      {product.sustainability.certification}
                    </span>
                    <span className="text-[11px] text-on-surface-variant mt-0.5">
                      100% traceable origins
                    </span>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Accordion 3: Shipping & Returns */}
          <div className="rounded-xl bg-white shadow-sm overflow-hidden border border-[#e5e2dc]/60 transition-all">
            <button
              aria-expanded={openAccordions.shipping}
              onClick={() => toggleAccordion('shipping')}
              className="w-full px-4 py-3.5 flex items-center justify-between text-left cursor-pointer"
            >
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-[18px] text-[#556250]">
                  local_shipping
                </span>
                <span className="font-serif text-[16px] font-medium text-primary">
                  Shipping &amp; Returns
                </span>
              </div>
              <span
                className={`material-symbols-outlined text-primary text-[20px] transform transition-transform duration-300 ${
                  openAccordions.shipping ? 'rotate-180' : ''
                }`}
              >
                expand_more
              </span>
            </button>
            {openAccordions.shipping && (
              <div className="px-4 pb-4">
                <p className="text-[13px] text-on-surface-variant leading-relaxed">
                  We provide carbon-neutral shipping on all domestic orders. Packaged thoughtfully
                  in 100% compostable mycelium packaging and unbleached cotton garment bags.
                </p>
                <div className="mt-3 space-y-2 text-[12px] text-on-surface-variant">
                  <div className="flex items-center justify-between">
                    <span>Complimentary shipping</span>
                    <span className="font-semibold text-primary">Orders over $150</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>Standard transit (US)</span>
                    <span className="font-semibold text-primary">2–4 business days</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>In-home trial returns</span>
                    <span className="font-semibold text-primary">30 days prepaid</span>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Complete the Look / Curated Pairing */}
        <div className="mt-8 pt-4">
          <div className="flex items-center justify-between mb-3">
            <h2 className="font-serif text-[20px] font-medium text-primary">
              Complete The Look
            </h2>
            <button
              onClick={() => showToast('Displaying curated lookbook outfits')}
              className="text-[11px] font-semibold text-[#556250] underline underline-offset-4 uppercase tracking-wider cursor-pointer"
            >
              View All
            </button>
          </div>

          <div className="grid grid-cols-2 gap-3">
            {completeLookItems.map((item) => (
              <div
                key={item.id}
                className="flex flex-col group cursor-pointer"
                onClick={() => openProduct(item.id)}
              >
                <div className="relative aspect-[3/4] rounded-lg overflow-hidden bg-[#f0eee8] border border-[#e5e2dc]/50">
                  <img
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    src={item.image}
                    alt={item.title}
                  />
                  <button
                    aria-label={`Quick add ${item.title}`}
                    onClick={(e) => {
                      e.stopPropagation();
                      addToCart(item, 'M', item.color);
                    }}
                    className="absolute bottom-2 right-2 w-8 h-8 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center text-primary shadow-sm active:scale-90 transition-transform cursor-pointer"
                  >
                    <span className="material-symbols-outlined text-[18px]">add</span>
                  </button>
                </div>
                <p className="font-serif text-[15px] font-medium text-primary mt-2 leading-tight group-hover:text-[#556250]">
                  {item.title}
                </p>
                <p className="text-[13px] font-semibold text-on-surface-variant font-sans">
                  ${item.price}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sticky Bottom Checkout Action Tray */}
      <div className="fixed bottom-0 left-0 right-0 z-40 bg-[#fcf9f3]/95 backdrop-blur-xl border-t border-[#e5e2dc] shadow-[0_-8px_24px_rgba(28,27,27,0.06)] px-4 py-3 pb-safe">
        <div className="max-w-md mx-auto flex items-center gap-3">
          {/* Price Overview */}
          <div className="flex flex-col min-w-[70px]">
            <span className="text-[10px] text-[#556250] uppercase tracking-widest leading-none font-bold">
              Price
            </span>
            <span className="font-sans text-[20px] text-primary font-bold mt-0.5">
              ${product.price}
            </span>
          </div>

          {/* Add to Bag Primary CTA */}
          <button
            disabled={addingState !== 'idle'}
            onClick={handleAddToBag}
            className={`flex-1 h-12 rounded-lg text-white text-[12px] font-semibold uppercase tracking-wider flex items-center justify-center gap-2 active:scale-[0.98] transition-all shadow-md cursor-pointer ${
              addingState === 'added'
                ? 'bg-[#556250]'
                : addingState === 'adding'
                ? 'bg-[#333]'
                : 'bg-primary hover:bg-[#222]'
            }`}
          >
            <span className="material-symbols-outlined text-[18px]">
              {addingState === 'added' ? 'check' : 'shopping_bag'}
            </span>
            <span>
              {addingState === 'adding'
                ? 'Adding...'
                : addingState === 'added'
                ? 'Added to Bag'
                : 'Add to Bag'}
            </span>
          </button>

          {/* 1-Tap Apple Pay Fast Checkout */}
          <button
            onClick={() => setIsCheckoutSuccessModalOpen(true)}
            aria-label="Pay with Apple Pay"
            className="h-12 px-3.5 rounded-lg bg-primary text-white flex items-center justify-center active:scale-[0.98] hover:bg-[#222] transition-transform shadow-md cursor-pointer"
          >
            <svg aria-hidden="true" className="h-5 w-auto fill-current" viewBox="0 0 170 82">
              <path d="M45.5 39.7c-.1-9.4 7.7-13.9 8-14.1-4.4-6.4-11.2-7.3-13.6-7.4-5.8-.6-11.4 3.4-14.3 3.4-3 0-7.5-3.3-12.4-3.2-6.4.1-12.3 3.7-15.6 9.5-6.7 11.6-1.7 28.7 4.8 38 3.2 4.6 7 9.7 12 9.5 4.8-.2 6.6-3.1 12.4-3.1 5.7 0 7.4 3.1 12.4 3 5.1-.1 8.3-4.6 11.4-9.2 3.7-5.3 5.2-10.4 5.3-10.7-.2-.1-10.2-3.9-10.4-15.7zm-9.3-25.2c2.6-3.2 4.4-7.6 3.9-12-3.8.2-8.3 2.5-11 5.7-2.4 2.8-4.5 7.3-3.9 11.6 4.2.3 8.4-2.1 11-5.3zM85.7 66V26.2h12.5c8.7 0 14.8 5.9 14.8 14.2 0 8.3-6.1 14.2-14.8 14.2h-6.2V66h-6.3zm6.3-17.1h5.8c5.4 0 9-3.3 9-8.4 0-5.1-3.6-8.4-9-8.4H92v16.8zm27.4 17.1V38.6h5.8v4.1c1.8-2.9 5.3-4.6 9.2-4.6 6.8 0 11.8 5.3 11.8 13.9v14h-6.1V52.5c0-4.8-2.7-7.8-6.9-7.8-3.7 0-6.9 2.7-7.7 6.4V66h-6.1zm41.8 0l-1.3-4.6c-2.3 3.3-6.1 5.1-10.4 5.1-6.4 0-11-4.3-11-10.3 0-6.2 5.2-9.9 14.3-10.5l7-.5v-1.6c0-3.5-2.5-5.5-6.8-5.5-3.8 0-6.8 1.4-8.3 3.6l-3.9-3.1c2.4-3.3 7-5.1 12.6-5.1 8 0 12.6 4.3 12.6 12.2V66h-6.2zm-.1-15.6l-5.6.4c-5.4.4-8.4 2.2-8.4 5.9 0 3.5 2.6 5.6 6.2 5.6 4.5 0 7.8-3.1 7.8-7.5v-4.4z" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};
