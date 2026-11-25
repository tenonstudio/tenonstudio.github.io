# Tenon brand assets

Primary studio mark: **Tenon joint** — an interlocking, seven-piece tenon lattice.

## Files

| File | Use |
|---|---|
| `tenon-avatar.svg` | editable source |
| `tenon-avatar-1024.png` | Studio avatar / press |
| `tenon-avatar-512.png` | app / profile / social |
| `tenon-avatar-256.png` | general web |
| `tenon-avatar-192.png` | PWA icon |
| `tenon-avatar-180.png` | Apple touch icon |
| `tenon-avatar-128.png` | small web icon |
| `tenon-avatar-64.png` | small UI / avatar |
| `tenon-avatar-48.png` | favicon source |
| `tenon-avatar-32.png` | favicon |
| `tenon-avatar-16.png` | browser tab |
| `../../favicon.ico` | 16 / 32 / 48 favicon |
| `../../favicon.svg` | scalable favicon |
| `tenon-og.png` | 1200 × 630 social preview |
| `alternates/avatar-b.svg` | alternative: two-material joint |
| `alternates/avatar-c.svg` | alternative: seal |

## Colors

| Name | Hex |
|---|---|
| Paper | `#EAE6DA` |
| Tenon | `#4F3F34` |

## Usage

- Keep at least 10% clear space around the mark.
- Use the brown mark on the paper background; do not add a second accent color.
- The rounded square is part of the mark. Do not crop it to a circle.
- Use `tenon-og.png` for social previews, link previews, and press material.

## Website integration

- `HomeLayout.astro` and `BaseLayout.astro` use `favicon.ico`, `tenon-avatar.svg`, and `tenon-avatar-180.png`.
- `site.webmanifest` uses the 192px and 512px avatars.
- Favicon URLs include `?v=tenon` so browsers replace the previous mark instead of keeping it cached.
- App pages use each app's own icon rather than the studio mark.
