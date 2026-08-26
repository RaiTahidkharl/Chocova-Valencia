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
  const [checkout, setCheckout] = useState(false);
  const { items, itemCount, updateQuantity, removeFromCart } = useCart();
  const hasKnownPrices = items.every((item) => item.product.price !== undefined);
  const total = items.reduce((sum, item) => sum + (item.product.price ?? 0) * item.quantity, 0);

  return (
    <>
      <header className="fixed left-0 right-0 top-0 z-50 border-b border-muted-pink bg-background-light/90 shadow-sm shadow-primary-text/10 backdrop-blur-md">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 md:h-20 md:px-8">
          <Link href="/" className="font-serif text-xl text-primary-text md:text-2xl">
            Chocova Valencia
          </Link>

            <nav className="hidden items-center gap-8 lg:flex" aria-label="Navegación principal">
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
              aria-label={`Cesta, ${itemCount} producto${itemCount === 1 ? "" : "s"}`}
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
            <nav className="flex flex-col gap-4" aria-label="Navegación móvil">
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
              <h2 id="basket-title" className="font-serif text-2xl text-primary-text">Tu cesta</h2>
              <button type="button" onClick={() => setBasketOpen(false)} className="flex h-9 w-9 items-center justify-center rounded-full border border-muted-pink text-xl text-primary-text" aria-label="Cerrar la cesta">×</button>
            </div>

            {items.length === 0 ? (
              <div className="flex flex-1 flex-col items-center justify-center text-center text-primary-text/75">
                <BasketIcon />
                <p className="mt-4">Tu cesta está vacía.</p>
              </div>
            ) : (
              <div className="flex-1 divide-y divide-muted-pink overflow-y-auto">
                {items.map((item) => (
                    <div key={item.product.id} className="flex items-center justify-between gap-4 py-5 text-primary-text">
                    <div>
                      <p className="font-serif text-lg">{item.product.name}</p>
                      <p className="mt-1 text-sm text-primary-text/70">Cantidad {item.quantity} · {item.product.price !== undefined ? `${item.product.price * item.quantity}€` : "Consultar"}</p>
                        {item.customization && <p className="mt-1 text-xs text-primary-text/70">Nota: {item.customization}</p>}
                    </div>
                    <div className="flex shrink-0 items-center gap-2">
                      <button type="button" onClick={() => updateQuantity(item.product.id, item.quantity - 1)} className="flex h-9 w-9 items-center justify-center rounded-lg border border-muted-pink text-lg" aria-label={`Reducir cantidad de ${item.product.name}`}>−</button>
                      <span className="min-w-5 text-center text-sm">{item.quantity}</span>
                      <button type="button" onClick={() => updateQuantity(item.product.id, item.quantity + 1)} className="flex h-9 w-9 items-center justify-center rounded-lg border border-muted-pink text-lg" aria-label={`Aumentar cantidad de ${item.product.name}`}>+</button>
                      <button type="button" onClick={() => removeFromCart(item.product.id)} className="ml-1 text-sm font-semibold text-primary-text underline-offset-4 hover:underline">Eliminar</button>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {!checkout ? <div className="border-t border-muted-pink pt-5">
              <div className="mb-4 flex items-center justify-between font-semibold text-primary-text">
                <span>Total orientativo</span><span>{hasKnownPrices ? `${total.toFixed(2)}€` : "Consultar"}</span>
              </div>
              <button
                type="button"
                onClick={() => setCheckout(true)}
                className="inline-flex min-h-12 w-full items-center justify-center rounded-xl bg-primary-text px-4 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#5B4A50]"
              >
                Continuar con mis datos
              </button>
            </div> : <form data-cart-checkout className="border-t border-muted-pink pt-5" onSubmit={(event) => {
              event.preventDefault();
              const form = new FormData(event.currentTarget);
              const summary = items.map((item) => `• ${item.quantity}× ${item.product.name}${item.customization ? ` (${item.customization})` : ""}`).join("%0A");
              const name = encodeURIComponent(String(form.get("name") || ""));
              const phone = encodeURIComponent(String(form.get("phone") || ""));
              const email = encodeURIComponent(String(form.get("email") || ""));
              const message = `Hola Chocova, quiero solicitar este pedido:\n${decodeURIComponent(summary)}\n\nNombre: ${decodeURIComponent(name)}\nWhatsApp / teléfono: ${decodeURIComponent(phone)}\nEmail: ${decodeURIComponent(email)}`;
              window.open(`https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(message)}`, "_blank");
            }}>
              <p className="mb-3 font-serif text-xl text-primary-text">Tus datos</p>
              <input name="name" required placeholder="Nombre y apellidos" className="mb-3 w-full rounded-lg border border-muted-pink bg-white px-3 py-2 text-sm" />
              <input name="phone" required placeholder="WhatsApp / teléfono" className="mb-4 w-full rounded-lg border border-muted-pink bg-white px-3 py-2 text-sm" />
              <input name="email" type="email" required placeholder="Correo electrónico" className="mb-4 w-full rounded-lg border border-muted-pink bg-white px-3 py-2 text-sm" />
              <button type="submit" className="inline-flex min-h-12 w-full items-center justify-center rounded-xl bg-primary-text px-4 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#5B4A50]">Enviar por WhatsApp</button>
              <button type="button" onClick={(event) => {
                const form = event.currentTarget.form;
                if (!form || !form.reportValidity()) return;
                const values = new FormData(form);
                const body = `Pedido:\n${items.map((item) => `${item.quantity} x ${item.product.name}`).join("\n")}\n\nNombre: ${values.get("name")}\nWhatsApp / teléfono: ${values.get("phone")}\nEmail: ${values.get("email")}`;
                window.location.href = `mailto:${SITE.email}?subject=Solicitud de pedido Chocova Valencia&body=${encodeURIComponent(body)}`;
              }} className="mt-3 inline-flex min-h-11 w-full items-center justify-center rounded-xl border border-primary-text px-4 py-3 text-sm font-semibold text-primary-text">Enviar por email</button>
              <button type="button" onClick={() => setCheckout(false)} className="mt-3 w-full text-sm text-primary-text underline">Volver a la cesta</button>
            </form>}
          </aside>
        </div>
      )}
    </>
  );
}
