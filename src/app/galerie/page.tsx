import type { Metadata } from "next";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { PortfolioGallery } from "@/components/gallery/PortfolioGallery";
import { getPortfolioCollections } from "@/lib/portfolio";

export const metadata: Metadata = {
  title: "Galería",
  description: "Galería de fotos: creaciones de Chocova Valencia.",
};

export default async function GaleriePage({ searchParams }: PageProps<"/galerie">) {
  const { collection } = await searchParams;
  const initialCollection = typeof collection === "string" ? collection : undefined;
  return (
    <div className="py-12 md:py-16">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <SectionHeading
          title="Nuestras creaciones"
          subtitle="Descubre algunas de las tartas y dulces que hemos creado para momentos muy especiales."
        />
        <PortfolioGallery collections={getPortfolioCollections()} initialCollection={initialCollection} />
      </div>
    </div>
  );
}
