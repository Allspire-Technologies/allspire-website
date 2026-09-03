import { Rocket, Globe, RefreshCw, Bot } from "lucide-react";
import PageLayout from "@/components/PageLayout";
import AnimatedSection from "@/components/AnimatedSection";
import CtaBand from "@/components/site/CtaBand";
import { useSeo } from "@/hooks/useSeo";

const services = [
  {
    id: "product-development",
    icon: Rocket,
    title: "Product development",
    desc: "End-to-end product design and engineering from concept to launch.",
    points: ["Discovery and product strategy", "UX research, design system, prototypes", "Engineering, QA, release", "Run and improve after launch"],
  },
  {
    id: "web-and-mobile",
    icon: Globe,
    title: "Web and mobile apps",
    desc: "Beautiful, performant applications across every platform.",
    points: ["Web apps and portals", "iOS, Android, installable PWAs", "Offline-first where networks are unreliable", "Performance budgets, accessibility built in"],
  },
  {
    id: "digital-transformation",
    icon: RefreshCw,
    title: "Digital transformation",
    desc: "Modernise legacy systems and streamline operations.",
    points: ["Process mapping and automation", "Migration without downtime", "Integrations and data pipelines", "Training and change support"],
  },
  {
    id: "ai-and-automation",
    icon: Bot,
    title: "AI and automation",
    desc: "Intelligent workflows that reduce cost and increase speed.",
    points: ["Assistants and document intelligence", "Forecasting and recommendations", "Workflow automation across your tools", "Responsible, measurable rollout"],
  },
];

const process = [
  { n: "01", title: "Discover", desc: "Goals, users, constraints, a plan you can hold us to." },
  { n: "02", title: "Design", desc: "Prototypes you can click before we write production code." },
  { n: "03", title: "Build", desc: "Short cycles, weekly demos, tested as we go." },
  { n: "04", title: "Run", desc: "Launch, monitor, improve. We stay on after go-live." },
];

const Services = () => {
  useSeo("Services", "Product development, web and mobile apps, digital transformation and AI automation. Four services, one team, from the first sketch to a system your team runs on.");
  return (
    <PageLayout>
      <section className="relative overflow-hidden">
        <div className="grid-bg absolute inset-0" aria-hidden="true" />
        <div className="container-tight relative py-16 md:py-20">
          <AnimatedSection className="max-w-3xl">
            <span className="eyebrow">Services</span>
            <h1 className="mt-4 text-4xl md:text-5xl lg:text-[52px]">Everything from the first sketch to a system your team runs on</h1>
            <p className="mt-4 text-lg text-body">Four services, one team. Pick one, or let us carry a product end to end.</p>
          </AnimatedSection>
        </div>
      </section>

      <section className="container-tight flex flex-col gap-4 pb-16 md:pb-20">
        {services.map((s, i) => (
          <AnimatedSection key={s.id} delay={i * 0.06}>
            <article id={s.id} className="card-soft grid gap-6 p-6 md:grid-cols-[52px_1fr_1fr] md:p-7">
              <div className="ico"><s.icon className="h-5 w-5" /></div>
              <div>
                <h2 className="text-2xl">{s.title}</h2>
                <p className="mt-2 text-[15px] text-body">{s.desc}</p>
              </div>
              <div className="grid gap-2.5">
                {s.points.map((p) => (
                  <div key={p} className="tick">{p}</div>
                ))}
              </div>
            </article>
          </AnimatedSection>
        ))}
      </section>

      <section className="container-tight pb-16 md:pb-24">
        <span className="kicker">How we work</span>
        <div className="mt-4 grid gap-3.5 sm:grid-cols-2 lg:grid-cols-4">
          {process.map((p, i) => (
            <AnimatedSection key={p.n} delay={i * 0.06}>
              <div className="card-soft h-full p-5">
                <div className="text-[13px] font-bold text-primary">{p.n}</div>
                <h3 className="mt-2 text-lg">{p.title}</h3>
                <p className="mt-1 text-sm text-body">{p.desc}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </section>

      <CtaBand />
    </PageLayout>
  );
};

export default Services;
