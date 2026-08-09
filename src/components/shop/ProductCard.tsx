import Image from "next/image";
import Link from "next/link";
import type { Product } from "@/lib/types";

const BADGE_LABELS = {
  nouveau: "Nouveau",
  "best-seller": "Best-seller",
  mariage: "Mariage",
};

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  return (
    <article className="lift-card group bg-white rounded-2xl overflow-hidden border border-border">
      <div className="image-sheen relative aspect-[4/5] overflow-hidden">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, 33vw"
        />
        {product.badge && (
          <span className="absolute top-3 left-3 bg-sunny text-chocolate text-xs font-medium px-2.5 py-1 rounded-full">
            {BADGE_LABELS[product.badge]}
          </span>
        )}
        <div className="absolute inset-0 bg-chocolate/0 group-hover:bg-chocolate/20 transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100">
          <Link
            href={`/boutique#${product.id}`}
            className="bg-white text-chocolate text-sm font-medium px-4 py-2 rounded-lg"
          >
            Voir le produit
          </Link>
        </div>
      </div>
      <div className="p-4">
        <div className="flex items-start justify-between gap-2">
          <h3 className="font-serif text-lg text-chocolate">{product.name}</h3>
          <p className="text-caramel font-medium whitespace-nowrap">
            {product.priceLabel && (
              <span className="text-xs text-muted block text-right">
                {product.priceLabel}
              </span>
            )}
            {product.price}€
          </p>
        </div>
        <p className="mt-1.5 text-sm text-muted line-clamp-2">
          {product.description}
        </p>
        {(product.serves || product.leadTime) && (
          <p className="mt-2 text-xs text-muted">
            {[product.serves, product.leadTime && `Préparation : ${product.leadTime}`]
              .filter(Boolean)
              .join(" · ")}
          </p>
        )}
      </div>
    </article>
  );
}
