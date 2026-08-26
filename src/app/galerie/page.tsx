import type { Metadata } from "next";
import Image from "next/image";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { INSTAGRAM_POSTS, PRODUCTS } from "@/lib/data";

export const metadata: Metadata = {
  title: "Galería",
  description: "Galería de fotos: creaciones de Chocova Valencia.",
};

const GALLERY_IMAGES = [
  ...INSTAGRAM_POSTS,
  ...PRODUCTS.slice(0, 4).map((p) => ({ id: p.id, image: p.image, alt: p.name })),
];

export default function GaleriePage() {
  return (
    <div className="py-12 md:py-16">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <SectionHeading
          title="Galería"
          subtitle="Nuestras creaciones: tartas personalizadas, dulces y tartas de varios pisos."
        />
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {GALLERY_IMAGES.map((item) => (
            <div
              key={item.id}
              className="relative aspect-square rounded-xl overflow-hidden group"
            >
              <Image
                src={item.image}
                alt={item.alt}
                fill
                className="object-cover transition-transform group-hover:scale-105"
                sizes="300px"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
