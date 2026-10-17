export type ScreenType = 'home' | 'catalog' | 'saved' | 'bag' | 'product_detail';

export interface ProductColor {
  name: string;
  hex: string;
}

export interface Product {
  id: string;
  title: string;
  subtitle: string;
  price: number;
  originalPrice?: number;
  rating: number;
  reviewsCount: number;
  edition?: string;
  badge?: string;
  badgeType?: 'sustainable' | 'low-stock' | 'bestseller' | 'new' | 'limited';
  color: string;
  availableColors: ProductColor[];
  category: 'All' | 'New In' | 'Linen & Silk' | 'Tailored Pants' | 'Summer Knitwear' | 'Outerwear' | 'Accessories';
  image: string;
  galleryImages: string[];
  description: string;
  composition: string;
  features: string[];
  sustainability: {
    origin: string;
    waterSaved: string;
    certification: string;
    ecoDescription: string;
  };
  sizes: ('XS' | 'S' | 'M' | 'L' | 'XL' | '28' | '30' | '32' | '34')[];
  stockPerSize: Record<string, string>;
  modelInfo: string;
}

export interface CartItem {
  id: string;
  product: Product;
  selectedSize: string;
  selectedColor: string;
  quantity: number;
}
