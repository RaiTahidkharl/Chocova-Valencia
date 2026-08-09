import { Button } from "@/components/ui/Button";
import { SITE } from "@/lib/data";

export function VisitSection() {
  const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(SITE.address)}`;

  return (
    <section className="py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <div className="bg-chocolate rounded-2xl overflow-hidden text-cream">
          <div className="grid lg:grid-cols-2">
            <div className="p-8 md:p-12 flex flex-col justify-center">
              <h2 className="font-serif text-3xl md:text-4xl">
                Venez nous rendre visite
              </h2>
              <p className="mt-4 text-cream/70 leading-relaxed">
                Retrait sur place à notre boutique de Valenciennes. Commandez
                aussi via Uber Eats pour une livraison à domicile.
              </p>
              <address className="mt-6 not-italic text-cream/90 text-sm leading-relaxed">
                {SITE.address}
                <br />
                {SITE.hours}
                <br />
                <a href={`tel:${SITE.phone}`} className="hover:text-sunny">
                  {SITE.phone}
                </a>
              </address>
              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <Button
                  href={mapsUrl}
                  className="bg-sunny text-chocolate hover:bg-sunny/90"
                >
                  Itinéraire
                </Button>
                <Button href={SITE.ubereats} variant="secondary" className="border-cream/30 text-cream hover:bg-cream/10">
                  Uber Eats
                </Button>
              </div>
            </div>
            <div className="min-h-[280px] lg:min-h-[360px]">
              <iframe
                title="Sunny Cakes sur Google Maps"
                src="https://maps.google.com/maps?q=76T+Rue+du+Quesnoy+59300+Valenciennes&t=&z=15&ie=UTF8&iwloc=&output=embed"
                className="w-full h-full min-h-[280px] border-0 grayscale-[30%]"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
