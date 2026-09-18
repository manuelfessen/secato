import type { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://secato.de";
  const routes = [
    "",
    "/produkte",
    "/produkte/zerspanung",
    "/produkte/zerspanung/secato-werkzeuge",
    "/produkte/hebetechnik",
    "/service",
    "/angebote",
    "/news",
    "/jobs",
    "/kontakt",
    "/kontakt/ansprechpartner",
    "/impressum",
    "/datenschutz",
  ];

  return routes.map((path) => ({
    url: `${base}${path}/`.replace("https://secato.de//", "https://secato.de/"),
    lastModified: new Date(),
    changeFrequency: path === "" || path === "/angebote" ? "weekly" : "monthly",
    priority: path === "" ? 1 : 0.7,
  }));
}
