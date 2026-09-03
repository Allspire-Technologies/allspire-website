// @vitest-environment jsdom
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import { Markdown } from "@/lib/markdown";
import { googleFormUrl, safeHttpsUrl } from "@/lib/safeUrl";
import { mapCaseStudies, mapLogos } from "@/data/allspire";

describe("Markdown", () => {
  it("renders GFM blocks and keeps ordered-list starts", () => {
    const { container } = render(<Markdown source={"## Heading\n\n3. three\n4. four\n\n| a | b |\n|---|---|\n| 1 | 2 |\n\n```\ncode\n```"} />);
    expect(container.querySelector("h2")?.textContent).toBe("Heading");
    expect(container.querySelector("ol")?.getAttribute("start")).toBe("3");
    expect(container.querySelector("table td")?.textContent).toBe("1");
    expect(container.querySelector("pre code")?.textContent).toContain("code");
  });

  it("escapes raw HTML and drops unsafe links", () => {
    const { container } = render(
      <Markdown source={'<img src=x onerror="alert(1)">\n\n[bad](javascript:alert(1)) [good](https://allspire.tech) [rel](/work)'} />,
    );
    expect(container.querySelector("img")).toBeNull();
    expect(container.textContent).toContain("<img");
    const links = Array.from(container.querySelectorAll("a"));
    expect(links.map((a) => a.getAttribute("href"))).toEqual(["https://allspire.tech", "/work"]);
    expect(links[0].getAttribute("rel")).toBe("noopener noreferrer");
    expect(links[0].getAttribute("target")).toBe("_blank");
  });
});

describe("safe URLs", () => {
  it("allows only absolute https", () => {
    expect(safeHttpsUrl("https://allspire.tech/x")).toBe("https://allspire.tech/x");
    expect(safeHttpsUrl("http://allspire.tech")).toBeNull();
    expect(safeHttpsUrl("javascript:alert(1)")).toBeNull();
    expect(safeHttpsUrl("/relative")).toBeNull();
    expect(safeHttpsUrl(42)).toBeNull();
  });

  it("embeds only Google Forms", () => {
    expect(googleFormUrl("https://docs.google.com/forms/d/e/abc/viewform")).toContain("docs.google.com/forms/");
    expect(googleFormUrl("https://docs.google.com.evil.com/forms/x")).toBeNull();
    expect(googleFormUrl("https://docs.google.com/spreadsheets/x")).toBeNull();
  });
});

describe("row normalisers", () => {
  it("drops malformed case studies and unsafe logo links", () => {
    const stories = mapCaseStudies([null, { slug: "ok-story", title: "Ok" }, { slug: "Bad Slug", title: "x" }, { slug: "no-title" }, "str"]);
    expect(stories.map((s) => s.slug)).toEqual(["ok-story"]);
    expect(stories[0].summary).toBe("");
    const logos = mapLogos([{ name: "A", logo_url: "https://cdn/a.svg", website: "javascript:alert(1)" }, { name: "B", logo_url: "http://cdn/b.svg" }]);
    expect(logos).toHaveLength(1);
    expect(logos[0].website).toBeNull();
  });
});
