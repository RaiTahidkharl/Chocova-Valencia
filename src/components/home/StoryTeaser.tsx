import Image from "next/image";
import { Button } from "@/components/ui/Button";

export function StoryTeaser() {
  return (
    <section className="py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <div className="grid lg:grid-cols-2 gap-10 items-center bg-white rounded-2xl overflow-hidden border border-border">
          <div className="relative aspect-[4/3] lg:aspect-auto lg:min-h-[360px]">
            <Image
              src="https://images.unsplash.com/photo-1556910103-1c02745aae4d?w=800&q=80"
              alt="Artisan pâtissier au travail"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
          <div className="p-8 md:p-12">
            <p className="text-caramel text-sm font-medium uppercase tracking-wider mb-3">
              Notre savoir-faire
            </p>
            <h2 className="font-serif text-3xl text-chocolate">
              L&apos;art de la pâtisserie, avec passion
            </h2>
            <p className="mt-4 text-muted leading-relaxed">
              À Valenciennes, Sunny Cakes allie techniques françaises et
              inspirations du monde entier. Chaque pâtisserie et chaque gâteau
              est préparé avec soin — ingrédients sélectionnés, décoration
              minutieuse et accueil chaleureux.
            </p>
            <div className="mt-6">
              <Button href="/notre-histoire" variant="secondary">
                En savoir plus
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
