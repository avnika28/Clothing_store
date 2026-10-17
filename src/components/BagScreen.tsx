import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { PRODUCTS } from '../data/products';

export const BagScreen: React.FC = () => {
  const {
    cart,
    cartCount,
    updateCartQuantity,
    removeFromCart,
    saveForLater,
    promoCode,
    discountPercentage,
    applyPromoCode,
    removePromoCode,
    addToCart,
    setCurrentScreen,
    setIsCheckoutSuccessModalOpen,
    showToast,
  } = useApp();

  const [promoExpanded, setPromoExpanded] = useState<boolean>(true);
  const [promoInput, setPromoInput] = useState<string>('');

  // Calculations
  const subtotal = cart.reduce((sum, item) => sum + item.product.price * item.quantity, 0);
  const discountAmount = promoCode ? (subtotal * discountPercentage) / 100 : 0;
  const isFreeShipping = subtotal > 0;
  const estimatedTax = subtotal > 0 ? (subtotal - discountAmount) * 0.08 : 0;
  const total = Math.max(0, subtotal - discountAmount + estimatedTax);

  const handleApplyPromo = (e: React.FormEvent) => {
    e.preventDefault();
    if (!promoInput.trim()) return;
    const ok = applyPromoCode(promoInput);
    if (ok) setPromoInput('');
  };

  const pairWellProduct = PRODUCTS.find((p) => p.id === 'raw-leather-artisan-slides') || PRODUCTS[9];

  return (
    <div className="flex flex-col w-full pb-8">
      <div className="px-4 py-2 flex flex-col gap-6">
        {/* Bag Header & Editorial Subtitle */}
        <div className="flex flex-col gap-1">
          <div className="flex items-baseline justify-between">
            <h1 className="font-serif text-[28px] font-medium text-primary tracking-tight">
              Shopping Bag
            </h1>
            <span className="text-[10px] uppercase tracking-widest text-on-surface-variant font-bold">
              {cartCount} {cartCount === 1 ? 'Item' : 'Items'}
            </span>
          </div>
          <p className="text-[12px] text-on-surface-variant font-normal">
            Carefully crafted pieces curated for timeless living.
          </p>
        </div>

        {/* Free Shipping Progress Bar Card */}
        <div className="bg-[#f6f3ed] rounded-xl p-4 shadow-sm flex flex-col gap-2 border border-[#e5e2dc]/60">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-1.5 text-[#556250]">
              <span className="material-symbols-outlined text-[18px]">verified</span>
              <span className="text-[11px] tracking-wider uppercase font-semibold text-[#3d4a39]">
                Complimentary Express Shipping
              </span>
            </div>
            <span className="text-[10px] text-[#556250] font-bold">100%</span>
          </div>

          {/* Progress Bar Track */}
          <div className="w-full h-1.5 bg-[#e5e2dc] rounded-full overflow-hidden">
            <div
              className="h-full bg-[#556250] rounded-full transition-all duration-700 ease-out"
              style={{ width: '100%' }}
            />
          </div>

          <p className="text-[12px] text-on-surface flex items-center gap-1.5 mt-0.5">
            <span className="material-symbols-outlined text-[16px] text-[#556250]">
              check_circle
            </span>
            <span>You have unlocked complimentary carbon-neutral express shipping!</span>
          </p>
        </div>

        {/* Bag Items Section */}
        {cart.length === 0 ? (
          <div className="bg-white rounded-xl p-8 text-center flex flex-col items-center justify-center gap-3 border border-[#e5e2dc]/60 shadow-sm">
            <span className="material-symbols-outlined text-[#747878] text-[40px]">
              shopping_bag
            </span>
            <h3 className="font-serif text-[20px] font-medium text-primary">
              Your Bag is Empty
            </h3>
            <p className="text-[13px] text-on-surface-variant max-w-xs">
              Explore our thoughtful collection of linen chapters and artisan silhouettes.
            </p>
            <button
              onClick={() => setCurrentScreen('catalog')}
              className="mt-2 px-6 py-3 bg-primary text-white rounded-lg text-[12px] uppercase font-semibold tracking-wider hover:bg-[#333] transition-colors cursor-pointer"
            >
              Explore Collection
            </button>
          </div>
        ) : (
          <div className="flex flex-col gap-3">
            {cart.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-xl p-4 shadow-sm flex gap-3 relative border border-[#e5e2dc]/50 transition-all"
              >
                {/* Product Thumbnail */}
                <div className="w-24 h-32 rounded-lg overflow-hidden bg-[#f0eee8] flex-shrink-0 relative border border-[#e5e2dc]/40">
                  <img
                    className="w-full h-full object-cover"
                    src={item.product.image}
                    alt={item.product.title}
                  />
                  <span className="absolute top-1.5 left-1.5 bg-[#d8e7d0]/90 text-[#5b6856] text-[9px] font-bold uppercase tracking-wider px-1.5 py-0.5 rounded-full backdrop-blur-sm">
                    {item.product.category === 'Tailored Pants' ? 'Tailored' : 'Organic'}
                  </span>
                </div>

                {/* Details */}
                <div className="flex flex-col justify-between flex-1 min-w-0">
                  <div className="flex flex-col gap-0.5">
                    <div className="flex items-start justify-between gap-2">
                      <h2 className="font-serif text-[15px] font-medium text-primary leading-tight truncate">
                        {item.product.title}
                      </h2>
                      <button
                        aria-label={`Remove ${item.product.title} from bag`}
                        onClick={() => removeFromCart(item.id)}
                        className="text-on-surface-variant hover:text-[#ba1a1a] transition-colors p-0.5 cursor-pointer"
                      >
                        <span className="material-symbols-outlined text-[18px]">close</span>
                      </button>
                    </div>

                    <p className="text-[12px] text-on-surface-variant mt-0.5">
                      Size: <span className="font-semibold text-on-surface">{item.selectedSize}</span>{' '}
                      • Color: <span className="font-semibold text-on-surface">{item.selectedColor}</span>
                    </p>
                    <span className="text-[14px] font-semibold text-primary mt-1">
                      ${item.product.price.toFixed(2)}
                    </span>
                  </div>

                  {/* Quantity Stepper & Save for later */}
                  <div className="flex items-center justify-between mt-2 pt-1 border-t border-[#f0eee8]">
                    {/* Stepper */}
                    <div className="flex items-center bg-[#f6f3ed] rounded-lg p-0.5 border border-[#e5e2dc]/60">
                      <button
                        aria-label="Decrease quantity"
                        onClick={() => updateCartQuantity(item.id, -1)}
                        className="w-7 h-7 flex items-center justify-center rounded text-on-surface hover:bg-[#ebe8e2] transition-all active:scale-95 cursor-pointer"
                      >
                        <span className="material-symbols-outlined text-[14px]">remove</span>
                      </button>
                      <span className="w-7 text-center text-[12px] text-on-surface font-semibold font-sans">
                        {item.quantity}
                      </span>
                      <button
                        aria-label="Increase quantity"
                        onClick={() => updateCartQuantity(item.id, 1)}
                        className="w-7 h-7 flex items-center justify-center rounded text-on-surface hover:bg-[#ebe8e2] transition-all active:scale-95 cursor-pointer"
                      >
                        <span className="material-symbols-outlined text-[14px]">add</span>
                      </button>
                    </div>

                    {/* Save for later */}
                    <button
                      onClick={() => saveForLater(item.id)}
                      className="flex items-center gap-1 text-on-surface-variant hover:text-primary transition-colors py-1 px-1.5 text-[11px] uppercase tracking-wider font-semibold cursor-pointer"
                    >
                      <span className="material-symbols-outlined text-[16px]">favorite</span>
                      <span>Save</span>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Promo Code Module */}
        <div className="bg-white rounded-xl p-4 shadow-sm flex flex-col gap-2.5 border border-[#e5e2dc]/60">
          <div
            className="flex items-center justify-between cursor-pointer select-none"
            onClick={() => setPromoExpanded(!promoExpanded)}
          >
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-[20px] text-primary">sell</span>
              <span className="text-[13px] font-semibold uppercase tracking-wider text-on-surface">
                Promotional Code
              </span>
            </div>
            <span
              className={`material-symbols-outlined text-[20px] text-on-surface-variant transition-transform duration-200 ${
                promoExpanded ? 'rotate-0' : '-rotate-90'
              }`}
            >
              expand_more
            </span>
          </div>

          {/* Applied Promo Pill */}
          {promoCode && (
            <div className="flex items-center justify-between bg-[#d8e7d0]/60 px-3 py-1.5 rounded-lg border border-[#d8e7d0]">
              <div className="flex items-center gap-1.5">
                <span className="material-symbols-outlined text-[16px] text-[#556250]">check</span>
                <span className="text-[11px] text-[#3d4a39] uppercase font-bold tracking-wider">
                  {promoCode}
                </span>
                <span className="text-[12px] text-[#556250] font-medium">
                  (-{discountPercentage}% applied)
                </span>
              </div>
              <button
                onClick={removePromoCode}
                className="text-[10px] uppercase tracking-wider text-[#3d4a39] hover:text-[#ba1a1a] transition-colors font-bold px-1 cursor-pointer"
              >
                Remove
              </button>
            </div>
          )}

          {/* Promo Input Form */}
          {promoExpanded && (
            <form onSubmit={handleApplyPromo} className="flex gap-2 mt-1">
              <input
                className="flex-1 h-11 px-3 rounded-lg bg-[#f6f3ed] text-on-surface text-[14px] font-sans focus:bg-white focus:outline-none border border-[#e5e2dc]/60 focus:border-primary transition-colors"
                placeholder="Enter gift card or code (try SUMMER10)"
                type="text"
                value={promoInput}
                onChange={(e) => setPromoInput(e.target.value)}
              />
              <button
                type="submit"
                className="h-11 px-4 bg-primary text-white rounded-lg text-[11px] uppercase tracking-wider font-semibold active:opacity-90 hover:bg-[#333] transition-colors cursor-pointer"
              >
                Apply
              </button>
            </form>
          )}
        </div>

        {/* Order Summary Breakdown */}
        <div className="bg-white rounded-xl p-4 shadow-sm flex flex-col gap-2.5 border border-[#e5e2dc]/60">
          <h3 className="font-serif text-[18px] font-medium text-primary mb-1">
            Order Summary
          </h3>

          <div className="flex justify-between items-center text-[14px]">
            <span className="text-on-surface-variant font-normal">
              Subtotal ({cartCount} {cartCount === 1 ? 'item' : 'items'})
            </span>
            <span className="text-on-surface font-semibold font-sans">
              ${subtotal.toFixed(2)}
            </span>
          </div>

          {promoCode && (
            <div className="flex justify-between items-center text-[14px]">
              <div className="flex items-center gap-1.5">
                <span className="text-[#556250] font-medium">Seasonal Promotion</span>
                <span className="text-[10px] bg-[#d8e7d0] text-[#3d4a39] px-1.5 py-0.5 rounded uppercase font-bold">
                  {promoCode}
                </span>
              </div>
              <span className="text-[#556250] font-semibold font-sans">
                -${discountAmount.toFixed(2)}
              </span>
            </div>
          )}

          <div className="flex justify-between items-center text-[14px]">
            <span className="text-on-surface-variant font-normal">
              Estimated Express Shipping
            </span>
            <div className="flex items-center gap-1.5">
              <span className="text-on-surface-variant line-through text-[12px]">
                $15.00
              </span>
              <span className="text-[#556250] text-[13px] uppercase font-bold tracking-wide">
                FREE
              </span>
            </div>
          </div>

          <div className="flex justify-between items-center text-[14px]">
            <div className="flex items-center gap-1 text-on-surface-variant">
              <span>Estimated Sales Tax</span>
              <span
                className="material-symbols-outlined text-[15px] cursor-pointer text-[#747878]"
                title="Calculated based on standard domestic rate"
                onClick={() => showToast('Sales tax estimated based on shipping address')}
              >
                info
              </span>
            </div>
            <span className="text-on-surface font-semibold font-sans">
              ${estimatedTax.toFixed(2)}
            </span>
          </div>

          {/* Divider */}
          <div className="h-[1px] w-full bg-[#ebe8e2] my-1" />

          <div className="flex justify-between items-baseline pt-0.5">
            <div className="flex flex-col">
              <span className="font-serif text-[18px] font-medium text-primary">
                Estimated Total
              </span>
              <span className="text-[10px] text-on-surface-variant uppercase tracking-wider font-medium">
                Taxes &amp; duties included
              </span>
            </div>
            <div className="flex items-baseline gap-1">
              <span className="text-[10px] text-on-surface-variant uppercase font-bold">USD</span>
              <span className="font-sans text-[20px] text-primary font-bold tracking-tight">
                ${total.toFixed(2)}
              </span>
            </div>
          </div>
        </div>

        {/* Fast Checkout CTA & Touch Actions */}
        <div className="flex flex-col gap-2.5">
          {/* Instant 1-Touch Apple Pay */}
          <button
            onClick={() => setIsCheckoutSuccessModalOpen(true)}
            className="w-full h-12 bg-primary text-white rounded-lg flex items-center justify-center gap-2 active:opacity-90 hover:bg-[#222] transition-transform active:scale-[0.99] shadow-md cursor-pointer"
          >
            <span className="text-[12px] uppercase tracking-wider font-semibold">
              Fast Checkout with
            </span>
            <svg
              className="h-5 w-auto fill-current"
              viewBox="0 0 170 85"
              xmlns="http://www.w3.org/2000/svg"
              aria-label="Apple Pay"
            >
              <path d="M150.37 40.75c0-10.99 8.95-16.32 9.37-16.59-5.11-7.46-13.06-8.49-15.89-8.62-6.77-.69-13.22 4-16.66 4-3.43 0-8.69-3.9-14.33-3.79-7.41.11-14.25 4.31-18.06 10.95-7.7 13.35-1.97 33.11 5.51 43.91 3.66 5.28 8.01 11.21 13.73 11 5.49-.22 7.57-3.55 14.2-3.55 6.64 0 8.5 3.55 14.28 3.44 5.88-.11 9.61-5.38 13.23-10.69 4.19-6.13 5.92-12.06 6.03-12.37-.13-.06-11.41-4.38-11.41-17.48zM140.75 22.8c3.06-3.7 5.12-8.85 4.56-14-4.41.18-9.76 2.94-12.92 6.64-2.77 3.2-5.2 8.44-4.54 13.47 4.93.38 9.84-2.41 12.9-6.11z" />
              <path d="M22.75 66.86h11.23V18.14H22.75v48.72zm22.46 0H56.4V48.11c0-10.87 6.13-16.48 15.65-16.48 7.37 0 12.82 3.82 14.54 10.42.59 2.29.77 5.2.77 8.16v16.65h11.19V47.93c0-16.3-8.85-24.58-23.01-24.58-9.84 0-16.89 4.88-20.33 12.02h-.41l-.94-10.72H45.21v42.21z" />
            </svg>
          </button>

          {/* Primary Standard Checkout CTA */}
          <button
            onClick={() => setIsCheckoutSuccessModalOpen(true)}
            className="w-full h-12 bg-[#ebe8e2] text-primary hover:bg-[#e5e2dc] rounded-lg flex items-center justify-between px-4 active:scale-[0.99] transition-all cursor-pointer border border-[#e5e2dc]"
          >
            <span className="text-[12px] uppercase tracking-wider font-bold">
              Proceed to Checkout
            </span>
            <div className="flex items-center gap-1.5">
              <span className="font-sans text-[14px] font-semibold">${total.toFixed(2)}</span>
              <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
            </div>
          </button>

          {/* Security & Brand Promises Pill Grid */}
          <div className="grid grid-cols-3 gap-1.5 mt-2 pt-1 text-center">
            <div className="flex flex-col items-center gap-1 p-2 bg-[#f6f3ed] rounded-lg border border-[#e5e2dc]/50">
              <span className="material-symbols-outlined text-[20px] text-[#556250]">cached</span>
              <span className="text-[10px] text-on-surface leading-tight font-medium">
                30-Day Carbon Neutral Returns
              </span>
            </div>
            <div className="flex flex-col items-center gap-1 p-2 bg-[#f6f3ed] rounded-lg border border-[#e5e2dc]/50">
              <span className="material-symbols-outlined text-[20px] text-[#556250]">lock</span>
              <span className="text-[10px] text-on-surface leading-tight font-medium">
                Encrypted 256-bit Checkout
              </span>
            </div>
            <div className="flex flex-col items-center gap-1 p-2 bg-[#f6f3ed] rounded-lg border border-[#e5e2dc]/50">
              <span className="material-symbols-outlined text-[20px] text-[#556250]">eco</span>
              <span className="text-[10px] text-on-surface leading-tight font-medium">
                Circular Recycling Pledge
              </span>
            </div>
          </div>
        </div>

        {/* Complete the Wardrobe / Curated Recommendation */}
        <div className="bg-[#f6f3ed] rounded-xl p-4 shadow-sm flex flex-col gap-2.5 border border-[#e5e2dc]/60 mt-1">
          <div className="flex items-center justify-between">
            <h4 className="font-serif text-[17px] font-medium text-primary">
              Complete the Wardrobe
            </h4>
            <span className="text-[10px] text-[#556250] uppercase font-bold tracking-widest">
              Pairs Well
            </span>
          </div>

          <div className="flex items-center gap-3">
            <div className="w-16 h-20 rounded-lg overflow-hidden bg-[#f0eee8] flex-shrink-0 border border-[#e5e2dc]">
              <img
                className="w-full h-full object-cover"
                src={pairWellProduct.image}
                alt={pairWellProduct.title}
              />
            </div>
            <div className="flex flex-col flex-1 min-w-0">
              <span className="font-serif text-[15px] font-medium leading-snug text-primary truncate">
                {pairWellProduct.title}
              </span>
              <span className="text-[12px] text-on-surface-variant font-normal">
                {pairWellProduct.color}
              </span>
              <span className="font-sans text-[14px] text-primary font-semibold mt-0.5">
                ${pairWellProduct.price.toFixed(2)}
              </span>
            </div>
            <button
              onClick={() => addToCart(pairWellProduct, 'M', pairWellProduct.color)}
              className="h-9 px-3 bg-[#ebe8e2] hover:bg-[#e5e2dc] text-primary rounded-lg text-[10px] uppercase tracking-wider font-bold transition-all flex items-center justify-center gap-1 cursor-pointer border border-[#e5e2dc]"
            >
              <span className="material-symbols-outlined text-[16px]">add</span>
              <span>Add</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
