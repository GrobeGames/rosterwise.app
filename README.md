# rosterwise.app

Marketing website for **RosterWise™** — College Sports Recruiting Intelligence.

Deployed via **Cloudflare Pages** from the `main` branch. Every push to `main` triggers an auto-deploy.

## Site structure

```
/                   → index.html (marketing landing page)
/privacy            → privacy.html
/takedown           → takedown.html
/disclaimer         → disclaimer.html
/support            → support.html
/assets/            → logos, favicons, CSS
```

Clean URLs are handled by `_redirects` (Cloudflare Pages feature).

## Build

```bash
npm run build
```

This runs two steps:
1. **`generate-sitemap`** — regenerates `sitemap.xml` from all HTML files
2. **`check-seo`** — validates that `robots.txt` and `sitemap.xml` exist and are correct

### Cloudflare Pages build config

- **Build command:** `npm run build`
- **Build output directory:** `.` (root)
- **Production branch:** `main`

## SEO Infrastructure

### robots.txt

Located at the site root. Allows all crawlers, blocks `/admin/` and `/_build/` paths, and points to the sitemap.

### Sitemap generator

**Script:** `scripts/generate-sitemap.js`

- Auto-discovers all `.html` files in the site root (recursively)
- Generates a valid `sitemap.xml` following the sitemaps.org 0.9 spec
- Includes `<loc>`, `<lastmod>`, `<changefreq>`, and `<priority>` for each URL
- Runs automatically on every build via `npm run build`

**Run manually:**

```bash
npm run generate-sitemap
```

**Adding a new page type to the config:**

Edit the `PATH_CONFIG` array at the top of `scripts/generate-sitemap.js`. For example, to add sport program pages:

```js
{ pattern: /^\/soccer\/programs\/.+$/, priority: "0.7", changefreq: "weekly" },
```

First match wins, so put more specific patterns before the catch-all.

### SEO check

**Script:** `scripts/check-seo.js`

Runs as part of the build and fails with a non-zero exit code if:
- `robots.txt` is missing
- `sitemap.xml` is missing
- `sitemap.xml` doesn't reference `https://rosterwise.app`
- `sitemap.xml` isn't valid XML

## Legal pages

- Privacy Policy (`/privacy`)
- Takedown Policy (`/takedown`)
- Disclaimer (`/disclaimer`)
- Support (`/support`)

## Brand

- **Product:** RosterWise™
- **Company:** Grobe Games LLC
- **Domain:** rosterwise.app
- **Colors:** Navy (#1a2744) + Gold (#c8a44e)
