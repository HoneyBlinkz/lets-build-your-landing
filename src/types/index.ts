export interface Product {
  id: string;
  name: string;
  price: number;
  category: 'Vests' | 'Shirts' | 'Pants' | 'Accessories';
  image: string;
  description: string;
  isFeatured?: boolean;
}

export interface CartItem extends Product {
  quantity: number;
}