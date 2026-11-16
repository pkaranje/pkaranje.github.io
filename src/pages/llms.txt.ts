import { SITE } from "@/lib/site";
import { personal, skills, experience, projects } from "@/data/resume";

// llms.txt (https://llmstxt.org): a plain-text profile summary for AI crawlers, built from resume.ts.
export function GET() {
  const body = [
    `# ${personal.name}`,
    "",
    `> ${personal.title}, ${personal.subtitle}. Based in ${personal.location}.`,
    "",
    personal.summary,
    "",
    "## Links",
    "",
    `- [Portfolio](${SITE.url}/)`,
    `- [Résumé (PDF)](${SITE.url}${SITE.resume})`,
    `- [GitHub](${personal.github})`,
    `- [LinkedIn](${personal.linkedin})`,
    `- [WhatsApp](${personal.whatsapp})`,
    `- Email: ${personal.email}`,
    "",
    "## Experience",
    "",
    ...experience.map((e) => `- ${e.role}, ${e.company} (${e.period})`),
    "",
    "## Projects",
    "",
    ...projects.map((p) => `- ${p.name} (${p.org}): ${p.description}`),
    "",
    "## Skills",
    "",
    ...skills.map((s) => `- ${s.category}: ${s.items.join(", ")}`),
    "",
  ].join("\n");
  return new Response(body);
}
