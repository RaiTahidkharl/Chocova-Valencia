import type { Metadata } from "next";
import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { SITE } from "@/lib/data";

export const metadata: Metadata = {
  title: "Notre histoire",
  description:
    "Découvrez Sunny Cakes — pâtisserie artisanale à Valenciennes.",
};

export default function StoryPage() {
  return (
    <div className="py-12 md:py-16">
      <div className="mx-auto max-w-3xl px-4 md:px-8">
        <p className="text-caramel text-sm font-medium uppercase tracking-wider mb-3 text-center">
          Notre histoire
        </p>
        <h1 className="font-serif text-4xl md:text-5xl text-chocolate text-center">
          L&apos;art de la pâtisserie, avec cœur
        </h1>

        <div className="relative aspect-video rounded-2xl overflow-hidden mt-10">
          <Image
            src="https://images.unsplash.com/photo-1556910103-1c02745aae4d?w=900&q=80"
            alt="Atelier Sunny Cakes"
            fill
            className="object-cover"
            sizes="800px"
          />
        </div>

        <div className="mt-10 prose prose-neutral max-w-none text-muted leading-relaxed space-y-4">
          <p>
            Sunny Cakes est née d&apos;une passion pour la pâtisserie fine et
            les saveurs du monde. Installée au cœur de Valenciennes, notre
            boutique accueille chaque jour des clients en quête de douceurs
            authentiques — du croissant du matin au gâteau de mariage le plus
            ambitieux.
          </p>
          <p>
            Nous combinons techniques françaises classiques et inspirations
            internationales : khachapuri géorgien, entremets raffinés, gâteaux
            d&apos;anniversaire spectaculaires. Chaque création est préparée
            avec des ingrédients soigneusement sélectionnés et une attention
            particulière à la décoration.
          </p>
          <p>
            Avec {SITE.reviewCount} avis et une note de {SITE.rating}/5 sur
            Google, nous sommes fiers de l&apos;accueil chaleureux que nos
            clients soulignent — parce qu&apos;un bon gâteau commence par une
            belle rencontre.
          </p>
        </div>

        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
          <Button href="/boutique">Découvrir la boutique</Button>
          <Button href="/contact" variant="secondary">
            Nous contacter
          </Button>
        </div>
      </div>
    </div>
  );
}
