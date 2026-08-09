import Image from "next/image";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { INSTAGRAM_POSTS, SITE } from "@/lib/data";

export function InstagramGallery() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <SectionHeading
          title="Sur Instagram"
          subtitle="Nos dernières créations, coulisses de l'atelier et inspirations gourmandes."
        />
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
          {INSTAGRAM_POSTS.map((post) => (
            <a
              key={post.id}
              href={SITE.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="relative aspect-square rounded-lg overflow-hidden group"
            >
              <Image
                src={post.image}
                alt={post.alt}
                fill
                className="object-cover transition-transform group-hover:scale-105"
                sizes="200px"
              />
            </a>
          ))}
        </div>
        <p className="mt-6 text-center">
          <a
            href={SITE.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="text-caramel hover:text-chocolate transition-colors text-sm font-medium"
          >
            Suivre @sunnycakes →
          </a>
        </p>
      </div>
    </section>
  );
}
