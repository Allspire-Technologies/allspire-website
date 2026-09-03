import PageLayout from "@/components/PageLayout";
import AnimatedSection from "@/components/AnimatedSection";
import CtaBand from "@/components/site/CtaBand";
import { TeamGrid } from "@/components/site/Proof";
import { useSeo } from "@/hooks/useSeo";
import { useCopy, useTeam } from "@/hooks/useSiteContent";
import heroImage from "@/assets/hero-bg.webp";

const About = () => {
  useSeo("About", "Allspire Technologies Limited is a Lagos-based technology company. We design and engineer digital products for businesses across Nigeria and Africa, and we build our own, like iTrova.");
  const copy = useCopy();
  const team = useTeam();

  return (
    <PageLayout>
      <section className="relative overflow-hidden">
        <div className="grid-bg absolute inset-0" aria-hidden="true" />
        <div className="container-tight relative grid items-center gap-10 py-16 md:py-20 lg:grid-cols-[1.1fr_1fr]">
          <AnimatedSection>
            <span className="eyebrow">About Allspire</span>
            <h1 className="mt-4 text-4xl md:text-5xl">Inspiring digital possibilities</h1>
            <p className="mt-4 text-lg text-body">{copy.about_intro}</p>
          </AnimatedSection>
          <AnimatedSection delay={0.1}>
            <div className="shot rounded-3xl">
              <img src={heroImage} alt="Allspire team at work" width={1600} height={900} className="h-56 w-full object-cover md:h-72" loading="eager" />
            </div>
          </AnimatedSection>
        </div>
      </section>

      <section className="container-tight grid gap-4 pb-14 md:grid-cols-2 md:pb-16">
        <AnimatedSection>
          <div className="card-soft h-full p-7">
            <span className="kicker">Mission</span>
            <h2 className="mt-3 text-2xl">{copy.mission_headline}</h2>
            <p className="mt-3 text-[15px] text-body">{copy.mission}</p>
          </div>
        </AnimatedSection>
        <AnimatedSection delay={0.08}>
          <div className="card-soft h-full p-7">
            <span className="kicker">Vision</span>
            <h2 className="mt-3 text-2xl">{copy.vision_headline}</h2>
            <p className="mt-3 text-[15px] text-body">{copy.vision}</p>
          </div>
        </AnimatedSection>
      </section>

      <section className="container-tight pb-16 md:pb-24">
        <span className="kicker">Our story</span>
        <div className="mt-4 grid gap-4 md:grid-cols-3">
          {copy.story_milestones.map((m, i) => (
            <AnimatedSection key={m.title} delay={i * 0.06}>
              <div className="card-soft h-full p-6">
                <div className="text-[13px] font-bold text-primary">{m.title}</div>
                <p className="mt-2 text-sm text-body">{m.text}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </section>

      <TeamGrid members={team} />
      <CtaBand headline="Want to work with us?" sub="Whether you are hiring a team or joining one, we would like to hear from you." />
    </PageLayout>
  );
};

export default About;
