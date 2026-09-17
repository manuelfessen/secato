import Image from "next/image";
import { Button } from "@/components/Button";
import { ContactForm } from "@/components/ContactForm";
import { homeServiceItems } from "@/lib/content";
import { site, telHref } from "@/lib/site";

export default function HomePage() {
  return (
    <>
      <section className="relative overflow-hidden bg-ink text-white">
        <div className="absolute inset-0">
          <Image
            src="/images/zerspanung.jpg"
            alt="VHM- und Wendeplattenwerkzeuge"
            fill
            priority
            className="object-cover opacity-35"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/85 to-ink/45" />
        </div>
        <div className="relative mx-auto max-w-6xl px-5 py-16 md:py-24">
          <ul className="flex flex-col gap-2 text-sm font-medium md:flex-row md:gap-8">
            <li>Höchste Präzision</li>
            <li>Zerspanungstechnik</li>
            <li>Hebetechnik</li>
          </ul>
          <h1 className="mt-8 max-w-4xl text-4xl font-semibold tracking-tight text-balance sm:text-5xl md:text-6xl">
            Willkommen bei Secato – Ihr Partner für professionelle Werkzeuge
          </h1>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-14 md:py-16">
        <h2 className="max-w-4xl text-2xl font-semibold tracking-tight text-balance md:text-3xl">
          Secato Werkzeugverkaufs GmbH – ein Familienunternehmen mit langjähriger
          Erfahrung.
        </h2>
        <p className="mt-6 max-w-3xl text-lg leading-relaxed text-muted">
          Erstklassige, marktbekannte Produkte, immer auf dem neuesten Stand der
          Technik. Erfahrung und Know-how im Bereich der Zerspanungstechnik,
          verbunden mit schnellem, sinnvollem und persönlichem Service – wir
          wollen uns abheben vom „Ein-Produkt-Verkäufer“ und auch vom
          Handelshaus.
        </p>
        <p className="mt-6 font-semibold">Ihr Secato-Team</p>
      </section>

      <section className="border-y border-line bg-paper">
        <div className="mx-auto max-w-6xl px-5 py-14">
          <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">
            Unsere Produkte in der Übersicht
          </h2>
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            <article className="group border border-line bg-white">
              <div className="relative h-56 overflow-hidden bg-paper-2">
                <Image
                  src="/images/zerspanung.jpg"
                  alt="Zerspanungstechnik"
                  fill
                  className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.03]"
                  sizes="(min-width: 768px) 50vw, 100vw"
                />
              </div>
              <div className="p-6 md:p-8">
                <h3 className="text-2xl font-semibold">Zerspanungstechnik</h3>
                <p className="mt-3 leading-relaxed text-muted">
                  Wir bieten Produkte für Werkzeugsysteme und den passenden
                  Service durch unsere Spezialisten bei der technischen Beratung
                  bis zur Werkzeugreparatur an.
                </p>
                <div className="mt-6">
                  <Button href="/produkte/zerspanung">Mehr Erfahren</Button>
                </div>
              </div>
            </article>
            <article className="group border border-line bg-white">
              <div className="relative h-56 overflow-hidden bg-paper-2">
                <Image
                  src="/images/ixtur-hero.jpg"
                  alt="Hebetechnik"
                  fill
                  className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.03]"
                  sizes="(min-width: 768px) 50vw, 100vw"
                />
              </div>
              <div className="p-6 md:p-8">
                <h3 className="text-2xl font-semibold">Hebetechnik</h3>
                <p className="mt-3 leading-relaxed text-muted">
                  Wir bieten ein benutzerfreundliches, elektrisch gesteuertes
                  Hebezeug, das eine starke magnetische Kraft mit einem
                  Permanentmagneten erzeugt.
                </p>
                <div className="mt-6">
                  <Button href="/produkte/hebetechnik">Mehr Erfahren</Button>
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-14">
        <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">
          Wir über uns
        </h2>
        <h3 className="mt-4 max-w-3xl text-xl font-semibold text-balance">
          SECATO ist ein Familien-Unternehmen in Düsseldorf mit langjähriger
          Erfahrung.
        </h3>
        <p className="mt-4 max-w-3xl leading-relaxed text-muted">
          Wir handeln ausschließlich mit erstklassigen, marktbekannten Produkten,
          welche auf dem neuesten Stand der Technik sind. Im Bereich
          Zerspanungstechnik sind das VHM- und Wendeplattenwerkzeuge,
          angetrieben Werkzeuge / Winkelköpfe, HSC Fräs-, Bohr und
          Reibwerkzeuge, PKD-Werkzeuge für Aluminiumbearbeitung, CBN-Werkzeuge
          für Hartbearbeitung und vieles mehr.
        </p>
      </section>

      <section className="border-y border-line bg-paper">
        <div className="mx-auto max-w-6xl px-5 py-14">
          <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">
            Unser Service
          </h2>
          <h3 className="mt-4 text-xl font-semibold">
            Ihr Spezialist in Sachen Werkzeuge
          </h3>
          <p className="mt-4 max-w-3xl leading-relaxed text-muted">
            Unsere Spezialisten stehen zur technischen Beratung gerne zu
            Verfügung. In NRW Vorort für alle Fragen, wenn es um
            Werkzeugauslegung für Projekte, Mess-Service für
            Maschineneinzugskräfte, Schnellservice für Sonderwerkzeuge VHM und
            Wendeplatten-bestückt, Nachschleifservice, Werkzeugbeschichtungen,
            Werkzeugreparatur handelt.
          </p>
          <ul className="mt-8 grid gap-px bg-line sm:grid-cols-2 lg:grid-cols-3">
            {homeServiceItems.map((item) => (
              <li key={item} className="bg-white px-5 py-4 font-medium">
                {item}
              </li>
            ))}
          </ul>
          <div className="mt-8">
            <Button href="/service" variant="ghost">
              Zum Service
            </Button>
          </div>
        </div>
      </section>

      <section className="border-y border-line bg-paper">
        <div className="mx-auto grid max-w-6xl gap-12 px-5 py-14 lg:grid-cols-2">
          <div>
            <h2 className="text-2xl font-semibold tracking-tight">
              Ihr Weg zu uns
            </h2>
            <address className="mt-5 not-italic leading-relaxed">
              Ungelsheimer Weg 7
              <br />
              D – 40472 Düsseldorf
              <br />
              Bundesrepublik Deutschland
            </address>
            <p className="mt-5 leading-relaxed">
              Kontakt:
              <br />
              Telefon:{" "}
              <a className="underline underline-offset-2" href={telHref(site.phone)}>
                02 11 – 42 26 10 0
              </a>
              <br />
              Fax: 02 11 – 42 26 10 10
              <br />
              E-Mail:{" "}
              <a className="underline underline-offset-2" href={`mailto:${site.email}`}>
                {site.email}
              </a>
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Button href={site.mapsUrl} external variant="ghost">
                Google Maps
              </Button>
              <Button href={site.appleMapsUrl} external variant="ghost">
                Apple Karten
              </Button>
            </div>
          </div>
          <div className="border border-line bg-white p-6 md:p-8">
            <h2 className="text-2xl font-semibold tracking-tight">
              Schreiben Sie uns
            </h2>
            <div className="mt-6">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
