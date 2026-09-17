"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import type { PortfolioCollection } from "@/lib/portfolio";
import { Button } from "@/components/ui/Button";

type Props = { collections: PortfolioCollection[]; preview?: boolean; initialCollection?: string };
const hrefFor = (id: string) => `/galerie?collection=${encodeURIComponent(id)}`;

export function PortfolioGallery({ collections, preview = false, initialCollection }: Props) {
  const validInitial = initialCollection && collections.some((item) => item.id === initialCollection) ? initialCollection : undefined;
  const [active, setActive] = useState(validInitial ?? (preview ? collections[0]?.id ?? "" : "all"));
  const [lightbox, setLightbox] = useState<number | null>(null);
  const swipeStart = useRef<number | null>(null);
  const ignoreClickUntil = useRef(0);
  const transitionTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const selected = collections.find((item) => item.id === active);
  const images = selected?.images ?? [];

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (lightbox === null) return;
      if (event.key === "Escape") setLightbox(null);
      if (event.key === "ArrowRight") setLightbox((value) => value === null ? null : (value + 1) % images.length);
      if (event.key === "ArrowLeft") setLightbox((value) => value === null ? null : (value - 1 + images.length) % images.length);
    };
    addEventListener("keydown", onKey);
    return () => removeEventListener("keydown", onKey);
  }, [images.length, lightbox]);

  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => () => { if (transitionTimer.current) clearTimeout(transitionTimer.current); }, []);

  if (preview) {
    const index = Math.max(0, collections.findIndex((item) => item.id === active));
    const move = (direction: number) => {
      if (isTransitioning || collections.length < 2) return;
      setIsTransitioning(true);
      setActive(collections[(index + direction + collections.length) % collections.length].id);
      transitionTimer.current = setTimeout(() => setIsTransitioning(false), 720);
    };
    return <section className="overflow-hidden rounded-[2rem] bg-white px-4 py-14 shadow-[0_18px_55px_rgba(71,56,62,0.08)] sm:px-8 md:px-12 md:py-20" aria-roledescription="carrusel" aria-label="Colecciones de galería">
      <header className="mx-auto max-w-xl text-center"><p className="text-[0.68rem] font-bold uppercase tracking-[.18em] text-accent-pink">Galería</p><h2 className="mt-3 font-serif text-4xl leading-none text-primary-text sm:text-5xl">Nuestras creaciones</h2><p className="mx-auto mt-4 max-w-md text-sm leading-relaxed text-primary-text/70 sm:text-base">Un recorrido por nuestras tartas y dulces creados para momentos muy especiales.</p></header>
      <div className="relative mx-auto mt-10 h-[350px] max-w-6xl select-none sm:h-[440px]" onPointerDown={(event) => { swipeStart.current = event.clientX; }} onPointerUp={(event) => { if (swipeStart.current === null) return; const delta = event.clientX - swipeStart.current; if (Math.abs(delta) > 40) { ignoreClickUntil.current = Date.now() + 250; move(delta < 0 ? 1 : -1); } swipeStart.current = null; }}>
        {collections.map((item, itemIndex) => { let offset = itemIndex - index; if (offset > collections.length / 2) offset -= collections.length; if (offset < -collections.length / 2) offset += collections.length; const image = item.coverImage ?? item.images[0]; if (!image) return null; return <Link key={item.id} href={hrefFor(item.id)} aria-label={`Abrir colección: ${item.label}`} onClick={(event) => { if (Date.now() < ignoreClickUntil.current) event.preventDefault(); }} className={`portfolio-carousel-card absolute left-1/2 top-1/2 block overflow-hidden rounded-[1.4rem] bg-muted-pink shadow-xl outline-none focus:ring-2 focus:ring-accent-pink focus:ring-offset-4 ${Math.abs(offset) <= 2 ? "" : "pointer-events-none"}`} style={{ width: "min(72vw, 340px)", height: "min(78vw, 390px)", transform: `translate3d(-50%, -50%, 0) translate3d(${offset * 66}%, 0, 0) scale(${offset === 0 ? 1 : Math.abs(offset) === 1 ? .82 : .66})`, opacity: Math.abs(offset) > 2 ? 0 : offset === 0 ? 1 : Math.abs(offset) === 1 ? .75 : .35, zIndex: 10 - Math.abs(offset), filter: offset === 0 ? "none" : "saturate(.85)", willChange: "transform, opacity" }}><Image src={image.src} alt={image.alt} fill priority={offset === 0} className="portfolio-carousel-image object-cover hover:scale-[1.03]" sizes="(max-width: 640px) 72vw, 340px" /><span className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-primary-text/85 via-primary-text/30 to-transparent px-5 pb-5 pt-20 text-cream"><span className="block font-serif text-xl sm:text-2xl">{item.label}</span><span className="mt-1 hidden text-xs text-cream/90 sm:block">{item.description}</span><span className="mt-3 block text-sm font-semibold underline underline-offset-4">Ver colección →</span></span></Link>; })}
      </div>
      <div className="mt-6 flex items-center justify-center gap-3"><button type="button" onClick={() => move(-1)} disabled={isTransitioning} className="grid size-11 place-items-center rounded-full border border-primary-text/45 text-lg text-primary-text transition hover:bg-primary-text hover:text-white focus:outline-none focus:ring-2 focus:ring-accent-pink" aria-label="Colección anterior">&larr;</button><span className="min-w-20 text-center text-xs font-semibold uppercase tracking-[.14em] text-primary-text/60">{index + 1} / {collections.length}</span><button type="button" onClick={() => move(1)} disabled={isTransitioning} className="grid size-11 place-items-center rounded-full border border-primary-text/45 text-lg text-primary-text transition hover:bg-primary-text hover:text-white focus:outline-none focus:ring-2 focus:ring-accent-pink" aria-label="Siguiente colección">&rarr;</button></div>
    </section>;
  }

  const nav = <div className="mb-10 flex flex-wrap justify-center gap-3"><Button variant={active === "all" ? "primary" : "secondary"} onClick={() => setActive("all")}>Todas</Button>{collections.map((item) => <Button key={item.id} variant={active === item.id ? "primary" : "secondary"} onClick={() => setActive(item.id)}>{item.label}</Button>)}</div>;
  if (active === "all") return <>{nav}<div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">{collections.map((item, index) => { const image = item.coverImage ?? item.images[0]; return image && <Link key={item.id} href={hrefFor(item.id)} className="group relative aspect-[4/3] overflow-hidden rounded-2xl shadow-sm focus:outline-none focus:ring-2 focus:ring-accent-pink"><Image src={image.src} alt={image.alt} fill priority={index < 2} className="object-cover transition-transform duration-500 group-hover:scale-[1.03]" sizes="(max-width:640px) 100vw, (max-width:1024px) 50vw, 33vw" /><span className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-primary-text/85 to-transparent px-5 pb-5 pt-16 text-cream"><span className="block font-serif text-2xl">{item.label}</span><span className="mt-2 block text-sm font-semibold underline underline-offset-4">Ver colección →</span></span></Link>; })}</div></>;
  const changeImage = (direction: number) => setLightbox((value) => value === null ? null : (value + direction + images.length) % images.length);
  const message = `Hola Chocova, he visto una tarta de vuestra colección de ${selected?.label} y me gustaría hacer una tarta como esta. ¿Podríais darme información?`;
  return <>{nav}<header className="mb-7 text-center"><h2 className="font-serif text-3xl text-primary-text">{selected?.label}</h2><p className="mx-auto mt-2 max-w-xl text-primary-text/70">{selected?.description}</p></header><div className="columns-1 gap-4 sm:columns-2 lg:columns-3">{images.map((image, index) => <button key={image.src} type="button" onClick={() => setLightbox(index)} className="group relative mb-4 block w-full break-inside-avoid overflow-hidden rounded-xl text-left focus:outline-none focus:ring-2 focus:ring-accent-pink"><Image src={image.src} alt={image.alt} width={1200} height={900} className="h-auto w-full transition-transform duration-500 group-hover:scale-[1.02]" sizes="(max-width:640px) 100vw, (max-width:1024px) 50vw, 33vw" /><span className="absolute inset-0 grid place-items-center bg-chocolate/0 text-sm font-semibold text-white opacity-0 transition group-hover:bg-chocolate/35 group-hover:opacity-100">Ver diseño</span></button>)}</div>{lightbox !== null && images[lightbox] && <div className="fixed inset-0 z-[70] grid place-items-center bg-black/85 p-4" role="dialog" aria-modal="true" aria-label="Vista ampliada de la galería" onClick={() => setLightbox(null)}><div className="relative max-h-full max-w-5xl" onClick={(event) => event.stopPropagation()} onPointerDown={(event) => { swipeStart.current = event.clientX; }} onPointerUp={(event) => { if (swipeStart.current === null) return; const delta = event.clientX - swipeStart.current; if (Math.abs(delta) > 40) changeImage(delta < 0 ? 1 : -1); swipeStart.current = null; }}><Image src={images[lightbox].src} alt={images[lightbox].alt} width={1600} height={1200} priority className="max-h-[72dvh] w-auto rounded-xl object-contain" sizes="100vw" /><button type="button" onClick={() => setLightbox(null)} className="absolute right-3 top-3 grid size-10 place-items-center rounded-full bg-white/90 text-xl text-primary-text focus:outline-none focus:ring-2 focus:ring-accent-pink" aria-label="Cerrar">×</button><button type="button" onClick={() => changeImage(-1)} className="absolute left-3 top-1/2 grid size-10 -translate-y-1/2 place-items-center rounded-full bg-white/90 text-primary-text" aria-label="Imagen anterior">&larr;</button><button type="button" onClick={() => changeImage(1)} className="absolute right-3 top-1/2 grid size-10 -translate-y-1/2 place-items-center rounded-full bg-white/90 text-primary-text" aria-label="Imagen siguiente">&rarr;</button><div className="mt-3 flex flex-wrap items-center justify-between gap-3 text-white"><span className="text-sm">{lightbox + 1} / {images.length}</span><div className="text-right"><p className="text-sm text-white/85">¿Te gusta este diseño?</p><a href={`https://wa.me/34607232316?text=${encodeURIComponent(message)}`} target="_blank" rel="noreferrer" className="mt-1 inline-flex rounded-lg bg-white px-4 py-2 text-sm font-semibold text-primary-text">Quiero una tarta como esta</a></div></div></div></div>}</>;
}