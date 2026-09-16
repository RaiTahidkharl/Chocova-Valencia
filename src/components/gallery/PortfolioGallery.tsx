"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import type { PortfolioCollection } from "@/lib/portfolio";
import { Button } from "@/components/ui/Button";

export function PortfolioGallery({ collections, preview = false }: { collections: PortfolioCollection[]; preview?: boolean }) {
  const [active, setActive] = useState<string | null>(preview ? collections[0]?.id ?? null : "all");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const selected = collections.find((collection) => collection.id === active);
  const images = selected?.images ?? [];

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (lightboxIndex === null) return;
      if (event.key === "Escape") setLightboxIndex(null);
      if (event.key === "ArrowRight") setLightboxIndex((index) => index === null ? null : (index + 1) % images.length);
      if (event.key === "ArrowLeft") setLightboxIndex((index) => index === null ? null : (index - 1 + images.length) % images.length);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [images.length, lightboxIndex]);

  const displayCollections = preview ? collections.slice(0, 7) : collections;
  if (preview) {
    const activeIndex = Math.max(0, displayCollections.findIndex((collection) => collection.id === active));
    const featuredCollection = displayCollections[activeIndex] ?? displayCollections[0];
    const featuredImages = featuredCollection?.images ?? [];
    const imageAt = (offset: number) => featuredImages[(offset + featuredImages.length) % featuredImages.length];
    const changeCollection = (direction: number) => {
      const nextIndex = (activeIndex + direction + displayCollections.length) % displayCollections.length;
      setActive(displayCollections[nextIndex].id);
    };

    if (!featuredCollection || featuredImages.length === 0) return null;

    const sideCards = [imageAt(-2), imageAt(-1), imageAt(1), imageAt(2)];

    return (
      <section className="overflow-hidden rounded-[2rem] bg-white px-4 py-14 shadow-[0_18px_55px_rgba(71,56,62,0.08)] sm:px-8 md:rounded-[2.75rem] md:px-12 md:py-20">
        <header className="mx-auto max-w-xl text-center">
          <p className="text-[0.68rem] font-bold uppercase tracking-[0.18em] text-accent-pink">Galeria</p>
          <h2 className="mt-3 font-serif text-4xl leading-none text-primary-text sm:text-5xl">Nuestro diario dulce</h2>
          <p className="mx-auto mt-4 max-w-sm text-sm leading-relaxed text-primary-text/70 sm:text-base">Un recorrido por nuestras tartas, mesas dulces y momentos para celebrar.</p>
        </header>

        <div className="mt-9 flex max-w-full snap-x snap-mandatory gap-2 overflow-x-auto pb-3 sm:justify-center sm:overflow-visible">
          {displayCollections.map((collection) => {
            const isActive = collection.id === featuredCollection.id;
            return <button key={collection.id} type="button" onClick={() => setActive(collection.id)} className={`min-h-10 shrink-0 rounded-full border px-4 text-xs font-semibold transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-accent-pink focus:ring-offset-2 ${isActive ? "border-primary-text bg-primary-text text-white shadow-lg shadow-primary-text/15" : "border-primary-text/30 bg-white text-primary-text hover:border-primary-text hover:bg-[#FFF8FA]"}`}>{collection.label}</button>;
          })}
          <Link href="/galerie" className="inline-flex min-h-10 shrink-0 items-center rounded-full border border-primary-text px-4 text-xs font-semibold text-primary-text transition-colors hover:bg-primary-text hover:text-white">Ver mas <span className="ml-2 text-base leading-none">-&gt;</span></Link>
        </div>

        <div className="relative mx-auto mt-8 h-[310px] max-w-6xl sm:mt-12 sm:h-[390px] lg:h-[420px]" aria-live="polite">
          {sideCards.map((image, index) => {
            const position = ["-left-24 top-20", "left-[6%] top-6", "right-[6%] top-6", "-right-24 top-20"][index];
            const zIndex = ["z-0", "z-10", "z-10", "z-0"][index];
            return image && <div key={`${featuredCollection.id}-${image.src}`} className={`absolute hidden h-[255px] w-[235px] overflow-hidden rounded-2xl shadow-xl transition-transform duration-500 md:block ${position} ${zIndex}`}><Image src={image.src} alt="" fill className="object-cover" sizes="235px" /><div className="absolute inset-0 bg-primary-text/10" /></div>;
          })}
          <div className="absolute left-1/2 top-1/2 z-20 h-[300px] w-[min(76vw,330px)] -translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-[1.35rem] bg-muted-pink shadow-[0_20px_35px_rgba(71,56,62,0.22)] sm:h-[370px] sm:w-[360px]">
            <Image key={featuredImages[0].src} src={featuredImages[0].src} alt={featuredImages[0].alt} fill priority className="object-cover" sizes="(max-width: 640px) 76vw, 360px" />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-primary-text/75 to-transparent px-6 pb-5 pt-16 text-white"><p className="font-serif text-xl">{featuredCollection.label}</p><p className="mt-1 text-xs text-white/85">{featuredCollection.description}</p></div>
          </div>
        </div>

        <div className="mt-5 flex items-center justify-center gap-3 sm:mt-8">
          <button type="button" onClick={() => changeCollection(-1)} className="grid size-11 place-items-center rounded-full border border-primary-text/45 text-lg text-primary-text transition hover:bg-primary-text hover:text-white focus:outline-none focus:ring-2 focus:ring-accent-pink" aria-label="Coleccion anterior">&larr;</button>
          <button type="button" onClick={() => changeCollection(1)} className="grid size-11 place-items-center rounded-full border border-primary-text/45 text-lg text-primary-text transition hover:bg-primary-text hover:text-white focus:outline-none focus:ring-2 focus:ring-accent-pink" aria-label="Siguiente coleccion">&rarr;</button>
        </div>
      </section>
    );
  }

  if (active === null || active === "all") {
    return (
      <>
        {!preview && <div className="mb-10 flex flex-wrap justify-center gap-3"><Button variant="primary" onClick={() => setActive("all")}>Todas</Button>{collections.map((collection) => <Button key={collection.id} variant="secondary" onClick={() => setActive(collection.id)}>{collection.label}</Button>)}</div>}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {displayCollections.map((collection, index) => {
            const coverImage = collection.coverImage ?? collection.images[0];

            return coverImage && (
            <article key={collection.id} className={`image-sheen lift-card group relative overflow-hidden rounded-2xl ${index === 0 ? "sm:col-span-2" : ""}`}>
              <div className="relative aspect-[4/3] sm:h-full sm:aspect-auto"><Image src={coverImage.src} alt={coverImage.alt} fill priority={index < 2} className="object-cover transition-transform duration-700 group-hover:scale-105" sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw" /></div>
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-chocolate/85 to-transparent p-6 text-cream"><h2 className="font-serif text-2xl">{collection.label}</h2><p className="mt-1 text-sm text-cream/85">{collection.description}</p><button type="button" onClick={() => setActive(collection.id)} className="mt-4 text-sm font-semibold underline underline-offset-4">Ver colección</button></div>
            </article>
            );
          })}
        </div>
        {preview && <div className="mt-10 text-center"><Link href="/galerie" className="text-sm font-semibold text-primary-text underline underline-offset-4">Ver toda la galería →</Link></div>}
      </>
    );
  }

  return (
    <>
      <div className="mb-8 flex flex-wrap justify-center gap-3"><Button variant="secondary" onClick={() => setActive("all")}>Todas</Button>{collections.map((collection) => <Button key={collection.id} variant={collection.id === active ? "primary" : "secondary"} onClick={() => setActive(collection.id)}>{collection.label}</Button>)}</div>
      <h2 className="mb-6 font-serif text-3xl text-primary-text">{selected?.label}</h2>
      <div className="columns-1 gap-4 sm:columns-2 lg:columns-3">
        {images.map((image, index) => <button key={image.src} type="button" onClick={() => setLightboxIndex(index)} className="group relative mb-4 block w-full break-inside-avoid overflow-hidden rounded-xl text-left focus:outline-none focus:ring-2 focus:ring-primary-text"><Image src={image.src} alt={image.alt} width={1200} height={900} className="h-auto w-full transition-transform duration-500 group-hover:scale-[1.02]" sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw" /><span className="absolute inset-0 grid place-items-center bg-chocolate/0 text-sm font-semibold text-white opacity-0 transition group-hover:bg-chocolate/35 group-hover:opacity-100">Ver diseño</span></button>)}
      </div>
      {lightboxIndex !== null && images[lightboxIndex] && <div className="fixed inset-0 z-[70] grid place-items-center bg-black/85 p-4" role="dialog" aria-modal="true" aria-label="Vista ampliada de la galería" onClick={() => setLightboxIndex(null)}><div className="relative max-h-full max-w-5xl" onClick={(event) => event.stopPropagation()}><Image src={images[lightboxIndex].src} alt={images[lightboxIndex].alt} width={1600} height={1200} className="max-h-[75dvh] w-auto rounded-xl object-contain" sizes="100vw" /><button type="button" onClick={() => setLightboxIndex(null)} className="absolute right-3 top-3 rounded-full bg-white/90 px-3 py-1 text-primary-text" aria-label="Cerrar">Ã—</button><button type="button" onClick={() => setLightboxIndex((lightboxIndex - 1 + images.length) % images.length)} className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full bg-white/90 px-3 py-2 text-primary-text" aria-label="Imagen anterior">←</button><button type="button" onClick={() => setLightboxIndex((lightboxIndex + 1) % images.length)} className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full bg-white/90 px-3 py-2 text-primary-text" aria-label="Imagen siguiente">→</button><div className="mt-3 flex flex-wrap items-center justify-between gap-3 text-white"><span>{lightboxIndex + 1} / {images.length}</span><a href={`https://wa.me/34607232316?text=${encodeURIComponent(`Hola, he visto una tarta de vuestra colección de ${selected?.label} y me gustaría hacer algo parecido.`)}`} target="_blank" rel="noreferrer" className="rounded-lg bg-white px-4 py-2 text-sm font-semibold text-primary-text">Quiero una tarta parecida</a></div></div></div>}
    </>
  );
}
