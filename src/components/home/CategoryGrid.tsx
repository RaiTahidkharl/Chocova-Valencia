import Image from "next/image";
import Link from "next/link";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { CATEGORY_TILES } from "@/lib/data";

export function CategoryGrid() {
  return (
    <section className="bg-[#FFF8FA] py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <SectionHeading
          title="¿Qué te apetece hoy?"
          subtitle="Dulces del día, tartas listas para encargar o creaciones totalmente personalizadas."
        />
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {CATEGORY_TILES.map((cat) => (
            <Link
              key={cat.id}
              href={cat.href}
              className="image-sheen lift-card group relative aspect-[4/5] rounded-2xl overflow-hidden border border-white/60 shadow-sm"
            >
              <Image
                src={cat.image}
                alt={cat.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width: 768px) 50vw, 25vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-chocolate/80 via-chocolate/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-5 text-cream">
                <h3 className="font-serif text-xl">{cat.title}</h3>
                <p className="mt-1 text-sm text-cream/80">{cat.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
