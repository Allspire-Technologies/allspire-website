// Runs in front of every document request (public/_routes.json keeps static files out).
//
// 1. Hard 404s. Pages answers unknown paths with the SPA shell and a 200 (a "soft 404" to
//    crawlers). For a path that is neither a prerendered route nor a function route, the shell
//    is still returned so the client can render its not-found page, but with status 404 and a
//    noindex tag.
// 2. Per-response CSP nonce for HTML. Cloudflare injects its bot-detection bootstrap as an
//    inline script and, per its docs, copies a nonce it finds in the CSP header onto that
//    script. The base policy lives in public/_headers; this adds 'nonce-...' to script-src.
import { routes } from "../src/seo/routes.json";

const KNOWN = new Set(routes.map((r) => r.path));
// Client-side redirects and function routes that are not in routes.json.
const DYNAMIC = [/^\/work\/[^/]+$/, /^\/api\//, /^\/sitemap\.xml$/, /^\/projects$/, /^\/industries$/, /^\/docs\/itrova$/];
const NOINDEX = '<meta name="robots" content="noindex, nofollow" />';

function isKnown(pathname) {
  const p = pathname.length > 1 ? pathname.replace(/\/+$/, "") : pathname;
  return KNOWN.has(p) || DYNAMIC.some((re) => re.test(p));
}

function nonce() {
  const bytes = new Uint8Array(16);
  crypto.getRandomValues(bytes);
  return btoa(String.fromCharCode(...bytes));
}

export async function onRequest({ request, next }) {
  const res = await next();
  const type = res.headers.get("content-type") || "";
  if (!type.includes("text/html")) return res;

  const headers = new Headers(res.headers);
  const csp = headers.get("content-security-policy");
  if (csp && csp.includes("script-src 'self'")) {
    headers.set("content-security-policy", csp.replace("script-src 'self'", `script-src 'self' 'nonce-${nonce()}'`));
  }

  const { pathname } = new URL(request.url);
  const looksLikeFile = /\.[a-z0-9]{1,5}$/i.test(pathname);
  if (request.method === "GET" && res.status === 200 && !looksLikeFile && !isKnown(pathname)) {
    const html = (await res.text()).replace("</head>", `${NOINDEX}\n  </head>`);
    headers.delete("ETag");
    headers.delete("Content-Length");
    return new Response(html, { status: 404, headers });
  }
  return new Response(res.body, { status: res.status, statusText: res.statusText, headers });
}
