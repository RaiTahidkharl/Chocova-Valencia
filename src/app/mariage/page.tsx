import type { Metadata } from "next";
import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { REVIEWS } from "@/lib/data";

export const metadata: Metadata = {
  title: "Mariage",
  description:
    "Pièces montées et gâteaux de mariage sur mesure à Valenciennes.",
};

const GALLERY = [
  "https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=800&q=80",
  "https://images.unsplash.com/photo-1522673607200-164d1b6ce486?w=800&q=80",
  "https://images.unsplash.com/photo-1532712938310-34cb3982ef74?w=800&q=80",
];

export default function MariagePage() {
  const weddingReview = REVIEWS.find((r) => r.tag === "Mariage");

  return (
    <div className="py-12 md:py-16">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <p className="text-caramel text-sm font-medium uppercase tracking-wider mb-3">
              Mariage
            </p>
            <h1 className="font-serif text-4xl md:text-5xl text-chocolate">
              Votre gâteau de mariage, une création unique
            </h1>
            <p className="mt-4 text-muted leading-relaxed">
              Consultation personnalisée, dégustation des parfums et création
              d&apos;une pièce montée à votre image. Nous accompagnons chaque
              couple de la première idée jusqu&apos;au jour J.
            </p>
            <ul className="mt-6 space-y-2 text-chocolate text-sm">
              <li>✓ Consultation gratuite</li>
              <li>✓ Dégustation des saveurs</li>
              <li>✓ Pièces montées 2 à 5 étages</li>
              <li>✓ Livraison et installation sur site</li>
            </ul>
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Button href="/contact">Réserver une consultation</Button>
              <Button href="/gateaux-sur-mesure" variant="secondary">
                Configurateur en ligne
              </Button>
            </div>
          </div>
          <div className="image-sheen lift-card relative aspect-[4/5] rounded-2xl overflow-hidden">
            <Image
              src={GALLERY[0]}
              alt="Gâteau de mariage Sunny Cakes"
              fill
              className="object-cover"
              sizes="50vw"
              priority
            />
          </div>
        </div>

        {weddingReview && (
          <blockquote className="bg-white rounded-2xl border border-border p-8 md:p-10 mb-16 max-w-3xl mx-auto text-center">
            <div className="flex justify-center gap-0.5 text-sunny mb-4">
              {Array.from({ length: 5 }).map((_, i) => (
                <span key={i}>★</span>
              ))}
            </div>
            <p className="font-serif text-xl text-chocolate leading-relaxed">
              &ldquo;{weddingReview.text}&rdquo;
            </p>
            <cite className="mt-4 block not-italic text-muted text-sm">
              — {weddingReview.author}
            </cite>
          </blockquote>
        )}

        <SectionHeading title="Galerie mariage" align="center" />
        <div className="grid md:grid-cols-3 gap-6">
          {GALLERY.map((src, i) => (
            <div
              key={src}
              className="image-sheen lift-card relative aspect-[4/5] rounded-xl overflow-hidden"
            >
              <Image
                src={src}
                alt={`Gâteau de mariage ${i + 1}`}
                fill
                className="object-cover"
                sizes="33vw"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
