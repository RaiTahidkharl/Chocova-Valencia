export type ProductCategory =
  | "tartas-especiales"
  | "tartas-personalizadas"
  | "tartas-impresion"
  | "tartas-numero"
  | "tartas-nevera"
  | "donuts-rellenos"
  | "brownies"
  | "muffins"
  | "cupcakes"
  | "cookies"
  | "mesas-dulces"
  | "cumpleanos"
  | "bautizos"
  | "comuniones"
  | "bodas"
  | "eventos-corporativos";

export interface Product {
  id: string;
  name: string;
  description: string;
  price?: number;
  priceLabel?: string;
  category: ProductCategory;
  image: string;
  cta: "cart" | "quote";
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
  product: string;
  inspiration: File | null;
}
