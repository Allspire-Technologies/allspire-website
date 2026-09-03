// GET /sitemap.xml: the static routes plus every published case study, so a story published
// after the last build is discoverable without a rebuild. Edge-cached for an hour.
import { routes } from "../src/seo/routes.json";

const SITE_URL = "https://allspire.tech";
const esc = (s) => String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

export async function onRequestGet({ request, env, waitUntil }) {
  const cache = caches.default;
  const cacheKey = new Request(`${new URL(request.url).origin}/sitemap.xml`, { method: "GET" });
  const hit = await cache.match(cacheKey);
  if (hit) return hit;

  const today = new Date().toISOString().slice(0, 10);
  const entries = routes
    .filter((r) => !["/privacy", "/terms", "/dpa"].includes(r.path))
    .map((r) => ({ loc: `${SITE_URL}${r.path === "/" ? "/" : r.path}`, lastmod: today }));

  if (env.SUPABASE_URL && env.SUPABASE_ANON_KEY) {
    try {
      const res = await fetch(
        `${env.SUPABASE_URL.replace(/\/+$/, "")}/rest/v1/as_case_study?select=slug,updated_at&published=eq.true&order=updated_at.desc&limit=500`,
        { headers: { apikey: env.SUPABASE_ANON_KEY, Authorization: `Bearer ${env.SUPABASE_ANON_KEY}` }, signal: AbortSignal.timeout(8000) },
      );
      const rows = res.ok ? await res.json() : [];
      for (const r of Array.isArray(rows) ? rows : []) {
        if (typeof r?.slug === "string" && /^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(r.slug)) {
          entries.push({ loc: `${SITE_URL}/work/${r.slug}`, lastmod: String(r.updated_at ?? today).slice(0, 10) });
        }
      }
    } catch {
      /* the static routes are still a valid sitemap */
    }
  }

  const xml =
    `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n` +
    entries.map((e) => `  <url><loc>${esc(e.loc)}</loc><lastmod>${esc(e.lastmod)}</lastmod></url>`).join("\n") +
    `\n</urlset>\n`;
  const out = new Response(xml, {
    headers: { "Content-Type": "application/xml; charset=utf-8", "Cache-Control": "public, max-age=300, s-maxage=3600" },
  });
  waitUntil(cache.put(cacheKey, out.clone()));
  return out;
}
