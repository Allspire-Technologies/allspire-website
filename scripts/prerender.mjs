import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// Meta stamping after `vite build`: copies dist/index.html to dist/<route>.html with that
// route's title, description, canonical, Open Graph and JSON-LD swapped into the <!--seo-->
// block. Cloudflare Pages serves /services from services.html before the SPA fallback, so
// crawlers and link unfurlers get real per-route meta without a server render.
// The sitemap is served by functions/sitemap.xml.js (it also lists published case studies).

const DIST = join(process.cwd(), "dist");
const SITE_URL = (process.env.VITE_SITE_URL ?? "https://allspire.tech").replace(/\/$/, "");
const { routes } = JSON.parse(readFileSync(join(process.cwd(), "src/seo/routes.json"), "utf8"));

const esc = (s) => s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/"/g, "&quot;");

function seoBlock({ path, title, description, jsonLd }) {
  const url = `${SITE_URL}${path === "/" ? "/" : path}`;
  const lines = [
    `<title>${esc(title)}</title>`,
    `<meta name="description" content="${esc(description)}" />`,
    `<link rel="canonical" href="${url}" />`,
    `<meta property="og:type" content="website" />`,
    `<meta property="og:site_name" content="Allspire Technologies" />`,
    `<meta property="og:title" content="${esc(title)}" />`,
    `<meta property="og:description" content="${esc(description)}" />`,
    `<meta property="og:image" content="${SITE_URL}/og.png" />`,
    `<meta property="og:url" content="${url}" />`,
    `<meta name="twitter:card" content="summary_large_image" />`,
    `<meta name="twitter:site" content="@allspirehq" />`,
    `<meta name="twitter:title" content="${esc(title)}" />`,
    `<meta name="twitter:description" content="${esc(description)}" />`,
  ];
  for (const ld of jsonLd ?? []) {
    lines.push(`<script type="application/ld+json">${JSON.stringify(ld)}</script>`);
  }
  return lines.join("\n    ");
}

const template = readFileSync(join(DIST, "index.html"), "utf8");
const SEO_RE = /<!--seo-->[\s\S]*?<!--\/seo-->/;
if (!SEO_RE.test(template)) throw new Error("dist/index.html is missing the <!--seo--> block");

for (const route of routes) {
  const html = template.replace(SEO_RE, `<!--seo-->\n    ${seoBlock(route)}\n    <!--/seo-->`);
  if (route.path === "/") {
    writeFileSync(join(DIST, "index.html"), html);
  } else {
    const segments = route.path.split("/").filter(Boolean);
    const file = segments.pop() + ".html";
    const dir = join(DIST, ...segments);
    mkdirSync(dir, { recursive: true });
    writeFileSync(join(dir, file), html);
  }
}

const robotsPath = join(DIST, "robots.txt");
let robots = readFileSync(robotsPath, "utf8").replace(/^Sitemap:.*\n?/m, "");
robots = robots.trimEnd() + `\nSitemap: ${SITE_URL}/sitemap.xml\n`;
writeFileSync(robotsPath, robots);

console.log(`prerendered ${routes.length} routes, robots.txt stamped for ${SITE_URL}`);
