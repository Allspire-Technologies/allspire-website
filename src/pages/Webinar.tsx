import { motion } from "framer-motion";
import {
  Calendar, Clock, MapPin, Mic, ArrowRight, ExternalLink,
  CheckCircle2, XCircle, Gift, Sparkles,
  Store, Shirt, Pill, UtensilsCrossed, Wand2, Briefcase, Truck, Rocket,
} from "lucide-react";
import PageLayout from "@/components/PageLayout";
import AnimatedSection from "@/components/AnimatedSection";

const REGISTRATION_FORM_URL =
  "https://docs.google.com/forms/d/e/1FAIpQLSexyMzM0NcME3yncE96mhcOOdYAW_H01BJ4SzbnR2gMUm25HA/viewform";

const eventDetails = [
  { icon: Calendar, label: "Date", value: "Saturday, 11 July 2026" },
  { icon: Clock, label: "Time", value: "7:00 PM WAT" },
  { icon: MapPin, label: "Venue", value: "Online — exclusive to registered participants" },
];

const painPoints = [
  "Their real profit",
  "Their fastest-selling products",
  "Where money is leaking",
  "How customers behave",
  "What happens when they are away",
];

const learnings = [
  "Track sales and expenses easily",
  "Manage inventory without stress",
  "Understand your business numbers",
  "Keep customers coming back",
  "Use AI and digital tools to grow faster",
  "Build a business that runs beyond you",
];

const audiences = [
  { icon: Store, title: "Retail Stores" },
  { icon: Shirt, title: "Fashion Businesses" },
  { icon: Pill, title: "Pharmacies" },
  { icon: UtensilsCrossed, title: "Restaurants" },
  { icon: Wand2, title: "Beauty Businesses" },
  { icon: Briefcase, title: "Service Businesses" },
  { icon: Truck, title: "Small Distributors" },
  { icon: Rocket, title: "Growing Entrepreneurs" },
];

const bonuses = [
  "Free Digital Business Readiness Assessment",
  "iTrova Business Setup Support",
];

const Webinar = () => (
  <PageLayout>
    {/* Hero */}
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 pointer-events-none" />
      <motion.div
        className="absolute top-[-30%] right-[-15%] w-[500px] h-[500px] rounded-full opacity-20"
        style={{ background: "radial-gradient(circle, hsl(234 89% 54% / 0.4), transparent 70%)" }}
        animate={{ scale: [1, 1.15, 1] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <div className="container-tight relative z-10 py-20 md:py-28">
        <motion.div
          className="max-w-3xl mx-auto text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <span className="inline-flex items-center gap-2 text-sm font-medium text-primary mb-6 px-4 py-2 rounded-full border border-primary/20 bg-primary/5">
            <span className="w-2 h-2 rounded-full gradient-bg animate-pulse" />
            Free Webinar · SME Digital Growth Series
          </span>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.1] mb-6 tracking-tight">
            From Notebook to <span className="gradient-text">Smart Business</span>
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground mb-4 leading-relaxed">
            How to use digital tools to increase sales, track inventory &amp; grow your business.
          </p>
          <p className="text-sm text-muted-foreground mb-10 max-w-2xl mx-auto italic">
            "Building the Modern African Business: How SMEs Can Use Digital Tools to Sell More,
            Manage Better &amp; Grow Faster."
          </p>

          {/* Event details */}
          <div className="grid sm:grid-cols-3 gap-4 mb-10 text-left">
            {eventDetails.map((d) => (
              <div key={d.label} className="glass-card p-4 flex items-start gap-3">
                <div className="w-9 h-9 rounded-lg gradient-bg flex items-center justify-center flex-shrink-0">
                  <d.icon className="w-5 h-5 text-primary-foreground" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">{d.label}</p>
                  <p className="text-sm font-semibold">{d.value}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#register" className="btn-glass-primary text-center">
              Register Free — Limited Slots <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>

    {/* Pain points */}
    <section className="section-padding surface-elevated">
      <div className="container-tight">
        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
          <AnimatedSection>
            <span className="text-sm font-medium text-primary mb-2 block">The Problem</span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Are you running your business with <span className="gradient-text">guesswork</span>?
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Many business owners know how much they sell, but don't know:
            </p>
          </AnimatedSection>
          <AnimatedSection delay={0.1}>
            <div className="glass-card p-8 space-y-4">
              {painPoints.map((p) => (
                <div key={p} className="flex items-center gap-3">
                  <XCircle className="w-5 h-5 text-red-400 flex-shrink-0" />
                  <span className="text-sm font-medium">{p}</span>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>

    {/* What you'll learn */}
    <section className="section-padding">
      <div className="container-tight">
        <AnimatedSection className="text-center mb-16">
          <span className="text-sm font-medium text-primary mb-2 block">The Masterclass</span>
          <h2 className="text-3xl md:text-4xl font-bold">
            Join this practical session and learn how to
          </h2>
        </AnimatedSection>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {learnings.map((l, i) => (
            <AnimatedSection key={l} delay={i * 0.08}>
              <motion.div
                className="glass-card p-6 h-full flex items-start gap-3"
                whileHover={{ y: -4 }}
                transition={{ type: "spring", stiffness: 300, damping: 25 }}
              >
                <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <span className="text-sm font-medium leading-relaxed">{l}</span>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>

    {/* Facilitator */}
    <section className="section-padding surface-elevated">
      <div className="container-tight">
        <AnimatedSection className="max-w-2xl mx-auto">
          <div className="glass-card p-8 md:p-10 text-center">
            <div className="inline-flex items-center gap-2 text-xs font-medium text-primary mb-6 px-3 py-1.5 rounded-full border border-primary/20 bg-primary/5">
              <Mic className="w-3.5 h-3.5" />
              Facilitator
            </div>
            <div className="w-20 h-20 rounded-2xl gradient-bg flex items-center justify-center mx-auto mb-5">
              <span className="text-2xl font-bold text-primary-foreground">TP</span>
            </div>
            <h3 className="text-2xl font-bold mb-1">Tosin Paul</h3>
            <p className="text-sm text-muted-foreground">
              Digital Transformation Strategist · Co-Founder, Allspire Technologies
            </p>
          </div>
        </AnimatedSection>
      </div>
    </section>

    {/* Who it's for */}
    <section className="section-padding">
      <div className="container-tight">
        <AnimatedSection className="text-center mb-16">
          <span className="text-sm font-medium text-primary mb-2 block">Who Should Attend</span>
          <h2 className="text-3xl md:text-4xl font-bold">Built for growing businesses like yours</h2>
        </AnimatedSection>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
          {audiences.map((a, i) => (
            <AnimatedSection key={a.title} delay={i * 0.05}>
              <motion.div
                className="glass-card p-6 text-center h-full"
                whileHover={{ y: -6, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300, damping: 25 }}
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-3">
                  <a.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-sm font-semibold">{a.title}</h3>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>

    {/* Bonus */}
    <section className="section-padding surface-elevated">
      <div className="container-tight">
        <AnimatedSection className="max-w-3xl mx-auto">
          <div className="gradient-bg rounded-3xl p-10 md:p-12 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-white/5 pointer-events-none" />
            <div className="relative text-center">
              <div className="w-12 h-12 rounded-xl bg-white/15 flex items-center justify-center mx-auto mb-5">
                <Gift className="w-6 h-6 text-primary-foreground" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-primary-foreground mb-6">
                Bonus for participants
              </h2>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                {bonuses.map((b) => (
                  <div
                    key={b}
                    className="flex items-center gap-2 px-4 py-3 rounded-xl bg-white/10 backdrop-blur-sm text-sm font-medium text-primary-foreground"
                  >
                    <Sparkles className="w-4 h-4 flex-shrink-0" />
                    {b}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>

    {/* Registration */}
    <section id="register" className="section-padding">
      <div className="container-tight">
        <AnimatedSection className="text-center mb-12">
          <span className="text-sm font-medium text-primary mb-2 block">Limited Slots Available</span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Register <span className="gradient-text">now</span> — it's free
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Fill the form below to secure your slot. Your access link will be sent to registered
            participants only.
          </p>
        </AnimatedSection>
        <AnimatedSection delay={0.1} className="max-w-3xl mx-auto">
          <div className="glass-card p-2 md:p-4 overflow-hidden">
            <iframe
              src={`${REGISTRATION_FORM_URL}?embedded=true`}
              title="SME Digital Growth Masterclass Registration"
              className="w-full h-[1200px] rounded-xl"
              loading="lazy"
            >
              Loading…
            </iframe>
          </div>
          <p className="text-center text-sm text-muted-foreground mt-4">
            Form not loading?{" "}
            <a
              href={REGISTRATION_FORM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary font-medium hover:underline inline-flex items-center gap-1"
            >
              Open it in a new tab <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </p>
        </AnimatedSection>
        <AnimatedSection delay={0.15} className="text-center mt-12">
          <p className="text-sm text-muted-foreground">
            Powered by <span className="font-semibold text-foreground">iTrova</span> by Allspire —
            helping African SMEs sell smarter, manage better, grow faster.
          </p>
        </AnimatedSection>
      </div>
    </section>
  </PageLayout>
);

export default Webinar;
