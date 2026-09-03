import { Link, useParams } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import PageLayout from "@/components/PageLayout";
import AnimatedSection from "@/components/AnimatedSection";
import CtaBand from "@/components/site/CtaBand";
import { Markdown } from "@/lib/markdown";
import { INDUSTRY_LABELS } from "@/data/allspire";
import { useSeo } from "@/hooks/useSeo";
import { useCaseStudies } from "@/hooks/useSiteContent";

const WorkDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const { items, loaded } = useCaseStudies();
  const story = items.find((s) => s.slug === slug);
  useSeo(story ? story.title : "Case study", story ? story.summary : "");

  if (!story) {
    return (
      <PageLayout>
        <section className="container-tight section-padding text-center">
          {loaded ? (
            <>
              <span className="eyebrow">Work</span>
              <h1 className="mt-4 text-3xl md:text-4xl">We could not find that story</h1>
              <p className="mx-auto mt-3 max-w-md text-body">It may have been unpublished or renamed.</p>
              <Link to="/work" className="btn-brand mt-6">All case studies</Link>
            </>
          ) : (
            <p className="text-body">Loading</p>
          )}
        </section>
      </PageLayout>
    );
  }

  const blocks = [
    { label: "Challenge", text: story.challenge },
    { label: "What we did", text: story.solution },
    { label: "Outcome", text: story.outcome },
  ].filter((b) => b.text && b.text.trim());

  return (
    <PageLayout>
      <section className="container-tight py-14 md:py-20">
        <AnimatedSection className="mx-auto max-w-3xl">
          <Link to="/work" className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground">
            <ArrowLeft className="h-4 w-4" /> All case studies
          </Link>
          <div className="mt-6 flex flex-wrap gap-2">
            {story.industry && INDUSTRY_LABELS[story.industry] && (
              <Link to={`/industries/${story.industry}`} className="chip">{INDUSTRY_LABELS[story.industry]}</Link>
            )}
            {story.client && <span className="chip">{story.client}</span>}
          </div>
          <h1 className="mt-4 text-4xl md:text-5xl">{story.title}</h1>
          <p className="mt-4 text-lg text-body">{story.summary}</p>
        </AnimatedSection>

        {story.cover_url && (
          <AnimatedSection delay={0.08} className="mx-auto mt-10 max-w-5xl">
            <img src={story.cover_url} alt="" className="w-full rounded-3xl border border-border object-cover" loading="eager" />
          </AnimatedSection>
        )}

        {blocks.length > 0 && (
          <div className="mx-auto mt-10 grid max-w-5xl gap-4 md:grid-cols-3">
            {blocks.map((b, i) => (
              <AnimatedSection key={b.label} delay={i * 0.06}>
                <div className="card-soft h-full p-6">
                  <span className="kicker">{b.label}</span>
                  <p className="mt-3 text-[15px] text-body">{b.text}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        )}

        {story.body_md && story.body_md.trim() && (
          <AnimatedSection className="mx-auto mt-12 max-w-3xl">
            <Markdown source={story.body_md} />
          </AnimatedSection>
        )}
      </section>
      <CtaBand headline="Have a similar problem?" sub="Tell us about it. We reply within one business day." />
    </PageLayout>
  );
};

export default WorkDetail;
