"use client";

import Link from "next/link";
import { FormEvent, useState } from "react";
import { site } from "@/lib/site";

export function ContactForm() {
  const [sent, setSent] = useState(false);

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const name = String(data.get("name") || "").trim();
    const company = String(data.get("company") || "").trim();
    const email = String(data.get("email") || "").trim();
    const subject = String(data.get("subject") || "Anfrage über secato.de").trim();
    const message = String(data.get("message") || "").trim();
    const consent = data.get("consent");

    if (!name || !email || !consent) return;

    const body = [
      `Name: ${name}`,
      company ? `Unternehmen: ${company}` : null,
      `E-Mail: ${email}`,
      "",
      message,
    ]
      .filter(Boolean)
      .join("\n");

    window.location.href = `mailto:${site.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setSent(true);
  }

  const field =
    "mt-1.5 w-full border border-line bg-white px-3 py-2.5 text-[0.95rem] outline-none transition-colors focus:border-ink";

  return (
    <form onSubmit={onSubmit} className="grid gap-4">
      <label className="block text-sm font-medium">
        Ihr Name*
        <input name="name" required autoComplete="name" className={field} />
      </label>
      <label className="block text-sm font-medium">
        Unternehmen
        <input name="company" autoComplete="organization" className={field} />
      </label>
      <label className="block text-sm font-medium">
        Ihre E-Mail-Adresse*
        <input name="email" type="email" required autoComplete="email" className={field} />
      </label>
      <label className="block text-sm font-medium">
        Betreff
        <input name="subject" className={field} />
      </label>
      <label className="block text-sm font-medium">
        Ihre Nachricht
        <textarea name="message" rows={6} className={field} />
      </label>
      <label className="flex items-start gap-3 text-sm leading-relaxed text-muted">
        <input name="consent" type="checkbox" required className="mt-1 accent-red" />
        <span>
          Ich habe die{" "}
          <Link href="/datenschutz" className="text-ink underline underline-offset-2">
            Datenschutzerklärung
          </Link>{" "}
          zur Kenntnis genommen und bin damit einverstanden, dass die von mir angegebenen
          Daten elektronisch erhoben und gespeichert werden. Meine Daten werden dabei nur
          streng zweckgebunden zur Bearbeitung und Beantwortung meiner Anfrage verwendet.
          Mit dem Absenden des Kontaktformulars erkläre ich mich mit der Verarbeitung
          einverstanden. Die Datenverarbeitung erfolgt ausschließlich zu dem Zweck der
          Abwicklung und Beantwortung von Anfragen über das Kontaktformular. Dies
          geschieht auf Basis der freiwillig erteilten Einwilligung gem. Art. 6 Abs. 1
          Satz 1 Buchst. a) DSGVO. Die für die Benutzung des Kontaktformulars erhobenen
          personenbezogenen Daten werden automatisch gelöscht, sobald die Anfrage
          erledigt ist und keine Gründe für eine weitere Aufbewahrung gegeben sind
          (z. B. anschließende Beauftragung unseres Betriebes).*
        </span>
      </label>
      <div className="flex flex-wrap items-center gap-4">
        <button
          type="submit"
          className="inline-flex h-11 items-center justify-center bg-red px-6 text-sm font-semibold text-white transition-colors hover:bg-red-dark active:scale-[0.97]"
        >
          Senden
        </button>
        <p className="text-xs text-muted">*Pflichtfelder</p>
      </div>
      {sent ? (
        <p className="text-sm text-ink">
          Schreiben Sie uns direkt an {site.email}.
        </p>
      ) : null}
    </form>
  );
}
