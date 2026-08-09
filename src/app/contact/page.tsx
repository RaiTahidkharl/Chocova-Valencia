import type { Metadata } from "next";
import { Button } from "@/components/ui/Button";
import { SITE } from "@/lib/data";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contactez Sunny Cakes à Valenciennes.",
};

export default function ContactPage() {
  const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(SITE.address)}`;

  return (
    <div className="py-12 md:py-16">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <div className="text-center mb-12">
          <h1 className="font-serif text-4xl text-chocolate">Contact</h1>
          <p className="mt-3 text-muted">
            Une question, une commande spéciale ? Écrivez-nous ou passez en
            boutique.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          <div className="bg-chocolate text-cream rounded-2xl p-8 md:p-10">
            <h2 className="font-serif text-2xl mb-6">Nous trouver</h2>
            <address className="not-italic space-y-3 text-cream/90 text-sm">
              <p>{SITE.address}</p>
              <p>{SITE.hours}</p>
              <p>
                <a href={`tel:${SITE.phone}`} className="hover:text-sunny">
                  {SITE.phone}
                </a>
              </p>
              <p>
                <a href={`mailto:${SITE.email}`} className="hover:text-sunny">
                  {SITE.email}
                </a>
              </p>
            </address>
            <div className="mt-8">
              <Button
                href={mapsUrl}
                className="bg-sunny text-chocolate hover:bg-sunny/90"
              >
                Itinéraire Google Maps
              </Button>
            </div>
            <div className="mt-8 rounded-xl overflow-hidden h-48">
              <iframe
                title="Carte Sunny Cakes"
                src="https://maps.google.com/maps?q=76T+Rue+du+Quesnoy+59300+Valenciennes&t=&z=15&ie=UTF8&iwloc=&output=embed"
                className="w-full h-full border-0"
                loading="lazy"
              />
            </div>
          </div>

          <form className="bg-white rounded-2xl border border-border p-8 md:p-10">
            <h2 className="font-serif text-2xl text-chocolate mb-6">
              Envoyer un message
            </h2>
            <div className="space-y-4">
              <input
                type="text"
                name="name"
                placeholder="Nom *"
                required
                className="w-full p-3 rounded-lg border border-border bg-cream"
              />
              <input
                type="email"
                name="email"
                placeholder="Email *"
                required
                className="w-full p-3 rounded-lg border border-border bg-cream"
              />
              <input
                type="tel"
                name="phone"
                placeholder="Téléphone (optionnel)"
                className="w-full p-3 rounded-lg border border-border bg-cream"
              />
              <textarea
                name="message"
                placeholder="Votre message *"
                required
                rows={5}
                className="w-full p-3 rounded-lg border border-border bg-cream resize-none"
              />
              <Button type="submit" className="w-full">
                Envoyer
              </Button>
            </div>
            <p className="mt-4 text-xs text-muted">
              Pour une commande de gâteau sur mesure, utilisez le{" "}
              <a
                href="/gateaux-sur-mesure"
                className="text-caramel hover:underline"
              >
                configurateur
              </a>{" "}
              pour un devis plus précis.
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}
