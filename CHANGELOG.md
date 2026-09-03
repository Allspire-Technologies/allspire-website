# Changelog

Notable changes to allspire.tech. Entries are grouped by ship date, newest first.

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
