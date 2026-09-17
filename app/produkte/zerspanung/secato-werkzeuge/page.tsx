import type { Metadata } from "next";
import { Button } from "@/components/Button";
import { PageHero } from "@/components/PageHero";
import { cuttingCategories, services } from "@/lib/content";

export const metadata: Metadata = {
  title: "Secato-Werkzeuge",
  description:
    "Werkzeugsysteme, Winkelköpfe, VHM, Wendeplatten, PKD, CBN, Tiefbohren und Sonderwerkzeuge – mit Service bis zur Reparatur.",
};

export default function SecatoWerkzeugePage() {
  return (
    <>
      <PageHero
        kicker="Zerspanung"
        title="Secato-Werkzeuge"
        lead="Wir beraten Sie gerne bei komplexen Sonderwerkzeugen – Zusammenfassung von einzelnen Bearbeitungsoperationen in ein Werkzeug zur Rationalisierung Ihrer Fertigung."
      />
      <section className="mx-auto max-w-6xl px-5 py-14">
        <p className="max-w-3xl text-[1.05rem] leading-relaxed text-muted">
          Zu unseren Produkten zählen Werkzeugsysteme (einteilige und modulare
          Aufnahmen), angetriebene Werkzeuge / Winkelköpfe, VHM- und
          Wendeplattenwerkzeuge zum „Bohren-Senken-Aufbohren-Feinspindeln-Reiben-Fräsprogramm“,
          HSC Fräs-, Bohr- und Reibwerkzeuge, Mikrowerkzeuge, Wendeplattenwerkzeuge
          für Minimalmengenschmierung, PKD Werkzeuge für Aluminiumbearbeitung, CBN
          Werkzeuge für Hartbearbeitung, Tiefbohrwerkzeuge (Ein- und
          Zweilippenbohrer), Gewindefräsen (VHM und mit Wendeplatte),
          Zirkularfräsen (Einstechen Radial/Axial), Planschieber, Mechatronische
          Werkzeuge, Glattwalzwerkzeuge, Drehwerkzeuge ISO, Messgeräte für
          Maschineneinzugskräfte und vieles mehr.
        </p>
        <p className="mt-4 max-w-3xl leading-relaxed text-muted">
          Zusammen mit unserem Service werden Secato-Werkzeuge Ihre Produktion
          effektiver und kostengünstiger gestalten.
        </p>
        <ul className="mt-10 grid gap-px bg-line sm:grid-cols-2">
          {cuttingCategories.map((item) => (
            <li key={item.title} className="bg-white p-6">
              <h2 className="text-lg font-semibold">{item.title}</h2>
              <p className="mt-2 text-sm leading-relaxed text-muted">{item.text}</p>
            </li>
          ))}
        </ul>
      </section>
      <section className="border-t border-line bg-paper">
        <div className="mx-auto max-w-6xl px-5 py-14">
          <h2 className="text-2xl font-semibold">Dazu der Service</h2>
          <ul className="mt-6 grid gap-3 md:grid-cols-2">
            {services.map((item) => (
              <li key={item.title} className="border border-line bg-white px-5 py-4">
                <p className="font-medium">{item.title}</p>
                <p className="mt-1 text-sm text-muted">{item.text}</p>
              </li>
            ))}
          </ul>
          <div className="mt-8">
            <Button href="/kontakt">Anfrage stellen</Button>
          </div>
        </div>
      </section>
    </>
  );
}
