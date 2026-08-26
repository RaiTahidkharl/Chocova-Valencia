import Link from "next/link";
import { NAV_LINKS, SITE } from "@/lib/data";

export function Footer() {
  return (
    <footer className="bg-[#3D3033] text-[#F5EBE6]">
      <div className="mx-auto max-w-7xl px-4 py-[60px] md:px-8">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <p className="mb-3 font-serif text-2xl">Chocova Valencia</p>
            <p className="max-w-sm text-sm leading-relaxed text-[#E2D7D5]">
              {SITE.tagline}. Pastelería artesanal en Valencia: tartas
              personalizadas, dulces selectos y creaciones para tus momentos especiales.
            </p>
            <div className="mt-6 flex gap-3">
              <a href={SITE.instagram} target="_blank" rel="noreferrer" aria-label="Instagram Chocova Valencia" className="flex size-9 items-center justify-center rounded-full border border-[#F5EBE6]/40 text-[#F5EBE6] transition-colors hover:bg-[#FFF0F2] hover:text-[#3D3033]">
                <svg viewBox="0 0 24 24" className="size-4" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
                  <rect x="3" y="3" width="18" height="18" rx="5" />
                  <circle cx="12" cy="12" r="4" />
                  <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
                </svg>
              </a>
              <a href="https://www.facebook.com/chocovavalencia/" target="_blank" rel="noreferrer" aria-label="Facebook Chocova Valencia" className="flex size-9 items-center justify-center rounded-full border border-[#F5EBE6]/40 text-[#F5EBE6] transition-colors hover:bg-[#FFF0F2] hover:text-[#3D3033]">
                <svg viewBox="0 0 24 24" className="size-4" fill="currentColor" aria-hidden="true">
                  <path d="M13.5 21v-8h2.7l.4-3h-3.1V8.1c0-.9.3-1.5 1.6-1.5h1.7V3.9c-.3 0-1.3-.1-2.4-.1-2.4 0-4 1.4-4 4.1V10H8v3h2.4v8h3.1Z" />
                </svg>
              </a>
              <a href={`https://wa.me/${SITE.whatsapp}`} target="_blank" rel="noreferrer" aria-label={`WhatsApp Chocova Valencia: ${SITE.whatsappDisplay}`} className="flex size-9 items-center justify-center rounded-full border border-[#F5EBE6]/40 text-[#F5EBE6] transition-colors hover:bg-[#FFF0F2] hover:text-[#3D3033]">
                <svg viewBox="0 0 24 24" className="size-4" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
                  <path d="M20 11.5a8 8 0 0 1-11.8 7.1L4 20l1.4-4A8 8 0 1 1 20 11.5Z" />
                  <path d="M9 8.5c.3-.4.6-.4.9-.1l.7 1c.2.3.2.5 0 .8l-.5.6c.5 1 1.3 1.7 2.3 2.2l.6-.5c.3-.2.5-.2.8 0l1 .7c.3.2.3.6-.1.9-.4.4-.9.6-1.4.5-2.5-.5-4.5-2.5-5-5-.1-.5.1-1 .5-1.4Z" />
                </svg>
              </a>
              <a href={`tel:${SITE.phone}`} aria-label={`Llamar a Chocova Valencia: ${SITE.phone}`} className="flex size-9 items-center justify-center rounded-full border border-[#F5EBE6]/40 text-[#F5EBE6] transition-colors hover:bg-[#FFF0F2] hover:text-[#3D3033]">
                <svg viewBox="0 0 24 24" className="size-4" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
                  <path d="M7 4.5 9.5 4l1.5 4-2 1.5a14 14 0 0 0 5.5 5.5l1.5-2 4 1.5-.5 2.5c-.2 1-1.1 1.7-2.1 1.6A14.5 14.5 0 0 1 5.4 6.6C5.3 5.6 6 4.7 7 4.5Z" />
                </svg>
              </a>
              <a href={`mailto:${SITE.email}`} aria-label={`Enviar email a ${SITE.email}`} className="flex size-9 items-center justify-center rounded-full border border-[#F5EBE6]/40 text-[#F5EBE6] transition-colors hover:bg-[#FFF0F2] hover:text-[#3D3033]">
                <svg viewBox="0 0 24 24" className="size-4" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
                  <rect x="3" y="5" width="18" height="14" rx="2" />
                  <path d="m4 7 8 6 8-6" />
                </svg>
              </a>
            </div>
          </div>

          <div>
            <p className="mb-4 text-sm font-medium uppercase tracking-wider text-[#E2D7D5]/70">Navegación</p>
            <ul className="space-y-2">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-[#F5EBE6]/85 transition-colors hover:text-white">
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/galerie" className="text-sm text-[#F5EBE6]/85 transition-colors hover:text-white">Galería</Link>
              </li>
            </ul>
          </div>

          <div>
            <p className="mb-4 text-sm font-medium uppercase tracking-wider text-[#E2D7D5]/70">Contacto</p>
            <ul className="space-y-2 text-sm text-[#F5EBE6]/85">
              <li>{SITE.address}</li>
              <li><a href={`tel:${SITE.phone}`} className="hover:text-white">{SITE.phone}</a></li>
              <li><a href={`mailto:${SITE.email}`} className="hover:text-white">{SITE.email}</a></li>
              <li className="pt-2">{SITE.hours}</li>
            </ul>
          </div>

          <div>
            <p className="mb-4 text-sm font-medium uppercase tracking-wider text-[#E2D7D5]/70">Boletín</p>
            <p className="text-sm leading-relaxed text-[#E2D7D5]">Recibe nuestras novedades e inspiraciones dulces.</p>
            <form action={`mailto:${SITE.email}?subject=Suscripción%20al%20boletín%20Chocova%20Valencia`} method="post" encType="text/plain" className="mt-4 flex overflow-hidden rounded-full border border-[#F5EBE6]/40 bg-white/5">
              <label className="sr-only" htmlFor="footer-newsletter-email">Tu correo electrónico</label>
              <input id="footer-newsletter-email" name="email" type="email" required placeholder="Tu correo" className="min-w-0 flex-1 bg-transparent px-4 py-2.5 text-sm text-[#F5EBE6] outline-none placeholder:text-[#E2D7D5]/70" />
              <button type="submit" className="m-1 rounded-full bg-[#FFF0F2] px-4 text-xs font-semibold text-[#3D3033] transition-colors hover:bg-white">Suscribirme</button>
            </form>
          </div>
        </div>

        <div className="mt-12 flex flex-col justify-between gap-4 border-t border-[#F5EBE6]/10 pt-8 text-xs text-[#E2D7D5]/75 md:flex-row">
          <p>© {new Date().getFullYear()} Chocova Valencia. Todos los derechos reservados.</p>
          <div className="flex gap-4">
            <Link href="/contact" className="hover:text-white">Alérgenos</Link>
            <Link href="/contact" className="hover:text-white">Aviso legal</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
