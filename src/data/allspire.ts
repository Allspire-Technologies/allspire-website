import { safeHttpsUrl } from "@/lib/safeUrl";

// Content the Allspire CMS (as_* tables, edited in the iTrova CRM) feeds into this site.
// Every proof collection ships with an EMPTY fallback on purpose: the matching section stays
// hidden until real content is published. Only the webinar and page copy have built-in
// fallbacks, because both exist today.

export interface Logo {
  id: string;
  name: string;
  logo_url: string;
  website?: string | null;
}

export interface Stat {
  id: string;
  label: string;
  value: string;
}

export interface CaseStudy {
  id: string;
  slug: string;
  title: string;
  client?: string | null;
  industry?: string | null;
  summary: string;
  challenge?: string | null;
  solution?: string | null;
  outcome?: string | null;
  cover_url?: string | null;
  body_md?: string | null;
  updated_at?: string | null;
}

export interface Testimonial {
  id: string;
  quote: string;
  name: string;
  role?: string | null;
  company?: string | null;
  photo_url?: string | null;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio?: string | null;
  photo_url?: string | null;
  linkedin?: string | null;
}

export interface Webinar {
  title: string;
  schedule: string;
  time_label: string;
  registration_url?: string | null;
  facilitator_name?: string | null;
  facilitator_role?: string | null;
  facilitator_photo_url?: string | null;
  topics: string[];
}

export interface Milestone {
  title: string;
  text: string;
}

export interface SiteCopy {
  hero_eyebrow: string;
  hero_headline: string;
  hero_sub: string;
  about_intro: string;
  mission_headline: string;
  mission: string;
  vision_headline: string;
  vision: string;
  story_milestones: Milestone[];
  cta_headline: string;
  cta_sub: string;
}

export const LOGOS_FALLBACK: Logo[] = [];
export const STATS_FALLBACK: Stat[] = [];
export const CASE_STUDIES_FALLBACK: CaseStudy[] = [];
export const TESTIMONIALS_FALLBACK: Testimonial[] = [];
export const TEAM_FALLBACK: TeamMember[] = [];

export const REGISTRATION_FORM_URL =
  "https://docs.google.com/forms/d/e/1FAIpQLSexyMzM0NcME3yncE96mhcOOdYAW_H01BJ4SzbnR2gMUm25HA/viewform";

export const WEBINAR_FALLBACK: Webinar = {
  title: "From Notebook to Smart Business",
  schedule: "Every Saturday in 2026",
  time_label: "7:00 PM WAT",
  registration_url: REGISTRATION_FORM_URL,
  facilitator_name: "Samuel TosinPaul",
  facilitator_role: "Digital Transformation Strategist and Co-Founder, Allspire Technologies",
  facilitator_photo_url: null,
  topics: [
    "Track sales and expenses easily",
    "Manage inventory without stress",
    "Understand your business numbers",
    "Keep customers coming back",
    "Use AI and digital tools to grow faster",
    "Build a business that runs beyond you",
  ],
};

export const COPY_FALLBACK: SiteCopy = {
  hero_eyebrow: "Technology solutions partner · Lagos, Nigeria",
  hero_headline: "From idea to impact.",
  hero_sub:
    "We design, build and run the digital products that help businesses scale faster and operate smarter. From first sketch to a system your team relies on every day.",
  about_intro:
    "Allspire Technologies Limited is a Lagos-based technology company. We design and engineer digital products for businesses across Nigeria and Africa, and we build our own, like iTrova.",
  mission_headline: "Build technology that moves businesses forward",
  mission:
    "To empower businesses with technology that simplifies operations, accelerates growth and creates lasting competitive advantage.",
  vision_headline: "The technology partner African businesses trust first",
  vision:
    "A world where every business, regardless of size, has access to world-class technology that helps it compete and thrive on a global stage.",
  story_milestones: [
    {
      title: "Founded, 2025",
      text: "Allspire started with a simple belief: technology should empower businesses, not complicate them.",
    },
    {
      title: "Five sectors",
      text: "Real estate, finance, retail, logistics and education. We build for the sectors that run Nigeria.",
    },
    {
      title: "iTrova, 2026",
      text: "Our own product goes live for Nigerian SMBs: point of sale, inventory and accounting, in production.",
    },
  ],
  cta_headline: "Have a project in mind?",
  cta_sub: "Tell us what you are building. We reply within one business day.",
};

/** as_copy rows are {key, value}; fold them over the built-in copy so a missing key never blanks a section. */
export function mapCopy(rows: unknown[]): SiteCopy {
  const out: SiteCopy = { ...COPY_FALLBACK };
  for (const r of rows as { key?: string; value?: unknown }[]) {
    if (!r?.key || !(r.key in out)) continue;
    const k = r.key as keyof SiteCopy;
    const v = r.value;
    if (k === "story_milestones") {
      if (Array.isArray(v)) out.story_milestones = v.filter((m) => m && typeof m.title === "string") as Milestone[];
    } else if (typeof v === "string" && v.trim()) {
      (out as unknown as Record<string, string>)[k] = v;
    }
  }
  return out;
}

// Row normalisers. The content proxy only guarantees an array; every row is checked here so a
// malformed or hostile CMS row is dropped instead of reaching a href, src or route.
const isObj = (r: unknown): r is Record<string, unknown> => !!r && typeof r === "object" && !Array.isArray(r);
const str = (v: unknown): string => (typeof v === "string" ? v.trim() : "");
const optStr = (v: unknown): string | null => str(v) || null;
const SLUG = /^[a-z0-9]+(?:-[a-z0-9]+)*$/;

export function mapLogos(rows: unknown[]): Logo[] {
  const out: Logo[] = [];
  for (const r of rows) {
    if (!isObj(r)) continue;
    const name = str(r.name);
    const logo_url = safeHttpsUrl(r.logo_url);
    if (!name || !logo_url) continue;
    out.push({ id: str(r.id) || name, name, logo_url, website: safeHttpsUrl(r.website) });
  }
  return out;
}

export function mapStats(rows: unknown[]): Stat[] {
  const out: Stat[] = [];
  for (const r of rows) {
    if (!isObj(r)) continue;
    const label = str(r.label);
    const value = str(r.value);
    if (!label || !value) continue;
    out.push({ id: str(r.id) || label, label, value });
  }
  return out;
}

export function mapCaseStudies(rows: unknown[]): CaseStudy[] {
  const out: CaseStudy[] = [];
  for (const r of rows) {
    if (!isObj(r)) continue;
    const slug = str(r.slug);
    const title = str(r.title);
    if (!SLUG.test(slug) || !title) continue;
    out.push({
      id: str(r.id) || slug,
      slug,
      title,
      client: optStr(r.client),
      industry: optStr(r.industry),
      summary: str(r.summary),
      challenge: optStr(r.challenge),
      solution: optStr(r.solution),
      outcome: optStr(r.outcome),
      cover_url: safeHttpsUrl(r.cover_url),
      body_md: optStr(r.body_md),
      updated_at: optStr(r.updated_at),
    });
  }
  return out;
}

export function mapTestimonials(rows: unknown[]): Testimonial[] {
  const out: Testimonial[] = [];
  for (const r of rows) {
    if (!isObj(r)) continue;
    const quote = str(r.quote);
    const name = str(r.name);
    if (!quote || !name) continue;
    out.push({ id: str(r.id) || name, quote, name, role: optStr(r.role), company: optStr(r.company), photo_url: safeHttpsUrl(r.photo_url) });
  }
  return out;
}

export function mapTeam(rows: unknown[]): TeamMember[] {
  const out: TeamMember[] = [];
  for (const r of rows) {
    if (!isObj(r)) continue;
    const name = str(r.name);
    const role = str(r.role);
    if (!name || !role) continue;
    out.push({ id: str(r.id) || name, name, role, bio: optStr(r.bio), photo_url: safeHttpsUrl(r.photo_url), linkedin: safeHttpsUrl(r.linkedin) });
  }
  return out;
}

export function mapWebinar(rows: unknown[]): Webinar[] {
  const out: Webinar[] = [];
  for (const r of rows) {
    if (!isObj(r)) continue;
    out.push({
      title: str(r.title) || WEBINAR_FALLBACK.title,
      schedule: str(r.schedule) || WEBINAR_FALLBACK.schedule,
      time_label: str(r.time_label) || WEBINAR_FALLBACK.time_label,
      registration_url: safeHttpsUrl(r.registration_url) ?? REGISTRATION_FORM_URL,
      facilitator_name: optStr(r.facilitator_name),
      facilitator_role: optStr(r.facilitator_role),
      facilitator_photo_url: safeHttpsUrl(r.facilitator_photo_url),
      topics: Array.isArray(r.topics) ? r.topics.filter((t): t is string => typeof t === "string" && t.trim() !== "") : [],
    });
  }
  return out;
}

export const INDUSTRY_LABELS: Record<string, string> = {
  "real-estate": "Real estate",
  finance: "Finance",
  retail: "Retail",
  logistics: "Logistics",
  education: "Education",
};
