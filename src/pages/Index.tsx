import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Rocket, Globe, RefreshCw, Bot,
  Building2, Landmark, ShoppingCart, Truck, GraduationCap,
  Zap, Lightbulb, Shield, TrendingUp,
  ArrowRight, CheckCircle2,
} from "lucide-react";
import PageLayout from "@/components/PageLayout";
import AnimatedSection from "@/components/AnimatedSection";

const services = [
  { icon: Rocket, title: "Product Development", desc: "End-to-end product design and engineering from concept to launch." },
  { icon: Globe, title: "Web & Mobile Apps", desc: "Beautiful, performant applications across every platform." },
  { icon: RefreshCw, title: "Digital Transformation", desc: "Modernize legacy systems and streamline operations." },
  { icon: Bot, title: "AI & Automation", desc: "Intelligent workflows that reduce cost and increase speed." },
];

const industries = [
  { icon: Building2, title: "Real Estate", color: "from-blue-500 to-cyan-400", slug: "real-estate" },
  { icon: Landmark, title: "Finance", color: "from-indigo-500 to-blue-400", slug: "finance" },
  { icon: ShoppingCart, title: "Retail", color: "from-purple-500 to-pink-400", slug: "retail" },
  { icon: Truck, title: "Logistics", color: "from-violet-500 to-indigo-400", slug: "logistics" },
  { icon: GraduationCap, title: "Education", color: "from-emerald-500 to-teal-400", slug: "education" },
];

const whyUs = [
  { icon: Zap, title: "Speed", desc: "Rapid delivery without compromising quality." },
  { icon: Lightbulb, title: "Innovation", desc: "Cutting-edge technology and creative thinking." },
  { icon: Shield, title: "Reliability", desc: "Enterprise-grade stability you can count on." },
  { icon: TrendingUp, title: "Scalable Solutions", desc: "Built to grow with your business." },
];

const heroStats = [
  { value: "iTrova", label: "Flagship Product" },
  { value: "10+", label: "Engineers & Designers" },
  { value: "98%", label: "Client Satisfaction" },
];

const trustedPoints = [
  "End-to-end product delivery",
  "AI-powered solutions",
  "Enterprise-grade security",
];

const Index = () => (
  <PageLayout>
    {/* Webinar announcement */}
    <Link to="/webinar" className="block gradient-bg group">
      <motion.div
        className="container-tight flex flex-wrap items-center justify-center gap-x-3 gap-y-1 py-3 text-center text-sm text-primary-foreground"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <span className="font-semibold">🎙 Free SME Masterclass:</span>
        <span className="text-primary-foreground/90">
          From Notebook to Smart Business · Every Saturday in 2026, 7PM WAT
        </span>
        <span className="font-semibold inline-flex items-center gap-1 underline underline-offset-4">
          Register free <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
        </span>
      </motion.div>
    </Link>

    {/* Hero */}
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* Animated gradient orbs */}
      <motion.div
        className="absolute top-[-20%] right-[-10%] w-[600px] h-[600px] rounded-full opacity-20"
        style={{ background: "radial-gradient(circle, hsl(234 89% 54% / 0.4), transparent 70%)" }}
        animate={{ scale: [1, 1.15, 1], x: [0, 30, 0], y: [0, -20, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] rounded-full opacity-15"
        style={{ background: "radial-gradient(circle, hsl(270 70% 55% / 0.5), transparent 70%)" }}
        animate={{ scale: [1, 1.2, 1], x: [0, -20, 0], y: [0, 30, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute top-[30%] left-[40%] w-[300px] h-[300px] rounded-full opacity-10"
        style={{ background: "radial-gradient(circle, hsl(234 89% 64% / 0.3), transparent 70%)" }}
        animate={{ scale: [1, 1.3, 1] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Grid pattern overlay */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: "linear-gradient(hsl(var(--foreground)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="container-tight relative z-10 py-20 md:py-28">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left — Text */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <motion.span
              className="inline-flex items-center gap-2 text-sm font-medium text-primary mb-6 px-4 py-2 rounded-full border border-primary/20 bg-primary/5"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <span className="w-2 h-2 rounded-full gradient-bg animate-pulse" />
              Technology Solutions Partner
            </motion.span>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.08] mb-6 tracking-tight">
              From Idea
              <br />
              to <span className="gradient-text">Impact</span>
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-lg leading-relaxed">
              We build intelligent digital products that help businesses scale faster and operate smarter.
            </p>

            {/* Trust points */}
            <div className="flex flex-col gap-2.5 mb-10">
              {trustedPoints.map((point, i) => (
                <motion.div
                  key={point}
                  className="flex items-center gap-2.5 text-sm text-muted-foreground"
                  initial={{ opacity: 0, x: -15 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5 + i * 0.1 }}
                >
                  <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0" />
                  {point}
                </motion.div>
              ))}
            </div>

            <motion.div
              className="flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
            >
              <Link to="/contact" className="btn-glass-primary text-center">
                Get Started
              </Link>
              <Link to="/projects" className="btn-glass-secondary group text-center">
                View Our Work <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          </motion.div>

          {/* Right — Stats + visual card */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            <div className="relative">
              {/* Main glass card */}
              <div className="glass-card p-6 md:p-10 shadow-2xl">
                <div className="flex items-center gap-3 mb-6 md:mb-8">
                  <div className="w-2.5 h-2.5 md:w-3 md:h-3 rounded-full bg-red-400" />
                  <div className="w-2.5 h-2.5 md:w-3 md:h-3 rounded-full bg-yellow-400" />
                  <div className="w-2.5 h-2.5 md:w-3 md:h-3 rounded-full bg-green-400" />
                  <span className="ml-auto text-xs text-muted-foreground font-mono">allspire.tech</span>
                </div>

                {/* Stats grid */}
                <div className="grid grid-cols-3 gap-4 md:gap-6 mb-6 md:mb-8">
                  {heroStats.map((stat, i) => (
                    <motion.div
                      key={stat.label}
                      className="text-center"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.6 + i * 0.15 }}
                    >
                      <p className="text-2xl md:text-3xl font-bold gradient-text">{stat.value}</p>
                      <p className="text-[10px] md:text-xs text-muted-foreground mt-1">{stat.label}</p>
                    </motion.div>
                  ))}
                </div>

                {/* Faux chart bars */}
                <div className="space-y-2 md:space-y-3">
                  {[85, 92, 78, 95].map((width, i) => (
                    <div key={i} className="flex items-center gap-2 md:gap-3">
                      <span className="text-xs text-muted-foreground w-6 md:w-8 text-right font-mono">Q{i + 1}</span>
                      <div className="flex-1 h-2.5 md:h-3 rounded-full bg-secondary overflow-hidden">
                        <motion.div
                          className="h-full rounded-full gradient-bg"
                          initial={{ width: 0 }}
                          animate={{ width: `${width}%` }}
                          transition={{ duration: 1, delay: 0.8 + i * 0.15, ease: "easeOut" }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Floating badge */}
              <motion.div
                className="absolute -bottom-4 -left-2 md:-bottom-6 md:-left-6 glass-card px-3 py-2.5 md:px-5 md:py-4 !rounded-xl md:!rounded-2xl"
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              >
                <div className="flex items-center gap-2 md:gap-3">
                  <div className="w-8 h-8 md:w-10 md:h-10 rounded-lg md:rounded-xl gradient-bg flex items-center justify-center">
                    <TrendingUp className="w-4 h-4 md:w-5 md:h-5 text-primary-foreground" />
                  </div>
                  <div>
                    <p className="text-xs md:text-sm font-semibold">Growth Rate</p>
                    <p className="text-[10px] md:text-xs text-muted-foreground">+127% YoY</p>
                  </div>
                </div>
              </motion.div>

              {/* Floating badge top-right */}
              <motion.div
                className="absolute -top-3 -right-1 md:-top-4 md:-right-4 glass-card px-3 py-2 md:px-4 md:py-3 !rounded-xl md:!rounded-2xl"
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              >
                <div className="flex items-center gap-1.5 md:gap-2">
                  <div className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-green-400 animate-pulse" />
                  <span className="text-[10px] md:text-xs font-medium">All systems operational</span>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>

    {/* Services */}
    <section className="section-padding surface-elevated">
      <div className="container-tight">
        <AnimatedSection className="text-center mb-16">
          <span className="text-sm font-medium text-primary mb-2 block">What We Do</span>
          <h2 className="text-3xl md:text-4xl font-bold">Our Services</h2>
        </AnimatedSection>
        <div className="grid md:grid-cols-2 gap-6">
          {services.map((s, i) => (
            <AnimatedSection key={s.title} delay={i * 0.1}>
              <motion.div
                className="glass-card p-8 group cursor-default h-[200px] flex flex-col justify-start"
                whileHover={{ y: -4 }}
                transition={{ type: "spring", stiffness: 300, damping: 25 }}
              >
                <div className="w-12 h-12 rounded-xl gradient-bg flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300 flex-shrink-0">
                  <s.icon className="w-6 h-6 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{s.title}</h3>
                <p className="text-muted-foreground leading-relaxed text-sm">{s.desc}</p>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>

    {/* Industries */}
    <section className="section-padding">
      <div className="container-tight">
        <AnimatedSection className="text-center mb-16">
          <span className="text-sm font-medium text-primary mb-2 block">Who We Serve</span>
          <h2 className="text-3xl md:text-4xl font-bold">Industries</h2>
        </AnimatedSection>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
          {industries.map((ind, i) => (
            <AnimatedSection key={ind.title} delay={i * 0.1}>
              <Link to={`/industries/${ind.slug}`}>
                <motion.div
                  className="glass-card p-8 text-center group cursor-pointer"
                  whileHover={{ y: -6, scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300, damping: 25 }}
                >
                  <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${ind.color} flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <ind.icon className="w-7 h-7 text-primary-foreground" />
                  </div>
                  <h3 className="font-semibold">{ind.title}</h3>
                </motion.div>
              </Link>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>

    {/* Why Us */}
    <section className="section-padding surface-elevated">
      <div className="container-tight">
        <AnimatedSection className="text-center mb-16">
          <span className="text-sm font-medium text-primary mb-2 block">Our Edge</span>
          <h2 className="text-3xl md:text-4xl font-bold">Why Choose Allspire</h2>
        </AnimatedSection>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {whyUs.map((w, i) => (
            <AnimatedSection key={w.title} delay={i * 0.1}>
              <motion.div
                className="text-center p-6 rounded-2xl cursor-default"
                whileHover={{ y: -4 }}
                transition={{ type: "spring", stiffness: 300, damping: 25 }}
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <w.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">{w.title}</h3>
                <p className="text-sm text-muted-foreground">{w.desc}</p>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>

    {/* CTA */}
    <section className="section-padding">
      <div className="container-tight">
        <AnimatedSection>
          <div className="gradient-bg rounded-3xl p-12 md:p-16 text-center relative overflow-hidden">
            {/* Glass overlay for depth */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-white/5 pointer-events-none" />
            <div className="relative">
              <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
                Ready to build something great?
              </h2>
              <p className="text-primary-foreground/80 mb-8 max-w-xl mx-auto text-lg">
                Let's turn your vision into a product that drives real results.
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

export default Index;
