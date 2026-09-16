import type { Metadata } from "next";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ProductCard } from "@/components/shop/ProductCard";
import { Button } from "@/components/ui/Button";
import { getProductsByCategories } from "@/lib/data";

export const metadata: Metadata = {
  title: "Tartas de la semana",
  description: "Tartas refrigeradas que cambian cada semana en Valencia.",
};

export default function PatisseriesPage() {
  const products = getProductsByCategories(["tartas-nevera"]);

  return (
    <div className="py-12 md:py-16">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <SectionHeading
          title="Tartas de la semana"
          subtitle="Tartas refrigeradas que cambian cada semana."
        />
        <div className="mb-8">
          <Button href="/boutique" variant="ghost">
            ← Toda la tienda
          </Button>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
}
