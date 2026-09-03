import { Fragment, ReactNode } from "react";

// Small, dependency-free markdown renderer for CMS case-study bodies. Supports headings,
// paragraphs, bullet and numbered lists, blockquotes, images, links, bold, italic and code.
// Raw HTML is never rendered; unsafe link schemes fall back to plain text.

const SAFE_HREF = /^(https?:\/\/|mailto:|\/|#)/i;

function inline(text: string, keyPrefix: string): ReactNode[] {
  const out: ReactNode[] = [];
  const re = /(!\[[^\]]*\]\([^)\s]+\)|\[[^\]]+\]\([^)\s]+\)|\*\*[^*]+\*\*|\*[^*]+\*|`[^`]+`)/g;
  let last = 0;
  let m: RegExpExecArray | null;
  let i = 0;
  while ((m = re.exec(text))) {
    if (m.index > last) out.push(text.slice(last, m.index));
    const tok = m[0];
    const key = `${keyPrefix}-${i++}`;
    if (tok.startsWith("![")) {
      const alt = tok.slice(2, tok.indexOf("]"));
      const src = tok.slice(tok.indexOf("(") + 1, -1);
      out.push(SAFE_HREF.test(src) ? <img key={key} src={src} alt={alt} loading="lazy" /> : alt);
    } else if (tok.startsWith("[")) {
      const label = tok.slice(1, tok.indexOf("]"));
      const href = tok.slice(tok.indexOf("(") + 1, -1);
      const external = /^https?:\/\//i.test(href);
      out.push(
        SAFE_HREF.test(href) ? (
          <a key={key} href={href} target={external ? "_blank" : undefined} rel={external ? "noopener noreferrer" : undefined}>
            {label}
          </a>
        ) : (
          label
        ),
      );
    } else if (tok.startsWith("**")) {
      out.push(<strong key={key}>{tok.slice(2, -2)}</strong>);
    } else if (tok.startsWith("`")) {
      out.push(<code key={key}>{tok.slice(1, -1)}</code>);
    } else {
      out.push(<em key={key}>{tok.slice(1, -1)}</em>);
    }
    last = m.index + tok.length;
  }
  if (last < text.length) out.push(text.slice(last));
  return out;
}

export function Markdown({ source, className = "" }: { source: string; className?: string }) {
  const blocks = source.replace(/\r\n/g, "\n").split(/\n{2,}/);
  const nodes: ReactNode[] = [];
  blocks.forEach((raw, b) => {
    const block = raw.trim();
    if (!block) return;
    const key = `b${b}`;
    const lines = block.split("\n");
    const heading = /^(#{1,3})\s+(.*)$/.exec(block);
    if (heading && lines.length === 1) {
      const level = heading[1].length;
      const content = inline(heading[2], key);
      nodes.push(level === 1 ? <h2 key={key}>{content}</h2> : level === 2 ? <h2 key={key}>{content}</h2> : <h3 key={key}>{content}</h3>);
      return;
    }
    if (lines.every((l) => /^\s*[-*]\s+/.test(l))) {
      nodes.push(
        <ul key={key}>
          {lines.map((l, i) => (
            <li key={i}>{inline(l.replace(/^\s*[-*]\s+/, ""), `${key}-${i}`)}</li>
          ))}
        </ul>,
      );
      return;
    }
    if (lines.every((l) => /^\s*\d+[.)]\s+/.test(l))) {
      nodes.push(
        <ol key={key}>
          {lines.map((l, i) => (
            <li key={i}>{inline(l.replace(/^\s*\d+[.)]\s+/, ""), `${key}-${i}`)}</li>
          ))}
        </ol>,
      );
      return;
    }
    if (lines.every((l) => /^\s*>/.test(l))) {
      nodes.push(<blockquote key={key}>{inline(lines.map((l) => l.replace(/^\s*>\s?/, "")).join(" "), key)}</blockquote>);
      return;
    }
    nodes.push(
      <p key={key}>
        {lines.map((l, i) => (
          <Fragment key={i}>
            {i > 0 && <br />}
            {inline(l, `${key}-${i}`)}
          </Fragment>
        ))}
      </p>,
    );
  });
  return <div className={`prose-site ${className}`}>{nodes}</div>;
}
