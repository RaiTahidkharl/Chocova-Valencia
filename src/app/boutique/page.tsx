import type { Metadata } from "next";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ProductCard } from "@/components/shop/ProductCard";
import { Button } from "@/components/ui/Button";
import { PRODUCTS } from "@/lib/data";

export const metadata: Metadata = {
  title: "Boutique",
  description:
    "Descubre nuestros dulces artesanales y tartas en Valencia.",
};

export default function BoutiquePage() {
  return (
    <div className="py-12 md:py-16">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <SectionHeading
          title="La tienda"
          subtitle="Dulces del día, tartas listas para encargar y creaciones de temporada."
        />

        <div className="flex flex-wrap gap-3 mb-10 justify-center">
          <Button href="/boutique/patisseries" variant="secondary">
            Pastelería
          </Button>
          <Button href="/boutique/gateaux" variant="secondary">
            Tartas
          </Button>
          <Button href="/gateaux-sur-mesure" className="bg-primary-text text-white hover:bg-[#5B4A50]">
            Personalizadas
          </Button>
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
