import type { Metadata } from "next";
import Image from "next/image";
import { Button } from "@/components/Button";
import { PageHero } from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Produkte",
  description:
    "Zerspanungstechnik, Hebetechnik und Werkzeug-Service.",
};

export default function ProduktePage() {
  return (
    <>
      <PageHero
        kicker="Produkte"
        title="Produkte"
        lead="Wir beraten Sie gerne bei komplexen Sonderwerkzeugen – Zusammenfassung von einzelnen Bearbeitungsoperationen in ein Werkzeug zur Rationalisierung Ihrer Fertigung."
      />
      <section className="mx-auto grid max-w-6xl gap-6 px-5 py-14 md:grid-cols-2">
        <article className="border border-line">
          <div className="relative h-64 bg-paper-2">
            <Image
              src="/images/zerspanung.jpg"
              alt="Zerspanungswerkzeuge"
              fill
              className="object-cover"
              sizes="(min-width: 768px) 50vw, 100vw"
            />
          </div>
          <div className="p-7">
            <h2 className="text-2xl font-semibold">Zerspanungstechnik</h2>
            <p className="mt-3 leading-relaxed text-muted">
              Wir bieten Produkte für Werkzeugsysteme und den passenden Service
              durch unsere Spezialisten bei der technischen Beratung bis zur
              Werkzeugreparatur an.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Button href="/produkte/zerspanung">Zerspanung</Button>
              <Button href="/produkte/zerspanung/secato-werkzeuge" variant="ghost">
                Secato-Werkzeuge
              </Button>
            </div>
          </div>
        </article>
        <article className="border border-line">
          <div className="relative h-64 bg-paper-2">
            <Image
              src="/images/ixtur-hero.jpg"
              alt="Hebetechnik"
              fill
              className="object-cover"
              sizes="(min-width: 768px) 50vw, 100vw"
            />
          </div>
          <div className="p-7">
            <h2 className="text-2xl font-semibold">Hebetechnik</h2>
            <p className="mt-3 leading-relaxed text-muted">
              Wir bieten ein benutzerfreundliches, elektrisch gesteuertes
              Hebezeug, das eine starke magnetische Kraft mit einem
              Permanentmagneten erzeugt. Unsere Technologie beruht auf einem
              bistabilen permanenten Neodym-Eisen-Bor-Magneten, der unabhängig
              von einer konstanten Stromversorgung in einem seiner beiden
              Zustände verbleibt.
            </p>
            <div className="mt-6">
              <Button href="/produkte/hebetechnik">Hebetechnik</Button>
            </div>
          </div>
        </article>
      </section>
    </>
  );
}
