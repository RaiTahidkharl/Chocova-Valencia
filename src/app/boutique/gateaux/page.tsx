import type { Metadata } from "next";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ProductCard } from "@/components/shop/ProductCard";
import { Button } from "@/components/ui/Button";
import { getProductsByCategory } from "@/lib/data";

export const metadata: Metadata = {
  title: "Gâteaux",
  description:
    "Gâteaux d'anniversaire et de fête — commandez à Valenciennes.",
};

export default function GateauxPage() {
  const products = getProductsByCategory("gateaux");

  return (
    <div className="py-12 md:py-16">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <SectionHeading
          title="Gâteaux"
          subtitle="Anniversaires, fêtes et célébrations — prêts à commander ou personnalisables."
        />
        <div className="mb-8 flex flex-wrap gap-4">
          <Button href="/boutique" variant="ghost">
            ← Toute la boutique
          </Button>
          <Button href="/gateaux-sur-mesure">Créer un gâteau sur mesure</Button>
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
