import { SITE } from "@/lib/data";

const TRUST_ITEMS = [
  { icon: "star", label: `${SITE.rating}/5 · ${SITE.reviewCount} avis` },
  { icon: "pin", label: "Retrait sur place" },
  { icon: "truck", label: "Livraison locale" },
  { icon: "bag", label: "Uber Eats" },
] as const;

function TrustIcon({ name }: { name: (typeof TRUST_ITEMS)[number]["icon"] }) {
  const common = "h-4 w-4 shrink-0";

  if (name === "star") return <svg className={common} viewBox="0 0 24 24" fill="currentColor" aria-hidden><path d="m12 2 3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14l-5-4.87 6.91-1.01L12 2Z" /></svg>;
  if (name === "pin") return <svg className={common} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden><path d="M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 1 1 16 0Z" /><circle cx="12" cy="10" r="2.5" /></svg>;
  if (name === "truck") return <svg className={common} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden><path d="M3 6h11v11H3zM14 10h4l3 3v4h-7z" /><circle cx="7" cy="18" r="2" /><circle cx="18" cy="18" r="2" /></svg>;
  return <svg className={common} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden><path d="M6 8h12l-1 12H7L6 8ZM9 8a3 3 0 0 1 6 0" /></svg>;
}

export function TrustStrip() {
  return (
    <section className="border-y border-muted-pink bg-white py-4">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <div className="flex flex-wrap justify-center gap-x-8 gap-y-3 md:gap-x-12">
          {TRUST_ITEMS.map((item) => (
            <div key={item.label} className="flex items-center gap-2 text-sm font-medium text-primary-text">
              <span className="text-[#B06F87]"><TrustIcon name={item.icon} /></span>
              <span>{item.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
