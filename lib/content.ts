export const homeServiceItems = [
  "technische Beratung",
  "Werkzeugauslegungen für Projekte",
  "Mess-Service für Maschineneinzugskräfte",
  "Schnellservice für Sonderwerkzeuge VHM und Wendeplatten-bestückt",
  "Nachschleifservice",
  "Werkzeugbeschichtungen",
  "Werkzeugreparatur",
  "Secato-Werkzeug Spezial-Service",
] as const;

export const services = [
  {
    title: "technische Beratung",
    text: "Technische Beratung und Werkzeugauslegungen für Projekte.",
  },
  {
    title: "Mess-Service",
    text: "Mess-Service für Maschineneinzugskräfte.",
  },
  {
    title: "Schnellservice Sonderwerkzeuge",
    text: "Schnellservice für Sonderwerkzeuge VHM und Wendeplatten-bestückt.",
  },
  {
    title: "Nachschleifservice",
    text: "Nachschleifservice für Ihre Werkzeuge.",
  },
  {
    title: "Werkzeugbeschichtungen",
    text: "Werkzeugbeschichtungen.",
  },
  {
    title: "Werkzeugreparatur",
    text: "Werkzeugreparatur und Secato-Werkzeug Spezial-Service.",
  },
] as const;

export const cuttingCategories = [
  {
    title: "Werkzeugsysteme",
    text: "Einteilige und modulare Aufnahmen",
  },
  {
    title: "Angetriebene Werkzeuge / Winkelköpfe",
    text: "Angetriebene Werkzeuge und Winkelköpfe",
  },
  {
    title: "VHM- und Wendeplattenwerkzeuge STANDARD",
    text: "Bohren – Senken – Aufbohren – Feinspindeln – Reiben – Fräsprogramm",
  },
  {
    title: "VHM- und Wendeplattenwerkzeuge SONDER",
    text: "Sonderwerkzeuge VHM und wendeplattenbestückt",
  },
  {
    title: "HSC Fräs-, Bohr- und Reibwerkzeuge",
    text: "HSC Fräs, Bohr- und Reibwerkzeuge",
  },
  {
    title: "Mikrowerkzeuge",
    text: "Mikrowerkzeuge",
  },
  {
    title: "Wendeplattenwerkzeuge für Minimalmengenschmierung",
    text: "Wendeplattenwerkzeuge für Minimalmengenschmierung",
  },
  {
    title: "PKD-Werkzeuge für Aluminiumbearbeitung",
    text: "PKD Werkzeuge für Aluminiumbearbeitung",
  },
  {
    title: "CBN-Werkzeuge für Hartbearbeitung",
    text: "CBN Werkzeuge für Hartbearbeitung",
  },
  {
    title: "Tiefbohrwerkzeuge",
    text: "Ein- und Zweilippenbohrer",
  },
  {
    title: "Gewindefräsen",
    text: "VHM und mit Wendeplatte",
  },
  {
    title: "Zirkularfräsen",
    text: "Einstechen (Radial/Axial)",
  },
  {
    title: "Planschieber",
    text: "Planschieber",
  },
  {
    title: "Mechatronische Werkzeuge",
    text: "Mechatronische Werkzeuge",
  },
  {
    title: "Glattwalzwerkzeuge",
    text: "Glattwalzwerkzeuge",
  },
  {
    title: "Drehwerkzeuge ISO",
    text: "Drehwerkzeuge ISO",
  },
  {
    title: "Messgeräte für Maschineneinzugskräfte",
    text: "Messgeräte für Maschineneinzugskräfte",
  },
] as const;

export const downloads = [
  {
    title: "Bohren von großen Durchmessern",
    href: "/downloads/bohren-von-grossen-durchmessern.pdf",
  },
  {
    title: "Bohren von kleinen Durchmessern",
    href: "/downloads/bohren-von-kleinen-durchmessern.pdf",
  },
  {
    title: "Abwälzfräsen",
    href: "/downloads/abwaelzfraesen.pdf",
  },
  {
    title: "Bohrfräsen",
    href: "/downloads/bohrfraesen.pdf",
  },
  {
    title: "Bearbeitungsbeispiel Düsenkopf",
    href: "/downloads/bearbeitungsbeispiel-duesenkopf.pdf",
  },
  {
    title: "Bearbeitungsbeispiel Adapterstück",
    href: "/downloads/adapterstueck-bearbeitung.pdf",
  },
] as const;

export const tapDrills = [
  { size: "M3", pitch: "0,5", drill: "2,5" },
  { size: "M4", pitch: "0,7", drill: "3,3" },
  { size: "M5", pitch: "0,8", drill: "4,2" },
  { size: "M6", pitch: "1,0", drill: "5,0" },
  { size: "M8", pitch: "1,25", drill: "6,8" },
  { size: "M10", pitch: "1,5", drill: "8,5" },
  { size: "M12", pitch: "1,75", drill: "10,2" },
  { size: "M16", pitch: "2,0", drill: "14,0" },
  { size: "M20", pitch: "2,5", drill: "17,5" },
  { size: "M24", pitch: "3,0", drill: "21,0" },
] as const;

export const formulas = [
  {
    name: "Drehzahl n",
    unit: "1/min",
    formula: "n = (vc × 1000) / (π × d)",
  },
  {
    name: "Schnittgeschwindigkeit vc",
    unit: "m/min",
    formula: "vc = (π × d × n) / 1000",
  },
  {
    name: "Vorschubgeschwindigkeit vf (Fräsen)",
    unit: "mm/min",
    formula: "vf = fz × z × n",
  },
  {
    name: "Vorschubgeschwindigkeit vf (Bohren)",
    unit: "mm/min",
    formula: "vf = f × n",
  },
  {
    name: "Zeitspanungsvolumen Q",
    unit: "cm³/min",
    formula: "Q = ae × ap × vf / 1000",
  },
] as const;

export const ixturMagnets = [
  {
    name: "LI-120",
    kind: "Elektrisch, automatisch",
    lift: "120 kg",
    note: "Batteriebetrieb möglich. Kein Strom im EIN- oder AUS-Zustand. Last fällt bei Stromausfall nicht.",
    href: "https://www.ixtur.com/index.php/de/ixtur-magnete/automatischer-hebemagnet-li-120",
    manual:
      "https://www.ixtur.com/index.php/tech-support/user-manuals/34-user-manual-li-120-v12-ger/file",
  },
  {
    name: "MAP-6",
    kind: "Pneumatisch, wartungsfrei",
    lift: "6 kg",
    note: "Kompakt, hoher Kraft/Größe-Faktor, sehr geringer Restmagnetismus.",
    href: "https://www.ixtur.com/index.php/de/downloads/brochures/60-ixtur-map-brochure-ger-1/file",
    manual:
      "https://www.ixtur.com/index.php/tech-support/user-manuals/73-user-manual-map-6-ger-1/file",
  },
  {
    name: "MAP-30 / MAP-Serie",
    kind: "Pneumatisch, wartungsfrei",
    lift: "bis 180 kg",
    note: "Für Hebezeuge, Robotergreifer, Halter und Produktionsautomation.",
    href: "https://www.ixtur.com/index.php/de/downloads/brochures/60-ixtur-map-brochure-ger-1/file",
    manual:
      "https://www.ixtur.com/index.php/tech-support/user-manuals/34-user-manual-li-120-v12-ger/file",
  },
  {
    name: "MRP-46",
    kind: "Pneumatisch",
    lift: "46 kg",
    note: "Für rundes und flaches Hebegut – sonst oft problematisch für Magnetgreifer.",
    href: "https://www.ixtur.com/index.php/de/downloads/brochures/119-ixtur-mrp-46-a-mrp-42k-ger/file",
    manual:
      "https://www.ixtur.com/index.php/de/downloads/brochures/99-ixtur-pneumatic-magnet-comparison-brochure/file",
  },
  {
    name: "MRP-170",
    kind: "Pneumatisch",
    lift: "170 kg",
    note: "Hebt auch perforiertes Material. Druckluft nur zum Schalten, nicht zum Halten.",
    href: "https://www.ixtur.com/index.php/tech-support/brochures/102-ixtur-mrp-170-brochure-ger/file",
    manual:
      "https://www.ixtur.com/index.php/de/downloads/brochures/99-ixtur-pneumatic-magnet-comparison-brochure/file",
  },
] as const;

export const ixturTable = [
  {
    name: "MAP-6",
    lift: "6 kg",
    thickness: "t > 4 mm",
    round: "–",
    size: "ø 35 × 35 mm",
    weight: "0,19 kg",
  },
  {
    name: "MAP-40",
    lift: "40 kg",
    thickness: "t > 8 mm",
    round: "–",
    size: "ø 65 × 50 mm",
    weight: "0,95 kg",
  },
  {
    name: "MAP-180",
    lift: "180 kg",
    thickness: "t > 25 mm",
    round: "–",
    size: "ø 120 × 82 mm",
    weight: "5,80 kg",
  },
  {
    name: "MAP-120R",
    lift: "120 kg",
    thickness: "t > 25 mm",
    round: "70 kg",
    size: "ø 120 × 82 mm",
    weight: "5,80 kg",
  },
  {
    name: "MRP-46",
    lift: "46 kg",
    thickness: "t > 12 mm",
    round: "30 kg",
    size: "80 × 55 × 82,5 mm",
    weight: "1,80 kg",
  },
  {
    name: "MRP-170",
    lift: "170 kg",
    thickness: "t > 25 mm",
    round: "120 kg",
    size: "120 × 103 × 140 mm",
    weight: "10,7 kg",
  },
  {
    name: "MRP-130F",
    lift: "130 kg",
    thickness: "t > 25 mm",
    round: "–",
    size: "120 × 103 × 120 mm",
    weight: "9,5 kg",
  },
] as const;

export type Person = {
  name: string;
  role: string;
  group: "Büro" | "Außendienst";
  phone: string;
  phoneDisplay: string;
  mobile?: string;
  mobileDisplay?: string;
  email: string;
};

export const team: Person[] = [
  {
    name: "Gerold Fessen",
    role: "Geschäftsführer",
    group: "Außendienst",
    phone: "0211 42261016",
    phoneDisplay: "0211 – 42 26 10 16",
    mobile: "015771916264",
    mobileDisplay: "0157 – 719 16 264",
    email: "info@secato.de",
  },
  {
    name: "Katja Schuhmann",
    role: "Disponentin",
    group: "Büro",
    phone: "0211 42261015",
    phoneDisplay: "0211 – 42 26 10 15",
    email: "kschuhmann@secato.de",
  },
  {
    name: "Dieter Pudimat",
    role: "Disponent",
    group: "Büro",
    phone: "0211 42261018",
    phoneDisplay: "0211 – 42 26 10 18",
    email: "info@secato.de",
  },
  {
    name: "Ednord Stolys",
    role: "Berater",
    group: "Außendienst",
    phone: "0211 42261012",
    phoneDisplay: "0211 – 42 26 10 12",
    mobile: "01713587012",
    mobileDisplay: "0171 – 358 70 12",
    email: "info@secato.de",
  },
  {
    name: "Andreas Reuber",
    role: "Vertrieb",
    group: "Außendienst",
    phone: "0211 42261016",
    phoneDisplay: "0211 – 42 26 10 16",
    mobile: "01703802402",
    mobileDisplay: "0170 – 380 24 02",
    email: "info@secato.de",
  },
] as const;

export const news = [
  {
    date: "2025-12-01",
    dateLabel: "Dezember 2025",
    title: "Betriebsferien über den Jahreswechsel",
    text: "Unsere Büros sind vom 22.12.2025 bis zum 02.01.2026 geschlossen. Letzter Versandtag ist der 19.12.2025. Ab dem 05.01.2026 sind wir wieder für Sie da.",
  },
  {
    date: "2023-09-22",
    dateLabel: "22.09.2023",
    title: "Entscheidungshilfe Hebetechnik von Ixtur",
    text: "Pneumatisch gesteuerte Magnete von Ixtur sind für Hebezeuge, Robotergreifer und Produktionsautomation geeignet. MAP: kreisförmige Pole für flache Oberflächen. MRP: parallele Pole für flache und zylindrische Oberflächen.",
  },
  {
    date: "2023-07-22",
    dateLabel: "22.07.2023",
    title: "Neues Video zu Hebetechnik von Ixtur",
    text: "Übersicht zur Ixtur-Hebetechnik: MAP-Serie für flache Oberflächen, MRP-Serie für flache und zylindrische Werkstücke.",
  },
  {
    date: "2017-08-05",
    dateLabel: "05.08.2017",
    title: "30 Jahre Secato GmbH",
    text: "Am 5. August 1987 gründete Horst-Dieter Gadebusch die Secato Werkzeugverkaufs GmbH. Das Familienunternehmen wird seitdem in Düsseldorf geführt.",
  },
  {
    date: "2016-01-06",
    dateLabel: "06.01.2016",
    title: "Vertriebspartner von Ixtur",
    text: "Secato ist Vertriebspartner der finnischen Firma Ixtur. Die Technologie basiert auf einem bistabilen Permanentmagneten, der den magnetischen Status ohne Energiezufuhr hält.",
  },
] as const;

export const offers = [
  {
    title: "Ingersoll Seminare 2026",
    text: "Aktuelle Schulungen und Seminare von Ingersoll – direkt beim Hersteller.",
    href: "https://www.ingersoll-imc.de/service/seminare-2026",
    kind: "extern" as const,
  },
  {
    title: "Ingersoll EcoPro Hochleistungs-VHM-Fräser",
    text: "Flyer und Konditionen auf Anfrage. Bestellung per Mail oder Telefon.",
    href: "mailto:info@secato.de?subject=Anfrage%20Ingersoll%20EcoPro",
    kind: "anfrage" as const,
  },
] as const;
