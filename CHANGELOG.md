# Changelog

Notable changes to allspire.tech. Entries are grouped by ship date, newest first.

## 2026-09-03: Faster first load, self-hosted fonts, security headers

### Changed

- **Smaller bundles.** Every page except Home is its own chunk, and React and Radix sit in
  long-lived vendor chunks, so a repeat visit after a deploy re-downloads only what changed.
  Main bundle drops from 675 kB to 148 kB (plus a 163 kB React chunk cached across deploys).
- **No animation library.** Scroll reveals, the hero entrance and the mobile menu now use CSS
  transitions and keyframes; framer-motion is gone from the dependencies.
- **WebP images with dimensions.** The dashboard shot, facilitator photo, hero image and logo
  are WebP at their display size (313 kB to 34 kB for the dashboard) with width and height set,
  so nothing shifts while they load.
- **Self-hosted fonts.** Sora and Work Sans load from /fonts with a preload for the two files the
  first paint needs; the Google Fonts connection is gone.
- **Headers.** Immutable caching for /assets and /fonts, plus a Content-Security-Policy,
  nosniff, referrer and frame-ancestors headers. The theme script moved to /theme-init.js so
  the policy needs no inline scripts.
## 2026-09-03: SEO foundation, prerendered routes, sitemap, structured data

### Added

- **Prerendered pages.** Every static route ships its own HTML with the right title, description,
  canonical and Open Graph tags, so crawlers and link previews no longer see the home page meta
  on every URL. Built by `scripts/prerender.mjs` from `src/seo/routes.json`.
- **Sitemap and robots.** `/sitemap.xml` is generated at the edge from the static routes plus every
  published case study (paged, so nothing is dropped as the list grows). `robots.txt` points at it.
- **Structured data.** Organization and WebSite JSON-LD on the home page, and a recurring Event on
  the webinar page for the Saturday masterclass.
- **Case-study meta at the edge.** `/work/<slug>` gets the story title, summary and cover injected
  before the app loads; unknown, unpublished or malformed slugs return a noindex shell.
- **Share card.** A 1200x630 Open Graph image rendered from `scripts/og-card.html`.

### Changed

- Client-side navigation keeps the canonical URL and og:url in sync with the address bar.

## 2026-09-03 — Site refresh: evolved identity, CMS-fed proof, dark mode

### Changed

- **Identity.** Indigo brand on navy surfaces, Sora headings with Work Sans body, a light blueprint
  grid instead of gradient orbs and glass. One primary call to action everywhere: "Talk to us".
- **Home** rebuilt: hero with the real iTrova screenshot, services bento, product spotlight,
  industries, "why Allspire" navy band, webinar promo and a closing CTA band.
- **Services, About, Industry pages, Products, Contact, Webinar, 404** restyled on the same system.
  Industry pages drop the invented statistics and show real proof only (iTrova for retail, CMS case
  studies elsewhere). Contact gains a WhatsApp primary button and copy-to-clipboard cards.
- **Footer** names the legal entity: Allspire Technologies Limited, RC 9702176.
- **Dark mode** is a token swap: navy page, lifted indigo for buttons and links, OS preference first
  and a remembered choice after, painted before React mounts so there is no flash.

### Added

- **Allspire CMS integration.** Client logos, stats, case studies, testimonials, team, page copy and
  the webinar record are read from the Allspire section of the iTrova CRM through a Pages Function
  (`/api/content/<collection>`, published rows only, edge-cached five minutes). Every proof section
  hides until something is published, so the site never shows placeholders.
- **Work** (`/work`, `/work/<slug>`): case-study listing with industry filter and full story pages
  (markdown body). The nav link appears once the first story is published.
- Copy lint test: no em dashes in anything a visitor can read.

### Notes

- Pages project needs `SUPABASE_URL` and `SUPABASE_ANON_KEY` (already set for the affiliate form).
- Local dev without functions shows the bundled fallbacks; `wrangler pages dev dist` with the two
  bindings exercises the live path.
