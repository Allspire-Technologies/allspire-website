import { useState } from "react";
import { ArrowRight } from "lucide-react";
import PageLayout from "@/components/PageLayout";
import AnimatedSection from "@/components/AnimatedSection";
import Shot from "@/components/site/Shot";
import CtaBand from "@/components/site/CtaBand";
import { CaseStudyCard } from "@/components/site/Proof";
import { INDUSTRY_LABELS } from "@/data/allspire";
import { ITROVA_LINKS } from "@/config/itrova";
import { useSeo } from "@/hooks/useSeo";
import { useCaseStudies } from "@/hooks/useSiteContent";
import itrovaDashboard from "@/assets/itrova-dashboard.png";

const Work = () => {
  useSeo("Work", "Case studies from Allspire: the problem, what we designed and built, and what changed for the business.");
  const { items, loaded } = useCaseStudies();
  const [filter, setFilter] = useState<string>("all");

  const industries = Array.from(new Set(items.map((s) => s.industry).filter((i): i is string => !!i && !!INDUSTRY_LABELS[i])));
  const shown = filter === "all" ? items : items.filter((s) => s.industry === filter);

  return (
    <PageLayout>
      <section className="container-tight py-14 md:py-20">
        <AnimatedSection className="max-w-2xl">
          <span className="kicker">Work</span>
          <h1 className="mt-2 text-4xl md:text-5xl">Projects that shipped</h1>
          <p className="mt-4 text-lg text-body">Stories from the products we have designed, built and run. Each one has the problem, what we did and what changed.</p>
        </AnimatedSection>

        {items.length > 0 ? (
          <>
            {industries.length > 1 && (
              <div className="mt-8 flex flex-wrap gap-2" role="group" aria-label="Filter by industry">
                {["all", ...industries].map((f) => (
                  <button
                    key={f}
                    type="button"
                    onClick={() => setFilter(f)}
                    aria-pressed={filter === f}
                    className={`chip transition-colors ${filter === f ? "border-primary bg-accent text-accent-foreground" : "hover:border-primary/40"}`}
                  >
                    {f === "all" ? "All" : INDUSTRY_LABELS[f]}
                  </button>
                ))}
              </div>
            )}
            <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {shown.map((s, i) => (
                <AnimatedSection key={s.id} delay={i * 0.05} className="h-full">
                  <CaseStudyCard story={s} />
                </AnimatedSection>
              ))}
            </div>
          </>
        ) : (
          <div className="card-soft mt-10 p-6 text-center md:p-8">
            <p className="text-body">{loaded ? "Case studies are being written. Until then, the product we run ourselves is the best proof we have." : "Loading stories"}</p>
          </div>
        )}

        <AnimatedSection className="mt-10">
          <div className="card-soft grid items-center gap-8 p-6 md:grid-cols-[1fr_1.1fr] md:p-8">
            <div>
              <span className="eyebrow">Our product</span>
              <h2 className="mt-4 text-2xl md:text-3xl">iTrova: software we run ourselves</h2>
              <p className="mt-3 text-[15px] text-body">
                Point of sale, inventory and accounting for Nigerian shops, traders and small manufacturers. Built by Allspire, live in production.
              </p>
              <a href={ITROVA_LINKS.home} className="btn-line group mt-5">
                Explore iTrova <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
            </div>
            <Shot src={itrovaDashboard} alt="iTrova dashboard" label="itrova.co" />
          </div>
        </AnimatedSection>
      </section>
      <CtaBand />
    </PageLayout>
  );
};

export default Work;
