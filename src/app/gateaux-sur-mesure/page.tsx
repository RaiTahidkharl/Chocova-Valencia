import type { Metadata } from "next";
import { CakeBuilder } from "@/components/custom/CakeBuilder";
import { SectionHeading } from "@/components/ui/SectionHeading";

export const metadata: Metadata = {
  title: "Tartas personalizadas",
  description:
    "Configura tu tarta personalizada y recibe un presupuesto gratuito en menos de 24 horas en Valencia.",
};

export default function CustomCakesPage() {
  return (
    <div className="py-12 md:py-16">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <SectionHeading
          title="Crea tu tarta"
          subtitle="Ocasión, sabores, decoración y fecha: preparamos un presupuesto a tu medida."
        />
        <CakeBuilder />
      </div>
    </div>
  );
}
