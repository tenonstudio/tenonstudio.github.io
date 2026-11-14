# tenonstudio.github.io

The Tenon / 榫卯 studio site, built with Astro and deployed to GitHub Pages.

## Structure

```text
src/
├── components/     shared UI (header, footer, app cards, art)
├── data/           app and legal content
├── layouts/        BaseLayout
├── pages/          routes
└── styles/         global design system
public/             icons, downloads, appcasts, static assets
scripts/            post-build route fixes
```

## Development

```bash
npm install
npm run dev       # http://localhost:4321
npm run build     # static output in dist/
npm run preview
```

The site is localized in English and Simplified Chinese through the existing
`data-lang` toggle. It follows the visitor's browser language and remembers an
explicit choice.

GitHub Pages is deployed from `dist/` by `.github/workflows/deploy.yml`.
The old hand-written pages were replaced by Astro components and content data.
