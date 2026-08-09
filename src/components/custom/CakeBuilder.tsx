"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";
import type { CakeBuilderData } from "@/lib/types";

const STEPS = [
  "Occasion",
  "Convives",
  "Taille",
  "Saveurs",
  "Style",
  "Date",
  "Contact",
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
          Demande envoyée !
        </h2>
        <p className="mt-3 text-muted">
          Merci {data.name}. Nous vous enverrons un devis personnalisé sous 24
          heures à {data.email}.
        </p>
        <Button href="/" className="mt-8">
          Retour à l&apos;accueil
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
              Quelle est l&apos;occasion ?
            </legend>
            <div className="grid sm:grid-cols-2 gap-3">
              {[
                "Anniversaire",
                "Mariage",
                "Baptême",
                "Entreprise",
                "Autre",
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
              Nombre de convives
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
              {data.guests} personnes
            </p>
          </fieldset>
        )}

        {step === 2 && (
          <fieldset>
            <legend className="font-serif text-2xl text-chocolate mb-6">
              Taille du gâteau
            </legend>
            <div className="grid sm:grid-cols-2 gap-3">
              {[
                "Individual",
                "15 cm (6-8 parts)",
                "20 cm (10-12 parts)",
                "25 cm (15-20 parts)",
                "Pièce montée (étages)",
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
              Saveurs & garniture
            </legend>
            <div>
              <label className="block text-sm font-medium mb-2">Parfum</label>
              <select
                value={data.flavor}
                onChange={(e) => update("flavor", e.target.value)}
                className="w-full p-3 rounded-lg border border-border bg-cream"
                required
              >
                <option value="">Choisir...</option>
                <option value="vanille">Vanille</option>
                <option value="chocolat">Chocolat</option>
                <option value="fruits-rouges">Fruits rouges</option>
                <option value="pistache">Pistache</option>
                <option value="citron">Citron</option>
                <option value="caramel">Caramel beurre salé</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Garniture</label>
              <select
                value={data.filling}
                onChange={(e) => update("filling", e.target.value)}
                className="w-full p-3 rounded-lg border border-border bg-cream"
              >
                <option value="">Choisir...</option>
                <option value="creme">Crème légère</option>
                <option value="mousse">Mousse</option>
                <option value="confiture">Confiture maison</option>
                <option value="ganache">Ganache chocolat</option>
              </select>
            </div>
          </fieldset>
        )}

        {step === 4 && (
          <fieldset className="space-y-4">
            <legend className="font-serif text-2xl text-chocolate mb-6 block">
              Style & décoration
            </legend>
            <input
              type="text"
              placeholder="Thème (ex: princesse, floral, minimaliste...)"
              value={data.theme}
              onChange={(e) => update("theme", e.target.value)}
              className="w-full p-3 rounded-lg border border-border bg-cream"
            />
            <input
              type="text"
              placeholder="Couleurs souhaitées"
              value={data.colors}
              onChange={(e) => update("colors", e.target.value)}
              className="w-full p-3 rounded-lg border border-border bg-cream"
            />
            <select
              value={data.decoration}
              onChange={(e) => update("decoration", e.target.value)}
              className="w-full p-3 rounded-lg border border-border bg-cream"
            >
              <option value="">Niveau de décoration</option>
              <option value="simple">Simple & élégant</option>
              <option value="medium">Décoré</option>
              <option value="elaborate">Très élaboré</option>
            </select>
            <input
              type="text"
              placeholder="Message sur le gâteau (optionnel)"
              value={data.message}
              onChange={(e) => update("message", e.target.value)}
              className="w-full p-3 rounded-lg border border-border bg-cream"
            />
            <textarea
              placeholder="Exigences particulières, allergies..."
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
              Date & livraison
            </legend>
            <div>
              <label className="block text-sm font-medium mb-2">
                Date souhaitée *
              </label>
              <input
                type="date"
                value={data.date}
                onChange={(e) => update("date", e.target.value)}
                required
                className="w-full p-3 rounded-lg border border-border bg-cream"
              />
              <p className="mt-1 text-xs text-muted">
                Prévoir minimum 5 jours ouvrés pour les gâteaux sur mesure.
              </p>
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Mode</label>
              <div className="flex gap-4">
                {[
                  { value: "pickup", label: "Retrait boutique" },
                  { value: "delivery", label: "Livraison" },
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
                Budget indicatif
              </label>
              <select
                value={data.budget}
                onChange={(e) => update("budget", e.target.value)}
                className="w-full p-3 rounded-lg border border-border bg-cream"
              >
                <option value="">Choisir...</option>
                <option value="50-80">50 – 80 €</option>
                <option value="80-120">80 – 120 €</option>
                <option value="120-200">120 – 200 €</option>
                <option value="200+">200 € et plus</option>
              </select>
            </div>
          </fieldset>
        )}

        {step === 6 && (
          <fieldset className="space-y-4">
            <legend className="font-serif text-2xl text-chocolate mb-6 block">
              Vos coordonnées
            </legend>
            <input
              type="text"
              placeholder="Nom *"
              value={data.name}
              onChange={(e) => update("name", e.target.value)}
              required
              className="w-full p-3 rounded-lg border border-border bg-cream"
            />
            <input
              type="email"
              placeholder="Email *"
              value={data.email}
              onChange={(e) => update("email", e.target.value)}
              required
              className="w-full p-3 rounded-lg border border-border bg-cream"
            />
            <input
              type="tel"
              placeholder="Téléphone"
              value={data.phone}
              onChange={(e) => update("phone", e.target.value)}
              className="w-full p-3 rounded-lg border border-border bg-cream"
            />
            <div className="mt-4 p-4 bg-cream rounded-lg text-sm text-muted">
              <p className="font-medium text-chocolate mb-2">Récapitulatif</p>
              <p>
                {data.occasion} · {data.guests} convives · {data.size || "—"}
              </p>
              <p>
                {data.flavor} / {data.filling || "—"} · {data.date || "—"}
              </p>
            </div>
          </fieldset>
        )}

        <div className="mt-8 flex justify-between gap-4">
          {step > 0 ? (
            <Button type="button" variant="secondary" onClick={back}>
              Retour
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
              Continuer
            </Button>
          ) : (
            <Button type="submit">Recevoir mon devis</Button>
          )}
        </div>
      </div>
    </form>
  );
}
