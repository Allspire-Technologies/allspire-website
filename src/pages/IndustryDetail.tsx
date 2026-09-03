import { useParams, Link, Navigate } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import PageLayout from "@/components/PageLayout";
import AnimatedSection from "@/components/AnimatedSection";
import Shot from "@/components/site/Shot";
import CtaBand from "@/components/site/CtaBand";
import { CaseStudyGrid } from "@/components/site/Proof";
import { industriesData, industryList, type IndustrySlug } from "@/data/industries";
import { ITROVA_LINKS } from "@/config/itrova";
import { useSeo } from "@/hooks/useSeo";
import { useCaseStudies } from "@/hooks/useSiteContent";
import itrovaDashboard from "@/assets/itrova-dashboard.webp";

const IndustryDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const industry = slug ? industriesData[slug as IndustrySlug] : undefined;
  const { items } = useCaseStudies();
  useSeo(industry ? `${industry.title} software` : "Industries", industry ? industry.description : "");

  if (!industry) return <Navigate to="/" replace />;

  const sector = items.filter((s) => s.industry === industry.slug);
  const others = industryList.filter((i) => i.slug !== industry.slug);
  const lower = industry.title.toLowerCase();

  return (
    <PageLayout>
      <section className="band relative overflow-hidden">
        <div className="grid-bg absolute inset-0 opacity-50" aria-hidden="true" />
        <div className="container-tight relative py-16 md:py-20">
          <AnimatedSection className="max-w-3xl">
            <span className="eyebrow-dark">Industries · {industry.title}</span>
            <h1 className="mt-4 text-4xl md:text-5xl">{industry.headline}</h1>
            <p className="mt-4 text-lg text-navy-foreground">{industry.description}</p>
            <Link to="/contact" className="btn-brand btn-lg mt-7">Talk to us about {lower}</Link>
          </AnimatedSection>
        </div>
      </section>

      <section className="container-tight pt-14 md:pt-16">
        <span className="kicker">What we build for {lower}</span>
        <div className="mt-4 grid gap-4 md:grid-cols-2">
          {industry.capabilities.map((cap, i) => (
            <AnimatedSection key={cap.title} delay={i * 0.06}>
              <div className="card-soft flex h-full gap-4 p-6">
                <div className="ico"><cap.icon className="h-5 w-5" /></div>
                <div>
                  <h3 className="text-lg">{cap.title}</h3>
                  <p className="mt-1.5 text-sm text-body">{cap.desc}</p>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </section>

      {industry.slug === "retail" && (
        <section className="container-tight pt-10">
          <AnimatedSection>
            <div className="card-soft grid items-center gap-8 p-6 md:grid-cols-2 md:p-8">
              <div>
                <span className="eyebrow">Proof in this sector</span>
                <h2 className="mt-4 text-2xl md:text-3xl">iTrova: retail software we run ourselves</h2>
                <p className="mt-3 text-[15px] text-body">
                  The point of sale, inventory and accounting app we built for shops, traders and small manufacturers across Nigeria. Live in production, used every day.
                </p>
                <a href={ITROVA_LINKS.home} className="btn-line group mt-5">
                  Explore iTrova <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </a>
              </div>
              <Shot src={itrovaDashboard} alt="iTrova dashboard" label="itrova.co" />
            </div>
          </AnimatedSection>
        </section>
      )}

      <CaseStudyGrid stories={sector} title={`Work in ${lower}`} />

      <section className="container-tight py-14 md:py-16">
        <span className="kicker">Other industries</span>
        <div className="mt-3 flex flex-wrap gap-2.5">
          {others.map((o) => (
            <Link key={o.slug} to={`/industries/${o.slug}`} className="chip transition-colors hover:border-primary/40 hover:text-primary">
              {o.title}
            </Link>
          ))}
        </div>
      </section>

      <CtaBand headline={`Building for ${lower}?`} sub="Tell us about the problem. We reply within one business day." />
    </PageLayout>
  );
};

export default IndustryDetail;
