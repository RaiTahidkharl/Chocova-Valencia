import type { Metadata } from "next";
import Image from "next/image";
import { SectionHeading } from "@/components/ui/SectionHeading";

export const metadata: Metadata = {
  title: "Galería",
  description: "Galería de fotos: creaciones de Chocova Valencia.",
};

const GALLERY_IMAGES = [
  { id: "tarta-especial-1", image: "https://chocovavalencia.com/wp-content/uploads/2020/12/tarta_adultos.jpg", alt: "Tarta especial Chocova Valencia" },
  { id: "tarta-especial-2", image: "https://chocovavalencia.com/wp-content/uploads/2021/12/Tarta-impresion-2-1536x2048.jpg", alt: "Tarta de impresión Chocova Valencia" },
  { id: "tarta-numero", image: "https://chocovavalencia.com/wp-content/uploads/2020/11/tarta_numeros.jpg", alt: "Tarta número Chocova Valencia" },
  { id: "tarta-infantil", image: "https://chocovavalencia.com/wp-content/uploads/2020/12/martina.jpg", alt: "Tarta infantil Chocova Valencia" },
  { id: "tarta-empresa", image: "https://chocovavalencia.com/wp-content/uploads/2020/12/tartas_empresa-1.jpg", alt: "Tarta para empresa Chocova Valencia" },
  { id: "comunion", image: "https://chocovavalencia.com/wp-content/uploads/2020/12/comunion.jpg", alt: "Tarta de comunión Chocova Valencia" },
  { id: "mesa-dulce", image: "https://chocovavalencia.com/wp-content/uploads/2020/12/mesas_dulces.jpg", alt: "Mesa dulce Chocova Valencia" },
  { id: "boda", image: "https://chocovavalencia.com/wp-content/uploads/2020/12/IMG_0378.jpg", alt: "Tarta de boda Chocova Valencia" },
  { id: "bautizo", image: "https://chocovavalencia.com/wp-content/uploads/2020/12/IMGefrwefwefwef7.jpg", alt: "Tarta de bautizo Chocova Valencia" },
  { id: "cupcakes", image: "https://chocovavalencia.com/wp-content/uploads/2020/12/cupcakes-768x1024.jpeg", alt: "Cupcakes Chocova Valencia" },
  { id: "cookies", image: "https://chocovavalencia.com/wp-content/uploads/2021/01/cookies-1-768x1024.jpeg", alt: "Cookies Chocova Valencia" },
  { id: "reposteria", image: "https://chocovavalencia.com/wp-content/uploads/2021/01/2020-11-13-12.12.00-768x1024.jpg", alt: "Repostería artesanal Chocova Valencia" },
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
          {GALLERY_IMAGES.map((item, index) => (
            <div
              key={item.id}
              className="gallery-reveal image-sheen lift-card group relative aspect-square overflow-hidden rounded-xl"
              style={{ animationDelay: `${index * 90}ms` }}
            >
              <Image
                src={item.image}
                alt={item.alt}
                fill
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                sizes="300px"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
