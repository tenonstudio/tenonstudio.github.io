# Tenon / 榫卯 — studio site

A static, dependency-free studio website for Tenon, with product pages for Flip, Porthole, and Porthole for Chrome.

## Preview

```bash
python3 -m http.server 8765 --directory StudioSite
open http://127.0.0.1:8765/
```

English preview:

```text
http://127.0.0.1:8765/?lang=en
```

Mobile preview: Chrome DevTools device mode, or resize the window below 640px.

## Structure

```text
StudioSite/
├── index.html          # single-page studio site
├── styles.css          # editorial layout, light/dark, responsive
├── script.js           # language switch, reveal-on-scroll, sticky header
├── assets/
│   ├── flip-icon.png
│   ├── magic-mirror-icon.png
│   └── tenon-favicon.svg
└── preview/            # design-review screenshots
```

## Current links

- Flip → /apps/flip/ (download still points to the existing site)
- Porthole → /apps/porthole/ (download still points to the existing site)
- Porthole for Chrome → /apps/porthole-for-chrome/
- GitHub → https://github.com/tenonstudio

All product cards link to in-site pages under `apps/`. Download buttons still point at the existing app sites until the new releases are hosted under Tenon.

## Deploy

The folder can be deployed as-is to Cloudflare Pages, Netlify, Vercel, or GitHub Pages.

Suggested production shape:

- `tenon.studio` → this site
- `flip.tenon.studio` or existing app URL → Flip
- `magic-mirror.tenon.studio` or existing app URL → Porthole

Check domain, GitHub organization, and trademark availability before committing to a public domain.

## Notes

- Language defaults to the browser language, can be forced with `?lang=en` or `?lang=zh`, and persists in `localStorage`.
- The Flip icon is still sourced from the existing Flip packaging assets; replace it with the final original studio/app artwork before a commercial launch.
- No analytics, no newsletter backend, no cookies.
