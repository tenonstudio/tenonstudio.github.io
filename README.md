# tenonstudio.github.io

The Tenon / 榫卯工坊 studio site, built with Astro and deployed to GitHub Pages.

## Structure

```text
src/
├── components/     shared UI, plus components/home for the landing-page art
├── data/           app, legal, support, and landing-page content
├── layouts/        AppLayout (app pages) and HomeLayout (landing page)
├── pages/          routes
└── styles/         global.css (shared app pages) and home.css
public/             icons, downloads, appcasts, static assets, self-hosted fonts
scripts/            post-build route fixes
```

## App pages

Every `/apps/{slug}/` page (product, buy, support, privacy, and terms) uses
`AppLayout`. It renders that app's own header and footer instead of the studio
header and footer. The header carries the app icon, name, Overview / Support /
Privacy / Terms navigation, and a download or in-development CTA. The footer
shows the app tagline, platform, category, legal links, and a small Tenon Studio
credit. Support is the single help surface; the old scripting-guide pages were
removed.

## Site config

`src/data/site.ts` is the single source for the studio name, Chinese name, brand,
email, GitHub handle/URL, and X handle/URL. It is imported at build time by the
homepage, `AppLayout`, and the JSON-LD in `HomeLayout`.

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
six full-width horizontal app cards, a second set of app cards for apps in
development, and the contact rows. It lives in
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

`/apps/launchpad/` now uses the shared Astro app page with the paid Tenon
Launchpad license and Dodo checkout. The old LaunchOS mirror landing page was
removed; its nested reference pages and assets remain under
`public/apps/launchpad/` but are no longer the product landing page.

The LaunchOS mirror was built from the
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

All six shipping apps have paid Dodo Payments checkout:

- Flip
- Porthole
- Tessera
- Launchpad
- Bubble
- Crate

Each app has three products: `Solo` (1 Mac), `Duo` (2 Macs), and
`Family` (5 Macs). Each app also has one Dodo Product Collection containing its
three products. The five workshop apps do not have checkout yet.

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

Apps in `src/data/apps.ts` may set `status: 'in-development'`. They appear in
the homepage workshop list and get a coming-soon app page. Privacy, support,
and terms pages are generated for every app; checkout stays limited to shipping
apps until a download and license exist.

## Development

```bash
npm install
npm run dev       # http://localhost:4321
npm run build     # static output in dist/
npm run preview
```

Each app exposes `/apps/{slug}/privacy.html`, `/apps/{slug}/support.html`, and
`/apps/{slug}/terms.html` for App Store Connect and the About/paywall links.
Those paths are fixed through `scripts/fix-legal-routes.mjs` after the Astro
build.

The privacy and terms copy is a product-specific draft, not legal advice.
Before App Store submission, confirm the legal entity, business address,
governing law, and refund wording with counsel.

The shared app pages use automatic browser-language detection, with `?lang=zh`
and `?lang=en` as explicit overrides. English is the fallback. The Launchpad
mirror uses LaunchOS's own client-side locale selection instead of the shared
`?lang` scheme.

Unknown routes are handled by `src/pages/404.astro`: paths under
`/apps/{known-slug}/...` redirect to that app (so `/apps/flip/sdsf` goes to
`/apps/flip/`), and every other unknown path redirects to `/`. The page uses a
meta refresh plus `location.replace`. GitHub Pages serves the generated
`dist/404.html`; the local `astro preview` server uses its own 404 for unknown
paths, so test the redirect by opening `/404.html` directly or by serving
`dist/` with a 404 fallback.

GitHub Pages is deployed from `dist/` by `.github/workflows/deploy.yml`.
