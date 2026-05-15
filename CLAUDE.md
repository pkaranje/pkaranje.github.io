# CLAUDE.md — pkaranje.github.io

Personal portfolio website for Pratik Karanje. Static site deployed to GitHub Pages via GitHub Actions.

## Tech Stack

| Layer | Tool |
|---|---|
| Framework | React 18 + TypeScript |
| Build | Vite 4 |
| Styling | Tailwind CSS 3 |
| Animation | Framer Motion 12 |
| Particles | @tsparticles/react + @tsparticles/slim |
| Icons | lucide-react v1 (note: no `Github`/`Linkedin` icons — use `GitBranch`/`Link2`) |
| Utilities | clsx + tailwind-merge → `cn()` at `src/lib/utils.ts` |
| Deployment | GitHub Actions → GitHub Pages (`dist/`) |

## Commands

```bash
npm run dev        # start dev server at localhost:5173
npm run build      # tsc type-check + vite build → dist/
npm run preview    # preview production build at localhost:4173
```

Always run `npm run build` after making changes to confirm zero TypeScript errors before committing.

## Project Structure

```
src/
├── App.tsx                          # Root — composes Navbar + all sections
├── index.css                        # Tailwind directives + dot-grid utility class
├── main.tsx                         # React entry point
├── data/
│   └── resume.ts                    # ★ Single source of truth for ALL content
├── lib/
│   └── utils.ts                     # cn() helper (clsx + twMerge)
└── components/
    ├── Navbar.tsx                   # Fixed top nav, active section tracking
    ├── ui/
    │   └── sparkles.tsx             # SparklesCore (tsparticles wrapper)
    └── sections/
        ├── Hero.tsx                 # Two-column card: text left / photo right
        ├── Skills.tsx               # 8 skill category cards
        ├── Experience.tsx           # Work history cards
        ├── Certifications.tsx       # Certs + education + languages
        ├── Projects.tsx             # 6 project cards
        └── Contact.tsx              # Contact link cards + email CTA

public/
├── profile.jpeg                     # Profile photo (served at /profile.jpeg)
└── CV_Detailed_Pratik_Karanje.pdf   # Resume PDF (linked from hero Download button)
```

## Content Updates

**All resume data lives in `src/data/resume.ts` only.** Never hardcode content in components. The file exports:

- `personal` — name, title, email, phone, github, linkedin, location, summary
- `skills` — array of `{ category, items[] }`
- `experience` — array of `{ role, company, period, highlights[] }`
- `projects` — array of `{ name, org, tech[], description, link? }`
- `certifications` — array of `{ name, issuer, status }`
- `education` — array of `{ degree, institution, period }`

## Design System

**Theme:** Light. Background `#f0f4f8` (`bg-brand-50`) with `dot-grid` class (radial-gradient dots defined in `index.css`).

**Section alternation:**
- `dot-grid` sections: Hero, Skills, Certifications, Contact
- `bg-white` sections: Experience, Projects

**Cards:** `bg-white rounded-2xl border border-gray-100 shadow-sm` — standard card pattern used everywhere.

**Typography:**
- Section eyebrow: `text-sm font-semibold text-gray-400 uppercase tracking-widest`
- Section heading: `text-4xl md:text-5xl font-bold text-gray-900`
- Body: `text-sm text-gray-500 leading-relaxed`

**Buttons:**
- Primary (dark): `px-6 py-3 rounded-full bg-gray-900 text-white font-semibold hover:bg-gray-700`
- Secondary (outline): `px-6 py-3 rounded-full border border-gray-200 text-gray-700 hover:border-gray-400`

**Animations:** All use Framer Motion `whileInView` with `viewport={{ once: true }}`. Standard pattern:
```tsx
<motion.div
  initial={{ y: 24, opacity: 0 }}
  whileInView={{ y: 0, opacity: 1 }}
  viewport={{ once: true }}
  transition={{ duration: 0.55 }}
>
```
Use `ease: "easeOut"` (string) not an array — the installed framer-motion version rejects numeric arrays for `ease`.

## Path Alias

`@/` maps to `src/` (configured in both `vite.config.ts` and `tsconfig.json`).

```ts
import { cn } from "@/lib/utils";       // ✓
import { cn } from "../../lib/utils";   // also fine
```

## Deployment

Pushing to `main` triggers `.github/workflows/deploy.yml` which:
1. Runs `npm ci && npm run build`
2. Uploads `dist/` as a Pages artifact
3. Deploys to `https://pkaranje.github.io`

GitHub Pages source must be set to **GitHub Actions** (not branch) in repo Settings → Pages.

## Known Constraints

- `lucide-react@1.x` does not export `Github` or `Linkedin` — use `GitBranch` and `Link2` instead.
- `base: "./"` is set in `vite.config.ts` so asset paths work correctly on GitHub Pages.
- The `SparklesCore` component (`src/components/ui/sparkles.tsx`) uses `initParticlesEngine` which only initialises once globally — do not instantiate it in components that mount/unmount frequently.
- Profile photo fallback uses `ui-avatars.com` if `/profile.jpeg` fails to load (Hero component `onError` handler).
