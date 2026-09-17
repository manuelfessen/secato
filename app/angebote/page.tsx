import type { Metadata } from "next";
import { Button } from "@/components/Button";
import { PageHero } from "@/components/PageHero";
import { offers } from "@/lib/content";
import { site, telHref } from "@/lib/site";

export const metadata: Metadata = {
  title: "Angebote",
  description:
    "Aktuelle Angebote und Hersteller-Aktionen. PDFs anfordern und per Mail oder Telefon bestellen.",
};

export default function AngebotePage() {
  return (
    <>
      <PageHero
        kicker="Angebote"
        title="Aktuelle Angebote"
        lead="In regelmäßigen Abständen veröffentlichen wir neue Konditionen. Laden Sie Unterlagen herunter oder bestellen Sie per Mail und Telefon."
      />
      <section className="mx-auto max-w-6xl px-5 py-14">
        <ul className="grid gap-4 md:grid-cols-2">
          {offers.map((item) => (
            <li key={item.title} className="border border-line p-6">
              <p className="font-mono text-[0.7rem] tracking-[0.16em] text-muted uppercase">
                {item.kind === "extern" ? "Hersteller" : "Auf Anfrage"}
              </p>
              <h2 className="mt-2 text-xl font-semibold">{item.title}</h2>
              <p className="mt-3 text-muted">{item.text}</p>
              <div className="mt-6">
                <Button href={item.href} external={item.kind === "extern"}>
                  {item.kind === "extern" ? "Zur Übersicht" : "Anfragen"}
                </Button>
              </div>
            </li>
          ))}
        </ul>
        <div className="mt-12 border border-line bg-paper p-6">
          <h2 className="text-lg font-semibold">Direkt bestellen</h2>
          <p className="mt-2 text-muted">
            Telefon{" "}
            <a className="text-ink underline underline-offset-2" href={telHref(site.phone)}>
              {site.phoneDisplay}
            </a>
            {" · "}
            <a className="text-ink underline underline-offset-2" href={`mailto:${site.email}`}>
              {site.email}
            </a>
          </p>
        </div>
      </section>
    </>
  );
}
