"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { SITE } from "@/lib/data";

export function ContactForm() {
  const [error, setError] = useState("");

  const getMessage = (form: HTMLFormElement) => {
    const values = new FormData(form);
    return `Hola Chocova, tengo una consulta.\n\nNombre: ${values.get("name")}\nEmail: ${values.get("email")}\nWhatsApp / teléfono: ${values.get("phone") || "No indicado"}\n\nMensaje:\n${values.get("message")}`;
  };

  const validate = (form: HTMLFormElement) => {
    if (!form.reportValidity()) {
      setError("Revisa los campos obligatorios antes de continuar.");
      return false;
    }
    setError("");
    return true;
  };

  const sendWhatsApp = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!validate(event.currentTarget)) return;
    window.open(`https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(getMessage(event.currentTarget))}`, "_blank");
  };

  const sendEmail = () => {
    const form = document.querySelector<HTMLFormElement>("form[data-contact-form]");
    if (!form || !validate(form)) return;
    window.location.href = `mailto:${SITE.email}?subject=Consulta para Chocova Valencia&body=${encodeURIComponent(getMessage(form))}`;
  };

  return (
    <form data-contact-form className="bg-white rounded-2xl border border-border p-8 md:p-10" onSubmit={sendWhatsApp}>
      <h2 className="font-serif text-2xl text-chocolate mb-6">Enviar un mensaje</h2>
      <div className="space-y-4">
        <input type="text" name="name" placeholder="Nombre *" required className="w-full p-3 rounded-lg border border-border bg-cream" />
        <input type="email" name="email" placeholder="Correo electrónico *" required className="w-full p-3 rounded-lg border border-border bg-cream" />
        <input type="tel" name="phone" placeholder="WhatsApp / teléfono (opcional)" className="w-full p-3 rounded-lg border border-border bg-cream" />
        <textarea name="message" placeholder="Tu mensaje *" required rows={5} className="w-full p-3 rounded-lg border border-border bg-cream resize-none" />
        <Button type="submit" className="w-full">Enviar por WhatsApp</Button>
        <Button type="button" variant="secondary" onClick={sendEmail} className="w-full">Enviar por email</Button>
      </div>
      {error && <p role="alert" className="mt-4 text-sm font-medium text-red-700">{error}</p>}
      <p className="mt-4 text-xs text-muted">Para una tarta personalizada, utiliza el <a href="/gateaux-sur-mesure" className="text-caramel hover:underline">configurador</a>.</p>
    </form>
  );
}
