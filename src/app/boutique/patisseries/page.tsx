import type { Metadata } from "next";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ProductCard } from "@/components/shop/ProductCard";
import { Button } from "@/components/ui/Button";
import { getProductsByCategory } from "@/lib/data";

export const metadata: Metadata = {
  title: "Pâtisseries",
  description: "Pâtisseries artisanales et viennoiseries à Valenciennes.",
};

export default function PatisseriesPage() {
  const products = getProductsByCategory("patisseries");

  return (
    <div className="py-12 md:py-16">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <SectionHeading
          title="Pâtisseries"
          subtitle="Viennoiseries, entremets individuels et douceurs préparées chaque jour."
        />
        <div className="mb-8">
          <Button href="/boutique" variant="ghost">
            ← Toute la boutique
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
