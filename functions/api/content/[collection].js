// Cloudflare Pages Function: GET /api/content/<collection>
// Read-only proxy for the Allspire CMS (as_* tables on the shared Supabase project). Returns
// PUBLISHED rows only, edge-cached for five minutes, so the browser never sees the Supabase
// URL and a publish shows up without a rebuild.
//
// Required environment variables on the Pages project: SUPABASE_URL, SUPABASE_ANON_KEY.

const COLLECTIONS = {
  logos: { table: "as_logo", select: "id,name,logo_url,website,sort", order: "sort.asc,created_at.asc" },
  stats: { table: "as_stat", select: "id,label,value,sort", order: "sort.asc,created_at.asc" },
  "case-studies": {
    table: "as_case_study",
    select: "id,slug,title,client,industry,summary,challenge,solution,outcome,cover_url,body_md,sort,updated_at",
    order: "sort.asc,created_at.desc",
  },
  testimonials: { table: "as_testimonial", select: "id,quote,name,role,company,photo_url,sort", order: "sort.asc,created_at.asc" },
  team: { table: "as_team_member", select: "id,name,role,bio,photo_url,linkedin,sort", order: "sort.asc,created_at.asc" },
  copy: { table: "as_copy", select: "key,value", order: "key.asc" },
  webinar: {
    table: "as_webinar",
    select: "title,schedule,time_label,registration_url,facilitator_name,facilitator_role,facilitator_photo_url,topics",
    order: "",
  },
};

const json = (body, status = 200, cacheControl = "no-store") =>
  new Response(JSON.stringify(body), {
    status,
    headers: { "Content-Type": "application/json; charset=utf-8", "Cache-Control": cacheControl },
  });

export async function onRequestGet(context) {
  const { request, env, params, waitUntil } = context;
  const spec = COLLECTIONS[params.collection];
  if (!spec) return json({ error: "Unknown collection." }, 404);
  if (!env.SUPABASE_URL || !env.SUPABASE_ANON_KEY) return json({ error: "Content source not configured." }, 503);

  const cache = caches.default;
  const cacheKey = new Request(new URL(request.url).toString(), { method: "GET" });
  const hit = await cache.match(cacheKey);
  if (hit) return hit;

  const base = env.SUPABASE_URL.replace(/\/+$/, "");
  const url =
    `${base}/rest/v1/${spec.table}?select=${encodeURIComponent(spec.select)}&published=eq.true` +
    (spec.order ? `&order=${encodeURIComponent(spec.order)}` : "");

  let upstream;
  try {
    upstream = await fetch(url, {
      headers: {
        apikey: env.SUPABASE_ANON_KEY,
        Authorization: `Bearer ${env.SUPABASE_ANON_KEY}`,
        Accept: "application/json",
      },
      signal: AbortSignal.timeout(8000),
    });
  } catch {
    return json({ error: "Content source unreachable." }, 502);
  }
  if (!upstream.ok) return json({ error: "Content source error." }, 502);

  const rows = await upstream.json().catch(() => null);
  if (!Array.isArray(rows)) return json({ error: "Bad content payload." }, 502);

  const res = json(rows, 200, "public, max-age=60, s-maxage=300, stale-while-revalidate=600");
  waitUntil(cache.put(cacheKey, res.clone()));
  return res;
}
