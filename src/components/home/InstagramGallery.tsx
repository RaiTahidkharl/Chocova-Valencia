import Image from "next/image";
import { INSTAGRAM_POSTS, SITE } from "@/lib/data";

function InstagramIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden className={className}>
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function InstagramGallery() {
  const posts = INSTAGRAM_POSTS.slice(0, 5);

  return (
    <section className="bg-[#FFF8FA] py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <header className="relative mb-10 text-center md:mb-12">
          <h2 className="font-serif text-3xl text-primary-text md:text-5xl">Suivez-nous sur Instagram</h2>
          <a
            href={SITE.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-primary-text underline decoration-primary-text/40 decoration-2 underline-offset-4 transition-colors hover:text-accent-pink lg:absolute lg:right-0 lg:top-3 lg:mt-0"
          >
            <InstagramIcon className="h-5 w-5" />
            @chocovavalencia
          </a>
          <p className="mx-auto mt-3 max-w-xl text-primary-text/75">
            Nos dernières créations, les coulisses et des inspirations gourmandes.
          </p>
        </header>

        <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-5">
          {posts.map((post) => (
            <a
              key={post.id}
              href={SITE.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative aspect-square overflow-hidden rounded-2xl bg-muted-pink shadow-sm shadow-primary-text/10"
              aria-label={`Voir ${post.alt} sur Instagram`}
            >
              <Image
                src={post.image}
                alt={post.alt}
                fill
                className="object-cover transition-transform duration-300 ease-out group-hover:scale-[1.03]"
                sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 20vw"
              />
              <span className="absolute inset-0 flex flex-col items-center justify-center gap-2 bg-gradient-to-t from-primary-text/65 via-primary-text/25 to-primary-text/10 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <InstagramIcon className="h-8 w-8 text-white" />
                <span className="text-sm font-semibold text-white underline underline-offset-4">Voir la publication</span>
              </span>
            </a>
          ))}
        </div>

        <div className="mt-8 text-center">
          <a
            href={SITE.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-[#332827] px-7 py-3 text-sm font-semibold text-white shadow-lg shadow-primary-text/15 transition-all duration-200 hover:scale-[1.02] hover:bg-[#4A3E3D] active:scale-[0.98]"
          >
            <InstagramIcon className="h-4 w-4" />
            Suivre @chocovavalencia sur Instagram
          </a>
        </div>
      </div>
    </section>
  );
}
