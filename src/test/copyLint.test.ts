import { describe, expect, it } from "vitest";
import { readdirSync, readFileSync, statSync } from "node:fs";
import { join, relative } from "node:path";

// House rule for website copy: no em dashes anywhere a visitor can read.
const ROOT = process.cwd();
const TARGETS = ["src/pages", "src/components", "src/data", "src/hooks", "src/lib", "src/config", "src/seo", "src/index.css", "index.html", "functions"];

function walk(p: string): string[] {
  const st = statSync(p);
  if (st.isFile()) return /\.(tsx?|css|html|json|js)$/.test(p) ? [p] : [];
  return readdirSync(p).flatMap((n) => walk(join(p, n)));
}

describe("website copy", () => {
  it("contains no em dashes", () => {
    const offenders = TARGETS.flatMap((t) => walk(join(ROOT, t)))
      .filter((f) => readFileSync(f, "utf8").includes("—"))
      .map((f) => relative(ROOT, f));
    expect(offenders).toEqual([]);
  });
});
