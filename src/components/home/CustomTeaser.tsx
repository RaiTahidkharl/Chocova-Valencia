"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/Button";

const EXAMPLES = [
  { image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=900&q=85", alt: "Gâteau anniversaire personnalisé" },
  { image: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&w=900&q=85", alt: "Gâteau de mariage à étages" },
  { image: "https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?auto=format&fit=crop&w=900&q=85", alt: "Gâteau aux fruits rouges" },
  { image: "https://images.unsplash.com/photo-1551024506-0bccd828d307?auto=format&fit=crop&w=900&q=85", alt: "Cupcakes décorés sur mesure" },
  { image: "https://images.unsplash.com/photo-1565958011703-44f9829ba187?auto=format&fit=crop&w=900&q=85", alt: "Entremets aux fraises" },
];

export function CustomTeaser() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % 3);
    }, 4500);

    return () => window.clearInterval(timer);
  }, []);

  const cardIndexes = [(activeIndex + 2) % 3, activeIndex, (activeIndex + 1) % 3];

  return (
    <section className="py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <p className="mb-3 text-sm font-medium uppercase tracking-wider text-caramel">Sur mesure</p>
            <h2 className="font-serif text-3xl text-chocolate md:text-4xl">Votre gâteau, votre histoire</h2>
            <p className="mt-4 leading-relaxed text-muted">
              Choisissez l&apos;occasion, les saveurs, les couleurs et la décoration. Notre configurateur vous guide étape par étape — devis gratuit sous 24 heures.
            </p>
            <ul className="mt-6 space-y-2 text-sm text-chocolate">
              <li>✓ Anniversaire, mariage, baptême, entreprise</li>
              <li>✓ Parfums, garnitures et thème personnalisés</li>
              <li>✓ Upload de photo de référence</li>
              <li>✓ Retrait ou livraison à Valenciennes</li>
            </ul>
            <div className="mt-8"><Button href="/gateaux-sur-mesure">Créer mon gâteau</Button></div>
          </div>

          <div className="relative mx-auto h-[300px] w-full max-w-[440px] sm:h-[340px]" aria-label="Exemples de gâteaux sur mesure">
            {EXAMPLES.slice(0, 3).map((example, exampleIndex) => {
              const position = (exampleIndex - activeIndex + 3) % 3;
              const positionClasses = [
                "left-1/2 top-0 z-10 -translate-x-1/2 scale-100 opacity-100",
                "right-3 top-7 z-0 rotate-12 scale-90 opacity-55 sm:right-7",
                "left-3 top-7 z-0 -rotate-12 scale-90 opacity-55 sm:left-7",
              ];

              return (
                <button
                  key={example.alt}
                  type="button"
                  onClick={() => setActiveIndex(exampleIndex)}
                  className={`absolute h-[260px] w-[175px] overflow-hidden rounded-[1.5rem] bg-[#292522] shadow-xl shadow-chocolate/20 transition-[left,right,top,transform,opacity,box-shadow] duration-700 ease-in-out focus:outline-none focus-visible:ring-2 focus-visible:ring-caramel sm:h-[300px] sm:w-[205px] ${positionClasses[position]}`}
                  aria-label={`Afficher ${example.alt}`}
                >
                  <Image src={example.image} alt={example.alt} fill className="object-cover" sizes="205px" />
                </button>
              );
            })}
            {false && cardIndexes.map((exampleIndex, position) => {
              const example = EXAMPLES[exampleIndex];
              const isActive = position === 1;
              const positionClasses = [
                "left-3 top-7 z-0 -rotate-12 sm:left-7",
                "left-1/2 top-0 z-10 -translate-x-1/2",
                "right-3 top-7 z-0 rotate-12 sm:right-7",
              ];

              return (
                <button
                  key={example.alt}
                  type="button"
                  onClick={() => setActiveIndex(exampleIndex)}
                  className={`absolute h-[260px] w-[175px] overflow-hidden rounded-[1.5rem] text-left shadow-xl shadow-chocolate/20 transition-all duration-500 ease-out focus:outline-none focus-visible:ring-2 focus-visible:ring-caramel sm:h-[300px] sm:w-[205px] ${positionClasses[position]} ${isActive ? "bg-[#211e1b] p-4 text-cream shadow-2xl shadow-chocolate/30 sm:p-5" : "bg-[#292522]"}`}
                  aria-label={`Afficher ${example.alt}`}
                >
                  {isActive ? (
                    <>
                      <div className="flex items-start justify-between">
                        <p className="text-[10px] font-medium uppercase tracking-[0.16em] text-cream/65">Sunny Cakes</p>
                        <span className="flex h-6 w-6 items-center justify-center rounded-full bg-cream/70 text-xs text-chocolate" aria-hidden>↗</span>
                      </div>
                      <h3 className="mt-4 font-serif text-xl leading-none sm:text-2xl">Gâteaux<br />sur mesure</h3>
                      <div className="relative mt-4 h-[115px] overflow-hidden rounded-xl sm:h-[145px]">
                        <Image src={example.image} alt={example.alt} fill className="object-cover" sizes="205px" />
                      </div>
                      <p className="mt-3 text-center text-[9px] leading-relaxed text-cream/60 sm:text-[10px]">Une création unique, imaginée pour vos plus beaux moments.</p>
                    </>
                  ) : (
                    <>
                      <Image src={example.image} alt="" fill className="object-cover opacity-45" sizes="205px" />
                      <span className="absolute inset-x-4 bottom-4 text-center text-xs font-medium text-cream">Voir ce gâteau</span>
                    </>
                  )}
                </button>
              );
            })}
            <div hidden className="absolute left-3 top-7 h-[260px] w-[175px] -rotate-12 overflow-hidden rounded-[1.5rem] bg-[#292522] shadow-xl shadow-chocolate/20 sm:left-7 sm:h-[300px] sm:w-[205px]">
              <Image src={EXAMPLES[1].image} alt={EXAMPLES[1].alt} fill className="object-cover opacity-45" sizes="205px" />
            </div>
            <div hidden className="absolute right-3 top-7 h-[260px] w-[175px] rotate-12 overflow-hidden rounded-[1.5rem] bg-[#292522] shadow-xl shadow-chocolate/20 sm:right-7 sm:h-[300px] sm:w-[205px]">
              <Image src={EXAMPLES[2].image} alt={EXAMPLES[2].alt} fill className="object-cover opacity-45" sizes="205px" />
            </div>
            <article hidden className="absolute left-1/2 top-0 z-10 h-[285px] w-[200px] -translate-x-1/2 overflow-hidden rounded-[1.5rem] bg-[#211e1b] p-4 text-cream shadow-2xl shadow-chocolate/30 sm:h-[330px] sm:w-[230px] sm:p-5">
              <div className="flex items-start justify-between">
                <p className="text-[10px] font-medium uppercase tracking-[0.16em] text-cream/65">Sunny Cakes</p>
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-cream/70 text-xs text-chocolate" aria-hidden>↗</span>
              </div>
              <h3 className="mt-4 font-serif text-xl leading-none sm:text-2xl">Gâteaux<br />sur mesure</h3>
              <div className="relative mt-4 h-[115px] overflow-hidden rounded-xl sm:h-[145px]">
                <Image src={EXAMPLES[0].image} alt={EXAMPLES[0].alt} fill className="object-cover" sizes="230px" />
              </div>
              <p className="mt-3 text-center text-[9px] leading-relaxed text-cream/60 sm:text-[10px]">Une création unique, imaginée pour vos plus beaux moments.</p>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}
