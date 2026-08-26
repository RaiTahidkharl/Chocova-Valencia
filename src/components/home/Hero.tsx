import Image from "next/image";
import { Button } from "@/components/ui/Button";

export function Hero() {
  return (
    <section className="relative isolate overflow-hidden bg-background-light">
      <div className="relative min-h-[590px] md:min-h-[680px]">
        <Image
          src="/hero-strawberry-cake.jpg"
          alt="Tarta de fresa y chocolate de Chocova Valencia"
          fill
          priority
          sizes="100vw"
          className="object-cover object-[68%_center]"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background-light via-background-light/80 to-transparent" />

        <div className="relative z-10 mx-auto flex min-h-[590px] max-w-7xl items-center px-6 py-20 md:min-h-[680px] md:px-8">
          <div className="max-w-xl rounded-[2rem] border border-white/60 bg-background-light/85 p-7 shadow-[0_8px_30px_rgba(0,0,0,0.08)] backdrop-blur-sm sm:p-10">
            <p className="mb-5 text-xs font-semibold uppercase tracking-[0.22em] text-accent-pink">
              Chocova Valencia · Valencia
            </p>
            <h1 className="font-serif text-4xl leading-[1.05] tracking-tight text-primary-text sm:text-5xl lg:text-6xl">
              Tartas que convierten cada momento en un recuerdo inolvidable.
            </h1>
            <p className="mt-5 max-w-md text-base leading-relaxed text-primary-text/80 md:text-lg">
              Creaciones artesanales, frescas y cuidadosamente personalizadas para tus celebraciones.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button href="/gateaux-sur-mesure" className="bg-primary-text text-white shadow-lg shadow-primary-text/20 hover:bg-[#5B4A50]">
                Crear mi tarta
              </Button>
              <Button href="/boutique" variant="secondary">
                Descubrir la tienda
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
