import { Link } from "react-router-dom";
import { ArrowRight, Quote } from "lucide-react";

const LinkedInIcon = ({ className = "" }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className={className}>
    <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.36V9h3.41v1.56h.05c.47-.9 1.63-1.85 3.36-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0z" />
  </svg>
);
import AnimatedSection from "@/components/AnimatedSection";
import SectionHead from "@/components/site/SectionHead";
import { INDUSTRY_LABELS, type CaseStudy, type Logo, type Stat, type TeamMember, type Testimonial } from "@/data/allspire";

// Proof sections. Each renders nothing while its collection is empty, so the site never
// shows placeholder blanks; content appears the moment it is published in the CRM.

export const LogoStrip = ({ logos }: { logos: Logo[] }) => {
  if (logos.length === 0) return null;
  const loop = logos.length < 6 ? [...logos, ...logos, ...logos] : [...logos, ...logos];
  return (
    <section className="border-y border-border bg-card" aria-label="Clients and partners">
      <div className="container-tight py-7">
        <span className="kicker">Trusted by</span>
        <div className="group mt-4 overflow-hidden [mask-image:linear-gradient(90deg,transparent,black_10%,black_90%,transparent)]">
          <div className="flex w-max animate-marquee items-center gap-14 group-hover:[animation-play-state:paused] motion-reduce:animate-none motion-reduce:flex-wrap motion-reduce:w-full">
            {loop.map((l, i) => {
              const img = (
                <img
                  src={l.logo_url}
                  alt={l.name}
                  className="h-9 w-auto max-w-[140px] object-contain opacity-70 grayscale transition hover:opacity-100 hover:grayscale-0 dark:brightness-0 dark:invert dark:hover:brightness-100 dark:hover:invert-0"
                  loading="lazy"
                />
              );
              return l.website ? (
                <a key={`${l.id}-${i}`} href={l.website} target="_blank" rel="noopener noreferrer" aria-label={l.name}>
                  {img}
                </a>
              ) : (
                <span key={`${l.id}-${i}`}>{img}</span>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export const StatsStrip = ({ stats }: { stats: Stat[] }) => {
  if (stats.length === 0) return null;
  // The strip is one row of four; extra published stats are simply not shown.
  return (
    <section className="container-tight pt-12">
      <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
        {stats.slice(0, 4).map((s, i) => (
          <AnimatedSection key={s.id} delay={i * 0.06}>
            <div className="card-soft p-5 md:p-6">
              <div className="font-display text-3xl font-bold tracking-tight">{s.value}</div>
              <div className="mt-1 text-sm text-body">{s.label}</div>
            </div>
          </AnimatedSection>
        ))}
      </div>
    </section>
  );
};

export const CaseStudyCard = ({ story }: { story: CaseStudy }) => (
  <Link to={`/work/${story.slug}`} className="card-soft card-hover group flex h-full flex-col overflow-hidden">
    {story.cover_url ? (
      <img src={story.cover_url} alt="" className="aspect-[16/9] w-full object-cover" loading="lazy" />
    ) : (
      <div className="grid-bg aspect-[16/9] w-full bg-navy" aria-hidden="true" />
    )}
    <div className="flex flex-1 flex-col p-5">
      <div className="flex flex-wrap items-center gap-2 text-xs font-semibold uppercase tracking-[0.08em] text-muted-foreground">
        {story.industry && INDUSTRY_LABELS[story.industry] && <span>{INDUSTRY_LABELS[story.industry]}</span>}
        {story.client && <span>· {story.client}</span>}
      </div>
      <h3 className="mt-2 text-lg group-hover:text-primary">{story.title}</h3>
      <p className="mt-2 flex-1 text-sm text-body">{story.summary}</p>
      {story.outcome && <p className="mt-3 text-sm font-semibold text-accent-foreground">{story.outcome}</p>}
      <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-primary">
        Read the story <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
      </span>
    </div>
  </Link>
);

export const CaseStudyGrid = ({ stories, limit, title = "Work that shipped", showAll = false }: { stories: CaseStudy[]; limit?: number; title?: string; showAll?: boolean }) => {
  if (stories.length === 0) return null;
  const shown = limit ? stories.slice(0, limit) : stories;
  return (
    <section className="container-tight section-padding">
      <SectionHead
        kicker="Case studies"
        title={title}
        action={showAll && stories.length > shown.length ? <Link to="/work" className="btn-line">All case studies</Link> : undefined}
      />
      <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {shown.map((s, i) => (
          <AnimatedSection key={s.id} delay={i * 0.06} className="h-full">
            <CaseStudyCard story={s} />
          </AnimatedSection>
        ))}
      </div>
    </section>
  );
};

export const TestimonialGrid = ({ items, limit = 6 }: { items: Testimonial[]; limit?: number }) => {
  if (items.length === 0) return null;
  return (
    <section className="container-tight section-padding pt-0">
      <SectionHead kicker="What clients say" title="In their words" />
      <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {items.slice(0, limit).map((t, i) => (
          <AnimatedSection key={t.id} delay={i * 0.06} className="h-full">
            <figure className="card-soft flex h-full flex-col p-6">
              <Quote className="h-6 w-6 text-primary" aria-hidden="true" />
              <blockquote className="mt-4 flex-1 text-[15px] leading-relaxed text-foreground">{t.quote}</blockquote>
              <figcaption className="mt-5 flex items-center gap-3">
                {t.photo_url ? (
                  <img src={t.photo_url} alt="" className="h-10 w-10 rounded-full object-cover" loading="lazy" />
                ) : (
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-accent font-display text-sm font-bold text-accent-foreground">
                    {t.name.slice(0, 1)}
                  </span>
                )}
                <div>
                  <div className="text-sm font-semibold">{t.name}</div>
                  <div className="text-xs text-muted-foreground">{[t.role, t.company].filter(Boolean).join(", ")}</div>
                </div>
              </figcaption>
            </figure>
          </AnimatedSection>
        ))}
      </div>
    </section>
  );
};

export const TeamGrid = ({ members }: { members: TeamMember[] }) => {
  if (members.length === 0) return null;
  return (
    <section className="container-tight section-padding pt-0">
      <SectionHead kicker="The team" title="The people you will work with" />
      <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {members.map((m, i) => (
          <AnimatedSection key={m.id} delay={i * 0.06} className="h-full">
            <div className="card-soft h-full p-5">
              {m.photo_url ? (
                <img src={m.photo_url} alt={m.name} className="aspect-square w-full rounded-xl object-cover object-top" loading="lazy" />
              ) : (
                <div className="flex aspect-square w-full items-center justify-center rounded-xl bg-accent font-display text-3xl font-bold text-accent-foreground">
                  {m.name.slice(0, 1)}
                </div>
              )}
              <div className="mt-4 flex items-start justify-between gap-3">
                <div>
                  <h3 className="text-base">{m.name}</h3>
                  <p className="text-sm text-muted-foreground">{m.role}</p>
                </div>
                {m.linkedin && (
                  <a href={m.linkedin} target="_blank" rel="noopener noreferrer" aria-label={`${m.name} on LinkedIn`} className="text-muted-foreground hover:text-primary">
                    <LinkedInIcon className="h-4 w-4" />
                  </a>
                )}
              </div>
              {m.bio && <p className="mt-2 text-sm text-body">{m.bio}</p>}
            </div>
          </AnimatedSection>
        ))}
      </div>
    </section>
  );
};
