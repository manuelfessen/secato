import type { Metadata } from "next";
import { Button } from "@/components/Button";
import { PageHero } from "@/components/PageHero";
import { services } from "@/lib/content";

export const metadata: Metadata = {
  title: "Service",
  description:
    "Technische Beratung, Sonderwerkzeuge, Nachschleifen, Beschichten, Reparatur und Mess-Service – in NRW vor Ort.",
};

export default function ServicePage() {
  return (
    <>
      <PageHero
        kicker="Service"
        title="Unser Secato Service im Bereich Werkzeuge wird von unseren Spezialisten direkt bearbeitet."
        lead="Wir beraten Sie gerne bei komplexen Sonderwerkzeugen. Unsere Stärke ist die Zusammenfassung von einzelnen Bearbeitungsoperationen in ein Werkzeug zur Realisierung Ihrer Fertigung."
      />
      <section className="mx-auto max-w-6xl px-5 py-14">
        <ul className="grid gap-px bg-line md:grid-cols-2">
          {services.map((item) => (
            <li key={item.title} className="bg-white p-7">
              <h2 className="text-xl font-semibold">{item.title}</h2>
              <p className="mt-3 leading-relaxed text-muted">{item.text}</p>
            </li>
          ))}
        </ul>
        <div className="mt-10 flex flex-wrap gap-3">
          <Button href="/kontakt">Projekt anfragen</Button>
          <Button href="/produkte/zerspanung" variant="ghost">
            Zur Zerspanung
          </Button>
        </div>
      </section>
    </>
  );
}
