"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";
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
  guests: 12,
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
};

export function CakeBuilder() {
  const [step, setStep] = useState(0);
  const [data, setData] = useState<CakeBuilderData>(INITIAL);
  const [submitted, setSubmitted] = useState(false);

  const update = (field: keyof CakeBuilderData, value: string | number) => {
    setData((prev) => ({ ...prev, [field]: value }));
  };

  const next = () => setStep((s) => Math.min(s + 1, STEPS.length - 1));
  const back = () => setStep((s) => Math.max(s - 1, 0));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
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
              type="range"
              min={6}
              max={80}
              value={data.guests}
              onChange={(e) => update("guests", Number(e.target.value))}
              className="w-full accent-caramel"
            />
            <p className="mt-4 text-center font-serif text-3xl text-chocolate">
              {data.guests} personas
            </p>
          </fieldset>
        )}

        {step === 2 && (
          <fieldset>
            <legend className="font-serif text-2xl text-chocolate mb-6">
              Tamaño de la tarta
            </legend>
            <div className="grid sm:grid-cols-2 gap-3">
              {[
                "Individual",
                "15 cm (6-8 porciones)",
                "20 cm (10-12 porciones)",
                "25 cm (15-20 porciones)",
                "Tarta de varios pisos",
              ].map((s) => (
                <label
                  key={s}
                  className={`flex items-center gap-3 p-4 rounded-lg border cursor-pointer ${data.size === s ? "border-caramel bg-caramel/5" : "border-border"}`}
                >
                  <input
                    type="radio"
                    name="size"
                    value={s}
                    checked={data.size === s}
                    onChange={(e) => update("size", e.target.value)}
                    className="accent-caramel"
                  />
                  {s}
                </label>
              ))}
            </div>
          </fieldset>
        )}

        {step === 3 && (
          <fieldset className="space-y-6">
            <legend className="font-serif text-2xl text-chocolate mb-6 block">
              Sabores y relleno
            </legend>
            <div>
              <label className="block text-sm font-medium mb-2">Sabor</label>
              <select
                value={data.flavor}
                onChange={(e) => update("flavor", e.target.value)}
                className="w-full p-3 rounded-lg border border-border bg-cream"
                required
              >
                <option value="">Elegir...</option>
                <option value="vanille">Vainilla</option>
                <option value="chocolat">Chocolate</option>
                <option value="fruits-rouges">Frutos rojos</option>
                <option value="pistache">Pistache</option>
                <option value="citron">Citron</option>
                <option value="caramel">Caramelo salado</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Relleno</label>
              <select
                value={data.filling}
                onChange={(e) => update("filling", e.target.value)}
                className="w-full p-3 rounded-lg border border-border bg-cream"
              >
                <option value="">Elegir...</option>
                <option value="creme">Crema ligera</option>
                <option value="mousse">Mousse</option>
                <option value="confiture">Mermelada casera</option>
                <option value="ganache">Ganache de chocolate</option>
              </select>
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
            <select
              value={data.decoration}
              onChange={(e) => update("decoration", e.target.value)}
              className="w-full p-3 rounded-lg border border-border bg-cream"
            >
              <option value="">Nivel de decoración</option>
              <option value="simple">Sencillo y elegante</option>
              <option value="medium">Decorado</option>
              <option value="elaborate">Muy elaborado</option>
            </select>
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
              <label className="block text-sm font-medium mb-2">Modalidad</label>
              <div className="flex gap-4">
                {[
                  { value: "pickup", label: "Recogida en tienda" },
                  { value: "delivery", label: "Entrega" },
                ].map((opt) => (
                  <label
                    key={opt.value}
                    className={`flex-1 p-4 rounded-lg border text-center cursor-pointer ${data.fulfillment === opt.value ? "border-caramel bg-caramel/5" : "border-border"}`}
                  >
                    <input
                      type="radio"
                      name="fulfillment"
                      value={opt.value}
                      checked={data.fulfillment === opt.value}
                      onChange={(e) => update("fulfillment", e.target.value)}
                      className="sr-only"
                    />
                    {opt.label}
                  </label>
                ))}
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">
                Presupuesto orientativo
              </label>
              <select
                value={data.budget}
                onChange={(e) => update("budget", e.target.value)}
                className="w-full p-3 rounded-lg border border-border bg-cream"
              >
                <option value="">Elegir...</option>
                <option value="50-80">50 – 80 €</option>
                <option value="80-120">80 – 120 €</option>
                <option value="120-200">120 – 200 €</option>
                <option value="200+">200 € o más</option>
              </select>
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
            <Button type="submit">Recibir mi presupuesto</Button>
          )}
        </div>
      </div>
    </form>
  );
}
