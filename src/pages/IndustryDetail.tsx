import { useParams, Link, Navigate } from "react-router-dom";
import { ArrowRight, ArrowLeft } from "lucide-react";
import { motion } from "framer-motion";
import PageLayout from "@/components/PageLayout";
import AnimatedSection from "@/components/AnimatedSection";
import { industriesData, type IndustrySlug } from "@/data/industries";

const IndustryDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const industry = slug ? industriesData[slug as IndustrySlug] : undefined;

  if (!industry) return <Navigate to="/" replace />;

  const Icon = industry.icon;

  return (
    <PageLayout>
      {/* Hero */}
      <section className="section-padding relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 pointer-events-none" />
        <div className="container-tight relative">
          <AnimatedSection className="max-w-3xl mx-auto text-center">
            <Link
              to="/#industries"
              className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-6"
            >
              <ArrowLeft className="w-4 h-4" /> All Industries
            </Link>
            <div
              className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${industry.color} flex items-center justify-center mx-auto mb-6`}
            >
              <Icon className="w-8 h-8 text-primary-foreground" />
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              {industry.headline}
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              {industry.description}
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Stats */}
      <section className="section-padding surface-elevated">
        <div className="container-tight">
          <div className="grid grid-cols-3 gap-8">
            {industry.stats.map((s, i) => (
              <AnimatedSection key={s.label} delay={i * 0.1}>
                <div className="text-center">
                  <p className="text-3xl md:text-4xl font-bold gradient-text mb-2">
                    {s.value}
                  </p>
                  <p className="text-sm text-muted-foreground">{s.label}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section className="section-padding">
        <div className="container-tight">
          <AnimatedSection className="text-center mb-16">
            <span className="text-sm font-medium text-primary mb-2 block">
              What We Build
            </span>
            <h2 className="text-3xl md:text-4xl font-bold">
              Our {industry.title} Capabilities
            </h2>
          </AnimatedSection>
          <div className="grid md:grid-cols-2 gap-6">
            {industry.capabilities.map((cap, i) => {
              const CapIcon = cap.icon;
              return (
                <AnimatedSection key={cap.title} delay={i * 0.1}>
                  <motion.div
                    className="glass-card p-8"
                    whileHover={{ y: -4 }}
                    transition={{ type: "spring", stiffness: 300, damping: 25 }}
                  >
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-5">
                      <CapIcon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2">{cap.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {cap.desc}
                    </p>
                  </motion.div>
                </AnimatedSection>
              );
            })}
          </div>
        </div>
      </section>

      {/* Case Study */}
      <section className="section-padding surface-elevated">
        <div className="container-tight">
          <AnimatedSection>
            <div className="max-w-3xl mx-auto glass-card p-10 md:p-14">
              <span className="text-sm font-medium text-primary mb-4 block">
                Case Study
              </span>
              <h3 className="text-2xl md:text-3xl font-bold mb-4">
                {industry.caseStudy.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                {industry.caseStudy.desc}
              </p>
              <Link
                to="/projects"
                className="inline-flex items-center gap-2 text-primary font-medium hover:underline group"
              >
                View all projects <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding">
        <div className="container-tight">
          <AnimatedSection>
            <div className="gradient-bg rounded-3xl p-12 md:p-16 text-center relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-white/5 pointer-events-none" />
              <div className="relative">
                <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
                  Ready to transform {industry.title.toLowerCase()}?
                </h2>
                <p className="text-primary-foreground/80 mb-8 max-w-xl mx-auto text-lg">
                  Let's build a solution tailored to your industry challenges.
                </p>
                <Link to="/contact" className="btn-glass-inverse group">
                  Start a Conversation <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </PageLayout>
  );
};

export default IndustryDetail;
