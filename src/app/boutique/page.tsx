import type { Metadata } from "next";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ProductCard } from "@/components/shop/ProductCard";
import { Button } from "@/components/ui/Button";
import { PRODUCTS } from "@/lib/data";

export const metadata: Metadata = {
  title: "Boutique",
  description:
    "Découvrez nos pâtisseries artisanales et gâteaux à Valenciennes.",
};

export default function BoutiquePage() {
  return (
    <div className="py-12 md:py-16">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <SectionHeading
          title="La boutique"
          subtitle="Pâtisseries du jour, gâteaux prêts à commander et créations saisonnières."
        />

        <div className="flex flex-wrap gap-3 mb-10 justify-center">
          <Button href="/boutique/patisseries" variant="secondary">
            Pâtisseries
          </Button>
          <Button href="/boutique/gateaux" variant="secondary">
            Gâteaux
          </Button>
          <Button href="/gateaux-sur-mesure">Sur mesure</Button>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {PRODUCTS.map((product) => (
            <div key={product.id} id={product.id}>
              <ProductCard product={product} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
