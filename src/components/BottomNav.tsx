import React from 'react';
import { useApp } from '../context/AppContext';
import { ScreenType } from '../types';

export const BottomNav: React.FC = () => {
  const { currentScreen, setCurrentScreen, cartCount } = useApp();

  const tabs: { id: ScreenType; label: string; icon: string; badge?: number }[] = [
    { id: 'home', label: 'Home', icon: 'home' },
    { id: 'catalog', label: 'Catalog', icon: 'grid_view' },
    { id: 'saved', label: 'Saved', icon: 'favorite' },
    { id: 'bag', label: 'Bag', icon: 'shopping_bag', badge: cartCount },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-40 pb-safe bg-[#fcf9f3]/90 backdrop-blur-xl border-t border-[#e5e2dc]/70 shadow-[0_-4px_16px_rgba(26,26,26,0.04)]">
      <div className="max-w-md mx-auto h-16 px-2 flex items-center justify-around">
        {tabs.map((tab) => {
          const isActive = currentScreen === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => {
                setCurrentScreen(tab.id);
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className={`flex flex-col items-center justify-center min-w-[64px] h-12 transition-all gap-0.5 active:scale-95 ${
                isActive ? 'text-primary font-bold' : 'text-on-surface-variant hover:text-primary font-normal'
              }`}
            >
              <div className="relative flex items-center justify-center">
                <span
                  className="material-symbols-outlined text-[22px]"
                  style={isActive && tab.id === 'saved' ? { fontVariationSettings: "'FILL' 1" } : undefined}
                >
                  {tab.icon}
                </span>
                {tab.badge !== undefined && tab.badge > 0 && (
                  <span className="absolute -top-1 -right-2.5 min-w-[14px] h-[14px] px-[2px] bg-primary text-white rounded-full text-[8px] leading-[14px] text-center font-bold">
                    {tab.badge}
                  </span>
                )}
              </div>
              <span className="text-[10px] uppercase tracking-wider font-sans">
                {tab.label}
              </span>
            </button>
          );
        })}
      </div>
    </nav>
  );
};
