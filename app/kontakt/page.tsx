import type { Metadata } from "next";
import { ContactForm } from "@/components/ContactForm";
import { PageHero } from "@/components/PageHero";
import { site, telHref } from "@/lib/site";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Kontakt",
  description:
    "Secato Werkzeugverkaufs GmbH in Düsseldorf – Telefon, E-Mail, Anfahrt und Kontaktformular.",
};

export default function KontaktPage() {
  return (
    <>
      <PageHero
        kicker="Kontakt"
        title="Kontakt"
        lead="Ungelsheimer Weg 7, 40472 Düsseldorf."
      />
      <section className="mx-auto grid max-w-6xl gap-12 px-5 py-14 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <h2 className="text-2xl font-semibold">{site.name}</h2>
          <address className="mt-4 not-italic leading-relaxed text-muted">
            {site.address.street}
            <br />
            {site.address.zip} {site.address.city}
            <br />
            {site.address.country}
          </address>
          <p className="mt-5 leading-relaxed">
            Telefon:{" "}
            <a className="underline underline-offset-2" href={telHref(site.phone)}>
              {site.phoneDisplay}
            </a>
            <br />
            Fax: {site.faxDisplay}
            <br />
            E-Mail:{" "}
            <a className="underline underline-offset-2" href={`mailto:${site.email}`}>
              {site.email}
            </a>
          </p>
          <p className="mt-5">
            <Link className="text-red underline underline-offset-2" href="/kontakt/ansprechpartner">
              Zu den Ansprechpartnern
            </Link>
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              className="inline-flex h-11 items-center border border-line px-4 text-sm font-medium hover:border-ink"
              href={site.mapsUrl}
              target="_blank"
              rel="noreferrer"
            >
              Google Maps
            </a>
            <a
              className="inline-flex h-11 items-center border border-line px-4 text-sm font-medium hover:border-ink"
              href={site.appleMapsUrl}
              target="_blank"
              rel="noreferrer"
            >
              Apple Karten
            </a>
          </div>
        </div>
        <div className="border border-line p-6 md:p-8">
          <h2 className="text-xl font-semibold">Nachricht</h2>
          <div className="mt-6">
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
}
