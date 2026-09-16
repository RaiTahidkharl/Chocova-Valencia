"use client";

import Image from "next/image";
import { useState } from "react";
import { Button } from "@/components/ui/Button";

type GalleryCategory = {
  id: "infantiles" | "adultos" | "empresas" | "bodas" | "bautizos-comuniones" | "mesas-dulces" | "modelados" | "galletas-cupcakes";
  label: string;
  images: { id: string; image: string; alt: string }[];
};

const GALLERY_CATEGORIES: GalleryCategory[] = [
  { id: "infantiles", label: "Tartas infantiles", images: [
    { id: "martina", image: "/chocova/martina.jpg", alt: "Tarta infantil de Chocova Valencia" },
  ] },
  { id: "adultos", label: "Tartas adultos", images: [
    { id: "adultos", image: "/chocova/tarta-adultos.jpg", alt: "Tarta de celebración para adultos de Chocova Valencia" },
    { id: "numero", image: "/chocova/tarta-numeros.jpg", alt: "Tarta de número de Chocova Valencia" },
  ] },
  { id: "empresas", label: "Tartas empresas", images: [
    { id: "empresa", image: "/chocova/tartas-empresa.jpg", alt: "Tarta para empresa de Chocova Valencia" },
  ] },
  { id: "bodas", label: "Tartas de bodas", images: [
    { id: "boda", image: "/chocova/boda.jpg", alt: "Tarta de boda de Chocova Valencia" },
  ] },
  { id: "bautizos-comuniones", label: "Bautizos y comuniones", images: [
    { id: "bautizo", image: "/chocova/bautizo.jpg", alt: "Tarta de bautizo de Chocova Valencia" },
    { id: "comunion", image: "/chocova/comunion.jpg", alt: "Tarta de comunión de Chocova Valencia" },
  ] },
  { id: "mesas-dulces", label: "Mesas dulces", images: [
    { id: "mesa-dulce", image: "/chocova/mesas-dulces.jpg", alt: "Mesa dulce de Chocova Valencia" },
  ] },
  { id: "modelados", label: "Modelados", images: [] },
  { id: "galletas-cupcakes", label: "Galletas y cupcakes", images: [
    { id: "cupcakes", image: "/chocova/cupcakes.jpeg", alt: "Cupcakes de Chocova Valencia" },
    { id: "cookies", image: "/chocova/cookies.jpeg", alt: "Galletas de Chocova Valencia" },
  ] },
];

export function OccasionGallery() {
  const [selectedCategoryId, setSelectedCategoryId] = useState<GalleryCategory["id"]>("infantiles");
  const selectedCategory = GALLERY_CATEGORIES.find((category) => category.id === selectedCategoryId) ?? GALLERY_CATEGORIES[0];

  return (
    <>
      <div className="mb-10 flex flex-wrap justify-center gap-3">
        {GALLERY_CATEGORIES.map((category) => (
          <Button key={category.id} variant={category.id === selectedCategory.id ? "primary" : "secondary"} onClick={() => setSelectedCategoryId(category.id)}>
            {category.label}
          </Button>
        ))}
      </div>
      <h2 className="mb-6 font-serif text-3xl text-primary-text">{selectedCategory.label}</h2>
      {selectedCategory.images.length > 0 ? (
        <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
          {selectedCategory.images.map((item, index) => (
            <div key={item.id} className="gallery-reveal image-sheen lift-card group relative aspect-square overflow-hidden rounded-xl" style={{ animationDelay: `${index * 90}ms` }}>
              <Image src={item.image} alt={item.alt} fill className="object-cover transition-transform duration-700 ease-out group-hover:scale-110" sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw" />
            </div>
          ))}
        </div>
      ) : (
        <p className="text-center text-[#4A3E3D]">Próximamente añadiremos imágenes de esta colección.</p>
      )}
    </>
  );
}
