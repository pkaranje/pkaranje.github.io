# CLAUDE.md — pkaranje.github.io

Personal portfolio website for Pratik Karanje. Static Astro site deployed to GitHub Pages via GitHub Actions. Architecture and design system are adapted from [giilab.github.io](https://github.com/giilab/giilab.github.io).

## Tech Stack

| Layer | Tool |
| --- | --- |
| Framework | Astro 7 (static output, no UI framework, `.astro` components only) |
| Language | TypeScript 5 (strict, `astro/tsconfigs/strict`), checked by `astro check` (`@astrojs/check`) |
| Styling | Tailwind CSS 4 via `@tailwindcss/vite` — config lives in `src/styles/globals.css` (`@theme inline`), there is no `tailwind.config.js` |
| Fonts | `@fontsource` — Space Grotesk (body), Urbanist (display), Instrument Serif italic (accent) |
| Smooth scroll | Lenis (`src/components/BackToTop.astro`) |
| Lint | ESLint 10 flat config + `typescript-eslint` + `eslint-plugin-astro` |
| Node | 26 LTS (`.nvmrc`, `engines >=26.13.1 <27`, enforced by `engine-strict` in `.npmrc`), CI uses `node-version-file` |

### Dependencies

`package.json` is kept aligned with [giilab.github.io](https://github.com/giilab/giilab.github.io) (same scripts, dependencies, ranges and `overrides`); only `name` and `allowScripts` differ. 6 runtime (`astro`, `@tailwindcss/vite`, `lenis`, 3× `@fontsource/*`) and 8 dev (`@astrojs/check`, `@types/node`, `axe-core`, `typescript`, `tailwindcss`, `eslint`, `typescript-eslint`, `eslint-plugin-astro`).

- `@types/node` major tracks the Node major in `.nvmrc` (currently `^26`).
- `overrides` pins `minimatch` to `^11` across the tree to clear a transitive advisory; keep it until upstream deps require v11 themselves.
- `allowScripts` records install-script decisions (npm 11 blocks dependency install scripts by default). `fsevents` is denied: it ships a prebuilt binary and is macOS-only. If `npm ci` warns about a new package, review it, then run `npm install-scripts approve|deny <pkg>`.
- There is no `dependabot.yml`; Dependabot PRs come from repo settings. Close any that bump packages no longer in `package-lock.json`.

## Commands

```bash
npm run dev        # dev server at localhost:4321
npm run build      # astro build → dist/
npm run preview    # serve dist/
npm run lint       # eslint
npm run typecheck  # astro check
```

Or use `make` (run `make` alone to list targets): `make setup`, `make dev`, `make check`, `make build`, `make preview`, `make ci`, `make clean`.

Always run `npm run lint && npm run typecheck && npm run build` before committing — CI runs all three.

## Project Structure

```text
src/
├── data/resume.ts            # ★ Single source of truth for ALL Resume content
├── lib/site.ts               # SITE config (url, Resume paths, theme key), NAV anchors, PageMeta, bareUrl()
├── lib/enquiry.ts            # Enquiry form delivery via Web3Forms (public ACCESS_KEY) + send()
├── styles/globals.css        # Tailwind import, brand + semantic tokens, light/dark themes, component classes
├── layouts/Base.astro        # <head>/SEO/JSON-LD (Person), theme bootstrap, Header/Footer, scroll-reveal script
├── components/
│   ├── Header.astro          # Fixed nav, anchor links, active-section tracking, mobile menu
│   ├── Footer.astro
│   ├── Lockup.astro          # "PK" monogram + name
│   ├── ThemeToggle.astro     # Light/dark toggle (persists to localStorage key SITE.themeKey)
│   ├── BackToTop.astro       # Lenis + back-to-top button
│   ├── EnquiryForm.astro     # Contact form: validation, honeypot, success/error states
│   └── ui/                   # Container, Section, SectionHead, Card, Grid, Eyebrow, Pill, ButtonLink, SocialIcon
└── pages/
    ├── index.astro           # Single-page portfolio: about/hero, skills, experience, projects, credentials, contact
    ├── 404.astro
    ├── robots.txt.ts         # Generated
    ├── sitemap.xml.ts        # Generated from src/pages/*.astro
    └── llms.txt.ts           # Generated from resume.ts

public/
├── profile.jpeg, favicon.svg
├── CV_Pratik_Karanje.pdf, CV_Detailed_Pratik_Karanje.pdf
└── icons/                    # github/linkedin/whatsapp.svg (masked via SocialIcon), tech/*.svg (skills marquee)
```

## Content Updates

**All Resume content lives in `src/data/resume.ts`.** Never hardcode content in components. Exports: `personal`, `skills`, `experience`, `projects`, `certifications`, `education`, `languages`, `stats`, `currentFocus`, `techStack` (`[name, logo]` pairs; logo is a file in `public/icons/tech/` without `.svg`), `enquiryTopics` (enquiry form dropdown). `personal.whatsapp` is a `wa.me` link used in the hero, contact section and footer.

Nav sections are `NAV` in `src/lib/site.ts`; each `id` must match a section `id` in `index.astro`.

## Design System

- **Tokens:** use semantic Tailwind colours from `globals.css` — `bg`, `surface`, `elevated`, `text`, `muted`, `faint`, `line`, `line-strong`, `accent`, `accent-ink`, `accent-soft`, `on-accent`. Never raw greys; they break dark mode.
- **Theme:** `data-theme="light|dark"` on `<html>`; `dark:` variant is wired to it. Inline script in `Base.astro` sets it before paint.
- **Typography classes:** `.t-hero`, `.t-h2`, `.t-h3`, `.t-lead`; accent phrase = `<span class="serif accent">…</span>`.
- **Components:** `.wrap` (Container), `.card` (Card), `.btn btn-primary|btn-ghost` (ButtonLink `variant="primary"` default, or `"ghost"`), `.eyebrow` (Eyebrow), `.f-heading` / `.f-link` (footer).
- **Section heading pattern:** `<SectionHead eyebrow="…" lead="…" wide>Plain words <span class="serif accent">accent words.</span></SectionHead>`
- **Scroll reveal:** add `data-reveal` to an element; it fades up once on entering the viewport. Disabled under reduced motion and without JS.
- **Motion:** respect `prefers-reduced-motion`; infinite animations must be stopped in the reduced-motion block at the end of `globals.css`.

## Path Alias

`@/` maps to `src/` (`tsconfig.json` paths; Astro/Vite reads it automatically).

## Deployment

Pushing to `main` triggers `.github/workflows/deploy.yml`: `npm ci` → lint → typecheck → build → upload `dist/` → deploy to `https://pkaranje.github.io`. GitHub Pages source must be **GitHub Actions** (so no `.nojekyll` is needed).

`.claude/settings.local.json` is personal and gitignored; don't commit it.

## Known Constraints

- `trailingSlash: "always"` — internal links end in `/` (anchors use `/#section`).
- Client `<script>` blocks are bundled; avoid importing `resume.ts` into them (pass values via `data-*` attributes instead).
- Tailwind v4: no pointer cursor on buttons by default (restored in `globals.css` base layer).
