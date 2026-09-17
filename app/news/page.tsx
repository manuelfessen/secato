import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { news } from "@/lib/content";

export const metadata: Metadata = {
  title: "News",
  description: "Aktuelle Mitteilungen der Secato Werkzeugverkaufs GmbH.",
};

export default function NewsPage() {
  return (
    <>
      <PageHero
        kicker="News"
        title="Aus dem Unternehmen"
        lead="Betriebszeiten, Produktinfos und das, was für die Zusammenarbeit zählt."
      />
      <section className="mx-auto max-w-3xl px-5 py-14">
        <ol className="divide-y divide-line border-y border-line">
          {news.map((item) => (
            <li key={item.date + item.title} className="py-8">
              <p className="font-mono text-[0.72rem] tracking-[0.14em] text-muted uppercase">
                {item.dateLabel}
              </p>
              <h2 className="mt-2 text-2xl font-semibold text-balance">{item.title}</h2>
              <p className="mt-3 leading-relaxed text-muted">{item.text}</p>
            </li>
          ))}
        </ol>
      </section>
    </>
  );
}
