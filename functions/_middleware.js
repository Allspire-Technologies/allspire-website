// Per-response CSP nonce for HTML. Cloudflare injects its bot-detection bootstrap as an inline
// script and, per its docs, copies a nonce it finds in the CSP header onto that script. The
// base policy lives in public/_headers; this only adds 'nonce-...' to script-src on HTML so the
// injected script runs without 'unsafe-inline'. public/_routes.json keeps static files (assets,
// fonts, images) away from this function.

function nonce() {
  const bytes = new Uint8Array(16);
  crypto.getRandomValues(bytes);
  return btoa(String.fromCharCode(...bytes));
}

export async function onRequest({ next }) {
  const res = await next();
  const type = res.headers.get("content-type") || "";
  const csp = res.headers.get("content-security-policy");
  if (!type.includes("text/html") || !csp || !csp.includes("script-src 'self'")) return res;
  const headers = new Headers(res.headers);
  headers.set("content-security-policy", csp.replace("script-src 'self'", `script-src 'self' 'nonce-${nonce()}'`));
  return new Response(res.body, { status: res.status, statusText: res.statusText, headers });
}
