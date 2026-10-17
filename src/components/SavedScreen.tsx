import React from 'react';
import { useApp } from '../context/AppContext';
import { PRODUCTS } from '../data/products';

export const SavedScreen: React.FC = () => {
  const { wishlist, toggleWishlist, openProduct, addToCart, setCurrentScreen } = useApp();

  const savedProducts = PRODUCTS.filter((p) => wishlist.has(p.id));

  return (
    <div className="flex flex-col w-full pb-8 px-4 pt-2">
      {/* Header */}
      <div className="flex items-baseline justify-between mb-4">
        <div>
          <h1 className="font-serif text-[28px] font-medium text-primary tracking-tight">
            Saved Pieces
          </h1>
          <p className="text-[12px] text-on-surface-variant mt-0.5">
            Your personal curation of quiet luxury and intentional wardrobe staples.
          </p>
        </div>
        <span className="text-[10px] uppercase font-bold tracking-wider text-[#556250]">
          {savedProducts.length} {savedProducts.length === 1 ? 'Item' : 'Items'}
        </span>
      </div>

      {savedProducts.length === 0 ? (
        <div className="bg-white rounded-xl p-8 text-center flex flex-col items-center justify-center gap-3 border border-[#e5e2dc]/60 shadow-sm mt-4">
          <span className="material-symbols-outlined text-[#747878] text-[40px]">
            favorite_border
          </span>
          <h3 className="font-serif text-[20px] font-medium text-primary">
            No Saved Items Yet
          </h3>
          <p className="text-[13px] text-on-surface-variant max-w-xs">
            Tap the heart icon on any piece while exploring to build your capsule wishlist.
          </p>
          <button
            onClick={() => setCurrentScreen('catalog')}
            className="mt-2 px-6 py-3 bg-primary text-white rounded-lg text-[12px] uppercase font-semibold tracking-wider hover:bg-[#333] transition-colors cursor-pointer"
          >
            Explore Capsule
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-2 gap-3">
          {savedProducts.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-xl overflow-hidden border border-[#e5e2dc]/60 shadow-sm flex flex-col group"
            >
              <div
                className="relative aspect-[3/4] bg-[#f0eee8] overflow-hidden cursor-pointer"
                onClick={() => openProduct(product.id)}
              >
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    toggleWishlist(product.id);
                  }}
                  className="absolute top-2 right-2 w-8 h-8 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center text-[#ba1a1a] shadow-xs active:scale-90 cursor-pointer"
                  title="Remove from saved"
                >
                  <span
                    className="material-symbols-outlined text-[17px]"
                    style={{ fontVariationSettings: "'FILL' 1" }}
                  >
                    favorite
                  </span>
                </button>
              </div>

              <div className="p-3 flex flex-col justify-between flex-1">
                <div onClick={() => openProduct(product.id)} className="cursor-pointer">
                  <h4 className="font-serif text-[15px] font-medium text-primary line-clamp-1 group-hover:text-[#556250]">
                    {product.title}
                  </h4>
                  <span className="text-[11px] text-on-surface-variant">{product.color}</span>
                  <div className="font-sans text-[14px] font-semibold text-primary mt-1">
                    ${product.price}
                  </div>
                </div>

                <button
                  onClick={() => addToCart(product, 'M', product.color)}
                  className="mt-3 w-full py-2 bg-primary text-white rounded-lg text-[10px] uppercase font-bold tracking-wider hover:bg-[#333] transition-colors flex items-center justify-center gap-1 cursor-pointer"
                >
                  <span className="material-symbols-outlined text-[14px]">shopping_bag</span>
                  <span>Move to Bag</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
