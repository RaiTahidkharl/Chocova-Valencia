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
              {SITE.tagline}. Artisan pâtissier à Valenciennes — gâteaux sur
              mesure, pâtisseries fines et créations pour vos moments précieux.
            </p>
            <div className="mt-6 flex gap-3">
              <a href={SITE.instagram} target="_blank" rel="noreferrer" aria-label="Instagram Chocova Valencia" className="flex size-9 items-center justify-center rounded-full border border-[#F5EBE6]/40 text-[#F5EBE6] transition-colors hover:bg-[#FFF0F2] hover:text-[#3D3033]">
                <svg viewBox="0 0 24 24" className="size-4" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
                  <rect x="3" y="3" width="18" height="18" rx="5" />
                  <circle cx="12" cy="12" r="4" />
                  <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
                </svg>
              </a>
              <a href="https://web.facebook.com/sunnycakesvalenciennes/?locale=fr_FR&_rdc=1&_rdr#" target="_blank" rel="noreferrer" aria-label="Facebook Sunny Cakes" className="flex size-9 items-center justify-center rounded-full border border-[#F5EBE6]/40 text-[#F5EBE6] transition-colors hover:bg-[#FFF0F2] hover:text-[#3D3033]">
                <svg viewBox="0 0 24 24" className="size-4" fill="currentColor" aria-hidden="true">
                  <path d="M13.5 21v-8h2.7l.4-3h-3.1V8.1c0-.9.3-1.5 1.6-1.5h1.7V3.9c-.3 0-1.3-.1-2.4-.1-2.4 0-4 1.4-4 4.1V10H8v3h2.4v8h3.1Z" />
                </svg>
              </a>
            </div>
          </div>

          <div>
            <p className="mb-4 text-sm font-medium uppercase tracking-wider text-[#E2D7D5]/70">Navigation</p>
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
            <p className="mb-4 text-sm font-medium uppercase tracking-wider text-[#E2D7D5]/70">Contact</p>
            <ul className="space-y-2 text-sm text-[#F5EBE6]/85">
              <li>{SITE.address}</li>
              <li><a href={`tel:${SITE.phone}`} className="hover:text-white">{SITE.phone}</a></li>
              <li><a href={`mailto:${SITE.email}`} className="hover:text-white">{SITE.email}</a></li>
              <li className="pt-2">{SITE.hours}</li>
            </ul>
          </div>

          <div>
            <p className="mb-4 text-sm font-medium uppercase tracking-wider text-[#E2D7D5]/70">Lettre d&apos;information</p>
            <p className="text-sm leading-relaxed text-[#E2D7D5]">Recevez nos nouveautés et inspirations gourmandes.</p>
            <form action={`mailto:${SITE.email}?subject=Inscription%20newsletter%20Sunny%20Cakes`} method="post" encType="text/plain" className="mt-4 flex overflow-hidden rounded-full border border-[#F5EBE6]/40 bg-white/5">
              <label className="sr-only" htmlFor="footer-newsletter-email">Votre adresse e-mail</label>
              <input id="footer-newsletter-email" name="email" type="email" required placeholder="Votre e-mail" className="min-w-0 flex-1 bg-transparent px-4 py-2.5 text-sm text-[#F5EBE6] outline-none placeholder:text-[#E2D7D5]/70" />
              <button type="submit" className="m-1 rounded-full bg-[#FFF0F2] px-4 text-xs font-semibold text-[#3D3033] transition-colors hover:bg-white">S&apos;inscrire</button>
            </form>
          </div>
        </div>

        <div className="mt-12 flex flex-col justify-between gap-4 border-t border-[#F5EBE6]/10 pt-8 text-xs text-[#E2D7D5]/75 md:flex-row">
          <p>© {new Date().getFullYear()} Chocova Valencia. Todos los derechos reservados.</p>
          <div className="flex gap-4">
            <Link href="/contact" className="hover:text-white">Allergènes</Link>
            <Link href="/contact" className="hover:text-white">Mentions légales</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
