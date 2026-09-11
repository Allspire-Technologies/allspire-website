// Legal pages come from the CMS as versioned markdown rows (as_legal_doc): one row per version of
// each document with the date it takes effect. The site shows the latest published version in
// force and can announce the next one. Pure helpers, unit-tested.

export type LegalSlug = "terms" | "privacy" | "dpa";

export interface LegalDoc {
  slug: LegalSlug;
  title: string;
  bodyMd: string;
  /** YYYY-MM-DD */
  effectiveAt: string;
}

const SLUGS: LegalSlug[] = ["terms", "privacy", "dpa"];
const DATE = /^\d{4}-\d{2}-\d{2}/;

export function mapLegalRows(rows: unknown[]): LegalDoc[] {
  const docs: LegalDoc[] = [];
  for (const raw of rows) {
    const r = (raw ?? {}) as Record<string, unknown>;
    const slug = r.slug as LegalSlug;
    const effectiveAt = typeof r.effective_at === "string" ? r.effective_at.slice(0, 10) : "";
    if (!SLUGS.includes(slug) || typeof r.body_md !== "string" || !r.body_md.trim() || !DATE.test(effectiveAt)) continue;
    docs.push({ slug, title: typeof r.title === "string" && r.title.trim() ? r.title : slug, bodyMd: r.body_md, effectiveAt });
  }
  return docs;
}

/** Today as YYYY-MM-DD in the visitor's local calendar (effective dates are calendar dates, not instants). */
export function todayIso(now = new Date()): string {
  const pad = (n: number) => String(n).padStart(2, "0");
  return `${now.getFullYear()}-${pad(now.getMonth() + 1)}-${pad(now.getDate())}`;
}

/** The version in force today (latest effective date not after today) and the next scheduled one, if any. */
export function pickLegalVersion(docs: LegalDoc[], slug: LegalSlug, today: string): { current: LegalDoc | null; upcoming: LegalDoc | null } {
  const mine = docs.filter((d) => d.slug === slug);
  const inForce = mine.filter((d) => d.effectiveAt <= today).sort((a, b) => (a.effectiveAt < b.effectiveAt ? 1 : -1));
  const future = mine.filter((d) => d.effectiveAt > today).sort((a, b) => (a.effectiveAt < b.effectiveAt ? -1 : 1));
  return { current: inForce[0] ?? null, upcoming: future[0] ?? null };
}

/** "September 11, 2026" from YYYY-MM-DD, parsed as a calendar date so no timezone shifts the day. */
export function formatEffective(iso: string): string {
  if (!DATE.test(iso)) return iso;
  const [y, mo, d] = iso.slice(0, 10).split("-").map(Number);
  return new Date(y, mo - 1, d).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" });
}
