import { SITE } from "@/lib/site";

// Every .astro page in src/pages, so a new page lands in the sitemap automatically.
// "./about.astro" -> "/about", "./index.astro" -> "". Skips the 404 and dynamic [param] routes.
const ROUTES = Object.keys(import.meta.glob("./**/*.astro"))
  .map((file) => file.slice(1, -".astro".length).replace(/\/index$/, ""))
  .filter((route) => route !== "/404" && !route.includes("["))
  .sort((a, b) => (a === "" ? -1 : b === "" ? 1 : 0));

export function GET() {
  const lastmod = new Date().toISOString();
  const urls = ROUTES.map(
    (route) =>
      `<url>\n<loc>${SITE.url}${route}/</loc>\n<lastmod>${lastmod}</lastmod>\n<changefreq>monthly</changefreq>\n<priority>${route === "" ? 1 : 0.7}</priority>\n</url>`,
  );
  return new Response(
    `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls.join("\n")}\n</urlset>\n`,
  );
}
