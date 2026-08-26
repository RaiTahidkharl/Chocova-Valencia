"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { SITE } from "@/lib/data";
import type { CakeBuilderData } from "@/lib/types";

const STEPS = [
  "Ocasión",
  "Personas",
  "Tamaño",
  "Sabores",
  "Estilo",
  "Fecha",
  "Contacto",
];

const INITIAL: CakeBuilderData = {
  occasion: "",
  guests: 1,
  size: "",
  flavor: "",
  filling: "",
  theme: "",
  colors: "",
  decoration: "",
  message: "",
  date: "",
  fulfillment: "pickup",
  budget: "",
  requirements: "",
  name: "",
  email: "",
  phone: "",
  product: "",
  inspiration: null,
};

export function CakeBuilder() {
  const [step, setStep] = useState(0);
  const [data, setData] = useState<CakeBuilderData>(() => ({
    ...INITIAL,
    product: typeof window !== "undefined"
      ? new URLSearchParams(window.location.search).get("producto") || "Tarta personalizada"
      : "Tarta personalizada",
  }));
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const update = (field: keyof CakeBuilderData, value: string | number | File | null) => {
    setError("");
    setData((prev) => ({ ...prev, [field]: value }));
  };

  const next = () => setStep((s) => Math.min(s + 1, STEPS.length - 1));
  const back = () => setStep((s) => Math.max(s - 1, 0));

  const getMessage = () => `Hola Chocova 😊 Me gustaría solicitar un presupuesto para ${data.product}.

Nombre: ${data.name}
Fecha del evento: ${data.date}
Tipo de producto: ${data.product}
Porciones: ${data.guests}
Sabor: ${data.flavor}
Tema: ${data.theme || "Consultar"}
Colores: ${data.colors || "Consultar"}
Decoración: ${data.decoration || "Consultar"}
Presupuesto aproximado: ${data.budget || "Consultar"}
Comentarios: ${data.requirements || "Ninguno"}

${data.inspiration ? "Tengo una imagen de inspiración adjunta." : "No adjunto imagen de inspiración."}`;

  const validate = () => {
    if (!data.product || !data.name.trim() || !data.phone.trim() || !data.email.trim() || !data.date || !data.flavor || data.guests < 1) {
      setError("Completa el tipo de producto, nombre, WhatsApp / teléfono, email, fecha, porciones y sabor para continuar.");
      setStep(6);
      return false;
    }
    return true;
  };

  const handleWhatsApp = () => {
    if (!validate()) return;
    window.open(`https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(getMessage())}`, "_blank");
    setSubmitted(true);
  };

  const handleEmail = () => {
    if (!validate()) return;
    window.location.href = `mailto:${SITE.email}?subject=Solicitud de presupuesto Chocova Valencia&body=${encodeURIComponent(getMessage())}`;
    setSubmitted(true);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    handleWhatsApp();
  };

  if (submitted) {
    return (
      <div className="bg-white rounded-2xl border border-border p-8 md:p-12 text-center max-w-2xl mx-auto">
        <div className="text-4xl mb-4">✓</div>
        <h2 className="font-serif text-2xl text-chocolate">
          ¡Solicitud enviada!
        </h2>
        <p className="mt-3 text-muted">
          Gracias, {data.name}. Te enviaremos un presupuesto personalizado en
          menos de 24 horas a {data.email}.
        </p>
        <Button href="/" className="mt-8">
          Volver al inicio
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="max-w-2xl mx-auto">
      <div className="mb-8">
        <div className="flex justify-between mb-2">
          {STEPS.map((label, i) => (
            <span
              key={label}
              className={`text-xs hidden sm:block ${i <= step ? "text-caramel font-medium" : "text-muted"}`}
            >
              {label}
            </span>
          ))}
        </div>
        <div className="h-1.5 bg-border rounded-full overflow-hidden">
          <div
            className="h-full bg-caramel transition-all duration-300"
            style={{ width: `${((step + 1) / STEPS.length) * 100}%` }}
          />
        </div>
      </div>

      <div className="bg-white rounded-2xl border border-border p-6 md:p-10">
        {step === 0 && (
          <fieldset>
            <legend className="font-serif text-2xl text-chocolate mb-6">
              ¿Cuál es la ocasión?
            </legend>
            <label className="mb-4 block text-sm font-medium">
              Tipo de producto
              <input type="text" value={data.product} onChange={(e) => update("product", e.target.value)} placeholder="Ej.: Tarta personalizada" className="mt-2 w-full p-3 rounded-lg border border-border bg-cream" required />
            </label>
            <div className="grid sm:grid-cols-2 gap-3">
              {[
                "Cumpleaños",
                "Boda",
                "Bautizo",
                "Empresa",
                "Otra",
              ].map((o) => (
                <label
                  key={o}
                  className={`flex items-center gap-3 p-4 rounded-lg border cursor-pointer transition-colors ${data.occasion === o ? "border-caramel bg-caramel/5" : "border-border hover:border-caramel/50"}`}
                >
                  <input
                    type="radio"
                    name="occasion"
                    value={o}
                    checked={data.occasion === o}
                    onChange={(e) => update("occasion", e.target.value)}
                    className="accent-caramel"
                  />
                  {o}
                </label>
              ))}
            </div>
          </fieldset>
        )}

        {step === 1 && (
          <fieldset>
            <legend className="font-serif text-2xl text-chocolate mb-6">
              Número de personas
            </legend>
            <input
              type="number"
              min={1}
              value={data.guests}
              onChange={(e) => update("guests", Number(e.target.value))}
              className="w-full p-3 rounded-lg border border-border bg-cream"
            />
            <p className="mt-4 text-center font-serif text-3xl text-chocolate">
              {data.guests} personas
            </p>
          </fieldset>
        )}

        {step === 2 && (
          <fieldset>
            <legend className="font-serif text-2xl text-chocolate mb-6">
              Formato de la tarta (opcional)
            </legend>
            <input type="text" value={data.size} onChange={(e) => update("size", e.target.value)} placeholder="Indica el tamaño o formato que necesitas" className="w-full p-3 rounded-lg border border-border bg-cream" />
          </fieldset>
        )}

        {step === 3 && (
          <fieldset className="space-y-6">
            <legend className="font-serif text-2xl text-chocolate mb-6 block">
              Sabores y relleno
            </legend>
            <div>
              <label className="block text-sm font-medium mb-2">Sabor</label>
              <input
                type="text"
                value={data.flavor}
                onChange={(e) => update("flavor", e.target.value)}
                placeholder="Indica el sabor que te gustaría"
                className="w-full p-3 rounded-lg border border-border bg-cream"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Relleno</label>
              <input
                type="text"
                value={data.filling}
                onChange={(e) => update("filling", e.target.value)}
                placeholder="Indica el relleno, si lo tienes claro (opcional)"
                className="w-full p-3 rounded-lg border border-border bg-cream"
              />
            </div>
          </fieldset>
        )}

        {step === 4 && (
          <fieldset className="space-y-4">
            <legend className="font-serif text-2xl text-chocolate mb-6 block">
              Estilo y decoración
            </legend>
            <input
              type="text"
              placeholder="Tema (ej.: princesa, floral, minimalista...)"
              value={data.theme}
              onChange={(e) => update("theme", e.target.value)}
              className="w-full p-3 rounded-lg border border-border bg-cream"
            />
            <input
              type="text"
              placeholder="Colores deseados"
              value={data.colors}
              onChange={(e) => update("colors", e.target.value)}
              className="w-full p-3 rounded-lg border border-border bg-cream"
            />
            <input
              type="text"
              placeholder="Describe la decoración que imaginas (opcional)"
              value={data.decoration}
              onChange={(e) => update("decoration", e.target.value)}
              className="w-full p-3 rounded-lg border border-border bg-cream"
            />
            <input
              type="text"
              placeholder="Mensaje en la tarta (opcional)"
              value={data.message}
              onChange={(e) => update("message", e.target.value)}
              className="w-full p-3 rounded-lg border border-border bg-cream"
            />
            <textarea
              placeholder="Necesidades especiales, alergias..."
              value={data.requirements}
              onChange={(e) => update("requirements", e.target.value)}
              rows={3}
              className="w-full p-3 rounded-lg border border-border bg-cream resize-none"
            />
            <label className="block text-sm font-medium">
              Imagen de inspiración (opcional)
              <input type="file" accept="image/*" onChange={(e) => update("inspiration", e.target.files?.[0] || null)} className="mt-2 w-full p-3 rounded-lg border border-border bg-cream text-sm" />
            </label>
          </fieldset>
        )}

        {step === 5 && (
          <fieldset className="space-y-4">
            <legend className="font-serif text-2xl text-chocolate mb-6 block">
              Fecha y entrega
            </legend>
            <div>
              <label className="block text-sm font-medium mb-2">
                Fecha deseada *
              </label>
              <input
                type="date"
                value={data.date}
                onChange={(e) => update("date", e.target.value)}
                required
                className="w-full p-3 rounded-lg border border-border bg-cream"
              />
              <p className="mt-1 text-xs text-muted">
                Cuenta con un mínimo de 5 días laborables para tartas personalizadas.
              </p>
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">
                Presupuesto orientativo
              </label>
              <input
                type="text"
                value={data.budget}
                onChange={(e) => update("budget", e.target.value)}
                placeholder="Si tienes un presupuesto aproximado, indícalo (opcional)"
                className="w-full p-3 rounded-lg border border-border bg-cream"
              />
            </div>
          </fieldset>
        )}

        {step === 6 && (
          <fieldset className="space-y-4">
            <legend className="font-serif text-2xl text-chocolate mb-6 block">
              Tus datos de contacto
            </legend>
            <input
              type="text"
              placeholder="Nombre *"
              value={data.name}
              onChange={(e) => update("name", e.target.value)}
              required
              className="w-full p-3 rounded-lg border border-border bg-cream"
            />
            <input
              type="email"
              placeholder="Correo electrónico *"
              value={data.email}
              onChange={(e) => update("email", e.target.value)}
              required
              className="w-full p-3 rounded-lg border border-border bg-cream"
            />
            <input
              type="tel"
              placeholder="Teléfono"
              value={data.phone}
              onChange={(e) => update("phone", e.target.value)}
              className="w-full p-3 rounded-lg border border-border bg-cream"
            />
            <div className="mt-4 p-4 bg-cream rounded-lg text-sm text-muted">
              <p className="font-medium text-chocolate mb-2">Resumen</p>
              <p>
                {data.occasion} · {data.guests} personas · {data.size || "-"}
              </p>
              <p>
                {data.flavor} / {data.filling || "-"} · {data.date || "-"}
              </p>
            </div>
          </fieldset>
        )}

        <div className="mt-8 flex justify-between gap-4">
          {step > 0 ? (
            <Button type="button" variant="secondary" onClick={back}>
              Atrás
            </Button>
          ) : (
            <span />
          )}
          {step < STEPS.length - 1 ? (
            <Button
              type="button"
              onClick={next}
              disabled={step === 0 && !data.occasion}
            >
              Continuar
            </Button>
          ) : (
            <div className="flex w-full flex-col gap-3 sm:flex-row sm:justify-end">
              <Button type="button" onClick={handleWhatsApp}>Enviar por WhatsApp</Button>
              <Button type="button" variant="secondary" onClick={handleEmail}>Enviar por email</Button>
            </div>
          )}
        </div>
        {error && <p role="alert" className="mt-4 text-sm font-medium text-red-700">{error}</p>}
      </div>
    </form>
  );
}
