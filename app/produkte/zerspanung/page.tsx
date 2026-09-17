import type { Metadata } from "next";
import { Button } from "@/components/Button";
import { PageHero } from "@/components/PageHero";
import { downloads, formulas, tapDrills } from "@/lib/content";

export const metadata: Metadata = {
  title: "Zerspanung",
  description:
    "Sonderwerkzeuge, Stufenwerkzeuge und Sonderfräser aus HSS, VHM und PKD – plus technische Infos und Anwendungsbeispiele.",
};

const processes = [
  { href: "/produkte/zerspanung/secato-werkzeuge", label: "Drehen" },
  { href: "/produkte/zerspanung/secato-werkzeuge", label: "Bohren" },
  { href: "/produkte/zerspanung/secato-werkzeuge", label: "Fräsen" },
  { href: "/produkte/zerspanung/secato-werkzeuge", label: "Reiben" },
  { href: "/produkte/zerspanung/secato-werkzeuge", label: "Werkzeugsysteme" },
] as const;

export default function ZerspanungPage() {
  return (
    <>
      <PageHero
        kicker="Produkte"
        title="Zerspanung"
        lead="Wir beraten Sie gerne bei komplexen Sonderwerkzeugen – Zusammenfassung von einzelnen Bearbeitungsoperationen in ein Werkzeug zur Rationalisierung Ihrer Fertigung."
      />

      <section className="mx-auto max-w-6xl px-5 py-14">
        <h2 className="text-2xl font-semibold">Produkte & Service</h2>
        <p className="mt-4 max-w-3xl leading-relaxed text-muted">
          Wir liefern Stufenwerkzeuge/ Sonderfräser aus HSS/ VHM/ PKD-bestückt mit
          Wendeplatten. Nutzen Sie unser Know-How für Ihre Spezial- und
          Sonderanfertigung.
        </p>
        <ul className="mt-8 flex flex-wrap gap-2">
          {processes.map((item) => (
            <li key={item.label}>
              <Button href={item.href} variant="ghost">
                {item.label}
              </Button>
            </li>
          ))}
        </ul>
      </section>

      <section className="border-y border-line bg-paper">
        <div className="mx-auto max-w-6xl px-5 py-14">
          <h2 className="text-2xl font-semibold">Downloads</h2>
          <p className="mt-3 max-w-2xl text-muted">
            Klicken Sie direkt auf die Downloads, um die Dateien im Browser
            anzuzeigen. Wenn Sie die Dateien lieber im Acrobat Reader als PDF
            betrachten wollen, speichern Sie die Datei.
          </p>
          <ul className="mt-8 grid gap-3 md:grid-cols-2">
            {downloads.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="flex items-center justify-between border border-line bg-white px-4 py-4 text-[0.95rem] font-medium hover:border-ink"
                >
                  {item.title}
                  <span className="font-mono text-[0.7rem] tracking-wider text-muted uppercase">
                    PDF
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-14">
        <h2 className="text-2xl font-semibold">Technik-Infos</h2>
        <p className="mt-3 max-w-2xl leading-relaxed text-muted">
          In diesem Bereich haben wir für Sie wichtige Tabellen und Formel
          zusammengestellt, welche bei unserer technischen Beratung und
          Anlagenanalyse hilfreich sind. Der Bereich „Gewindekernlöcher“ ist
          nochmal in Unterbereiche aufgeteilt und den verschiedenen Gewinden
          zugeordnet.
        </p>

        <div className="mt-10 grid gap-10 lg:grid-cols-2">
          <div>
            <h3 className="text-lg font-semibold">Gewindekernlöcher (metrisch, Regelgewinde)</h3>
            <div className="mt-4 overflow-x-auto border border-line">
              <table className="w-full text-left text-sm">
                <thead className="bg-paper font-mono text-[0.7rem] tracking-wider uppercase">
                  <tr>
                    <th className="px-3 py-2 font-medium">Gewinde</th>
                    <th className="px-3 py-2 font-medium">Steigung</th>
                    <th className="px-3 py-2 font-medium">Kernloch ø mm</th>
                  </tr>
                </thead>
                <tbody>
                  {tapDrills.map((row) => (
                    <tr key={row.size} className="border-t border-line">
                      <td className="px-3 py-2">{row.size}</td>
                      <td className="px-3 py-2">{row.pitch}</td>
                      <td className="px-3 py-2">{row.drill}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-semibold">Formeln der Zerspanung</h3>
            <ul className="mt-4 divide-y divide-line border border-line">
              {formulas.map((item) => (
                <li key={item.name} className="px-4 py-3">
                  <p className="text-sm font-medium">
                    {item.name}{" "}
                    <span className="font-normal text-muted">({item.unit})</span>
                  </p>
                  <p className="mt-1 font-mono text-sm">{item.formula}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
