# Tenon / 榫卯 — studio site

A static, dependency-free studio website for Tenon, collecting the macOS apps Flip and Magic Mirror.

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

- Flip → https://gamepunk.github.io/Flip/
- Magic Mirror → https://gamepunk.github.io/magic-mirror/
- GitHub → https://github.com/gamepunk

The two product links point at the existing app sites. When the studio site gets its own domain, these can move to `/apps/flip` and `/apps/magic-mirror`.

## Deploy

The folder can be deployed as-is to Cloudflare Pages, Netlify, Vercel, or GitHub Pages.

Suggested production shape:

- `tenon.studio` → this site
- `flip.tenon.studio` or existing app URL → Flip
- `magic-mirror.tenon.studio` or existing app URL → Magic Mirror

Check domain, GitHub organization, and trademark availability before committing to a public domain.

## Notes

- Language defaults to the browser language, can be forced with `?lang=en` or `?lang=zh`, and persists in `localStorage`.
- The Flip icon is still sourced from the existing Flip packaging assets; replace it with the final original studio/app artwork before a commercial launch.
- No analytics, no newsletter backend, no cookies.
