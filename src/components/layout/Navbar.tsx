"use client";

import Link from "next/link";
import { useState } from "react";
import { NAV_LINKS, SITE } from "@/lib/data";
import { Button } from "@/components/ui/Button";

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-cream/95 backdrop-blur-md border-b border-border">
      <div className="mx-auto flex h-16 md:h-20 max-w-7xl items-center justify-between px-4 md:px-8">
        <Link href="/" className="font-serif text-xl md:text-2xl text-chocolate">
          Sunny Cakes
        </Link>

        <nav className="hidden lg:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm text-chocolate/80 hover:text-chocolate transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-4">
          <Link
            href="/#avis"
            className="flex items-center gap-1.5 text-sm text-chocolate"
          >
            <span className="text-sunny">★</span>
            <span className="font-medium">{SITE.rating}</span>
            <span className="text-muted">({SITE.reviewCount})</span>
          </Link>
          <Button href="/gateaux-sur-mesure">Commander</Button>
        </div>

        <button
          type="button"
          className="lg:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setOpen(!open)}
          aria-label="Menu"
          aria-expanded={open}
        >
          <span
            className={`block h-0.5 w-6 bg-chocolate transition-transform ${open ? "translate-y-2 rotate-45" : ""}`}
          />
          <span
            className={`block h-0.5 w-6 bg-chocolate transition-opacity ${open ? "opacity-0" : ""}`}
          />
          <span
            className={`block h-0.5 w-6 bg-chocolate transition-transform ${open ? "-translate-y-2 -rotate-45" : ""}`}
          />
        </button>
      </div>

      {open && (
        <div className="lg:hidden border-t border-border bg-cream px-4 py-6">
          <nav className="flex flex-col gap-4">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="text-lg text-chocolate py-2"
              >
                {link.label}
              </Link>
            ))}
            <div className="flex items-center gap-2 py-2 text-chocolate">
              <span className="text-sunny">★</span>
              {SITE.rating} ({SITE.reviewCount} avis)
            </div>
            <Button href="/gateaux-sur-mesure" className="w-full">
              Commander
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
}
