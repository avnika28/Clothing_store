import React from 'react';
import { useApp } from '../context/AppContext';
import { AURA_WORDMARK_LOGO, USER_AVATAR } from '../data/products';

export const Header: React.FC = () => {
  const { currentScreen, setCurrentScreen, cartCount, setMenuDrawerOpen } = useApp();

  const isPDP = currentScreen === 'product_detail';

  return (
    <header className="fixed top-0 left-0 right-0 z-40 pt-safe bg-[#fcf9f3]/90 backdrop-blur-xl shadow-[0_1px_8px_rgba(0,0,0,0.04)] border-b border-[#e5e2dc]/60">
      <div className="max-w-md mx-auto h-16 px-4 flex items-center justify-between gap-2">
        {/* Left Section */}
        <div className="flex items-center gap-1">
          {isPDP ? (
            <button
              aria-label="Go Back"
              className="w-10 h-10 flex items-center justify-center text-primary transition-opacity hover:opacity-70 active:scale-90"
              onClick={() => setCurrentScreen('catalog')}
            >
              <span className="material-symbols-outlined text-[22px]">arrow_back</span>
            </button>
          ) : (
            <button
              aria-label="Open Navigation Menu"
              className="w-10 h-10 flex items-center justify-center text-primary transition-opacity hover:opacity-70 active:scale-95"
              onClick={() => setMenuDrawerOpen(true)}
            >
              <span className="material-symbols-outlined text-[22px]">menu</span>
            </button>
          )}

          {/* Logo & Brand Name */}
          <button
            onClick={() => setCurrentScreen('home')}
            className="flex items-center gap-2 group text-left transition-opacity hover:opacity-90"
          >
            <img
              alt="AURA Wordmark Logo"
              className="h-8 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
              src={AURA_WORDMARK_LOGO}
            />
            {isPDP ? (
              <span className="font-serif text-[17px] font-medium text-primary tracking-wide ml-0.5">
                Product Detail
              </span>
            ) : (
              <span className="font-serif text-[17px] font-medium text-primary tracking-[0.2em] uppercase ml-1">
                AURA
              </span>
            )}
          </button>
        </div>

        {/* Right Section */}
        <div className="flex items-center gap-1">
          {/* Search Trigger */}
          <button
            aria-label="Search"
            className="w-10 h-10 flex items-center justify-center text-primary transition-opacity hover:opacity-70 active:scale-95"
            onClick={() => setCurrentScreen('catalog')}
          >
            <span className="material-symbols-outlined text-[20px]">search</span>
          </button>

          {/* Shopping Bag Icon with live badge (hidden on bag screen to avoid confusion, or functional to navigate) */}
          <button
            aria-label="Shopping Bag"
            className="w-10 h-10 relative flex items-center justify-center text-primary transition-opacity hover:opacity-70 active:scale-95"
            onClick={() => setCurrentScreen('bag')}
          >
            <span className="material-symbols-outlined text-[20px]">shopping_bag</span>
            {cartCount > 0 && (
              <span className="absolute top-2 right-1.5 min-w-[15px] h-[15px] px-[3px] bg-primary text-white rounded-full text-[9px] leading-[15px] text-center font-bold font-sans">
                {cartCount}
              </span>
            )}
          </button>

          {/* Profile Avatar */}
          <button
            aria-label="Profile"
            className="w-9 h-9 flex items-center justify-center rounded-full overflow-hidden ml-1 hover:ring-2 hover:ring-secondary/40 transition-all"
            onClick={() => setCurrentScreen('saved')}
            title="Saved Items & Profile"
          >
            <img
              alt="Profile"
              className="w-8 h-8 rounded-full object-cover"
              src={USER_AVATAR}
            />
          </button>
        </div>
      </div>
    </header>
  );
};
