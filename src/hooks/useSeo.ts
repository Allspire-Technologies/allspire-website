import { useEffect } from "react";

const SITE = "Allspire Technologies";

function setMeta(selector: string, attr: string, value: string) {
  let el = document.head.querySelector<HTMLMetaElement>(selector);
  if (!el) {
    el = document.createElement("meta");
    const [name, key] = selector.replace(/^meta\[|\]$/g, "").split("=");
    el.setAttribute(name, key.replace(/"/g, ""));
    document.head.appendChild(el);
  }
  el.setAttribute(attr, value);
}

export function useSeo(title: string, description: string) {
  useEffect(() => {
    const full = title ? `${title} | ${SITE}` : `${SITE} | From idea to impact`;
    document.title = full;
    setMeta('meta[name="description"]', "content", description);
    setMeta('meta[property="og:title"]', "content", full);
    setMeta('meta[property="og:description"]', "content", description);
    setMeta('meta[name="twitter:title"]', "content", full);
    setMeta('meta[name="twitter:description"]', "content", description);
  }, [title, description]);
}
