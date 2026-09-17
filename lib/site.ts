export const site = {
  name: "Secato Werkzeugverkaufs GmbH",
  shortName: "Secato",
  tagline: "Ihr Partner für professionelle Werkzeuge",
  description:
    "Willkommen bei Secato – Ihr Partner für professionelle Werkzeuge. Erstklassige, marktbekannte Produkte. Erfahrung und Know-how im Bereich der Zerspanungstechnik.",
  url: "https://secato.de",
  email: "info@secato.de",
  phone: "0211 4226100",
  phoneDisplay: "0211 – 42 26 10 0",
  fax: "0211 42261010",
  faxDisplay: "0211 – 42 26 10 10",
  founded: 1987,
  address: {
    street: "Ungelsheimer Weg 7",
    zip: "40472",
    city: "Düsseldorf",
    country: "Deutschland",
  },
  mapsUrl:
    "https://www.google.com/maps/search/?api=1&query=Ungelsheimer+Weg+7+40472+D%C3%BCsseldorf",
  appleMapsUrl: "https://maps.apple.com/?q=Ungelsheimer+Weg+7,+40472+Düsseldorf",
  legal: {
    ceo: "Gerold Fessen",
    register: "HRB 22224",
    court: "Amtsgericht Düsseldorf",
    vatId: "DE 119365984",
  },
} as const;

export const nav = [
  { href: "/", label: "Home" },
  {
    href: "/produkte",
    label: "Produkte",
    children: [
      { href: "/produkte/zerspanung", label: "Zerspanung" },
      {
        href: "/produkte/zerspanung/secato-werkzeuge",
        label: "Secato-Werkzeuge",
      },
      { href: "/produkte/hebetechnik", label: "Hebetechnik" },
    ],
  },
  { href: "/service", label: "Service" },
  { href: "/angebote", label: "Angebote" },
  { href: "/news", label: "News" },
  { href: "/jobs", label: "Jobs" },
  {
    href: "/kontakt",
    label: "Kontakt",
    children: [
      { href: "/kontakt", label: "Kontakt" },
      { href: "/kontakt/ansprechpartner", label: "Ansprechpartner" },
    ],
  },
] as const;

export const footerNav = [
  { href: "/datenschutz", label: "Datenschutz" },
  { href: "/impressum", label: "Impressum" },
  { href: "/kontakt", label: "Kontakt" },
] as const;

export function telHref(phone: string) {
  return `tel:+49${phone.replace(/\s+/g, "").replace(/^0/, "")}`;
}
