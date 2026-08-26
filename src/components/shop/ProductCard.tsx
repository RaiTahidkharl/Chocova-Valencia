"use client";

import Image from "next/image";
import { useState } from "react";
import { useCart } from "@/components/cart/CartProvider";
import type { Product } from "@/lib/types";

const BADGE_LABELS = {
  nouveau: "Nouveau",
  "best-seller": "Meilleure vente",
  mariage: "Boda",
};

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  const [isQuickViewOpen, setIsQuickViewOpen] = useState(false);
  const [customization, setCustomization] = useState("");
  const { addToCart } = useCart();
  const metadata = product.serves || product.leadTime
    ? [product.serves ?? "Preparado con mimo", product.leadTime ? `Preparación: ${product.leadTime}` : "Listo para recoger"].join(" · ")
    : "Disponible para recoger ahora";

  const openQuickView = () => setIsQuickViewOpen(true);

  return (
    <>
      <article
        className="group flex h-full cursor-pointer flex-col overflow-hidden rounded-2xl border border-muted-pink bg-background-card p-3 shadow-sm transition-shadow duration-300 hover:shadow-lg hover:shadow-primary-text/10 focus-within:ring-2 focus-within:ring-primary-text/40"
        onClick={openQuickView}
        onKeyDown={(event) => {
          if (event.key === "Enter" || event.key === " ") openQuickView();
        }}
        role="button"
        tabIndex={0}
        aria-label={`Vista rápida: ${product.name}`}
      >
        <div className="relative aspect-[4/3] overflow-hidden rounded-xl bg-muted-pink">
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
          {product.badge && (
            <span
              className={`absolute left-3 top-3 rounded-full px-3 py-1 text-xs font-semibold text-primary-text ${
                product.badge === "nouveau"
                  ? "border border-primary-text/50 bg-background-light/90"
                  : "bg-[#C98C82]"
              }`}
            >
              {BADGE_LABELS[product.badge]}
            </span>
          )}
        </div>

        <div className="flex flex-1 flex-col px-2 pb-2 pt-5">
          <div className="flex items-start justify-between gap-3">
            <h3 className="font-serif text-xl leading-tight text-primary-text">{product.name}</h3>
            <p className="shrink-0 text-right text-base font-bold text-primary-text">
              {product.priceLabel && (
                <span className="mb-0.5 block text-[11px] font-medium text-primary-text/75">
                  {product.priceLabel}
                </span>
              )}
              {product.price}€
            </p>
          </div>

          <p className="mt-3 min-h-12 text-sm leading-6 text-[#4A3E3D]">
            {product.description}
          </p>

          <p className="mt-3 border-t border-muted-pink pt-3 text-xs font-semibold tracking-wide text-[#4A3E3D]">
            {metadata}
          </p>

          <button
            type="button"
            onClick={(event) => {
              event.stopPropagation();
              setIsQuickViewOpen(true);
            }}
            className="mt-auto inline-flex min-h-11 items-center justify-center rounded-xl bg-primary-text px-4 py-3 text-sm font-semibold text-white transition duration-200 hover:scale-[1.02] hover:bg-[#5B4A50] active:scale-[0.98]"
          >
            Añadir al pedido
          </button>
        </div>
      </article>

      {isQuickViewOpen && (
        <div
          className="fixed inset-0 z-[60] flex items-center justify-center bg-black/45 p-4"
          role="dialog"
          aria-modal="true"
          aria-labelledby={`quick-view-${product.id}`}
          onClick={() => setIsQuickViewOpen(false)}
        >
          <div className="relative w-full max-w-lg overflow-hidden rounded-2xl bg-background-light p-4 shadow-2xl" onClick={(event) => event.stopPropagation()}>
            <button
              type="button"
              className="absolute right-6 top-6 z-10 flex h-9 w-9 items-center justify-center rounded-full bg-background-light/90 text-xl text-primary-text"
              onClick={() => setIsQuickViewOpen(false)}
              aria-label="Cerrar la vista rápida"
            >
              ×
            </button>
            <div className="relative aspect-[4/3] overflow-hidden rounded-xl bg-muted-pink">
              <Image src={product.image} alt={product.name} fill className="object-cover object-center" sizes="(max-width: 640px) 100vw, 32rem" />
            </div>
            <div className="p-3 pt-5">
              <div className="flex items-start justify-between gap-4">
                <h2 id={`quick-view-${product.id}`} className="font-serif text-3xl text-primary-text">{product.name}</h2>
                <p className="text-lg font-bold text-primary-text">{product.price}€</p>
              </div>
              <p className="mt-3 leading-7 text-[#4A3E3D]">{product.description}</p>
              <p className="mt-3 text-sm font-semibold text-[#4A3E3D]">{metadata}</p>
              <label className="mt-5 block text-sm font-semibold text-primary-text">
                Personaliza tu pedido
                <input value={customization} onChange={(event) => setCustomization(event.target.value)} placeholder="Sabor, mensaje o detalle (opcional)" className="mt-2 w-full rounded-lg border border-muted-pink bg-white px-3 py-2 text-sm font-normal outline-none focus:border-primary-text" />
              </label>
              <button
                type="button"
                onClick={() => {
                  addToCart(product, customization.trim() || undefined);
                  setIsQuickViewOpen(false);
                }}
                className="mt-6 inline-flex min-h-11 w-full items-center justify-center rounded-xl bg-primary-text px-4 py-3 text-sm font-semibold text-white hover:bg-[#5B4A50]"
              >
                Añadir al pedido
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
