# tenonstudio.github.io

The Tenon / 榫卯工坊 studio site, built with Astro and deployed to GitHub Pages.

## Structure

```text
src/
├── components/     shared UI, plus components/home for the landing-page art
├── data/           app, legal, and landing-page content
├── layouts/        BaseLayout (app pages) and HomeLayout (landing page)
├── pages/          routes
└── styles/         global.css (shared app pages) and home.css
public/             icons, downloads, appcasts, static assets, self-hosted fonts
scripts/            post-build route fixes
```

## Site config

`src/data/site.ts` is the single source for the studio name, Chinese name, brand,
email, GitHub handle/URL, and X handle/URL. It is imported at build time by the
homepage, `Header`, `Footer`, `BaseLayout`, and the JSON-LD in `HomeLayout`.

```ts
export const SITE = {
  name: 'Tenon Studio',
  nameZh: '榫卯工坊',
  shortName: 'Tenon',
  brand: 'tenon',
  email: 'tenonstudio@163.com',
  github: { handle: 'tenonstudio', url: 'https://github.com/tenonstudio' },
  x: { handle: 'TenonStudioHQ', url: 'https://x.com/TenonStudioHQ' }
} as const;
```

`astro.config.mjs` only holds Astro's `site` URL and build options; public studio
metadata belongs in `site.ts`. Use `.env` / `astro:env` for secrets rather than
this file. Static assets such as `public/site.webmanifest` and the OG image are
not imported; update them separately when the name changes.

## Homepage

The landing page is a single-page studio layout: the compact header and hero,
five full-width horizontal app cards, and the contact rows. It lives in
`src/pages/index.astro`, `src/layouts/HomeLayout.astro`, and
`src/styles/home.css`, with its card art in `src/components/home/`.

The page is bilingual and chooses its language automatically: browsers whose
primary language starts with `zh` get Simplified Chinese, everyone else gets
English. `?lang=zh` and `?lang=en` override that detection. Copy for both
languages lives in `src/data/home.ts`; the contact email there is the one copied
by the `c` shortcut.

The homepage and shared app pages use self-hosted Inter and Open Sans; see
`public/fonts/` and the SIL Open Font License files there. The Launchpad mirror
uses LaunchOS's original Google Fonts (Albert Sans, Geist, Plus Jakarta Sans).

## Launchpad page

`/apps/launchpad/` is a local mirror of <https://launchosapp.com/>, built from the
original server-rendered HTML, CSS, JavaScript, and images (used with permission
from the LaunchOS team). Upstream project:
<https://github.com/Remix-Design/LaunchOS>. It is not an Astro page: the document lives at
`public/apps/launchpad/index.html`, and the LaunchOS assets live alongside the
site assets under `public/assets/`. `src/pages/apps/[slug].astro` filters
`launchpad` out of the generic route so the public file is served instead.

The mirror keeps the LaunchOS layout, copy, pricing, downloads, testimonials,
languages, and interactions. The crawled page tree includes the homepage,
Features, Blog listing and articles, Download, Support, Compare, legal pages,
SEO landing pages, and all six locales (267 pages). Hosting-specific changes are
limited to:

- the Vue router base, patched from `/` to `/apps/launchpad/`;
- the full internal page tree mirrored under `public/apps/launchpad/`, with
  internal links rewritten to `/apps/launchpad/...`;
- `event.json` copied to the site root (the app fetches it from `/event.json`);
- removal of Cloudflare/Google/Baidu analytics and the Cloudflare email
  obfuscation script (the support address is written as a normal `mailto:`).

Google Fonts, App Store, Paddle/download, social, and other external links
remain external. The LaunchOS canonical/`hreflang` tags are kept as-is because
this is a mirror. The other app pages still use the shared Astro template.

## Checkout

All six apps have paid Dodo Payments checkout:

- Flip
- Porthole
- Tessera
- Launchpad
- Bubble
- Crate

Each app has three products: `Solo` (1 Mac), `Duo` (2 Macs), and
`Family` (5 Macs). Each app also has one Dodo Product Collection containing its
three products.

The product IDs and test/live selection live in `src/data/checkout.ts`. The
website never calls the Dodo API and never contains an API key: it only opens
Dodo static checkout links and shows the returned license key on the matching
`/apps/{slug}/buy/success/` page.

### GitHub Pages = live, local = test

The default is **live mode**. `npm run build` on GitHub Actions therefore points
at `https://checkout.dodopayments.com` and the live product IDs.

For local preview, `.env` (ignored by git) contains:

```text
PUBLIC_DODO_MODE=test
```

Then `npm run dev` / `npm run build` uses
`https://test.checkout.dodopayments.com` and the test product IDs, and the buy
page shows a “Test mode checkout” notice.

Do not deploy a test-mode build as the public store.

## Development

```bash
npm install
npm run dev       # http://localhost:4321
npm run build     # static output in dist/
npm run preview
```

The shared app pages (Flip, Porthole, Tessera, Bubble) use automatic
browser-language detection, with `?lang=zh` and `?lang=en` as explicit
overrides. English is the fallback. The Launchpad mirror uses LaunchOS's own
client-side locale selection instead of the shared `?lang` scheme.

Unknown routes are handled by `src/pages/404.astro`: paths under
`/apps/{known-slug}/...` redirect to that app (so `/apps/flip/sdsf` goes to
`/apps/flip/`), and every other unknown path redirects to `/`. The page uses a
meta refresh plus `location.replace`. GitHub Pages serves the generated
`dist/404.html`; the local `astro preview` server uses its own 404 for unknown
paths, so test the redirect by opening `/404.html` directly or by serving
`dist/` with a 404 fallback.

GitHub Pages is deployed from `dist/` by `.github/workflows/deploy.yml`.
