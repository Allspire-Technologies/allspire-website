import { Link } from "react-router-dom";
import { Rocket, Globe, RefreshCw, Bot, ArrowRight, Zap, Lightbulb, Shield, TrendingUp } from "lucide-react";
import PageLayout from "@/components/PageLayout";
import AnimatedSection from "@/components/AnimatedSection";
import Shot from "@/components/site/Shot";
import SectionHead from "@/components/site/SectionHead";
import CtaBand from "@/components/site/CtaBand";
import WebinarPromo from "@/components/site/WebinarPromo";
import { LogoStrip, StatsStrip, CaseStudyGrid, TestimonialGrid } from "@/components/site/Proof";
import { industryList } from "@/data/industries";
import { ITROVA_LINKS } from "@/config/itrova";
import { useSeo } from "@/hooks/useSeo";
import { useCaseStudies, useCopy, useLogos, useStats, useTestimonials } from "@/hooks/useSiteContent";
import itrovaDashboard from "@/assets/itrova-dashboard.webp";

const whyUs = [
  { icon: Zap, title: "Speed", desc: "Rapid delivery without compromising quality." },
  { icon: Lightbulb, title: "Innovation", desc: "Cutting-edge technology and creative thinking." },
  { icon: Shield, title: "Reliability", desc: "Enterprise-grade stability you can count on." },
  { icon: TrendingUp, title: "Scalable solutions", desc: "Built to grow with your business." },
];

const anchorChips = ["Discovery", "UX and UI", "Engineering", "Launch and run"];

const Index = () => {
  useSeo("", "We design, build and run the digital products that help businesses scale faster and operate smarter. Product development, web and mobile apps, AI and automation, digital transformation. Lagos, Nigeria.");
  const copy = useCopy();
  const logos = useLogos();
  const stats = useStats();
  const testimonials = useTestimonials();
  const { items: stories } = useCaseStudies();
  const workHref = stories.length > 0 ? "/work" : "/products";

  return (
    <PageLayout>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="grid-bg absolute inset-0" aria-hidden="true" />
        <div className="container-tight relative grid items-center gap-12 py-16 md:py-24 lg:grid-cols-[1.15fr_1fr]">
          <div className="animate-in fade-in slide-in-from-bottom-4 duration-700 motion-reduce:animate-none">
            <span className="eyebrow">{copy.hero_eyebrow}</span>
            <h1 className="mt-5 text-[40px] font-extrabold leading-[1.05] sm:text-5xl md:text-6xl lg:text-[66px]">{copy.hero_headline}</h1>
            <p className="mt-5 max-w-lg text-lg text-body md:text-xl">{copy.hero_sub}</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link to="/contact" className="btn-brand btn-lg">Talk to us</Link>
              <Link to={workHref} className="btn-line btn-lg group">
                See our work <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
            <div className="mt-8 flex flex-wrap gap-x-7 gap-y-3">
              <div className="tick">Product strategy to launch</div>
              <div className="tick">Web, mobile and AI</div>
              <div className="tick">Built for African markets</div>
            </div>
          </div>

          <div className="relative animate-in fade-in zoom-in-95 fill-mode-both delay-150 duration-700 motion-reduce:animate-none">
            <Shot src={itrovaDashboard} alt="The iTrova dashboard, a product built and run by Allspire" label="itrova.co" eager />
            <div className="card-soft absolute -bottom-6 left-0 hidden w-64 p-4 md:block lg:-left-8">
              <div className="text-[11px] font-semibold uppercase tracking-[0.08em] text-muted-foreground">Shipped and live</div>
              <div className="mt-1 font-display text-lg font-bold">iTrova</div>
              <p className="mt-1 text-[13px] text-body">POS, inventory and accounting for Nigerian SMBs. Our own product, in production.</p>
            </div>
          </div>
        </div>
      </section>

      <LogoStrip logos={logos} />
      <StatsStrip stats={stats} />

      {/* Services bento */}
      <section className="container-tight section-padding">
        <SectionHead
          kicker="What we do"
          title="Four ways we move a business forward"
          action={<Link to="/services" className="btn-line">All services</Link>}
        />
        <div className="mt-8 grid gap-4 md:auto-rows-[190px] md:grid-cols-3">
          <AnimatedSection className="md:col-span-2 md:row-span-2">
            <Link to="/services" className="band card-hover relative block h-full overflow-hidden rounded-2xl p-7 md:p-8">
              <div className="grid-bg absolute inset-0 opacity-60" aria-hidden="true" />
              <div className="relative">
                <div className="ico bg-white/10 text-white"><Rocket className="h-5 w-5" /></div>
                <h3 className="mt-5 text-2xl md:text-3xl">Product development</h3>
                <p className="mt-3 max-w-lg text-[15px] md:text-base">
                  End-to-end product design and engineering, from concept to launch. Strategy, UX, build, release and the operations after go-live.
                </p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {anchorChips.map((c) => (
                    <span key={c} className="chip border-white/20 bg-white/10 text-white">{c}</span>
                  ))}
                </div>
              </div>
            </Link>
          </AnimatedSection>
          <AnimatedSection delay={0.08}>
            <Link to="/services" className="card-soft card-hover block h-full p-6">
              <div className="ico"><Globe className="h-5 w-5" /></div>
              <h3 className="mt-4 text-lg">Web and mobile apps</h3>
              <p className="mt-1.5 text-sm text-body">Beautiful, performant applications across every platform.</p>
            </Link>
          </AnimatedSection>
          <AnimatedSection delay={0.12}>
            <Link to="/services" className="card-soft card-hover block h-full p-6">
              <div className="ico"><Bot className="h-5 w-5" /></div>
              <h3 className="mt-4 text-lg">AI and automation</h3>
              <p className="mt-1.5 text-sm text-body">Intelligent workflows that reduce cost and increase speed.</p>
            </Link>
          </AnimatedSection>
          <AnimatedSection delay={0.16} className="md:col-span-3">
            <Link to="/services" className="card-soft card-hover flex h-full flex-col gap-4 p-6 md:flex-row md:items-center">
              <div className="ico"><RefreshCw className="h-5 w-5" /></div>
              <div className="flex-1">
                <h3 className="text-lg">Digital transformation</h3>
                <p className="mt-1 text-sm text-body">Modernise legacy systems and streamline operations, without stopping the business while we do it.</p>
              </div>
              <span className="btn-line">How we approach it</span>
            </Link>
          </AnimatedSection>
        </div>
      </section>

      {/* Product spotlight */}
      <section className="container-tight pb-16 md:pb-24">
        <AnimatedSection>
          <div className="card-soft grid items-center gap-8 p-6 md:grid-cols-[1fr_1.1fr] md:p-9">
            <div>
              <span className="eyebrow">Our product</span>
              <h2 className="mt-4 text-3xl md:text-[34px]">We use what we build. Meet iTrova.</h2>
              <p className="mt-3 text-body">
                The point of sale, inventory and accounting app we built for shops, traders and small manufacturers across Nigeria. Live in production, on its own site.
              </p>
              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <a href={ITROVA_LINKS.home} className="btn-brand">Explore iTrova</a>
                <a href={ITROVA_LINKS.pricing} className="btn-line">See pricing</a>
              </div>
            </div>
            <Shot src={itrovaDashboard} alt="iTrova dashboard" label="itrova.co" />
          </div>
        </AnimatedSection>
      </section>

      {/* Industries */}
      <section className="container-tight pb-16 md:pb-24">
        <SectionHead kicker="Who we serve" title="Built for the sectors that run Nigeria" />
        <div className="mt-8 grid grid-cols-2 gap-3.5 md:grid-cols-5">
          {industryList.map((ind, i) => (
            <AnimatedSection key={ind.slug} delay={i * 0.05} className={i === industryList.length - 1 ? "col-span-2 md:col-span-1" : ""}>
              <Link to={`/industries/${ind.slug}`} className="card-soft card-hover group block h-full p-5">
                <div className="ico h-10 w-10"><ind.icon className="h-5 w-5" /></div>
                <h3 className="mt-3 text-base transition-colors group-hover:text-primary">{ind.title}</h3>
                <p className="mt-1 text-[13px] text-body">{ind.tagline}</p>
              </Link>
            </AnimatedSection>
          ))}
        </div>
      </section>

      {/* Why Allspire */}
      <section className="band">
        <div className="container-tight section-padding">
          <span className="kicker text-[#8b93ff]">Why Allspire</span>
          <div className="mt-3 grid gap-10 lg:grid-cols-[1fr_1.2fr]">
            <h2 className="text-3xl md:text-4xl">Speed without shortcuts. Innovation you can rely on.</h2>
            <div className="grid gap-6 sm:grid-cols-2">
              {whyUs.map((w) => (
                <div key={w.title}>
                  <div className="flex items-center gap-3">
                    <w.icon className="h-5 w-5 text-[#8b93ff]" />
                    <h3 className="text-lg">{w.title}</h3>
                  </div>
                  <p className="mt-2 text-sm text-navy-foreground">{w.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CaseStudyGrid stories={stories} limit={3} showAll />
      <TestimonialGrid items={testimonials} />

      <div className="pt-14 md:pt-20">
        <WebinarPromo />
      </div>
      <CtaBand />
    </PageLayout>
  );
};

export default Index;
