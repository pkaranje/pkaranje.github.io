import { personal } from "@/data/resume";

/** Site-level settings. Resume content lives in src/data/resume.ts. */
export const SITE = {
  name: personal.name,
  url: "https://pkaranje.github.io",
  /** Short descriptor for social cards and the footer. */
  descriptor: personal.title,
  resume: "/CV_Pratik_Karanje.pdf",
  resumeDetailed: "/CV_Detailed_Pratik_Karanje.pdf",
  /** localStorage key for the light/dark choice. */
  themeKey: "pk-theme",
} as const;

export type PageMeta = {
  /** Canonical path, ending in "/". */
  path: string;
  title: string;
  description: string;
  /** Home page: name before the title. */
  brandFirst?: boolean;
  /** Error pages: robots noindex and no canonical link. */
  noindex?: boolean;
};

/** Section anchors on the home page, in page order. */
export const NAV = [
  { id: "skills", label: "Skills" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "credentials", label: "Credentials" },
  { id: "contact", label: "Contact" },
] as const;

/** "github.com/pkaranje" from "https://github.com/pkaranje". */
export const bareUrl = (url: string) =>
  url.replace(/^https?:\/\/(www\.)?/, "").replace(/\/$/, "");
