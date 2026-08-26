import type { Metadata } from "next";
import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { SITE } from "@/lib/data";

export const metadata: Metadata = {
  title: "Nuestra historia",
  description:
    "Descubre Chocova Valencia, pastelería artesanal en Valencia.",
};

export default function StoryPage() {
  return (
    <div className="py-12 md:py-16">
      <div className="mx-auto max-w-3xl px-4 md:px-8">
        <p className="text-caramel text-sm font-medium uppercase tracking-wider mb-3 text-center">
          Nuestra historia
        </p>
        <h1 className="font-serif text-4xl md:text-5xl text-chocolate text-center">
          El arte de la pastelería, hecho con corazón
        </h1>

        <div className="relative aspect-video rounded-2xl overflow-hidden mt-10">
          <Image
            src="/cakes/owner.jpg"
            alt="Obrador de Chocova Valencia"
            fill
            className="object-cover"
            sizes="800px"
          />
        </div>

        <div className="mt-10 prose prose-neutral max-w-none text-muted leading-relaxed space-y-4">
          <p>
            Chocova Valencia nació de una pasión por la pastelería y los
            sabores del mundo. En el corazón de Valencia, nuestra tienda recibe
            cada día a quienes buscan dulces auténticos, desde el primer dulce
            de la mañana hasta la tarta nupcial más especial.
          </p>
          <p>
            Combinamos técnicas artesanales e inspiración internacional: khachapuri
            georgiano, postres refinados y tartas de cumpleaños espectaculares.
            Cada creación se prepara con ingredientes cuidadosamente seleccionados
            y una atención especial a la decoración.
          </p>
          <p>
            Avec {SITE.reviewCount} avis et une note de {SITE.rating}/5 sur
            Google, nos enorgullece la atención cercana que destacan nuestros
            clientes, porque una buena tarta empieza con un buen encuentro.
          </p>
        </div>

        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
          <Button href="/boutique">Descubrir la tienda</Button>
          <Button href="/contact" variant="secondary">
            Contactar
          </Button>
        </div>
      </div>
    </div>
  );
}
