# pkaranje.github.io

Personal portfolio of Pratik Karanje: <https://pkaranje.github.io>

Astro · TypeScript · Tailwind CSS v4 · static HTML, no UI framework. The design system
(tokens, typography, components, light/dark theme) is adapted from
[giilab.github.io](https://github.com/giilab/giilab.github.io).

## Running it

```bash
npm install
npm run dev        # http://localhost:4321
npm run build      # static site into ./dist
npm run preview    # serve ./dist locally
npm run lint
npm run typecheck  # astro check
```

Or use `make` (run `make` alone to list targets): `make setup`, `make dev`, `make check`, `make build`, `make preview`, `make ci`, `make clean`.

## Editing content

All résumé content lives in `src/data/resume.ts`. Site-level settings (URL, résumé PDF
paths, nav sections) live in `src/lib/site.ts`. `robots.txt`, `sitemap.xml` and
`llms.txt` are generated from these at build time.

## Deployment

Pushing to `main` runs `.github/workflows/deploy.yml`: lint, type-check, build, then
publish `dist/` to GitHub Pages.
