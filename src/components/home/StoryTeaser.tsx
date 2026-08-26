import Image from "next/image";
import Link from "next/link";

export function StoryTeaser() {
  return (
    <section className="bg-[#FFF0F2] py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <div className="grid overflow-hidden rounded-[24px] bg-[#FFF8FA] shadow-[0_10px_30px_rgba(0,0,0,0.04)] lg:grid-cols-2">
          <div className="relative aspect-[4/3] min-h-[300px] lg:min-h-[420px] lg:aspect-auto">
            <Image
              src="/cakes/owner.jpg"
              alt="La fundadora de Chocova Valencia presentando una creación personalizada"
              fill
              className="object-cover object-[58%_55%]"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>

          <div className="flex items-center px-7 py-10 sm:px-10 md:px-14 md:py-14 lg:px-16">
            <div className="max-w-[34rem]">
              <p className="mb-5 text-xs font-semibold uppercase tracking-[2px] text-[#A85567]">
                Nuestro saber hacer
              </p>
              <h2 className="font-serif text-3xl leading-tight text-[#332827] sm:text-4xl lg:text-[2.65rem]">
                El arte de la pastelería, hecho con pasión
              </h2>
              <p className="mt-5 max-w-lg text-base leading-7 text-[#4A3E3D]">
                En Valencia, Chocova combina técnicas artesanales e inspiración
                de todo el mundo. Cada dulce y cada tarta se prepara con mimo:
                ingredientes seleccionados, decoración minuciosa y una atención
                cercana.
              </p>
              <div className="mt-8 flex justify-center">
                <Link
                  href="/notre-histoire"
                  className="inline-flex rounded-full border-2 border-[#332827] px-6 py-3 text-sm font-semibold text-[#332827] transition-colors duration-300 hover:bg-[#332827] hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#332827]"
                >
                  Conocer nuestra historia
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
