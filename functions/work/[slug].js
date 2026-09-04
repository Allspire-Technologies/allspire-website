// GET /work/<slug>: case studies are published after build time, so crawlers and link
// unfurlers get the story's title, description, canonical and cover injected at the edge into
// the prerendered /work shell. The SPA then hydrates and renders the page as usual.

const SITE_URL = "https://allspire.tech";
const SLUG = /^[a-z0-9]+(?:-[a-z0-9]+)*$/;
const esc = (s) => String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");

// Keep the headers the static shell carries (CSP and friends from public/_headers, which the
// nonce middleware then extends); only the type and cache policy are set here.
const htmlResponse = (shell, html, status = 200) => {
  const headers = new Headers(shell.headers);
  headers.set("Content-Type", "text/html; charset=utf-8");
  headers.set("Cache-Control", "public, max-age=0, must-revalidate");
  headers.delete("ETag");
  headers.delete("Content-Length");
  return new Response(html, { status, headers });
};

// Unknown, unpublished or malformed slug: same shell (the client renders its not-found page), 404 status, noindex.
const noindexResponse = (shell, html) =>
  htmlResponse(shell, html.replace("</head>", '<meta name="robots" content="noindex, nofollow" />\n  </head>'), 404);

export async function onRequestGet({ request, env, params }) {
  const shell = await env.ASSETS.fetch(new Request(new URL("/work", request.url).toString(), request));
  const html = await shell.text();
  const slug = String(params.slug ?? "");
  if (!SLUG.test(slug)) return noindexResponse(shell, html);
  if (!env.SUPABASE_URL || !env.SUPABASE_ANON_KEY) return htmlResponse(shell, html);

  try {
    const res = await fetch(
      `${env.SUPABASE_URL.replace(/\/+$/, "")}/rest/v1/as_case_study?select=title,summary,cover_url&slug=eq.${slug}&published=eq.true&limit=1`,
      {
        headers: { apikey: env.SUPABASE_ANON_KEY, Authorization: `Bearer ${env.SUPABASE_ANON_KEY}` },
        signal: AbortSignal.timeout(8000),
        cf: { cacheTtl: 300, cacheEverything: true },
      },
    );
    const rows = res.ok ? await res.json() : [];
    const story = Array.isArray(rows) ? rows[0] : null;
    if (!story || typeof story.title !== "string") return noindexResponse(shell, html);
    const title = `${story.title} | Allspire case study`;
    const desc = typeof story.summary === "string" && story.summary.trim() ? story.summary : "A project story from Allspire Technologies.";
    const url = `${SITE_URL}/work/${slug}`;
    const cover = typeof story.cover_url === "string" && /^https:\/\//.test(story.cover_url) ? story.cover_url : null;
    const injected = html
      .replace(/<title>[\s\S]*?<\/title>/, `<title>${esc(title)}</title>`)
      .replace(/(<meta name="description" content=")[^"]*(")/, `$1${esc(desc)}$2`)
      .replace(/(<link rel="canonical" href=")[^"]*(")/, `$1${esc(url)}$2`)
      .replace(/(<meta property="og:type" content=")[^"]*(")/, "$1article$2")
      .replace(/(<meta property="og:title" content=")[^"]*(")/, `$1${esc(title)}$2`)
      .replace(/(<meta property="og:description" content=")[^"]*(")/, `$1${esc(desc)}$2`)
      .replace(/(<meta property="og:url" content=")[^"]*(")/, `$1${esc(url)}$2`)
      .replace(/(<meta property="og:image" content=")[^"]*(")/, cover ? `$1${esc(cover)}$2` : "$1$2")
      .replace(/(<meta name="twitter:title" content=")[^"]*(")/, `$1${esc(title)}$2`)
      .replace(/(<meta name="twitter:description" content=")[^"]*(")/, `$1${esc(desc)}$2`);
    return htmlResponse(shell, injected);
  } catch {
    return htmlResponse(shell, html);
  }
}

// Pages routes HEAD only to a HEAD handler; without this, HEAD /work/<unknown> fell through to the 200 shell.
export const onRequestHead = onRequestGet;
