"use client";

import Link from "next/link";
import { useState } from "react";
import { NAV_LINKS, SITE } from "@/lib/data";
import { Button } from "@/components/ui/Button";
import { useCart } from "@/components/cart/CartProvider";

function BasketIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" aria-hidden className="h-5 w-5">
      <path d="M4 9h16l-1.4 10H5.4L4 9ZM9 9l3-5 3 5M9 13v3M15 13v3" />
    </svg>
  );
}

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [basketOpen, setBasketOpen] = useState(false);
  const { items, itemCount, removeFromCart } = useCart();
  const total = items.reduce((sum, item) => sum + item.product.price * item.quantity, 0);

  return (
    <>
      <header className="fixed left-0 right-0 top-0 z-50 border-b border-muted-pink bg-background-light/90 shadow-sm shadow-primary-text/10 backdrop-blur-md">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 md:h-20 md:px-8">
          <Link href="/" className="font-serif text-xl text-primary-text md:text-2xl">
            Chocova Valencia
          </Link>

          <nav className="hidden items-center gap-8 lg:flex" aria-label="Navigation principale">
            {NAV_LINKS.map((link) => (
              <Link key={link.href} href={link.href} className="text-sm font-medium text-primary-text/85 transition-colors hover:text-primary-text">
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <Button href="/gateaux-sur-mesure" className="hidden bg-primary-text text-white hover:bg-[#5B4A50] lg:inline-flex">
              Diseña tu tarta
            </Button>
            <button
              type="button"
              className="relative inline-flex h-11 w-11 items-center justify-center rounded-xl border border-primary-text/20 bg-white text-primary-text transition-colors hover:bg-muted-pink"
              onClick={() => setBasketOpen(true)}
              aria-label={`Basket, ${itemCount} item${itemCount === 1 ? "" : "s"}`}
            >
              <BasketIcon />
              {itemCount > 0 && (
                <span className="absolute -right-1 -top-1 flex h-5 min-w-5 items-center justify-center rounded-full bg-accent-pink px-1 text-[11px] font-bold text-primary-text">
                  {itemCount}
                </span>
              )}
            </button>
            <button
              type="button"
              className="flex flex-col gap-1.5 p-2 lg:hidden"
              onClick={() => setOpen(!open)}
              aria-label="Menu"
              aria-expanded={open}
            >
              <span className={`block h-0.5 w-6 bg-primary-text transition-transform ${open ? "translate-y-2 rotate-45" : ""}`} />
              <span className={`block h-0.5 w-6 bg-primary-text transition-opacity ${open ? "opacity-0" : ""}`} />
              <span className={`block h-0.5 w-6 bg-primary-text transition-transform ${open ? "-translate-y-2 -rotate-45" : ""}`} />
            </button>
          </div>
        </div>

        {open && (
          <div className="border-t border-muted-pink bg-background-light px-4 py-6 lg:hidden">
            <nav className="flex flex-col gap-4" aria-label="Navigation mobile">
              {NAV_LINKS.map((link) => (
                <Link key={link.href} href={link.href} onClick={() => setOpen(false)} className="py-2 text-lg font-medium text-primary-text">
                  {link.label}
                </Link>
              ))}
              <Button href="/gateaux-sur-mesure" className="mt-2 w-full bg-primary-text text-white hover:bg-[#5B4A50]">
                Diseña tu tarta
              </Button>
            </nav>
          </div>
        )}
      </header>

      {basketOpen && (
        <div className="fixed inset-0 z-[60] bg-black/30" onClick={() => setBasketOpen(false)}>
          <aside
            className="ml-auto flex h-full w-full max-w-md flex-col bg-background-light p-6 shadow-2xl"
            role="dialog"
            aria-modal="true"
            aria-labelledby="basket-title"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="flex items-center justify-between border-b border-muted-pink pb-5">
              <h2 id="basket-title" className="font-serif text-2xl text-primary-text">Votre panier</h2>
              <button type="button" onClick={() => setBasketOpen(false)} className="flex h-9 w-9 items-center justify-center rounded-full border border-muted-pink text-xl text-primary-text" aria-label="Fermer le panier">×</button>
            </div>

            {items.length === 0 ? (
              <div className="flex flex-1 flex-col items-center justify-center text-center text-primary-text/75">
                <BasketIcon />
                <p className="mt-4">Votre panier est vide.</p>
              </div>
            ) : (
              <div className="flex-1 divide-y divide-muted-pink overflow-y-auto">
                {items.map((item) => (
                  <div key={item.product.id} className="flex items-center justify-between gap-4 py-5 text-primary-text">
                    <div>
                      <p className="font-serif text-lg">{item.product.name}</p>
                      <p className="mt-1 text-sm text-primary-text/70">Qté {item.quantity} · {item.product.price * item.quantity}€</p>
                    </div>
                    <button type="button" onClick={() => removeFromCart(item.product.id)} className="text-sm font-semibold text-primary-text underline-offset-4 hover:underline">Retirer</button>
                  </div>
                ))}
              </div>
            )}

            <div className="border-t border-muted-pink pt-5">
              <div className="mb-4 flex items-center justify-between font-semibold text-primary-text">
                <span>Total indicatif</span><span>{total.toFixed(2)}€</span>
              </div>
              <a
                href={SITE.ubereats}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-12 w-full items-center justify-center rounded-xl bg-primary-text px-4 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#5B4A50]"
              >
                Checkout with Uber Eats
              </a>
            </div>
          </aside>
        </div>
      )}
    </>
  );
}
