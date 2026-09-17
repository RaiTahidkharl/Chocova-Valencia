"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const CAKE_CARDS = [
  {
    image: "/portfolio/bautizos-comuniones/01.jpg",
    alt: "Tarta de comunión de Chocova Valencia",
  },
  {
    image: "/portfolio/bodas/01.jpg",
    alt: "Tarta de boda de Chocova Valencia",
  },
  {
    image: "/portfolio/mesas-dulces/01.jpg",
    alt: "Mesa dulce de Chocova Valencia",
  },
];

const FEATURES = [
  "Cumpleaños, boda, bautizo...",
  "Sabores y temas personalizados",
  "Sube una foto de referencia",
  "Recogida o entrega en Valencia",
];

const POSITIONS = [
  "left-[6%] top-[18%] z-10 scale-[0.85] -rotate-[12deg] opacity-80",
  "right-[6%] top-[14%] z-20 scale-90 rotate-[10deg] opacity-90",
  "left-1/2 top-0 z-30 -translate-x-1/2 opacity-100",
];

export function CustomTeaser() {
  const [stack, setStack] = useState([0, 1, 2]);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;

    const timer = window.setTimeout(() => {
      setStack(([backLeft, backRight, front]) => [front, backLeft, backRight]);
    }, 4500);

    return () => window.clearTimeout(timer);
  }, [isPaused, stack]);

  function bringToFront(cardIndex: number) {
    const position = stack.indexOf(cardIndex);
    if (position === 2) return;

    const [backLeft, backRight, front] = stack;
    setStack(position === 0 ? [front, backRight, backLeft] : [front, backLeft, backRight]);
  }

  return (
    <section className="bg-[#FFF0F2] py-16 md:py-24">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 md:px-8 lg:grid-cols-2 lg:gap-16">
        <div className="max-w-xl">
          <p className="mb-5 text-xs font-semibold uppercase tracking-[2px] text-[#A85567]">
            Personalizada
          </p>
          <h2 className="font-serif text-4xl leading-tight text-[#332827] sm:text-5xl">
            Tu tarta, tu historia
          </h2>
          <p className="mt-5 text-base leading-7 text-[#4A3E3D]">
            Elige la ocasión, los sabores, los colores y la decoración. Nuestro
            configurador te guía paso a paso: recibirás un presupuesto gratuito
            en menos de 24 horas.
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
            Crear mi tarta
          </Link>
        </div>

        <div
          className="relative isolate mx-auto h-[330px] w-full max-w-[500px] [perspective:1000px] sm:h-[390px]"
          aria-label="Ejemplos de tartas personalizadas"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onFocus={() => setIsPaused(true)}
          onBlur={() => setIsPaused(false)}
        >
          {CAKE_CARDS.map((cake, cardIndex) => {
            const position = stack.indexOf(cardIndex);
            const isFront = position === 2;

            return (
            <button
              key={cake.image}
              type="button"
              onClick={() => bringToFront(cardIndex)}
              className={`absolute left-1/2 top-0 h-[250px] w-[175px] overflow-hidden rounded-2xl border-4 border-white bg-white shadow-[0_15px_30px_rgba(0,0,0,0.12)] transform-gpu will-change-transform transition-[transform,opacity] duration-[720ms] ease-[cubic-bezier(0.22,1,0.36,1)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#A85567] sm:h-[310px] sm:w-[220px] ${POSITIONS[position]}`}
              aria-label={isFront ? cake.alt : `Mostrar ${cake.alt}`}
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
