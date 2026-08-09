import type { Metadata } from "next";
import { CakeBuilder } from "@/components/custom/CakeBuilder";
import { SectionHeading } from "@/components/ui/SectionHeading";

export const metadata: Metadata = {
  title: "Gâteaux sur mesure",
  description:
    "Configurez votre gâteau personnalisé — devis gratuit sous 24h à Valenciennes.",
};

export default function CustomCakesPage() {
  return (
    <div className="py-12 md:py-16">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <SectionHeading
          title="Créez votre gâteau"
          subtitle="Occasion, saveurs, décoration, date — nous préparons un devis sur mesure pour vous."
        />
        <CakeBuilder />
      </div>
    </div>
  );
}
