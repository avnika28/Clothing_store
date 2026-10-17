import React, { useState, useEffect } from 'react';
import { useApp } from '../context/AppContext';

export const QuickAddDrawer: React.FC = () => {
  const { quickAddDrawer, closeQuickAdd, addToCart, openFitPredictor } = useApp();
  const { isOpen, product } = quickAddDrawer;

  const [selectedSize, setSelectedSize] = useState<string>('M');

  useEffect(() => {
    if (product) {
      setSelectedSize(product.sizes[0] || 'M');
    }
  }, [product]);

  if (!isOpen || !product) return null;

  const handleConfirm = () => {
    addToCart(product, selectedSize, product.color);
    closeQuickAdd();
  };

  return (
    <div
      className="fixed inset-0 z-50 bg-black/40 backdrop-blur-xs flex flex-col justify-end transition-opacity duration-300"
      onClick={closeQuickAdd}
    >
      <div
        className="bg-white w-full max-w-md mx-auto rounded-t-2xl p-6 flex flex-col gap-4 shadow-[0_-12px_32px_rgba(26,26,26,0.12)] border-t border-[#e5e2dc] animate-in slide-in-from-bottom-5 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between pb-1">
          <div>
            <h4 className="font-serif text-[18px] font-medium text-primary">
              {product.title}
            </h4>
            <span className="font-sans text-[14px] text-on-surface-variant font-semibold">
              ${product.price}
            </span>
          </div>
          <button
            onClick={closeQuickAdd}
            className="w-8 h-8 rounded-full bg-[#f0eee8] flex items-center justify-center text-on-surface hover:bg-[#e5e2dc] cursor-pointer"
          >
            <span className="material-symbols-outlined text-[18px]">close</span>
          </button>
        </div>

        {/* Size Chips */}
        <div className="flex flex-col gap-2">
          <div className="flex items-center justify-between">
            <span className="text-[10px] uppercase font-bold tracking-wider text-on-surface-variant">
              Available Sizes
            </span>
            <button
              onClick={() => {
                closeQuickAdd();
                openFitPredictor(product);
              }}
              className="text-[10px] text-[#556250] underline uppercase tracking-wider font-semibold cursor-pointer"
            >
              Size Guide
            </button>
          </div>

          <div className="grid grid-cols-4 gap-2">
            {product.sizes.map((sz) => {
              const isSelected = selectedSize === sz;
              return (
                <button
                  key={sz}
                  onClick={() => setSelectedSize(sz)}
                  className={`py-3 rounded-lg text-[12px] font-semibold transition-all cursor-pointer ${
                    isSelected
                      ? 'bg-primary text-white shadow-xs'
                      : 'bg-[#f6f3ed] text-on-surface hover:bg-[#ebe8e2]'
                  }`}
                >
                  {sz}
                </button>
              );
            })}
          </div>
        </div>

        {/* Confirm Add Button */}
        <button
          onClick={handleConfirm}
          className="w-full py-3.5 bg-primary text-white rounded-lg text-[12px] uppercase tracking-wider font-semibold flex items-center justify-center gap-2 shadow-sm active:scale-[0.99] hover:bg-[#222] transition-transform cursor-pointer"
        >
          <span className="material-symbols-outlined text-[18px]">shopping_bag</span>
          <span>Add to Bag</span>
        </button>
      </div>
    </div>
  );
};
