import { useMemo } from "react";
import { marked } from "marked";
import DOMPurify from "dompurify";

// Case-study bodies come from the CMS as markdown. marked parses (GFM: tables, fenced code,
// ordered-list starts), raw HTML inside the markdown is escaped rather than passed through, and
// DOMPurify sanitises the result so only http(s), mailto, relative and anchor links survive.

const escapeHtml = (s: string) =>
  s.replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c] as string);

marked.use({
  gfm: true,
  breaks: true,
  renderer: {
    html(input: string | { text: string }) {
      return escapeHtml(typeof input === "string" ? input : input.text);
    },
  },
});

DOMPurify.addHook("afterSanitizeAttributes", (node) => {
  if (node.tagName === "A") {
    const href = node.getAttribute("href") || "";
    // A link whose URL was rejected is rendered as plain text, not as an empty anchor.
    if (!href) {
      node.replaceWith(node.ownerDocument.createTextNode(node.textContent || ""));
      return;
    }
    if (/^https?:\/\//i.test(href)) {
      node.setAttribute("target", "_blank");
      node.setAttribute("rel", "noopener noreferrer");
    }
  }
  if (node.tagName === "IMG") node.setAttribute("loading", "lazy");
});

const PURIFY_OPTIONS = {
  USE_PROFILES: { html: true },
  ADD_ATTR: ["start"],
  FORBID_TAGS: ["style", "form", "input", "button", "iframe", "object", "embed", "svg", "math", "script"],
  FORBID_ATTR: ["style"],
  ALLOWED_URI_REGEXP: /^(?:https?:|mailto:|\/(?!\/)|#)/i,
};

export function Markdown({ source, className = "" }: { source: string; className?: string }) {
  const html = useMemo(() => DOMPurify.sanitize(marked.parse(source, { async: false }) as string, PURIFY_OPTIONS), [source]);
  return <div className={`prose-site ${className}`} dangerouslySetInnerHTML={{ __html: html }} />;
}
