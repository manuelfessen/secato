import type { Metadata } from "next";
import { Button } from "@/components/Button";
import { PageHero } from "@/components/PageHero";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Jobs",
  description: "Stellenangebote bei der Secato Werkzeugverkaufs GmbH in Düsseldorf.",
};

export default function JobsPage() {
  return (
    <>
      <PageHero
        kicker="Jobs"
        title="Mit uns arbeiten."
        lead="Aktuell schreiben wir keine Stelle öffentlich aus. Initiativbewerbungen, besonders für technische Beratung und Vertrieb, sind willkommen."
      />
      <section className="mx-auto max-w-3xl px-5 py-14">
        <div className="border border-line p-8">
          <h2 className="text-xl font-semibold">Keine offenen Stellen</h2>
          <p className="mt-3 leading-relaxed text-muted">
            Wenn Sie Zerspanung verstehen und Kunden vor Ort betreuen wollen:
            schreiben Sie uns.
          </p>
          <div className="mt-6">
            <Button href={`mailto:${site.email}?subject=Initiativbewerbung`}>
              Initiativbewerbung
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
