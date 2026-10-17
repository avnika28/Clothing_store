import React, { useMemo } from 'react';
import { useApp } from '../context/AppContext';
import { PRODUCTS } from '../data/products';

export const CatalogScreen: React.FC = () => {
  const {
    openProduct,
    wishlist,
    toggleWishlist,
    openQuickAdd,
    catalogSearchQuery,
    setCatalogSearchQuery,
    catalogSort,
    setCatalogSort,
    catalogLayout,
    setCatalogLayout,
    activeFilters,
    removeFilterTag,
    clearAllFilters,
    setFilterDrawerOpen,
    showToast,
  } = useApp();

  // Filtered and sorted products
  const displayedProducts = useMemo(() => {
    let list = [...PRODUCTS];

    // Filter by search query
    if (catalogSearchQuery.trim()) {
      const q = catalogSearchQuery.toLowerCase();
      list = list.filter(
        (p) =>
          p.title.toLowerCase().includes(q) ||
          p.category.toLowerCase().includes(q) ||
          p.subtitle.toLowerCase().includes(q) ||
          p.color.toLowerCase().includes(q)
      );
    }

    // Sort
    if (catalogSort === 'Price: Low to High') {
      list.sort((a, b) => a.price - b.price);
    } else if (catalogSort === 'Price: High to Low') {
      list.sort((a, b) => b.price - a.price);
    } else if (catalogSort === 'Newest Arrivals') {
      list.sort((a, b) => (a.badge === 'New' ? -1 : 1));
    }

    return list;
  }, [catalogSearchQuery, catalogSort]);

  const activeFilterCount = Object.keys(activeFilters).length;

  return (
    <div className="flex flex-col w-full">
      {/* Search Field Module */}
      <div className="px-4 pt-1 pb-2">
        <div className="relative flex items-center bg-white rounded-xl shadow-[0_2px_8px_rgba(26,26,26,0.03)] border border-[#e5e2dc]/60 transition-all focus-within:shadow-[0_4px_16px_rgba(26,26,26,0.06)] focus-within:border-primary/40">
          <span className="material-symbols-outlined text-[#747878] pl-3 text-[20px] select-none">
            search
          </span>
          <input
            className="w-full bg-transparent border-0 outline-none px-2.5 py-3 text-[14px] text-on-surface placeholder:text-[#747878]/80 font-sans"
            placeholder="Search linen shirts, knitwear, trousers..."
            type="search"
            value={catalogSearchQuery}
            onChange={(e) => setCatalogSearchQuery(e.target.value)}
          />
          <div className="flex items-center pr-2 gap-1">
            <button
              onClick={() => showToast('Listening for voice search...')}
              aria-label="Search with voice"
              className="w-8 h-8 flex items-center justify-center text-[#747878] hover:text-primary transition-colors cursor-pointer"
            >
              <span className="material-symbols-outlined text-[19px]">mic</span>
            </button>
            <button
              onClick={() => showToast('Visual search: Camera scanner ready')}
              aria-label="Visual search with camera"
              className="w-8 h-8 flex items-center justify-center text-[#747878] hover:text-primary transition-colors cursor-pointer"
            >
              <span className="material-symbols-outlined text-[19px]">photo_camera</span>
            </button>
          </div>
        </div>
      </div>

      {/* Filter & Sort Sticky Control Bar */}
      <div className="sticky top-16 z-30 bg-[#fcf9f3]/95 backdrop-blur-md px-4 py-2 border-b border-[#e5e2dc]/60 shadow-[0_2px_12px_rgba(26,26,26,0.03)]">
        <div className="flex items-center justify-between gap-2">
          {/* Filter Button Pill */}
          <button
            onClick={() => setFilterDrawerOpen(true)}
            className="flex items-center gap-1.5 px-3 py-2 bg-primary text-white rounded-full text-[11px] font-semibold tracking-wider uppercase transition-transform active:scale-95 shadow-xs cursor-pointer"
          >
            <span className="material-symbols-outlined text-[15px]">tune</span>
            <span>Filter</span>
            {activeFilterCount > 0 && (
              <span className="w-4 h-4 bg-white text-primary rounded-full text-[9px] leading-4 flex items-center justify-center font-bold">
                {activeFilterCount}
              </span>
            )}
          </button>

          {/* Sort Dropdown Pill */}
          <div className="relative">
            <select
              aria-label="Sort products"
              value={catalogSort}
              onChange={(e) => setCatalogSort(e.target.value)}
              className="appearance-none bg-white text-on-surface text-[11px] font-semibold uppercase tracking-wider py-2 pl-3 pr-7 rounded-full outline-none border border-[#e5e2dc]/70 shadow-[0_1px_4px_rgba(26,26,26,0.04)] cursor-pointer"
            >
              <option>Sort: Featured</option>
              <option>Price: Low to High</option>
              <option>Price: High to Low</option>
              <option>Newest Arrivals</option>
            </select>
            <span className="material-symbols-outlined absolute right-2.5 top-1/2 -translate-y-1/2 pointer-events-none text-[16px] text-[#747878]">
              expand_more
            </span>
          </div>

          {/* Layout View Mode Switcher */}
          <div className="flex items-center bg-[#ebe8e2] rounded-full p-0.5 border border-[#e5e2dc]">
            <button
              aria-label="Two column grid view"
              onClick={() => setCatalogLayout('compact')}
              className={`w-7 h-7 flex items-center justify-center rounded-full transition-colors cursor-pointer ${
                catalogLayout === 'compact'
                  ? 'bg-white text-primary shadow-xs'
                  : 'text-on-surface-variant hover:text-primary'
              }`}
            >
              <span className="material-symbols-outlined text-[17px]">grid_view</span>
            </button>
            <button
              aria-label="Single editorial column view"
              onClick={() => setCatalogLayout('editorial')}
              className={`w-7 h-7 flex items-center justify-center rounded-full transition-colors cursor-pointer ${
                catalogLayout === 'editorial'
                  ? 'bg-white text-primary shadow-xs'
                  : 'text-on-surface-variant hover:text-primary'
              }`}
            >
              <span className="material-symbols-outlined text-[17px]">view_stream</span>
            </button>
          </div>
        </div>
      </div>

      {/* Active Filter Tags Carousel */}
      {activeFilterCount > 0 && (
        <div className="px-4 py-2 flex items-center gap-2 overflow-x-auto no-scrollbar">
          {activeFilters.category && (
            <div className="flex items-center gap-1 px-2.5 py-1 rounded-full bg-[#ebe8e2] text-on-surface text-[10px] font-medium whitespace-nowrap">
              <span>{activeFilters.category}</span>
              <button
                aria-label="Remove category filter"
                onClick={() => removeFilterTag('category')}
                className="w-4 h-4 flex items-center justify-center text-[#747878] hover:text-primary cursor-pointer"
              >
                <span className="material-symbols-outlined text-[12px]">close</span>
              </button>
            </div>
          )}

          {activeFilters.size && (
            <div className="flex items-center gap-1 px-2.5 py-1 rounded-full bg-[#ebe8e2] text-on-surface text-[10px] font-medium whitespace-nowrap">
              <span>Size: {activeFilters.size}</span>
              <button
                aria-label="Remove size filter"
                onClick={() => removeFilterTag('size')}
                className="w-4 h-4 flex items-center justify-center text-[#747878] hover:text-primary cursor-pointer"
              >
                <span className="material-symbols-outlined text-[12px]">close</span>
              </button>
            </div>
          )}

          {activeFilters.color && (
            <div className="flex items-center gap-1 px-2.5 py-1 rounded-full bg-[#ebe8e2] text-on-surface text-[10px] font-medium whitespace-nowrap">
              <span>Color: {activeFilters.color}</span>
              <button
                aria-label="Remove color filter"
                onClick={() => removeFilterTag('color')}
                className="w-4 h-4 flex items-center justify-center text-[#747878] hover:text-primary cursor-pointer"
              >
                <span className="material-symbols-outlined text-[12px]">close</span>
              </button>
            </div>
          )}

          <button
            onClick={clearAllFilters}
            className="text-[10px] text-[#556250] hover:underline underline-offset-4 uppercase tracking-wider pl-1 whitespace-nowrap font-semibold cursor-pointer"
          >
            Clear All
          </button>
        </div>
      )}

      {/* Editorial Sub-header & Total Count */}
      <div className="px-4 pt-3 pb-1 flex items-baseline justify-between">
        <div className="flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-[#556250]" />
          <h2 className="font-serif text-[18px] font-medium text-on-surface">
            The Summer Solstice Capsule
          </h2>
        </div>
        <span className="text-[10px] text-on-surface-variant uppercase tracking-wider font-semibold">
          {displayedProducts.length} pieces
        </span>
      </div>

      {/* Product Catalog Grid */}
      <div
        className={`px-4 pt-2 pb-10 ${
          catalogLayout === 'compact'
            ? 'grid grid-cols-2 gap-x-3 gap-y-6'
            : 'flex flex-col gap-6'
        }`}
      >
        {displayedProducts.map((product) => {
          const isSaved = wishlist.has(product.id);
          return (
            <div
              key={product.id}
              className="product-item group flex flex-col relative"
            >
              <div
                className={`relative w-full ${
                  catalogLayout === 'compact' ? 'aspect-[3/4]' : 'aspect-[4/5]'
                } bg-[#ebe8e2] rounded-xl overflow-hidden shadow-[0_2px_8px_rgba(26,26,26,0.03)] border border-[#e5e2dc]/50 cursor-pointer`}
                onClick={() => openProduct(product.id)}
              >
                <img
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  src={product.image}
                  alt={product.title}
                  loading="lazy"
                />

                {/* Badge if present */}
                {product.badge && (
                  <div className="absolute top-2.5 left-2.5">
                    <span
                      className={`px-2 py-0.5 text-[9px] uppercase tracking-wider rounded-full shadow-xs font-bold ${
                        product.badgeType === 'sustainable'
                          ? 'bg-[#d8e7d0] text-[#131e10]'
                          : product.badgeType === 'limited'
                          ? 'bg-[#ffdbcf] text-[#793014]'
                          : 'bg-white/95 backdrop-blur-sm text-[#1c1c18]'
                      }`}
                    >
                      {product.badge}
                    </span>
                  </div>
                )}

                {/* Wishlist Toggle Button */}
                <button
                  aria-label={`Save ${product.title} to Wishlist`}
                  onClick={(e) => {
                    e.stopPropagation();
                    toggleWishlist(product.id);
                  }}
                  className="wishlist-btn absolute top-2 right-2 w-8 h-8 rounded-full bg-white/80 backdrop-blur-sm flex items-center justify-center text-on-surface transition-transform active:scale-90 shadow-xs cursor-pointer"
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

                {/* Quick Add (+) Trigger Button */}
                <button
                  aria-label={`Quick add ${product.title} to bag`}
                  onClick={(e) => {
                    e.stopPropagation();
                    openQuickAdd(product);
                  }}
                  className="absolute bottom-2.5 right-2.5 w-9 h-9 rounded-full bg-primary text-white flex items-center justify-center shadow-md active:scale-95 transition-all opacity-95 group-hover:opacity-100 hover:scale-105 cursor-pointer"
                >
                  <span className="material-symbols-outlined text-[18px]">add</span>
                </button>
              </div>

              {/* Item Meta */}
              <div
                className="pt-2 flex flex-col gap-0.5 cursor-pointer"
                onClick={() => openProduct(product.id)}
              >
                {/* Color dots row */}
                <div className="flex items-center gap-1.5 py-0.5">
                  {product.availableColors.map((c, i) => (
                    <span
                      key={i}
                      className="w-2.5 h-2.5 rounded-full border border-black/10 ring-1 ring-offset-1 ring-black/5"
                      style={{ backgroundColor: c.hex }}
                      title={c.name}
                    />
                  ))}
                  {product.availableColors.length > 2 && (
                    <span className="text-[10px] text-on-surface-variant font-medium ml-0.5">
                      {product.availableColors.length}
                    </span>
                  )}
                </div>

                <h3 className="font-serif text-[15px] font-medium text-on-surface leading-tight truncate group-hover:text-[#556250] transition-colors">
                  {product.title}
                </h3>
                <p className="text-[12px] text-on-surface-variant font-normal">
                  {product.color}
                </p>
                <div className="text-[14px] text-primary font-semibold pt-0.5">
                  ${product.price}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Editorial Brand Anchor Callout */}
      <div className="mx-4 mb-8 p-6 bg-[#f0eee8] rounded-xl flex flex-col items-center text-center border border-[#e5e2dc]/70">
        <span className="material-symbols-outlined text-[#556250] text-[28px] mb-2">
          spa
        </span>
        <p className="font-serif text-[18px] font-medium text-on-surface mb-1">
          Consciously Designed, Slow Made
        </p>
        <p className="text-[12px] text-on-surface-variant max-w-xs mb-4 leading-relaxed">
          Every garment in this collection is created using unbleached European linen, non-toxic
          botanic dyes, and closed-loop silk.
        </p>
        <button
          onClick={() => showToast('Opening The Material Journal')}
          className="px-4 py-2.5 bg-white text-primary text-[11px] font-semibold uppercase tracking-wider rounded-lg shadow-sm hover:bg-[#f6f3ed] transition-colors cursor-pointer"
        >
          Read The Material Journal
        </button>
      </div>
    </div>
  );
};
