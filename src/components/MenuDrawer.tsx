import React from 'react';
import { useApp } from '../context/AppContext';
import { AURA_WORDMARK_LOGO } from '../data/products';

export const MenuDrawer: React.FC = () => {
  const { menuDrawerOpen, setMenuDrawerOpen, setCurrentScreen, setCatalogCategory } = useApp();

  if (!menuDrawerOpen) return null;

  const navigateTo = (screen: 'home' | 'catalog' | 'saved' | 'bag', category?: string) => {
    if (category) setCatalogCategory(category);
    setCurrentScreen(screen);
    setMenuDrawerOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div
      className="fixed inset-0 z-50 bg-black/50 backdrop-blur-xs flex transition-opacity"
      onClick={() => setMenuDrawerOpen(false)}
    >
      <div
        className="w-4/5 max-w-sm h-full bg-[#fcf9f3] p-6 flex flex-col justify-between shadow-2xl overflow-y-auto animate-in slide-in-from-left duration-300"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex flex-col gap-6">
          {/* Header */}
          <div className="flex items-center justify-between pb-4 border-b border-[#e5e2dc]">
            <div className="flex items-center gap-2">
              <img src={AURA_WORDMARK_LOGO} alt="AURA" className="h-7 w-auto object-contain" />
              <span className="font-serif text-[18px] tracking-[0.2em] font-medium uppercase text-primary">
                AURA
              </span>
            </div>
            <button
              onClick={() => setMenuDrawerOpen(false)}
              className="w-8 h-8 rounded-full bg-[#f0eee8] flex items-center justify-center text-primary cursor-pointer hover:bg-[#e5e2dc]"
            >
              <span className="material-symbols-outlined text-[18px]">close</span>
            </button>
          </div>

          {/* Navigation Links */}
          <nav className="flex flex-col gap-4">
            <span className="text-[10px] font-bold uppercase tracking-widest text-[#556250]">
              Collections
            </span>
            <button
              onClick={() => navigateTo('home')}
              className="text-left font-serif text-[20px] text-primary hover:text-[#556250] transition-colors cursor-pointer"
            >
              The Linen Chapter
            </button>
            <button
              onClick={() => navigateTo('catalog', 'All')}
              className="text-left font-serif text-[20px] text-primary hover:text-[#556250] transition-colors cursor-pointer"
            >
              Summer Solstice Capsule
            </button>
            <button
              onClick={() => navigateTo('catalog', 'Linen & Silk')}
              className="text-left font-serif text-[20px] text-primary hover:text-[#556250] transition-colors cursor-pointer"
            >
              Linen &amp; Silk Essentials
            </button>
            <button
              onClick={() => navigateTo('catalog', 'Tailored Pants')}
              className="text-left font-serif text-[20px] text-primary hover:text-[#556250] transition-colors cursor-pointer"
            >
              Tailored Trousers
            </button>
            <button
              onClick={() => navigateTo('catalog', 'Accessories')}
              className="text-left font-serif text-[20px] text-primary hover:text-[#556250] transition-colors cursor-pointer"
            >
              Artisan Footwear
            </button>
          </nav>

          <div className="w-full h-px bg-[#e5e2dc] my-1" />

          {/* Quick Destinies */}
          <div className="flex flex-col gap-3">
            <button
              onClick={() => navigateTo('saved')}
              className="flex items-center gap-3 text-left text-[14px] text-on-surface hover:text-[#556250] font-medium cursor-pointer"
            >
              <span className="material-symbols-outlined text-[20px] text-[#556250]">favorite</span>
              <span>Saved &amp; Wishlist</span>
            </button>
            <button
              onClick={() => navigateTo('bag')}
              className="flex items-center gap-3 text-left text-[14px] text-on-surface hover:text-[#556250] font-medium cursor-pointer"
            >
              <span className="material-symbols-outlined text-[20px] text-[#556250]">
                shopping_bag
              </span>
              <span>Shopping Bag</span>
            </button>
          </div>
        </div>

        {/* Brand Manifesto Footer */}
        <div className="pt-6 border-t border-[#e5e2dc] flex flex-col gap-2">
          <span className="text-[10px] uppercase tracking-widest text-on-surface-variant font-bold">
            The Conscious Standard
          </span>
          <p className="text-[12px] text-on-surface-variant leading-relaxed">
            100% GOTS certified organic flax and closed-loop European fabrication.
          </p>
          <span className="text-[11px] text-[#556250] font-semibold mt-1">
            © 2026 AURA Editorial
          </span>
        </div>
      </div>
    </div>
  );
};
