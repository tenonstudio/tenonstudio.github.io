# Tenon brand assets

Primary studio mark: **Tenon T**.

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
| `favicon.ico` | 16 / 32 / 48 favicon |
| `tenon-og.png` | 1200 × 630 social preview |
| `alternates/avatar-b.svg` | alternative: two-material joint |
| `alternates/avatar-c.svg` | alternative: seal |

## Colors

| Name | Hex |
|---|---|
| Ink | `#171512` |
| Paper | `#F2EEE6` |
| Brass | `#B4864D` |
| Brass highlight | `#D0A46C` |

## Usage

- Keep at least 10% clear space around the mark.
- Use the mark on the dark ink background; do not recolor the brass stem.
- The avatar is designed to remain readable inside a circular crop.
- Use `tenon-og.png` for social previews, link previews, and press material.

The selected direction is A: a cream T-bar with a brass tenon stem. The two alternates are kept for reference only.

## Website integration

- Favicons and Apple touch icon are already wired in `index.html`.
- `site.webmanifest` uses the 192px and 512px avatars.
- `tenon-og.png` is referenced by the Open Graph / Twitter meta tags.
- Before production, change the OG image meta value to an absolute URL on the final domain, e.g. `https://tenon.studio/assets/brand/tenon-og.png`.
