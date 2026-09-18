# Secato Werkzeugverkaufs GmbH

Statische Unternehmenswebsite. Ersetzt das bisherige WordPress (The7, WPBakery, Revolution Slider, Borlabs, Contact Form 7).

## Lokal starten

```bash
npm install
npm run dev
```

Öffnet unter [http://localhost:3000](http://localhost:3000).

## Content ändern

- Firma, Navigation, Adresse: `lib/site.ts`
- Produkte, Team, News, Angebote: `lib/content.ts`
- PDFs: `public/downloads/`
- Fotos: `public/images/`

Kein CMS, kein Cookie-Banner, keine eingebetteten Google-Dienste.

## Deploy

Statischer Export (`output: "export"`). Lokal bauen und prüfen:

```bash
npm run build
npx serve out
```

GitHub Pages baut bei jedem Push auf `main` und veröffentlicht unter
`https://manuelfessen.github.io/secato/`. Der Workflow setzt dafür `GITHUB_PAGES=true`
(Base-Path `/secato`). Ohne diese Variable bleibt die Seite auf der Domain-Wurzel,
z. B. später auf secato.de.

## Rechtliches

Impressum und Datenschutz sind auf den neuen Stack angepasst (kein Analytics, keine eingebetteten Maps/Videos). Vor Go-Live kurz durch die Geschäftsführung gegenlesen lassen.
