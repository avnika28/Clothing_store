import React from 'react';
import { useApp } from '../context/AppContext';
import { PRODUCTS, CAMPAIGN_HERO_BG } from '../data/products';

export const HomeScreen: React.FC = () => {
  const {
    openProduct,
    setCurrentScreen,
    catalogCategory,
    setCatalogCategory,
    wishlist,
    toggleWishlist,
    showToast,
  } = useApp();

  const categories = [
    'All',
    'New In',
    'Linen & Silk',
    'Tailored Pants',
    'Summer Knitwear',
    'Outerwear',
    'Accessories',
  ];

  // The 4 spotlight products for The Monochromatic Capsule
  const spotlightProducts = [
    PRODUCTS[0], // Oversized Linen Shirt
    PRODUCTS[1], // Pleated Wide Trousers
    PRODUCTS[2], // Ribbed Knit Tank
    PRODUCTS[3], // Relaxed Trench Coat
  ];

  const handleCategoryClick = (cat: string) => {
    setCatalogCategory(cat);
    setCurrentScreen('catalog');
  };

  return (
    <div className="flex flex-col w-full pb-8">
      {/* Campaign Hero Section */}
      <section className="relative px-4 pt-1 pb-6">
        <div className="relative w-full aspect-[4/5] rounded-xl overflow-hidden shadow-sm bg-[#e5e2dc] group">
          <div
            className="absolute inset-0 bg-cover bg-center w-full h-full transform scale-100 transition-transform duration-700 ease-out group-hover:scale-105"
            style={{ backgroundImage: `url('${CAMPAIGN_HERO_BG}')` }}
            role="img"
            aria-label="Editorial fashion photography of a model standing outdoors in sunlight wearing an oversized relaxed oat-colored linen shirt"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-transparent" />

          <div className="absolute inset-x-0 bottom-0 p-5 flex flex-col items-start gap-1 text-white">
            <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-white/90 backdrop-blur-md text-[#556250] shadow-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-[#556250]" />
              <span className="text-[10px] uppercase font-bold tracking-widest text-[#1c1c18]">
                Sustainable Essentials
              </span>
            </div>
            <span className="text-[11px] font-semibold uppercase tracking-widest text-[#e5e2e1] opacity-90 mt-1">
              High Summer 2025
            </span>
            <h2 className="font-serif text-[32px] leading-tight text-white font-normal">
              The Linen Chapter
            </h2>
            <p className="text-[12px] leading-[18px] text-[#f6f3ed] max-w-[280px] line-clamp-2 opacity-95 mb-2">
              Tactile textures and unstudied silhouettes cut from raw European harvest flax.
            </p>
            <button
              onClick={() => setCurrentScreen('catalog')}
              className="inline-flex items-center justify-center gap-1.5 px-5 py-3 rounded-lg bg-white text-primary text-[12px] font-semibold uppercase tracking-wider shadow-md hover:bg-[#f0eee8] transition-all active:scale-[0.98] cursor-pointer"
            >
              <span>Explore Collection</span>
              <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
            </button>
          </div>
        </div>
      </section>

      {/* Quick Category Pills Horizontal Scroll */}
      <section className="w-full pl-4 pr-0 mb-6 overflow-x-auto no-scrollbar flex items-center gap-2 scroll-smooth">
        {categories.map((cat) => {
          const isActive = catalogCategory === cat;
          return (
            <button
              key={cat}
              onClick={() => handleCategoryClick(cat)}
              className={`flex-shrink-0 px-4 py-2 rounded-full text-[11px] uppercase tracking-wider font-semibold transition-all cursor-pointer ${
                isActive
                  ? 'bg-primary text-white shadow-sm'
                  : 'bg-[#f6f3ed] text-on-surface-variant hover:bg-[#f0eee8]'
              } ${cat === 'Accessories' ? 'mr-4' : ''}`}
            >
              {cat}
            </button>
          );
        })}
      </section>

      {/* Curated Collection Spotlight Header */}
      <section className="px-4 mb-4 flex flex-col gap-0.5">
        <div className="flex items-center justify-between">
          <span className="text-[10px] uppercase tracking-widest text-[#556250] font-bold">
            Curated Spotlight
          </span>
          <span className="text-[10px] uppercase tracking-wider text-on-surface-variant font-medium">
            04 Items
          </span>
        </div>
        <h3 className="font-serif text-[22px] font-medium text-on-surface leading-snug">
          The Monochromatic Capsule
        </h3>
        <p className="text-[12px] text-on-surface-variant">
          Mindfully crafted from 100% organic European flax.
        </p>
      </section>

      {/* Trending 2-Column Product Grid */}
      <section className="px-4 mb-8">
        <div className="grid grid-cols-2 gap-3">
          {spotlightProducts.map((product) => {
            const isSaved = wishlist.has(product.id);
            return (
              <article
                key={product.id}
                className="flex flex-col bg-white rounded-xl overflow-hidden shadow-sm group border border-[#e5e2dc]/50 transition-all hover:shadow-md"
              >
                {/* Product Image & Badges */}
                <div
                  className="relative w-full aspect-[3/4] bg-[#ebe8e2] overflow-hidden cursor-pointer"
                  onClick={() => openProduct(product.id)}
                >
                  <img
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out"
                    src={product.image}
                    alt={product.title}
                    loading="lazy"
                  />

                  {/* Wishlist Heart */}
                  <button
                    aria-label={`Save ${product.title} to wishlist`}
                    onClick={(e) => {
                      e.stopPropagation();
                      toggleWishlist(product.id);
                    }}
                    className="absolute top-2 right-2 w-8 h-8 rounded-full bg-white/85 backdrop-blur-md flex items-center justify-center text-primary shadow-sm active:scale-90 transition-transform cursor-pointer"
                  >
                    <span
                      className={`material-symbols-outlined text-[17px] ${
                        isSaved ? 'text-[#ba1a1a]' : 'text-primary'
                      }`}
                      style={isSaved ? { fontVariationSettings: "'FILL' 1" } : undefined}
                    >
                      favorite
                    </span>
                  </button>

                  {/* Top-left Pill Badge (if low stock or bestseller) */}
                  {product.badge && product.badgeType === 'low-stock' && (
                    <div className="absolute top-2 left-2 bg-[#ffdbcf] text-[#793014] px-2 py-0.5 rounded-full">
                      <span className="text-[9px] font-bold uppercase tracking-wider">
                        Low Stock
                      </span>
                    </div>
                  )}
                  {product.badge && product.badgeType === 'bestseller' && (
                    <div className="absolute top-2 left-2 bg-[#d8e7d0] text-[#3d4a39] px-2 py-0.5 rounded-full">
                      <span className="text-[9px] font-bold uppercase tracking-wider">
                        Bestseller
                      </span>
                    </div>
                  )}

                  {/* Bottom-left Star Rating */}
                  {product.rating && (
                    <div className="absolute bottom-2 left-2 flex items-center gap-1 bg-white/90 backdrop-blur-sm px-2 py-0.5 rounded-full shadow-xs">
                      <span
                        className="material-symbols-outlined text-[12px] text-primary"
                        style={{ fontVariationSettings: "'FILL' 1" }}
                      >
                        star
                      </span>
                      <span className="text-[10px] font-semibold text-primary">
                        {product.rating}
                      </span>
                    </div>
                  )}
                </div>

                {/* Card Meta Content */}
                <div
                  className="p-3 flex flex-col gap-1 cursor-pointer"
                  onClick={() => openProduct(product.id)}
                >
                  <h4 className="font-serif text-[15px] font-medium leading-tight text-on-surface line-clamp-1 group-hover:text-[#556250] transition-colors">
                    {product.title}
                  </h4>
                  <span className="text-[12px] text-on-surface-variant font-normal">
                    {product.color}
                  </span>
                  <div className="flex items-center justify-between pt-1 mt-0.5">
                    <span className="text-[14px] font-semibold text-on-surface">
                      ${product.price}
                    </span>
                    {/* Color Swatch Dots */}
                    <div className="flex items-center gap-1">
                      {product.availableColors.map((c, i) => (
                        <span
                          key={i}
                          className="w-3 h-3 rounded-full border border-black/10"
                          style={{ backgroundColor: c.hex }}
                          title={c.name}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      {/* Editorial Quote Banner Section */}
      <section className="px-4 mb-8">
        <div className="relative overflow-hidden rounded-xl bg-[#f0eee8] p-6 text-center flex flex-col items-center justify-center gap-2 shadow-sm border border-[#e5e2dc]/60">
          <span className="material-symbols-outlined text-[#556250] opacity-70 text-[28px]">
            format_quote
          </span>
          <blockquote className="font-serif text-[20px] text-on-surface italic font-normal max-w-[320px] leading-snug">
            “Garments designed for quiet confidence and circular longevity.”
          </blockquote>
          <div className="w-8 h-[1px] bg-[#556250] opacity-40 my-1" />
          <span className="text-[10px] uppercase tracking-widest text-on-surface-variant font-semibold">
            Aura Design Manifesto
          </span>
        </div>
      </section>

      {/* Sustainability Guarantee Badges */}
      <section className="px-4 mb-6">
        <div className="bg-[#f6f3ed] rounded-xl p-4 shadow-sm flex flex-col gap-4 border border-[#e5e2dc]/60">
          <div className="flex items-center justify-between">
            <span className="text-[11px] uppercase tracking-wider text-[#556250] font-bold">
              The Conscious Standard
            </span>
            <span className="material-symbols-outlined text-[#556250] text-[18px]">eco</span>
          </div>

          <div className="grid grid-cols-3 gap-1 text-center">
            {/* Badge 1 */}
            <div className="flex flex-col items-center gap-1.5 p-1">
              <div className="w-10 h-10 rounded-full bg-[#d8e7d0] flex items-center justify-center text-[#5b6856]">
                <span className="material-symbols-outlined text-[20px]">psychiatry</span>
              </div>
              <span className="text-[10px] font-semibold text-on-surface leading-tight">
                Organic Fibers
              </span>
              <span className="text-[11px] leading-tight text-on-surface-variant">
                GOTS Certified
              </span>
            </div>
            {/* Badge 2 */}
            <div className="flex flex-col items-center gap-1.5 p-1">
              <div className="w-10 h-10 rounded-full bg-[#d8e7d0] flex items-center justify-center text-[#5b6856]">
                <span className="material-symbols-outlined text-[20px]">inventory_2</span>
              </div>
              <span className="text-[10px] font-semibold text-on-surface leading-tight">
                Zero Waste
              </span>
              <span className="text-[11px] leading-tight text-on-surface-variant">
                Recycled Packs
              </span>
            </div>
            {/* Badge 3 */}
            <div className="flex flex-col items-center gap-1.5 p-1">
              <div className="w-10 h-10 rounded-full bg-[#d8e7d0] flex items-center justify-center text-[#5b6856]">
                <span className="material-symbols-outlined text-[20px]">local_shipping</span>
              </div>
              <span className="text-[10px] font-semibold text-on-surface leading-tight">
                Carbon Neutral
              </span>
              <span className="text-[11px] leading-tight text-on-surface-variant">
                Offset Delivery
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Story Hook */}
      <section className="px-4">
        <div className="relative rounded-xl overflow-hidden bg-primary text-white p-4 flex items-center justify-between shadow-md">
          <div className="flex flex-col gap-0.5">
            <span className="text-[10px] uppercase tracking-widest text-[#c8c6c5]">
              Journal Vol. 04
            </span>
            <h4 className="font-serif text-[18px] text-white font-medium">
              Slow Fashion &amp; The Soil
            </h4>
          </div>
          <button
            onClick={() => showToast('Opening Journal Vol. 04: Slow Fashion & The Soil')}
            aria-label="Read Journal"
            className="w-10 h-10 rounded-full bg-white text-primary flex items-center justify-center active:scale-95 transition-transform flex-shrink-0 cursor-pointer hover:bg-[#f6f3ed]"
          >
            <span className="material-symbols-outlined text-[20px]">arrow_outward</span>
          </button>
        </div>
      </section>
    </div>
  );
};
