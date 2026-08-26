import type { Metadata } from "next";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ProductCard } from "@/components/shop/ProductCard";
import { Button } from "@/components/ui/Button";
import { getProductsByCategories } from "@/lib/data";

export const metadata: Metadata = {
  title: "Tartas",
  description:
    "Tartas de cumpleaños y celebraciones para encargar en Valencia.",
};

export default function GateauxPage() {
  const products = getProductsByCategories(["tartas-especiales", "tartas-personalizadas", "tartas-impresion", "tartas-numero", "tartas-nevera"]);

  return (
    <div className="py-12 md:py-16">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <SectionHeading
          title="Tartas"
          subtitle="Cumpleaños, fiestas y celebraciones: listas para encargar o personalizar."
        />
        <div className="mb-8 flex flex-wrap gap-4">
          <Button href="/boutique" variant="ghost">
            ← Toda la tienda
          </Button>
          <Button href="/gateaux-sur-mesure">Solicitar presupuesto</Button>
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
