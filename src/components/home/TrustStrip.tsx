import { SITE } from "@/lib/data";

const TRUST_ITEMS = [
  { icon: "★", label: `${SITE.rating}/5 · ${SITE.reviewCount} avis` },
  { icon: "📍", label: "Retrait sur place" },
  { icon: "🚗", label: "Livraison locale" },
  { icon: "🛵", label: "Uber Eats" },
];

export function TrustStrip() {
  return (
    <section className="bg-white border-y border-border py-4">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <div className="flex flex-wrap justify-center gap-6 md:gap-12">
          {TRUST_ITEMS.map((item) => (
            <div
              key={item.label}
              className="flex items-center gap-2 text-sm text-chocolate"
            >
              <span aria-hidden>{item.icon}</span>
              <span>{item.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
