import Image from "next/image";
import Link from "next/link";

export function StoryTeaser() {
  return (
    <section className="bg-[#FFF0F2] py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <div className="grid overflow-hidden rounded-[24px] bg-white shadow-[0_10px_30px_rgba(0,0,0,0.04)] lg:grid-cols-2">
          <div className="relative aspect-[4/3] min-h-[300px] lg:min-h-[420px] lg:aspect-auto">
            <Image
              src="https://images.unsplash.com/photo-1556910103-1c02745aae4d?w=1200&q=85"
              alt="Artisans préparant des pâtisseries dans la cuisine Sunny Cakes"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>

          <div className="flex items-center px-7 py-10 sm:px-10 md:px-14 md:py-14 lg:px-16">
            <div className="max-w-xl">
              <p className="mb-5 text-xs font-semibold uppercase tracking-[2px] text-[#332827]">
                Notre savoir-faire
              </p>
              <h2 className="font-serif text-3xl leading-tight text-[#332827] sm:text-4xl lg:text-[2.65rem]">
                L&apos;art de la pâtisserie, avec passion
              </h2>
              <p className="mt-5 max-w-lg text-base leading-7 text-[#4A3E3D]">
                À Valenciennes, Sunny Cakes allie techniques françaises et
                inspirations du monde entier. Chaque pâtisserie et chaque gâteau
                est préparé avec soin — ingrédients sélectionnés, décoration
                minutieuse et accueil chaleureux.
              </p>
              <Link
                href="/notre-histoire"
                className="mt-8 inline-flex rounded-full border-2 border-[#332827] px-6 py-3 text-sm font-semibold text-[#332827] transition-colors duration-300 hover:bg-[#332827] hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#332827]"
              >
                En savoir plus
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
