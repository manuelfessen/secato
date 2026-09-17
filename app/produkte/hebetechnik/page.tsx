import type { Metadata } from "next";
import Image from "next/image";
import { Button } from "@/components/Button";
import { PageHero } from "@/components/PageHero";
import { ixturMagnets, ixturTable } from "@/lib/content";

export const metadata: Metadata = {
  title: "Hebetechnik",
  description:
    "Hebetechnik mit elektro-permanenten Magneten.",
};

export default function HebetechnikPage() {
  return (
    <>
      <PageHero
        kicker="Produkte"
        title="Hebetechnik"
        lead="Sichere Hebetechnik mit elektro-permanenten Magneten."
      />

      <section className="mx-auto grid max-w-6xl items-center gap-10 px-5 py-14 md:grid-cols-2">
        <div>
          <p className="leading-relaxed text-muted">
            Ixtur ist ein finnischer Magnethersteller. Wir bieten eine große
            Auswahl an pneumatisch betätigten Magnetgreifern für eine Vielzahl
            von Lasten. Die Greifer können in der Robotik, der industriellen
            Automatisierung und in manuell gesteuerten Anwendungen eingesetzt
            werden.
          </p>
          <p className="mt-4 leading-relaxed text-muted">
            Ixtur Magnetgreifer lassen sich einfach mit Druckluft steuern. Die
            Greifer behalten ihren magnetischen Zustand auch dann bei, wenn der
            Luftdruck verloren geht.
          </p>
          <p className="mt-4 leading-relaxed text-muted">
            Ixtur liefert seine vielseitige Produktlinie in mehr als 40 Länder
            weltweit. Alle Produkte werden in Finnland entwickelt und hergestellt.
          </p>
          <div className="mt-6">
            <Button href="https://www.ixtur.com/index.php/de/" external variant="ghost">
              Partner ixtur.com
            </Button>
          </div>
        </div>
        <div className="relative h-72 border border-line bg-paper-2 md:h-80">
          <Image
            src="/images/ixtur-hero.jpg"
            alt="Ixtur MAP- und MRP-Magnete"
            fill
            className="object-cover"
            sizes="(min-width: 768px) 50vw, 100vw"
          />
        </div>
      </section>

      <section className="border-y border-line bg-paper">
        <div className="mx-auto max-w-6xl px-5 py-14">
          <h2 className="text-2xl font-semibold">Baureihen</h2>
          <ul className="mt-8 grid gap-4 md:grid-cols-2">
            {ixturMagnets.map((item) => (
              <li key={item.name} className="border border-line bg-white p-6">
                <p className="font-mono text-[0.7rem] tracking-[0.14em] text-muted uppercase">
                  {item.kind}
                </p>
                <h3 className="mt-2 text-xl font-semibold">{item.name}</h3>
                <p className="mt-1 text-sm font-medium text-red">
                  Nenntragfähigkeit {item.lift}
                </p>
                <p className="mt-3 text-sm leading-relaxed text-muted">{item.note}</p>
                <div className="mt-4 flex flex-wrap gap-3 text-sm">
                  <a className="underline underline-offset-2 hover:text-red" href={item.href}>
                    Beschreibung
                  </a>
                  <a className="underline underline-offset-2 hover:text-red" href={item.manual}>
                    Bedienungsanleitung
                  </a>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-14">
        <h2 className="text-2xl font-semibold">Übersicht pneumatische Magnete</h2>
        <p className="mt-3 max-w-2xl text-sm text-muted">
          Nenntragfähigkeit mit Sicherheitsfaktor 3, Stahl S355, ohne Luftspalt.
          Werte nach Ixtur. Die konkrete Auslegung machen wir mit Ihnen am Teil.
        </p>
        <div className="mt-6 overflow-x-auto border border-line">
          <table className="w-full min-w-[640px] text-left text-sm">
            <thead className="bg-paper font-mono text-[0.68rem] tracking-wider uppercase">
              <tr>
                <th className="px-3 py-3 font-medium">Magnet</th>
                <th className="px-3 py-3 font-medium">Nenntraglast</th>
                <th className="px-3 py-3 font-medium">Blechdicke</th>
                <th className="px-3 py-3 font-medium">Rundmaterial</th>
                <th className="px-3 py-3 font-medium">Größe</th>
                <th className="px-3 py-3 font-medium">Gewicht</th>
              </tr>
            </thead>
            <tbody>
              {ixturTable.map((row) => (
                <tr key={row.name} className="border-t border-line">
                  <td className="px-3 py-3 font-medium">{row.name}</td>
                  <td className="px-3 py-3">{row.lift}</td>
                  <td className="px-3 py-3">{row.thickness}</td>
                  <td className="px-3 py-3">{row.round}</td>
                  <td className="px-3 py-3">{row.size}</td>
                  <td className="px-3 py-3">{row.weight}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="mt-4">
          <a
            className="text-sm underline underline-offset-2 hover:text-red"
            href="https://www.ixtur.com/index.php/de/downloads/brochures/99-ixtur-pneumatic-magnet-comparison-brochure/file"
          >
            Ixtur Übersichtsbroschüre
          </a>
        </p>
      </section>
    </>
  );
}
