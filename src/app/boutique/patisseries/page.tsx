import type { Metadata } from "next";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ProductCard } from "@/components/shop/ProductCard";
import { Button } from "@/components/ui/Button";
import { getProductsByCategories } from "@/lib/data";

export const metadata: Metadata = {
  title: "Repostería",
  description: "Donuts rellenos, brownies, muffins, cupcakes y cookies en Valencia.",
};

export default function PatisseriesPage() {
  const products = getProductsByCategories(["donuts-rellenos", "brownies", "muffins", "cupcakes", "cookies"]);

  return (
    <div className="py-12 md:py-16">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <SectionHeading
          title="Repostería"
          subtitle="Donuts rellenos, brownies, muffins, cupcakes y cookies para disfrutar cada día."
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
