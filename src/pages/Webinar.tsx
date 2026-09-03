import { Link } from "react-router-dom";
import {
  ExternalLink, CheckCircle2, XCircle, Gift, Sparkles,
  Store, Shirt, UtensilsCrossed, Wand2, Briefcase, Truck, Rocket,
} from "lucide-react";
import PageLayout from "@/components/PageLayout";
import AnimatedSection from "@/components/AnimatedSection";
import SectionHead from "@/components/site/SectionHead";
import { useSeo } from "@/hooks/useSeo";
import { useWebinar } from "@/hooks/useSiteContent";
import { REGISTRATION_FORM_URL, WEBINAR_FALLBACK } from "@/data/allspire";
import { googleFormUrl, safeHttpsUrl } from "@/lib/safeUrl";
import facilitatorPhoto from "@/assets/samuel-tosinpaul.webp";

const painPoints = [
  "Their real profit",
  "Their fastest-selling products",
  "Where money is leaking",
  "How customers behave",
  "What happens when they are away",
];

const audiences = [
  { icon: Store, title: "Retail stores" },
  { icon: Shirt, title: "Fashion businesses" },
  { icon: UtensilsCrossed, title: "Restaurants" },
  { icon: Wand2, title: "Beauty businesses" },
  { icon: Briefcase, title: "Service businesses" },
  { icon: Truck, title: "Small distributors" },
  { icon: Rocket, title: "Growing entrepreneurs" },
];

const bonuses = ["Free Digital Business Readiness Assessment", "iTrova Business Setup Support"];

const Webinar = () => {
  const webinar = useWebinar();
  useSeo(
    webinar ? `${webinar.title}: free SME masterclass` : "Webinar",
    "A free weekly online masterclass for business owners moving from paper records to systems that run the business. Sell more, manage better, grow faster.",
  );

  if (!webinar) {
    return (
      <PageLayout>
        <section className="container-tight section-padding text-center">
          <span className="eyebrow">Webinar</span>
          <h1 className="mt-4 text-3xl md:text-4xl">No session is scheduled right now</h1>
          <p className="mx-auto mt-3 max-w-xl text-body">Write to us and we will tell you when the next masterclass opens.</p>
          <Link to="/contact" className="btn-brand mt-6">Talk to us</Link>
        </section>
      </PageLayout>
    );
  }

  const topics = webinar.topics.length > 0 ? webinar.topics : WEBINAR_FALLBACK.topics;
  const photo = webinar.facilitator_photo_url || facilitatorPhoto;
  const name = webinar.facilitator_name || WEBINAR_FALLBACK.facilitator_name!;
  const role = webinar.facilitator_role || WEBINAR_FALLBACK.facilitator_role!;
  const url = safeHttpsUrl(webinar.registration_url) ?? REGISTRATION_FORM_URL;
  // Only a Google Form is ever embedded; any other registration link opens in a new tab.
  const formUrl = googleFormUrl(url);
  const embedUrl = formUrl ? `${formUrl}${formUrl.includes("?") ? "&" : "?"}embedded=true` : null;

  return (
    <PageLayout>
      <section className="band relative overflow-hidden">
        <div className="grid-bg absolute inset-0 opacity-50" aria-hidden="true" />
        <div className="container-tight relative grid items-center gap-10 py-16 md:py-20 lg:grid-cols-[1.2fr_1fr]">
          <AnimatedSection>
            <span className="eyebrow-dark">Free SME masterclass · {webinar.schedule} · {webinar.time_label}</span>
            <h1 className="mt-4 text-4xl md:text-5xl">{webinar.title}</h1>
            <p className="mt-4 text-lg text-navy-foreground">How to use digital tools to increase sales, track inventory and grow your business.</p>
            <p className="mt-3 text-sm italic text-navy-foreground/80">
              "Building the Modern African Business: How SMEs Can Use Digital Tools to Sell More, Manage Better and Grow Faster."
            </p>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <a href="#register" className="btn-brand btn-lg">Register free</a>
              <a href="#learn" className="btn-ghost-dark btn-lg">What we cover</a>
            </div>
            <p className="mt-4 text-sm text-navy-foreground/80">Online. The access link goes to registered participants only.</p>
          </AnimatedSection>
          <AnimatedSection delay={0.1}>
            <div className="flex items-center gap-4 rounded-2xl border border-white/10 bg-navy-2 p-5">
              <img src={photo} alt={name} width={480} height={670} className="h-20 w-20 rounded-2xl object-cover object-top" loading="eager" />
              <div>
                <div className="text-[12px] font-semibold uppercase tracking-[0.08em] text-[#8b93ff]">Facilitator</div>
                <div className="mt-1 font-display text-lg font-bold text-white">{name}</div>
                <div className="mt-0.5 text-[13px] text-navy-foreground">{role}</div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <section className="container-tight section-padding">
        <div className="grid items-center gap-8 lg:grid-cols-2">
          <AnimatedSection>
            <span className="kicker">The problem</span>
            <h2 className="mt-2 text-3xl md:text-4xl">Are you running your business with guesswork?</h2>
            <p className="mt-3 text-body">Many business owners know how much they sell, but do not know:</p>
          </AnimatedSection>
          <AnimatedSection delay={0.08}>
            <div className="card-soft space-y-3.5 p-6">
              {painPoints.map((p) => (
                <div key={p} className="flex items-center gap-3">
                  <XCircle className="h-5 w-5 shrink-0 text-red-400" />
                  <span className="text-sm font-medium">{p}</span>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      <section id="learn" className="container-tight scroll-mt-24 pb-16 md:pb-24">
        <SectionHead kicker="The masterclass" title="Join this practical session and learn how to" />
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {topics.map((t, i) => (
            <AnimatedSection key={t} delay={i * 0.05}>
              <div className="card-soft flex h-full items-start gap-3 p-5">
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                <span className="text-sm font-medium leading-relaxed">{t}</span>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </section>

      <section className="container-tight pb-16 md:pb-24">
        <SectionHead kicker="Who should attend" title="Built for growing businesses like yours" />
        <div className="mt-8 grid grid-cols-2 gap-3.5 md:grid-cols-4">
          {audiences.map((a, i) => (
            <AnimatedSection key={a.title} delay={i * 0.04}>
              <div className="card-soft h-full p-5 text-center">
                <div className="ico mx-auto"><a.icon className="h-5 w-5" /></div>
                <h3 className="mt-3 text-sm">{a.title}</h3>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </section>

      <section className="container-tight pb-16 md:pb-24">
        <AnimatedSection>
          <div className="rounded-3xl border border-border bg-accent p-7 text-center md:p-10">
            <div className="ico mx-auto bg-card"><Gift className="h-5 w-5" /></div>
            <h2 className="mt-4 text-2xl md:text-3xl">Bonus for participants</h2>
            <div className="mt-5 flex flex-col justify-center gap-3 sm:flex-row">
              {bonuses.map((b) => (
                <div key={b} className="chip justify-center py-2.5">
                  <Sparkles className="mr-2 h-4 w-4 text-primary" />
                  {b}
                </div>
              ))}
            </div>
          </div>
        </AnimatedSection>
      </section>

      <section id="register" className="container-tight scroll-mt-24 pb-16 md:pb-24">
        <AnimatedSection className="mb-8 text-center">
          <span className="kicker">Limited slots</span>
          <h2 className="mt-2 text-3xl md:text-4xl">Register now. It is free.</h2>
          <p className="mx-auto mt-3 max-w-xl text-body">Fill the form below to secure your slot. Your access link will be sent to registered participants only.</p>
        </AnimatedSection>
        {embedUrl ? (
          <AnimatedSection delay={0.08} className="mx-auto max-w-3xl">
            <div className="card-soft overflow-hidden p-2 md:p-4">
              <iframe
                src={embedUrl}
                title="Masterclass registration"
                className="h-[1200px] w-full rounded-xl"
                loading="lazy"
                sandbox="allow-scripts allow-forms allow-same-origin allow-popups allow-popups-to-escape-sandbox"
                referrerPolicy="strict-origin-when-cross-origin"
              >
                Loading
              </iframe>
            </div>
            <p className="mt-4 text-center text-sm text-muted-foreground">
              Form not loading?{" "}
              <a href={url} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 font-medium text-primary hover:underline">
                Open it in a new tab <ExternalLink className="h-3.5 w-3.5" />
              </a>
            </p>
          </AnimatedSection>
        ) : (
          <div className="text-center">
            <a href={url} target="_blank" rel="noopener noreferrer" className="btn-brand btn-lg">
              Register free <ExternalLink className="h-4 w-4" />
            </a>
          </div>
        )}
        <p className="mt-10 text-center text-sm text-muted-foreground">
          Powered by <span className="font-semibold text-foreground">iTrova</span> by Allspire. Helping African SMEs sell smarter, manage better, grow faster.
        </p>
      </section>
    </PageLayout>
  );
};

export default Webinar;
