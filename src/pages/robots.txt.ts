import { SITE } from "@/lib/site";

export function GET() {
  return new Response(`User-Agent: *\nAllow: /\n\nSitemap: ${SITE.url}/sitemap.xml\n`);
}
