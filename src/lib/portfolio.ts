import { readdirSync } from "node:fs";
import { join } from "node:path";

export type PortfolioCollection = {
  id: string;
  label: string;
  description: string;
  images: { src: string; alt: string }[];
  coverImage?: { src: string; alt: string };
};

const coverImages: Record<string, { src: string; alt: string }> = {
  infantiles: {
    src: "/cakes/farm-theme.jpg",
    alt: "Tarta infantil de granja de Chocova Valencia",
  },
};

const collections = [
  ["infantiles", "Tartas infantiles", "Diseños creados para celebrar los momentos más pequeños."],
  ["adultos", "Tartas adultos", "Creaciones para cumpleaños y celebraciones especiales."],
  ["empresas", "Tartas empresas", "Detalles dulces para marcas, equipos y ocasiones corporativas."],
  ["bodas", "Tartas de boda", "Tartas creadas para acompañar un día inolvidable."],
  ["bautizos-comuniones", "Bautizos y comuniones", "Creaciones delicadas para celebrar en familia."],
  ["mesas-dulces", "Candy Bar / Mesas dulces", "Composiciones dulces para compartir y celebrar."],
  ["galletas-cupcakes", "Galletas, cupcakes y pequeños dulces", "Pequeños detalles elaborados para cada ocasión."],
] as const;

export function getPortfolioCollections(): PortfolioCollection[] {
  return collections.map(([id, label, description]) => {
    const directory = join(process.cwd(), "public", "portfolio", id);
    const images = readdirSync(directory)
      .filter((file) => /\.(jpe?g|webp|png)$/i.test(file))
      .sort((a, b) => a.localeCompare(b, undefined, { numeric: true }))
      .map((file) => ({ src: `/portfolio/${id}/${file}`, alt: `${label} de Chocova Valencia` }));

    return { id, label, description, images, coverImage: coverImages[id] };
  });
}
