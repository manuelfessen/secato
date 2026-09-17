import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Impressum",
  description: "Impressum der Secato Werkzeugverkaufs GmbH.",
};

export default function ImpressumPage() {
  return (
    <>
      <PageHero kicker="Rechtliches" title="Impressum" />
      <article className="mx-auto max-w-3xl px-5 py-14 text-[1.02rem] leading-relaxed">
        <h2 className="text-xl font-semibold">Angaben gemäß § 5 DDG</h2>
        <p className="mt-4">
          {site.name}
          <br />
          {site.address.street}
          <br />
          {site.address.zip} {site.address.city}
        </p>
        <p className="mt-4">
          vertreten durch den Geschäftsführer {site.legal.ceo}
        </p>
        <p className="mt-4">
          Telefon: {site.phoneDisplay}
          <br />
          Fax: {site.faxDisplay}
          <br />
          E-Mail: {site.email}
        </p>
        <p className="mt-4">
          Handelsregistereintrag: {site.legal.register}, {site.legal.court}
          <br />
          USt-IDNr.: {site.legal.vatId}
        </p>

        <h2 className="mt-10 text-xl font-semibold">
          Verantwortlich für den Inhalt nach § 18 Abs. 2 MStV
        </h2>
        <p className="mt-4">
          {site.legal.ceo}
          <br />
          {site.address.street}
          <br />
          {site.address.zip} {site.address.city}
        </p>

        <h2 className="mt-10 text-xl font-semibold">
          Online-Streitbeilegung gemäß Art. 14 Abs. 1 ODR-VO
        </h2>
        <p className="mt-4 text-muted">
          Die Europäische Kommission stellt eine Plattform zur
          Online-Streitbeilegung (OS) bereit, die Sie unter{" "}
          <a
            className="text-ink underline underline-offset-2"
            href="https://ec.europa.eu/consumers/odr/"
          >
            https://ec.europa.eu/consumers/odr/
          </a>{" "}
          finden. Wir sind nicht bereit und nicht verpflichtet, an einem
          Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle
          teilzunehmen.
        </p>
      </article>
    </>
  );
}
