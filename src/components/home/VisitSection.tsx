import { Button } from "@/components/ui/Button";
import { SITE } from "@/lib/data";

export function VisitSection() {
  const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(SITE.address)}`;

  return (
    <section className="py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <div className="overflow-hidden rounded-2xl bg-[#3D3033] text-[#F5EBE6]">
          <div className="grid lg:grid-cols-2">
            <div className="p-8 md:p-12 flex flex-col justify-center">
              <h2 className="font-serif text-3xl md:text-4xl">
                Venez nous rendre visite
              </h2>
              <p className="mt-4 leading-relaxed text-[#F5EBE6]/90">
                Retrait sur place à notre boutique de Valenciennes. Commandez
                aussi via Uber Eats pour une livraison à domicile.
              </p>
              <address className="mt-6 text-sm leading-relaxed not-italic text-[#F5EBE6]">
                {SITE.address}
                <br />
                {SITE.hours}
                <br />
                <a href={`tel:${SITE.phone}`} className="transition-colors hover:text-white">
                  {SITE.phone}
                </a>
              </address>
              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <Button
                  href={mapsUrl}
                  className="bg-[#EFA6B9] text-[#332827] shadow-sm hover:bg-[#F5B9C8]"
                >
                  Itinéraire
                </Button>
               <Button 
  href={SITE.ubereats} 
  className="border-2 border-[#FFF0F2] text-[#FFF0F2] bg-transparent hover:bg-[#FFF0F2] hover:text-[#332827] transition-colors duration-200"
>
  Uber Eats
</Button>
              </div>
            </div>
            <div className="min-h-[280px] lg:min-h-[360px]">
              <iframe
                title="Sunny Cakes sur Google Maps"
                src="https://maps.google.com/maps?q=76T+Rue+du+Quesnoy+59300+Valenciennes&t=&z=15&ie=UTF8&iwloc=&output=embed"
                className="h-full min-h-[280px] w-full border-0"
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
