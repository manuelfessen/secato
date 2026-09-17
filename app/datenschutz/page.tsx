import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Datenschutz",
  description: "Datenschutzerklärung der Secato Werkzeugverkaufs GmbH.",
};

export default function DatenschutzPage() {
  return (
    <>
      <PageHero kicker="Rechtliches" title="Datenschutzerklärung" />
      <article className="mx-auto max-w-3xl px-5 py-14 text-[1.02rem] leading-relaxed">
        <p>
          Der Schutz Ihrer Daten beim Besuch unserer Website ist uns wichtig.
        </p>
        <p className="mt-4">
          Die Website wird über HTTPS ausgeliefert. Diese Verschlüsselung
          verhindert, dass Daten, die Sie an uns übermitteln, von Dritten
          mitgelesen werden können.
        </p>

        <h2 className="mt-10 text-xl font-semibold">1. Verantwortlicher</h2>
        <p className="mt-4">
          Verantwortlicher gem. Art. 4 Abs. 7 DSGVO ist:
          <br />
          {site.name}
          <br />
          {site.address.street}
          <br />
          {site.address.zip} {site.address.city}
          <br />
          Geschäftsführer: {site.legal.ceo}
          <br />
          E-Mail: {site.email}
        </p>

        <h2 className="mt-10 text-xl font-semibold">2. Personenbezogene Daten</h2>
        <p className="mt-4 text-muted">
          Personenbezogene Daten sind Angaben, die Ihrer Person zugeordnet
          werden können. Dazu gehören etwa Name, Anschrift, E-Mail-Adresse und
          Telefonnummer.
        </p>

        <h2 className="mt-10 text-xl font-semibold">
          3. Datenerhebung beim Besuch der Website
        </h2>
        <p className="mt-4 text-muted">
          Bei der bloß informatorischen Nutzung erheben wir nur die Daten, die
          Ihr Browser an den Server übermittelt, soweit sie für Anzeige,
          Stabilität und Sicherheit erforderlich sind (Art. 6 Abs. 1 S. 1 lit. f
          DSGVO): IP-Adresse, Datum und Uhrzeit, Zeitzone, aufgerufene Seite,
          Statuscode, übertragene Datenmenge, Referrer, Browser, Betriebssystem
          und Sprache. Diese Server-Logs werden in der Regel nach höchstens 7
          Tagen gelöscht, soweit keine längere Aufbewahrung zur Aufklärung von
          Missbrauch erforderlich ist.
        </p>
        <p className="mt-4 text-muted">
          Es werden keine Tracking-Cookies, kein Google Analytics, kein Microsoft
          Clarity und keine Marketing-Pixel eingesetzt.
        </p>
        <p className="mt-4 text-muted">
          Schriften werden lokal ausgeliefert. Externe Links zu Google Maps,
          Apple Karten oder Herstellerseiten führen zu Angeboten Dritter, für
          deren Datenverarbeitung wir nicht verantwortlich sind.
        </p>

        <h2 className="mt-10 text-xl font-semibold">
          4. Kontaktformular und E-Mail
        </h2>
        <p className="mt-4 text-muted">
          Das Kontaktformular öffnet Ihr E-Mail-Programm und überträgt die
          eingegebenen Daten erst, wenn Sie die Nachricht selbst versenden.
          Alternativ können Sie uns direkt per E-Mail oder Telefon erreichen.
          Die von Ihnen mitgeteilten Daten (in der Regel Name und E-Mail)
          speichern wir, um Ihre Anfrage zu beantworten. Soweit Sie auf einen
          Vertrag hinarbeiten, ist Rechtsgrundlage Art. 6 Abs. 1 lit. b DSGVO,
          sonst Art. 6 Abs. 1 lit. f DSGVO. Daten werden gelöscht, sobald sie
          nicht mehr erforderlich sind, oder die Verarbeitung wird
          eingeschränkt, soweit gesetzliche Aufbewahrungspflichten bestehen.
        </p>

        <h2 className="mt-10 text-xl font-semibold">5. Weitergabe von Daten</h2>
        <p className="mt-4 text-muted">
          Eine Übermittlung an Dritte findet nicht statt, außer Sie haben
          eingewilligt (Art. 6 Abs. 1 lit. a DSGVO), die Weitergabe zur
          Rechtsverteidigung erforderlich ist (lit. f), eine gesetzliche
          Pflicht besteht (lit. c) oder sie ist für die Abwicklung eines
          Vertrags mit Ihnen erforderlich (lit. b).
        </p>

        <h2 className="mt-10 text-xl font-semibold">6. Ihre Rechte</h2>
        <ul className="mt-4 list-disc space-y-2 pl-5 text-muted">
          <li>Auskunft nach Art. 15 DSGVO</li>
          <li>Berichtigung nach Art. 16 DSGVO</li>
          <li>Löschung nach Art. 17 DSGVO</li>
          <li>Einschränkung der Verarbeitung nach Art. 18 DSGVO</li>
          <li>Datenübertragbarkeit nach Art. 20 DSGVO</li>
          <li>Widerruf einer Einwilligung nach Art. 7 Abs. 3 DSGVO</li>
          <li>Beschwerde bei einer Aufsichtsbehörde nach Art. 77 DSGVO</li>
        </ul>

        <h2 className="mt-10 text-xl font-semibold">
          7. Widerspruch gegen die Verarbeitung
        </h2>
        <p className="mt-4 text-muted">
          Soweit wir die Verarbeitung auf eine Interessenabwägung stützen,
          können Sie Widerspruch einlegen. Bitte legen Sie dar, warum wir Ihre
          Daten nicht wie durchgeführt verarbeiten sollten. Im Falle eines
          begründeten Widerspruchs prüfen wir die Sachlage.
        </p>

        <h2 className="mt-10 text-xl font-semibold">8. Änderungen</h2>
        <p className="mt-4 text-muted">
          Durch die Weiterentwicklung der Website oder geänderte rechtliche
          Vorgaben kann diese Erklärung angepasst werden. Die jeweils aktuelle
          Fassung finden Sie auf dieser Seite.
        </p>
      </article>
    </>
  );
}
