"use client";

import Image from "next/image";
import { useRef, useState } from "react";
import { Button } from "@/components/ui/Button";

const CELEBRATIONS = [
  { title: "Tartas de boda", text: "Una creación dulce y personalizada para celebrar vuestro enlace.", image: "/cakes/black-ribbon-tier.jpg" },
  { title: "Tartas de cumpleaños", text: "Una tarta pensada para la persona, el tema y el momento que celebráis.", image: "/cakes/birthday-crown.jpg" },
  { title: "Tartas de bautizo", text: "Tartas delicadas y personalizadas para una celebración familiar especial.", image: "/cakes/balloon-baptism.jpg" },
  { title: "Tartas de comunión", text: "Diseños cuidados para celebrar la comunión y reunirse en familia.", image: "/instagram/506395092_1243760020456100_8896445037206883256_n.jpg" },
  { title: "Tartas para empresas", text: "Creaciones dulces a medida para eventos de empresa y ocasiones especiales.", image: "/cakes/celebration-artist.jpg" },
] as const;

export function CelebrationExplorer() {
  const [selected, setSelected] = useState<(typeof CELEBRATIONS)[number]>(CELEBRATIONS[0]);
  const detailsRef = useRef<HTMLDivElement>(null);

  function selectCelebration(celebration: (typeof CELEBRATIONS)[number]) {
    setSelected(celebration);
    window.setTimeout(() => detailsRef.current?.scrollIntoView({ behavior: "smooth", block: "center" }), 0);
  }

  return <section className="py-12 md:py-16">
    <div className="mx-auto max-w-7xl px-4 md:px-8">
      <div className="mx-auto max-w-2xl text-center">
        <p className="text-sm font-semibold uppercase tracking-[.2em] text-accent-pink">Celebraciones</p>
        <h1 className="mt-3 font-serif text-4xl text-primary-text md:text-5xl">Momentos para recordar</h1>
        <p className="mt-4 text-primary-text/75">Elige una ocasión y descubre la creación personalizada que Chocova puede preparar para tu celebración.</p>
      </div>

      <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
        {CELEBRATIONS.map((celebration) => <button key={celebration.title} type="button" onClick={() => selectCelebration(celebration)} className={`group relative aspect-[4/5] overflow-hidden rounded-2xl text-left transition focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent-pink ${selected.title === celebration.title ? "ring-2 ring-accent-pink ring-offset-2" : "hover:-translate-y-1"}`}>
          <Image src={celebration.image} alt={celebration.title} fill className="object-cover transition-transform duration-300 group-hover:scale-105" sizes="(max-width: 640px) 50vw, 20vw"/>
          <span className="absolute inset-0 bg-gradient-to-t from-primary-text/80 via-primary-text/20 to-transparent"/>
          <span className="absolute inset-x-0 bottom-0 p-4 font-serif text-xl text-white">{celebration.title}</span>
        </button>)}
      </div>

      <div ref={detailsRef} className="mt-14 grid min-h-[520px] scroll-mt-28 overflow-hidden rounded-[2rem] bg-[#FFF0F2] lg:grid-cols-[1.15fr_1fr]">
        <div className="relative flex min-h-[380px] items-center justify-center bg-[#F8E5E8] p-5 md:p-8 lg:min-h-[520px]">
          <Image src={selected.image} alt={selected.title} fill className="object-contain" sizes="(max-width: 1024px) 100vw, 55vw"/>
        </div>
        <div className="flex items-center p-8 md:p-14 lg:p-16">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[.18em] text-accent-pink">Celebración elegida</p>
            <h2 className="mt-4 font-serif text-4xl text-primary-text md:text-5xl">{selected.title}</h2>
            <p className="mt-6 max-w-lg text-lg leading-8 text-primary-text/80">{selected.text}</p>
            <Button href="/gateaux-sur-mesure" className="mt-9 bg-primary-text text-white hover:bg-[#5B4A50]">Diseña tu tarta</Button>
          </div>
        </div>
      </div>
    </div>
  </section>;
}
