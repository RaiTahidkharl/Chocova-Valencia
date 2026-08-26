import type { Metadata } from "next";
import { Button } from "@/components/ui/Button";
import { SITE } from "@/lib/data";
import { ContactForm } from "@/components/contact/ContactForm";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contacta con Chocova Valencia en Valencia.",
};

export default function ContactPage() {
  const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(SITE.address)}`;

  return (
    <div className="py-12 md:py-16">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <div className="text-center mb-12">
          <h1 className="font-serif text-4xl text-chocolate">Contact</h1>
          <p className="mt-3 text-muted">
            ¿Tienes una pregunta o un encargo especial? Escríbenos o visítanos
            en la tienda.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          <div className="bg-chocolate text-[#F5EBE6] rounded-2xl p-8 md:p-10">
            <h2 className="font-serif text-2xl mb-6">Dónde estamos</h2>
            <address className="not-italic space-y-3 text-sm text-[#F5EBE6]">
              <p>{SITE.address}</p>
              <p>{SITE.hours}</p>
              <p>WhatsApp: <a href={`https://wa.me/${SITE.whatsapp}`} target="_blank" rel="noreferrer" className="transition-colors hover:text-white">{SITE.whatsappDisplay}</a></p>
              <p>
                <a href={`tel:${SITE.phone}`} className="transition-colors hover:text-white">
                  {SITE.phone}
                </a>
              </p>
              <p>
                <a href={`mailto:${SITE.email}`} className="transition-colors hover:text-white">
                  {SITE.email}
                </a>
              </p>
            </address>
            <div className="mt-8">
              <Button
                href={mapsUrl}
                className="bg-[#FFF0F2] text-[#332827] hover:bg-white"
              >
                Cómo llegar con Google Maps
              </Button>
            </div>
            <div className="mt-8 rounded-xl overflow-hidden h-48">
              <iframe
                title="Mapa de Chocova Valencia"
                src="https://maps.google.com/maps?q=Carrer+de+Matias+Perell%C3%B3+55+46005+Valencia&t=&z=15&ie=UTF8&iwloc=&output=embed"
                className="w-full h-full border-0"
                loading="lazy"
              />
            </div>
          </div>

          <ContactForm />
        </div>
      </div>
    </div>
  );
}
