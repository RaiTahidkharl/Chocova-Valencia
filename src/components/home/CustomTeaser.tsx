"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const CAKE_CARDS = [
  {
    image: "/cakes/pink-ribbon.jpg",
    alt: "Gâteau rose personnalisé avec rubans",
  },
  {
    image: "/cakes/aperol-spritz.jpg",
    alt: "Gâteau Aperol Spritz personnalisé",
  },
  {
    image: "/cakes/sunflower-celebration.jpg",
    alt: "Gâteau de célébration aux tournesols",
  },
];

const FEATURES = [
  "Anniversaire, mariage, baptême...",
  "Parfums & thèmes personnalisés",
  "Upload de photo de référence",
  "Retrait ou livraison à Valenciennes",
];

const POSITIONS = [
  "left-[6%] top-[18%] z-10 scale-[0.85] -rotate-[12deg] opacity-80",
  "right-[6%] top-[14%] z-20 scale-90 rotate-[10deg] opacity-90",
  "left-1/2 top-0 z-30 -translate-x-1/2 opacity-100",
];

export function CustomTeaser() {
  const [stack, setStack] = useState([0, 1, 2]);
  const [isPaused, setIsPaused] = useState(false);
  const [isShuffling, setIsShuffling] = useState(false);

  useEffect(() => {
    if (isPaused) return;

    const timer = window.setTimeout(() => {
      setIsShuffling(true);
      window.setTimeout(() => {
        setStack(([backLeft, backRight, front]) => [front, backLeft, backRight]);
        setIsShuffling(false);
      }, 600);
    }, 4000);

    return () => window.clearTimeout(timer);
  }, [isPaused, stack]);

  function bringToFront(cardIndex: number) {
    const position = stack.indexOf(cardIndex);
    if (position === 2 || isShuffling) return;

    const [backLeft, backRight, front] = stack;
    setStack(position === 0 ? [front, backRight, backLeft] : [front, backLeft, backRight]);
  }

  return (
    <section className="bg-[#FFF0F2] py-16 md:py-24">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 md:px-8 lg:grid-cols-2 lg:gap-16">
        <div className="max-w-xl">
          <p className="mb-5 text-xs font-semibold uppercase tracking-[2px] text-[#A85567]">
            Sur mesure
          </p>
          <h2 className="font-serif text-4xl leading-tight text-[#332827] sm:text-5xl">
            Votre gâteau, votre histoire
          </h2>
          <p className="mt-5 text-base leading-7 text-[#4A3E3D]">
            Choisissez l&apos;occasion, les saveurs, les couleurs et la décoration.
            Notre configurateur vous guide étape par étape — devis gratuit sous
            24 heures.
          </p>

          <ul className="mt-7 space-y-3 text-sm text-[#4A3E3D]">
            {FEATURES.map((feature) => (
              <li key={feature} className="flex items-center gap-3">
                <span
                  className="flex size-5 shrink-0 items-center justify-center rounded-full bg-[#A85567] text-xs font-bold text-white"
                  aria-hidden="true"
                >
                  ✓
                </span>
                {feature}
              </li>
            ))}
          </ul>

          <Link
            href="/gateaux-sur-mesure"
            className="mt-9 inline-flex rounded-full bg-[#332827] px-7 py-3.5 text-sm font-bold text-white shadow-sm transition-colors duration-300 hover:bg-[#593f3d] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#332827]"
          >
            Créer mon gâteau
          </Link>
        </div>

        <div
          className="relative mx-auto h-[330px] w-full max-w-[500px] [perspective:1000px] sm:h-[390px]"
          aria-label="Exemples de gâteaux personnalisés"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onFocus={() => setIsPaused(true)}
          onBlur={() => setIsPaused(false)}
        >
          {CAKE_CARDS.map((cake, cardIndex) => {
            const position = stack.indexOf(cardIndex);
            const isFront = position === 2;
            const isLiftedCard = isShuffling && isFront;

            return (
            <button
              key={cake.image}
              type="button"
              onClick={() => bringToFront(cardIndex)}
              className={`absolute h-[250px] w-[175px] overflow-hidden rounded-2xl border-4 border-white bg-white shadow-[0_15px_30px_rgba(0,0,0,0.12)] transition-all duration-[600ms] ease-[cubic-bezier(0.34,1.56,0.64,1)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#A85567] sm:h-[310px] sm:w-[220px] ${POSITIONS[position]} ${isLiftedCard ? "z-40 -translate-y-4 translate-x-[120px] rotate-[15deg]" : ""}`}
              aria-label={isFront ? cake.alt : `Afficher ${cake.alt}`}
            >
              <Image
                src={cake.image}
                alt={cake.alt}
                fill
                className="object-cover"
                sizes="(max-width: 640px) 175px, 220px"
              />
            </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
