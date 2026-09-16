import type { Metadata } from "next";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { OccasionGallery } from "@/components/gallery/OccasionGallery";

export const metadata: Metadata = {
  title: "Galería",
  description: "Galería de fotos: creaciones de Chocova Valencia.",
};

export default function GaleriePage() {
  return (
    <div className="py-12 md:py-16">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <SectionHeading
          title="Galería"
          subtitle="Nuestras creaciones organizadas por ocasión."
        />
        <OccasionGallery />
      </div>
    </div>
  );
}
