import React, { useState } from 'react';
import { useApp } from '../context/AppContext';

export const FilterDrawer: React.FC = () => {
  const { filterDrawerOpen, setFilterDrawerOpen, activeFilters, setActiveFilters, showToast } =
    useApp();

  const [tempCategory, setTempCategory] = useState<string>(activeFilters.category || 'Linen & Sets');
  const [tempSize, setTempSize] = useState<string>(activeFilters.size || 'M');
  const [tempColor, setTempColor] = useState<string>(activeFilters.color || 'Natural');

  if (!filterDrawerOpen) return null;

  const categories = ['Linen & Sets', 'Dresses & Skirts', 'Tailored Pants', 'Summer Knitwear', 'Outerwear'];
  const sizes = ['XS', 'S', 'M', 'L', 'XL', '28', '30', '32'];
  const colors = ['Natural', 'Sage Olive', 'Terracotta', 'Chalk Ecru', 'Charcoal', 'White'];

  const handleApply = () => {
    setActiveFilters({
      category: tempCategory || undefined,
      size: tempSize || undefined,
      color: tempColor || undefined,
    });
    setFilterDrawerOpen(false);
    showToast('Filters updated');
  };

  const handleReset = () => {
    setTempCategory('');
    setTempSize('');
    setTempColor('');
    setActiveFilters({});
    setFilterDrawerOpen(false);
    showToast('Filters reset');
  };

  return (
    <div
      className="fixed inset-0 z-50 bg-black/45 backdrop-blur-xs flex flex-col justify-end transition-opacity"
      onClick={() => setFilterDrawerOpen(false)}
    >
      <div
        className="bg-white w-full max-w-md mx-auto rounded-t-2xl p-6 flex flex-col gap-5 shadow-2xl border-t border-[#e5e2dc] max-h-[85vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between pb-2 border-b border-[#f0eee8]">
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-[20px] text-primary">tune</span>
            <h3 className="font-serif text-[20px] font-medium text-primary">Filters</h3>
          </div>
          <button
            onClick={() => setFilterDrawerOpen(false)}
            className="w-8 h-8 rounded-full bg-[#f0eee8] flex items-center justify-center text-primary cursor-pointer hover:bg-[#e5e2dc]"
          >
            <span className="material-symbols-outlined text-[18px]">close</span>
          </button>
        </div>

        {/* Category section */}
        <div className="space-y-2">
          <span className="text-[11px] font-bold uppercase tracking-wider text-primary">
            Category
          </span>
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setTempCategory(tempCategory === cat ? '' : cat)}
                className={`px-3 py-1.5 rounded-full text-[11px] font-medium transition-all cursor-pointer ${
                  tempCategory === cat
                    ? 'bg-primary text-white shadow-xs'
                    : 'bg-[#f6f3ed] text-on-surface hover:bg-[#ebe8e2]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Size section */}
        <div className="space-y-2">
          <span className="text-[11px] font-bold uppercase tracking-wider text-primary">
            Size
          </span>
          <div className="flex flex-wrap gap-2">
            {sizes.map((sz) => (
              <button
                key={sz}
                onClick={() => setTempSize(tempSize === sz ? '' : sz)}
                className={`w-10 h-10 rounded-lg text-[12px] font-semibold transition-all cursor-pointer ${
                  tempSize === sz
                    ? 'bg-primary text-white shadow-xs'
                    : 'bg-[#f6f3ed] text-on-surface hover:bg-[#ebe8e2]'
                }`}
              >
                {sz}
              </button>
            ))}
          </div>
        </div>

        {/* Color section */}
        <div className="space-y-2">
          <span className="text-[11px] font-bold uppercase tracking-wider text-primary">
            Color Palette
          </span>
          <div className="flex flex-wrap gap-2">
            {colors.map((c) => (
              <button
                key={c}
                onClick={() => setTempColor(tempColor === c ? '' : c)}
                className={`px-3 py-1.5 rounded-full text-[11px] font-medium transition-all cursor-pointer ${
                  tempColor === c
                    ? 'bg-primary text-white shadow-xs'
                    : 'bg-[#f6f3ed] text-on-surface hover:bg-[#ebe8e2]'
                }`}
              >
                {c}
              </button>
            ))}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="grid grid-cols-2 gap-3 pt-3 border-t border-[#f0eee8]">
          <button
            onClick={handleReset}
            className="py-3 rounded-lg border border-[#e5e2dc] text-[12px] uppercase font-semibold text-on-surface hover:bg-[#f6f3ed] transition-colors cursor-pointer"
          >
            Reset
          </button>
          <button
            onClick={handleApply}
            className="py-3 rounded-lg bg-primary text-white text-[12px] uppercase font-semibold hover:bg-[#222] transition-colors shadow-sm cursor-pointer"
          >
            Apply Filters
          </button>
        </div>
      </div>
    </div>
  );
};
