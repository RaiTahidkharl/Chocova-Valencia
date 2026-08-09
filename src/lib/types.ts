export type ProductCategory = "patisseries" | "gateaux" | "custom" | "mariage";

export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  priceLabel?: string;
  category: ProductCategory;
  image: string;
  serves?: string;
  leadTime?: string;
  badge?: "nouveau" | "best-seller" | "mariage";
  featured?: boolean;
}

export interface Review {
  id: string;
  author: string;
  rating: number;
  text: string;
  tag?: string;
}

export interface CategoryTile {
  id: string;
  title: string;
  description: string;
  href: string;
  image: string;
}

export interface CakeBuilderData {
  occasion: string;
  guests: number;
  size: string;
  flavor: string;
  filling: string;
  theme: string;
  colors: string;
  decoration: string;
  message: string;
  date: string;
  fulfillment: string;
  budget: string;
  requirements: string;
  name: string;
  email: string;
  phone: string;
}
