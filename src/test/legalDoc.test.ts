import { describe, expect, it } from "vitest";
import { formatEffective, mapLegalRows, pickLegalVersion, todayIso } from "@/lib/legalDoc";

describe("legal documents from the CMS", () => {
  it("keeps only well-formed rows", () => {
    const docs = mapLegalRows([
      { slug: "terms", title: "Terms of Service", body_md: "# Terms", effective_at: "2026-04-06" },
      { slug: "terms", title: "", body_md: "   ", effective_at: "2026-05-01" },
      { slug: "affiliate-terms", title: "Not ours", body_md: "x", effective_at: "2026-05-01" },
      { slug: "privacy", title: "Privacy", body_md: "x", effective_at: "not a date" },
      null,
    ]);
    expect(docs).toEqual([{ slug: "terms", title: "Terms of Service", bodyMd: "# Terms", effectiveAt: "2026-04-06" }]);
    expect(mapLegalRows([])).toEqual([]);
  });

  it("rejects dates that look right but are not real days", () => {
    const rows = ["2026-02-31", "2026-13-01", "2026-00-10", "2026-04-31", "2025-02-29"].map((effective_at) => ({
      slug: "terms", title: "Terms", body_md: "x", effective_at,
    }));
    expect(mapLegalRows(rows)).toEqual([]);
    // A leap day in an actual leap year is a real date and stays.
    expect(mapLegalRows([{ slug: "terms", title: "Terms", body_md: "x", effective_at: "2028-02-29" }])).toHaveLength(1);
    expect(formatEffective("2026-02-31")).toBe("2026-02-31");
  });

  it("serves the latest version in force and names the next scheduled one", () => {
    const docs = mapLegalRows([
      { slug: "privacy", title: "v1", body_md: "one", effective_at: "2026-06-06" },
      { slug: "privacy", title: "v2", body_md: "two", effective_at: "2026-09-11" },
      { slug: "privacy", title: "v4", body_md: "four", effective_at: "2026-12-01" },
      { slug: "privacy", title: "v3", body_md: "three", effective_at: "2026-10-01" },
    ]);
    const picked = pickLegalVersion(docs, "privacy", "2026-09-11");
    expect(picked.current?.title).toBe("v2"); // effective today counts as in force
    expect(picked.upcoming?.title).toBe("v3"); // the nearest future version, not the furthest
    expect(pickLegalVersion(docs, "privacy", "2026-05-01").current).toBeNull();
    expect(pickLegalVersion(docs, "dpa", "2026-09-11")).toEqual({ current: null, upcoming: null });
  });

  it("formats calendar dates without a timezone shift", () => {
    expect(formatEffective("2026-09-11")).toBe("September 11, 2026");
    expect(formatEffective("2026-09-11T00:00:00Z")).toBe("September 11, 2026");
    expect(formatEffective("soon")).toBe("soon");
    expect(todayIso(new Date(2026, 0, 5))).toBe("2026-01-05");
  });
});
