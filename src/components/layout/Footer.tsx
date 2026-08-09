import Link from "next/link";
import { NAV_LINKS, SITE } from "@/lib/data";

export function Footer() {
  return (
    <footer className="bg-chocolate text-cream">
      <div className="mx-auto max-w-7xl px-4 md:px-8 py-14">
        <div className="grid gap-10 md:grid-cols-4">
          <div className="md:col-span-2">
            <p className="font-serif text-2xl mb-3">Sunny Cakes</p>
            <p className="text-cream/70 text-sm leading-relaxed max-w-sm">
              {SITE.tagline}. Artisan pâtissier à Valenciennes — gâteaux sur
              mesure, pâtisseries fines et créations pour vos moments
              précieux.
            </p>
          </div>

          <div>
            <p className="font-medium mb-4 text-sm uppercase tracking-wider text-cream/50">
              Navigation
            </p>
            <ul className="space-y-2">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-cream/80 hover:text-cream transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/galerie"
                  className="text-sm text-cream/80 hover:text-cream transition-colors"
                >
                  Galerie
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <p className="font-medium mb-4 text-sm uppercase tracking-wider text-cream/50">
              Contact
            </p>
            <ul className="space-y-2 text-sm text-cream/80">
              <li>{SITE.address}</li>
              <li>
                <a href={`tel:${SITE.phone}`} className="hover:text-cream">
                  {SITE.phone}
                </a>
              </li>
              <li>
                <a href={`mailto:${SITE.email}`} className="hover:text-cream">
                  {SITE.email}
                </a>
              </li>
              <li className="pt-2">{SITE.hours}</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-cream/10 flex flex-col md:flex-row justify-between gap-4 text-xs text-cream/50">
          <p>© {new Date().getFullYear()} Sunny Cakes. Tous droits réservés.</p>
          <div className="flex gap-4">
            <Link href="/contact" className="hover:text-cream/80">
              Allergènes
            </Link>
            <Link href="/contact" className="hover:text-cream/80">
              Mentions légales
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
