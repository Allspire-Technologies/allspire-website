# Codebase map: allspire.tech (agency site)

Read this before you start, and again before you commit. It covers where things live and the
flows you keep needing. If it disagrees with the code, the code wins: fix the map in the same
change. If your work changes anything described here, update it in the same commit, so the next
agent inherits what you learned instead of rediscovering it.

The public site for Allspire Technologies: services, industries, work, products, webinar, legal.
React + Vite + TypeScript, Tailwind and shadcn/ui, deployed to **Cloudflare Pages** (not Workers,
unlike the iTrova site), with Pages Functions for the API. It has no Supabase client of its own:
everything it reads comes through those functions.

iTrova is one of the products presented here, but the iTrova marketing site is a separate repo
([itrova-website](../../itrova-website)). The two sites keep separate CMS tables and separate
legal text by design.

## Layout

```
src/
  App.tsx              Routes, lazy-loaded through lazyWithRetry.
  config/
    company.ts         Company facts (address, RC number, contact).
    itrova.ts          Links across to the iTrova product and site.
    routes.json        Route list, shared with the sitemap and 404 handling.
  pages/               One file per route.
  components/
    PageLayout.tsx     Navbar + footer frame every page renders into.
    LegalPage.tsx      The CMS-backed frame the three legal pages render into.
    site/              Home-page and marketing sections.
  data/                Bundled SNAPSHOTS: allspire (logos, stats, case studies...), industries,
                       products, docs. The fallback rendered before (or instead of) the CMS.
  hooks/
    useContent.ts      Snapshot-then-swap fetch of /api/content/<collection>.
    useSiteContent.ts  The site-wide copy collection.
    useSeo.ts          Per-route title, description, canonical, OG and robots tags.
  lib/
    markdown.tsx       CMS markdown: marked (GFM) + DOMPurify. The only sanitiser. Use it.
    legalDoc.ts        Pure: row mapping, version selection, date formatting.
    safeUrl.ts         URL guards for external and form links.
  test/                vitest specs, including the copy-rule guardrail.
functions/             Cloudflare Pages Functions (the API).
  _middleware.js       Runs on every request.
  api/content/[collection].js   Read-only CMS proxy. The allowlist lives here.
  api/contact.js       Contact form handler.
  work/[slug].js       Per-case-study HTML for crawlers.
  sitemap.xml.js       Sitemap.
```

## Key flows

### Content: snapshot, then swap

Every CMS-backed section renders from a bundled snapshot in `src/data/`, then swaps in published
rows from `/api/content/<collection>`. `useContent` returns `{ data, source, loaded }` where
source is `snapshot | live`; a failed or missing API keeps the snapshot, so the page never blanks.
Requests are de-duplicated and cached for the session.

**Two copies of the truth exist on purpose.** When you change what a section shows, change the
snapshot in `src/data/` as well as the CMS row, or the first paint will disagree with the second.

### The content proxy is the only door to the database

`functions/api/content/[collection].js` holds `COLLECTIONS`, an allowlist mapping a collection
name to a table, a select list, an order and a limit. It appends `published=eq.true` itself, so an
unpublished row can never leak, caches at the edge for five minutes, and 404s any name not in the
allowlist. The browser never sees the Supabase URL or key. **To expose new content you must add an
entry there**; there is no dynamic query building.

Current collections: `logos`, `stats`, `case-studies`, `testimonials`, `team`, `copy`, `webinar`,
`legal`.

Requires `SUPABASE_URL` and `SUPABASE_ANON_KEY` on the Pages project; without them the endpoint
returns 503 and every page falls back to its snapshot.

### Markdown from the CMS

`src/lib/markdown.tsx` is the single sanitiser. marked parses GFM (tables, fenced code, ordered
list starts); raw HTML inside the markdown is **escaped, not passed through**; DOMPurify then
strips anything dangerous, drops links whose URL was rejected (rendering them as plain text rather
than empty anchors), adds `target="_blank" rel="noopener noreferrer"` to external links and lazy
loading to images. Never render CMS markdown any other way.

### Legal pages

`/terms`, `/privacy` and `/dpa` are edited in the CRM (Allspire → Legal), stored in
`as_legal_doc` as one row per version with an `effective_at` date.

- `pickLegalVersion` serves the latest version whose date has arrived and reports the nearest
  future one as `upcoming`. A future-dated published row is a *scheduled* change: the page keeps
  the current text and announces the new one with a link to read it early.
- `isCalendarDate` rejects dates that have the right shape but are not real days, so an impossible
  value cannot be selected as in force or displayed as a different day.
- The JSX in each page is the snapshot fallback, kept as a full copy of the text.
- `seoTitle` is passed separately from the heading so a renamed CMS row cannot move the search
  listing.

### SEO

`useSeo(title, description, { noindex })` sets the document title, description, OG and Twitter
tags, and keeps the canonical URL in step with client-side navigation. The SPA fallback answers
200 for every path, so a page that should not be indexed (an unknown `/work/:slug`) must say so
itself with `noindex`.

### Deploy

Cloudflare Pages. Functions deploy from `functions/` alongside the static build. There is no
wrangler config for the site itself; `npm run dev` is plain Vite, so `/api/*` is **not** served
locally and pages fall back to their snapshots. To exercise the live path locally, stub the routes
with a Playwright script or run the Pages dev server.

## Testing

`npm test` (vitest). There is no Playwright here. For browser checks, run the dev server and drive
it with a Playwright script that stubs `/api/content/*`, which also exercises the fallback paths.

`src/test/copyLint.test.ts` is a guardrail, not a unit test: it scans `src/` and `functions/` and
fails on an em dash anywhere a visitor can read.

## Conventions

- **No em dashes anywhere a visitor can read.** Enforced by `copyLint`.
- Mobile first. Nothing may scroll horizontally at 390px.
- The guide's "What's new" keeps only the latest three entries; drop the oldest when adding one.
- Branch, commit, PR. Never push to `main`.
