import { Target, Eye } from "lucide-react";
import { motion } from "framer-motion";
import PageLayout from "@/components/PageLayout";
import AnimatedSection from "@/components/AnimatedSection";

const About = () => (
  <PageLayout>
    {/* Hero */}
    <section className="section-padding relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 pointer-events-none" />
      <div className="container-tight relative">
        <AnimatedSection className="max-w-3xl mx-auto text-center">
          <span className="text-sm font-medium text-primary mb-4 block">About Us</span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Building the future of{" "}
            <span className="gradient-text">digital business</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Allspire was founded with a simple belief: technology should empower businesses, not complicate them.
          </p>
        </AnimatedSection>
      </div>
    </section>

    {/* Story */}
    <section className="section-padding surface-elevated">
      <div className="container-tight">
        <div className="max-w-3xl mx-auto">
          <AnimatedSection>
            <h2 className="text-3xl font-bold mb-6">Our Story</h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Founded in 2025, Allspire emerged from the frustration of watching businesses struggle with outdated technology and disconnected systems. Our founders — seasoned engineers and product leaders — set out to create a technology partner that truly understands business.
              </p>
              <p>
                Today, we work with organizations across real estate, finance, retail, logistics, and education, delivering intelligent digital products that drive measurable outcomes. From startups to enterprises, our clients trust us to turn complex challenges into elegant solutions.
              </p>
              <p>
                We're a team of 10+ engineers, designers, and strategists distributed across three continents, united by a shared commitment to craftsmanship and impact.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>

    {/* Mission & Vision */}
    <section className="section-padding">
      <div className="container-tight">
        <div className="grid md:grid-cols-2 gap-8">
          <AnimatedSection>
            <motion.div
              className="glass-card p-8 h-full"
              whileHover={{ y: -4 }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
            >
              <div className="w-12 h-12 rounded-xl gradient-bg flex items-center justify-center mb-5">
                <Target className="w-6 h-6 text-primary-foreground" />
              </div>
              <h3 className="text-2xl font-bold mb-3">Our Mission</h3>
              <p className="text-muted-foreground leading-relaxed">
                To empower businesses with technology that simplifies operations, accelerates growth, and creates lasting competitive advantage.
              </p>
            </motion.div>
          </AnimatedSection>
          <AnimatedSection delay={0.1}>
            <motion.div
              className="glass-card p-8 h-full"
              whileHover={{ y: -4 }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
            >
              <div className="w-12 h-12 rounded-xl gradient-bg flex items-center justify-center mb-5">
                <Eye className="w-6 h-6 text-primary-foreground" />
              </div>
              <h3 className="text-2xl font-bold mb-3">Our Vision</h3>
              <p className="text-muted-foreground leading-relaxed">
                A world where every business, regardless of size, has access to world-class technology that helps them compete and thrive on a global stage.
              </p>
            </motion.div>
          </AnimatedSection>
        </div>
      </div>
    </section>

  </PageLayout>
);

export default About;
