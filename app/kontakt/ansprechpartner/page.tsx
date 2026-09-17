import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { team, type Person } from "@/lib/content";
import { telHref } from "@/lib/site";

export const metadata: Metadata = {
  title: "Ansprechpartner",
  description: "Büro und Außendienst der Secato Werkzeugverkaufs GmbH.",
};

export default function AnsprechpartnerPage() {
  const office = team.filter((p) => p.group === "Büro");
  const field = team.filter((p) => p.group === "Außendienst");

  return (
    <>
      <PageHero
        kicker="Kontakt"
        title="Ansprechpartner"
        lead="Büro in Düsseldorf, Außendienst in der Fläche. Direkte Durchwahlen."
      />
      <section className="mx-auto max-w-6xl px-5 py-14">
        <h2 className="text-2xl font-semibold">Büro</h2>
        <ul className="mt-6 grid gap-4 md:grid-cols-2">
          {office.map((person) => (
            <PersonCard key={person.name} person={person} />
          ))}
        </ul>
        <h2 className="mt-14 text-2xl font-semibold">Außendienst</h2>
        <ul className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {field.map((person) => (
            <PersonCard key={person.name} person={person} />
          ))}
        </ul>
      </section>
    </>
  );
}

function PersonCard({ person }: { person: Person }) {
  return (
    <li className="border border-line p-6">
      <p className="font-mono text-[0.7rem] tracking-[0.14em] text-muted uppercase">
        {person.role}
      </p>
      <h3 className="mt-2 text-xl font-semibold">{person.name}</h3>
      <p className="mt-3 text-sm leading-relaxed">
        <a className="hover:text-red" href={telHref(person.phone)}>
          Tel. {person.phoneDisplay}
        </a>
        {person.mobile && person.mobileDisplay ? (
          <>
            <br />
            <a className="hover:text-red" href={telHref(person.mobile)}>
              Mobil {person.mobileDisplay}
            </a>
          </>
        ) : null}
        <br />
        <a className="hover:text-red" href={`mailto:${person.email}`}>
          {person.email}
        </a>
      </p>
    </li>
  );
}
