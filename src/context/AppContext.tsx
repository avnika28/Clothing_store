import React, { createContext, useContext, useState, useMemo, useCallback } from 'react';
import { ScreenType, Product, CartItem } from '../types';
import { PRODUCTS } from '../data/products';

interface ActiveFilters {
  category?: string;
  size?: string;
  color?: string;
}

interface AppContextType {
  currentScreen: ScreenType;
  setCurrentScreen: (screen: ScreenType) => void;
  selectedProductId: string;
  openProduct: (productId: string) => void;
  cart: CartItem[];
  cartCount: number;
  addToCart: (product: Product, size: string, color: string, quantity?: number) => void;
  updateCartQuantity: (itemId: string, delta: number) => void;
  removeFromCart: (itemId: string) => void;
  wishlist: Set<string>;
  toggleWishlist: (productId: string) => void;
  isWishlisted: (productId: string) => boolean;
  saveForLater: (itemId: string) => void;
  promoCode: string | null;
  discountPercentage: number;
  applyPromoCode: (code: string) => boolean;
  removePromoCode: () => void;
  catalogCategory: string;
  setCatalogCategory: (cat: string) => void;
  catalogSearchQuery: string;
  setCatalogSearchQuery: (query: string) => void;
  catalogSort: string;
  setCatalogSort: (sort: string) => void;
  catalogLayout: 'compact' | 'editorial';
  setCatalogLayout: (layout: 'compact' | 'editorial') => void;
  activeFilters: ActiveFilters;
  setActiveFilters: React.Dispatch<React.SetStateAction<ActiveFilters>>;
  removeFilterTag: (key: keyof ActiveFilters) => void;
  clearAllFilters: () => void;
  fitPredictorOpen: boolean;
  activeFitProduct: Product;
  openFitPredictor: (product?: Product) => void;
  closeFitPredictor: () => void;
  quickAddDrawer: { isOpen: boolean; product?: Product; selectedSize: string };
  openQuickAdd: (product: Product) => void;
  closeQuickAdd: () => void;
  filterDrawerOpen: boolean;
  setFilterDrawerOpen: (open: boolean) => void;
  menuDrawerOpen: boolean;
  setMenuDrawerOpen: (open: boolean) => void;
  toast: { message: string; visible: boolean };
  showToast: (msg: string) => void;
  isCheckoutSuccessModalOpen: boolean;
  setIsCheckoutSuccessModalOpen: (open: boolean) => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [currentScreen, setCurrentScreen] = useState<ScreenType>('home');
  const [selectedProductId, setSelectedProductId] = useState<string>('oversized-linen-shirt');

  // Prepopulate initial cart as shown in the Shopping Bag mockup:
  // Item 1: The Oversized Linen Shirt ($145), Size M, Color Natural Sand, Qty 1
  // Item 2: Pleated Wide-Leg Trousers ($180), Size 28, Color Chalk Oatmeal, Qty 1
  const [cart, setCart] = useState<CartItem[]>([
    {
      id: 'cart-init-1',
      product: PRODUCTS[0], // The Oversized Linen Shirt
      selectedSize: 'M',
      selectedColor: 'Natural Sand',
      quantity: 1,
    },
    {
      id: 'cart-init-2',
      product: PRODUCTS[1], // Pleated Wide Trousers
      selectedSize: '28',
      selectedColor: 'Chalk Oatmeal',
      quantity: 1,
    },
  ]);

  const [wishlist, setWishlist] = useState<Set<string>>(new Set(['oversized-linen-shirt']));

  // Active Promo Code
  const [promoCode, setPromoCode] = useState<string | null>('SUMMER10');
  const [discountPercentage, setDiscountPercentage] = useState<number>(10);

  // Catalog State
  const [catalogCategory, setCatalogCategory] = useState<string>('All');
  const [catalogSearchQuery, setCatalogSearchQuery] = useState<string>('');
  const [catalogSort, setCatalogSort] = useState<string>('Sort: Featured');
  const [catalogLayout, setCatalogLayout] = useState<'compact' | 'editorial'>('compact');
  const [activeFilters, setActiveFilters] = useState<ActiveFilters>({
    category: 'Linen & Sets',
    size: 'M',
    color: 'Natural',
  });

  // Modal / Drawers
  const [fitPredictorOpen, setFitPredictorOpen] = useState<boolean>(false);
  const [activeFitProduct, setActiveFitProduct] = useState<Product>(PRODUCTS[0]);
  const [quickAddDrawer, setQuickAddDrawer] = useState<{ isOpen: boolean; product?: Product; selectedSize: string }>({
    isOpen: false,
    product: undefined,
    selectedSize: 'M',
  });
  const [filterDrawerOpen, setFilterDrawerOpen] = useState<boolean>(false);
  const [menuDrawerOpen, setMenuDrawerOpen] = useState<boolean>(false);
  const [isCheckoutSuccessModalOpen, setIsCheckoutSuccessModalOpen] = useState<boolean>(false);

  // Toast
  const [toast, setToast] = useState<{ message: string; visible: boolean }>({ message: '', visible: false });

  const showToast = useCallback((msg: string) => {
    setToast({ message: msg, visible: true });
    setTimeout(() => {
      setToast((prev) => ({ ...prev, visible: false }));
    }, 2800);
  }, []);

  const openProduct = useCallback((productId: string) => {
    setSelectedProductId(productId);
    setCurrentScreen('product_detail');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const cartCount = useMemo(() => {
    return cart.reduce((acc, item) => acc + item.quantity, 0);
  }, [cart]);

  const addToCart = useCallback((product: Product, size: string, color: string, quantity = 1) => {
    setCart((prev) => {
      const existingIndex = prev.findIndex(
        (item) => item.product.id === product.id && item.selectedSize === size && item.selectedColor === color
      );
      if (existingIndex > -1) {
        const next = [...prev];
        next[existingIndex] = {
          ...next[existingIndex],
          quantity: next[existingIndex].quantity + quantity,
        };
        return next;
      }
      return [
        ...prev,
        {
          id: `cart-${Date.now()}-${Math.random().toString(36).substring(2, 7)}`,
          product,
          selectedSize: size,
          selectedColor: color,
          quantity,
        },
      ];
    });
    showToast(`Added ${product.title} (${size}) to Bag`);
  }, [showToast]);

  const updateCartQuantity = useCallback((itemId: string, delta: number) => {
    setCart((prev) => {
      return prev
        .map((item) => {
          if (item.id === itemId) {
            const nextQty = item.quantity + delta;
            return nextQty > 0 ? { ...item, quantity: nextQty } : null;
          }
          return item;
        })
        .filter(Boolean) as CartItem[];
    });
  }, []);

  const removeFromCart = useCallback((itemId: string) => {
    setCart((prev) => prev.filter((item) => item.id !== itemId));
    showToast('Item removed from shopping bag');
  }, [showToast]);

  const toggleWishlist = useCallback((productId: string) => {
    setWishlist((prev) => {
      const next = new Set(prev);
      if (next.has(productId)) {
        next.delete(productId);
        showToast('Item removed from Saved list');
      } else {
        next.add(productId);
        showToast('Item saved to Saved list');
      }
      return next;
    });
  }, [showToast]);

  const isWishlisted = useCallback((productId: string) => {
    return wishlist.has(productId);
  }, [wishlist]);

  const saveForLater = useCallback((itemId: string) => {
    const item = cart.find((i) => i.id === itemId);
    if (item) {
      toggleWishlist(item.product.id);
      removeFromCart(itemId);
      showToast(`${item.product.title} moved to Saved items`);
    }
  }, [cart, toggleWishlist, removeFromCart, showToast]);

  const applyPromoCode = useCallback((code: string) => {
    const clean = code.trim().toUpperCase();
    if (clean === 'SUMMER10' || clean === 'AURA10') {
      setPromoCode(clean);
      setDiscountPercentage(10);
      showToast(`Promo code ${clean} (-10%) applied!`);
      return true;
    }
    if (clean === 'AURA20' || clean === 'SOLSTICE20') {
      setPromoCode(clean);
      setDiscountPercentage(20);
      showToast(`Promo code ${clean} (-20%) applied!`);
      return true;
    }
    showToast('Invalid promo code. Try SUMMER10');
    return false;
  }, [showToast]);

  const removePromoCode = useCallback(() => {
    setPromoCode(null);
    setDiscountPercentage(0);
    showToast('Promo code removed');
  }, [showToast]);

  const removeFilterTag = useCallback((key: keyof ActiveFilters) => {
    setActiveFilters((prev) => {
      const next = { ...prev };
      delete next[key];
      return next;
    });
  }, []);

  const clearAllFilters = useCallback(() => {
    setActiveFilters({});
    setCatalogCategory('All');
    setCatalogSearchQuery('');
    showToast('All filters cleared');
  }, [showToast]);

  const openFitPredictor = useCallback((product?: Product) => {
    if (product) setActiveFitProduct(product);
    setFitPredictorOpen(true);
  }, []);

  const closeFitPredictor = useCallback(() => {
    setFitPredictorOpen(false);
  }, []);

  const openQuickAdd = useCallback((product: Product) => {
    setQuickAddDrawer({
      isOpen: true,
      product,
      selectedSize: product.sizes[0] || 'M',
    });
  }, []);

  const closeQuickAdd = useCallback(() => {
    setQuickAddDrawer((prev) => ({ ...prev, isOpen: false }));
  }, []);

  return (
    <AppContext.Provider
      value={{
        currentScreen,
        setCurrentScreen,
        selectedProductId,
        openProduct,
        cart,
        cartCount,
        addToCart,
        updateCartQuantity,
        removeFromCart,
        wishlist,
        toggleWishlist,
        isWishlisted,
        saveForLater,
        promoCode,
        discountPercentage,
        applyPromoCode,
        removePromoCode,
        catalogCategory,
        setCatalogCategory,
        catalogSearchQuery,
        setCatalogSearchQuery,
        catalogSort,
        setCatalogSort,
        catalogLayout,
        setCatalogLayout,
        activeFilters,
        setActiveFilters,
        removeFilterTag,
        clearAllFilters,
        fitPredictorOpen,
        activeFitProduct,
        openFitPredictor,
        closeFitPredictor,
        quickAddDrawer,
        openQuickAdd,
        closeQuickAdd,
        filterDrawerOpen,
        setFilterDrawerOpen,
        menuDrawerOpen,
        setMenuDrawerOpen,
        toast,
        showToast,
        isCheckoutSuccessModalOpen,
        setIsCheckoutSuccessModalOpen,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
};
