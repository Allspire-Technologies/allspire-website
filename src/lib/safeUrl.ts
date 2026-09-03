// CMS-provided links are data, not trusted markup. Only absolute https URLs reach an href or src.

export function safeHttpsUrl(value: unknown): string | null {
  if (typeof value !== "string" || !value.trim()) return null;
  try {
    const u = new URL(value.trim());
    return u.protocol === "https:" ? u.toString() : null;
  } catch {
    return null;
  }
}

/** A Google Form URL, the only origin the webinar page will embed in an iframe. */
export function googleFormUrl(value: unknown): string | null {
  const s = safeHttpsUrl(value);
  if (!s) return null;
  const u = new URL(s);
  return u.hostname === "docs.google.com" && u.pathname.startsWith("/forms/") ? s : null;
}
