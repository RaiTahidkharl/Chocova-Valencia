import { Button } from "@/components/ui/Button";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ProductCard } from "@/components/shop/ProductCard";
import { getFeaturedProducts } from "@/lib/data";

export function FeaturedProducts() {
  const products = getFeaturedProducts().slice(0, 6);

  return (
    <section className="bg-background-light py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <SectionHeading
          title="Nuestra selección"
          subtitle="Las creaciones favoritas de nuestros clientes: dulces selectos y tartas extraordinarias."
        />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
        <div className="mt-10 text-center">
          <Button href="/boutique" variant="secondary">
            Ver toda la tienda
          </Button>
        </div>
      </div>
    </section>
  );
}
