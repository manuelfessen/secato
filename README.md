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

Vercel, Netlify oder jeder Node-Host mit `npm run build` und `npm start`. Trailing Slashes sind an, damit die bisherigen WordPress-URLs erhalten bleiben.

## Rechtliches

Impressum und Datenschutz sind auf den neuen Stack angepasst (kein Analytics, keine eingebetteten Maps/Videos). Vor Go-Live kurz durch die Geschäftsführung gegenlesen lassen.
