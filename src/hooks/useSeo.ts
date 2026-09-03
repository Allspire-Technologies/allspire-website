import { useEffect } from "react";

const SITE = "Allspire Technologies";

function upsertMeta(attr: "name" | "property", key: string, value: string) {
  let el = document.head.querySelector<HTMLMetaElement>(`meta[${attr}="${key}"]`);
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute("content", value);
}

/**
 * Per-route title and description. `noindex` marks a page crawlers should drop (the SPA
 * fallback answers 200 for every path, so an unknown /work/:slug must say so itself).
 */
export function useSeo(title: string, description: string, options: { noindex?: boolean } = {}) {
  const noindex = options.noindex === true;
  useEffect(() => {
    const full = title ? `${title} | ${SITE}` : `${SITE} | From idea to impact`;
    document.title = full;
    upsertMeta("name", "description", description);
    upsertMeta("property", "og:title", full);
    upsertMeta("property", "og:description", description);
    upsertMeta("name", "twitter:title", full);
    upsertMeta("name", "twitter:description", description);
    if (noindex) upsertMeta("name", "robots", "noindex, nofollow");
    else document.head.querySelector('meta[name="robots"]')?.remove();
  }, [title, description, noindex]);
}
