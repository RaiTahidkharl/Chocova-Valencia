import Image from "next/image";
import { Button } from "@/components/ui/Button";

export function Hero() {
  return (
    <section className="relative isolate flex min-h-[560px] items-center overflow-hidden bg-chocolate md:min-h-[630px]">
      <Image
        src="/hero-strawberry-cake.jpg"
        alt="Gâteau fraise et chocolat Sunny Cakes"
        fill
        priority
        sizes="100vw"
        className="object-cover object-[66%_center]"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-chocolate/90 via-chocolate/62 to-chocolate/10" />
      <div className="absolute inset-0 bg-gradient-to-t from-chocolate/35 via-transparent to-chocolate/10" />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 py-20 md:px-8 md:py-24">
        <div className="max-w-xl text-cream">
          <p className="mb-5 text-xs font-semibold uppercase tracking-[0.22em] text-sunny">
            Sunny Cakes · Valenciennes
          </p>
          <h1 className="font-serif text-4xl leading-[1.06] tracking-tight sm:text-5xl lg:text-6xl">
            Des gâteaux qui racontent votre histoire.
          </h1>
          <p className="mt-5 max-w-md text-base leading-relaxed text-cream/85 md:text-lg">
            Pâtisseries artisanales et créations sur mesure, préparées avec soin pour vos plus beaux moments.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button href="/gateaux-sur-mesure" className="bg-pink text-chocolate shadow-lg shadow-chocolate/20 hover:bg-pink/90">
              Créer mon gâteau
            </Button>
            <Button href="/boutique" variant="secondary" className="border-cream/70 text-cream hover:bg-cream/10">
              Voir la boutique
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
