"use client";

import { createContext, useContext, useMemo, useState, type ReactNode } from "react";
import type { Product } from "@/lib/types";

type CartItem = {
  product: Product;
  quantity: number;
};

type CartContextValue = {
  items: CartItem[];
  itemCount: number;
  addToCart: (product: Product) => void;
  removeFromCart: (productId: string) => void;
};

const CartContext = createContext<CartContextValue | null>(null);

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);

  const value = useMemo(() => ({
    items,
    itemCount: items.reduce((total, item) => total + item.quantity, 0),
    addToCart: (product: Product) => {
      setItems((current) => {
        const existing = current.find((item) => item.product.id === product.id);
        if (existing) {
          return current.map((item) => item.product.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item);
        }
        return [...current, { product, quantity: 1 }];
      });
    },
    removeFromCart: (productId: string) => {
      setItems((current) => current.filter((item) => item.product.id !== productId));
    },
  }), [items]);

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) throw new Error("useCart must be used within CartProvider");
  return context;
}
