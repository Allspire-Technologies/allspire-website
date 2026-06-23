import { useEffect, useMemo, useState } from "react";
import PageLayout from "@/components/PageLayout";
import AnimatedSection from "@/components/AnimatedSection";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { userGuide, ALL_ROLES, type Role, type GuideSection, type GuideShot } from "@/data/userGuide";
import { Search, X, Monitor, Smartphone, Lightbulb } from "lucide-react";

const ROLE_FILTERS: ("All" | Role)[] = ["All", ...ALL_ROLES];

const RoleChips = ({ value, onChange }: { value: "All" | Role; onChange: (r: "All" | Role) => void }) => (
  <div className="flex flex-wrap gap-2">
    {ROLE_FILTERS.map((r) => (
      <button
        key={r}
        onClick={() => onChange(r)}
        className={`glass-pill ${value === r ? "border-primary/50 bg-primary/10 text-primary" : ""}`}
      >
        {r}
      </button>
    ))}
  </div>
);

function SectionBlock({ section, onShot }: { section: GuideSection; onShot: (s: GuideShot) => void }) {
  return (
    <div id={section.id} className="scroll-mt-28">
      <AnimatedSection>
        <div className="flex items-center gap-3 mb-3">
          <div className="h-11 w-11 rounded-xl gradient-bg grid place-items-center text-primary-foreground shrink-0">
            <section.icon className="h-5 w-5" />
          </div>
          <h2 className="text-2xl md:text-3xl font-bold">{section.title}</h2>
        </div>

        <p className="text-muted-foreground mb-4">{section.summary}</p>

        <div className="flex flex-wrap gap-2 mb-7">
          {section.roles.map((r) => (
            <span key={r} className="text-xs px-2.5 py-1 rounded-full bg-secondary text-secondary-foreground">
              {r}
            </span>
          ))}
        </div>

        <ol className="space-y-4 mb-8">
          {section.steps.map((step, idx) => (
            <li key={idx} className="flex gap-4">
              <span className="shrink-0 h-7 w-7 rounded-full bg-primary/10 text-primary text-sm font-semibold grid place-items-center">
                {idx + 1}
              </span>
              <div className="pt-0.5">
                <p className="leading-relaxed">{step.text}</p>
                {step.note && <p className="text-sm text-muted-foreground mt-1">{step.note}</p>}
              </div>
            </li>
          ))}
        </ol>

        <div className="grid sm:grid-cols-2 gap-5 items-start mb-6">
          {section.shots.map((shot, idx) => (
            <figure key={idx} className={`group ${shot.device === "mobile" ? "mx-auto w-full max-w-[260px]" : ""}`}>
              <button
                onClick={() => onShot(shot)}
                className="block w-full overflow-hidden rounded-xl border border-border shadow-sm hover:shadow-lg transition-shadow"
                aria-label={`Enlarge: ${shot.alt}`}
              >
                <img
                  src={shot.src}
                  alt={shot.alt}
                  loading="lazy"
                  className="w-full transition-transform duration-300 group-hover:scale-[1.02]"
                />
              </button>
              {shot.caption && (
                <figcaption className="mt-2 flex items-center gap-1.5 text-sm text-muted-foreground">
                  {shot.device === "mobile" ? <Smartphone className="h-3.5 w-3.5" /> : <Monitor className="h-3.5 w-3.5" />}
                  {shot.caption}
                </figcaption>
              )}
            </figure>
          ))}
        </div>

        {section.tip && (
          <div className="flex gap-3 rounded-xl border border-primary/20 bg-primary/5 p-4">
            <Lightbulb className="h-5 w-5 text-primary shrink-0" />
            <p className="text-sm leading-relaxed">{section.tip}</p>
          </div>
        )}
      </AnimatedSection>
    </div>
  );
}

const ItrovaGuide = () => {
  const [query, setQuery] = useState("");
  const [role, setRole] = useState<"All" | Role>("All");
  const [active, setActive] = useState(userGuide[0].id);
  const [lightbox, setLightbox] = useState<GuideShot | null>(null);

  const sections = useMemo(() => {
    const q = query.trim().toLowerCase();
    return userGuide.filter((s) => {
      if (role !== "All" && !s.roles.includes(role)) return false;
      if (!q) return true;
      const hay = [s.title, s.summary, s.tip ?? "", ...s.steps.map((x) => x.text)].join(" ").toLowerCase();
      return hay.includes(q);
    });
  }, [query, role]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (visible[0]) setActive(visible[0].target.id);
      },
      { rootMargin: "-25% 0px -65% 0px", threshold: 0 },
    );
    sections.forEach((s) => {
      const el = document.getElementById(s.id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, [sections]);

  return (
    <PageLayout>
      <section className="relative overflow-hidden border-b border-border/50">
        <div className="absolute inset-0 gradient-bg opacity-[0.06]" aria-hidden />
        <div className="container-tight relative py-16 md:py-24">
          <AnimatedSection className="max-w-3xl">
            <p className="text-sm font-medium text-primary mb-3">iTrova · User Guide</p>
            <h1 className="text-4xl md:text-6xl font-bold mb-5">
              Everything you need to <span className="gradient-text">run your shop</span>
            </h1>
            <p className="text-lg text-muted-foreground mb-8">
              A step-by-step guide to selling, tracking stock and getting paid with iTrova — illustrated with
              screenshots from the real app.
            </p>
            <div className="relative max-w-md">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search the guide…"
                className="w-full h-12 pl-11 pr-10 rounded-xl border border-border bg-background/70 backdrop-blur focus:outline-none focus:ring-2 focus:ring-ring"
              />
              {query && (
                <button
                  onClick={() => setQuery("")}
                  aria-label="Clear search"
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                >
                  <X className="h-4 w-4" />
                </button>
              )}
            </div>
          </AnimatedSection>
        </div>
      </section>

      <section className="container-tight py-14 md:py-20">
        <div className="lg:grid lg:grid-cols-[240px_1fr] lg:gap-14">
          <aside className="hidden lg:block">
            <div className="sticky top-28 space-y-6">
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-2">Show steps for</p>
                <RoleChips value={role} onChange={setRole} />
              </div>
              <nav className="border-l border-border">
                {sections.map((s) => (
                  <a
                    key={s.id}
                    href={`#${s.id}`}
                    className={`flex items-center gap-2 -ml-px border-l-2 pl-4 py-2 text-sm transition-colors ${
                      active === s.id
                        ? "border-primary text-primary font-medium"
                        : "border-transparent text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    <s.icon className="h-4 w-4 shrink-0" />
                    {s.title}
                  </a>
                ))}
                {sections.length === 0 && <p className="pl-4 py-2 text-sm text-muted-foreground">No matches</p>}
              </nav>
            </div>
          </aside>

          <div className="min-w-0">
            <div className="lg:hidden mb-10">
              <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-2">Show steps for</p>
              <RoleChips value={role} onChange={setRole} />
            </div>

            {sections.length === 0 ? (
              <p className="text-muted-foreground">
                No sections match “{query}”. Try a different search or clear the filters.
              </p>
            ) : (
              <div className="space-y-16">
                {sections.map((s) => (
                  <SectionBlock key={s.id} section={s} onShot={setLightbox} />
                ))}
              </div>
            )}
          </div>
        </div>
      </section>

      <Dialog open={!!lightbox} onOpenChange={(o) => !o && setLightbox(null)}>
        <DialogContent className="max-w-5xl p-2 sm:p-3">
          {lightbox && (
            <figure className="space-y-2">
              <img src={lightbox.src} alt={lightbox.alt} className="w-full rounded-lg border border-border" />
              {lightbox.caption && (
                <figcaption className="text-center text-sm text-muted-foreground">{lightbox.caption}</figcaption>
              )}
            </figure>
          )}
        </DialogContent>
      </Dialog>
    </PageLayout>
  );
};

export default ItrovaGuide;
