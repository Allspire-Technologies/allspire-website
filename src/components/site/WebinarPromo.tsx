import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import { useWebinar } from "@/hooks/useSiteContent";
import facilitatorPhoto from "@/assets/samuel-tosinpaul.jpeg";

/** Home page promo for the masterclass. Fed by the same CMS record as /webinar; hidden when unpublished. */
const WebinarPromo = () => {
  const webinar = useWebinar();
  if (!webinar) return null;
  const photo = webinar.facilitator_photo_url || facilitatorPhoto;
  const name = webinar.facilitator_name || "Samuel TosinPaul";
  return (
    <section className="container-tight pb-6">
      <AnimatedSection>
        <div className="grid items-center gap-5 rounded-3xl border border-border bg-accent px-6 py-6 md:grid-cols-[auto_1fr_auto] md:px-8">
          <img src={photo} alt={name} className="h-16 w-16 rounded-2xl object-cover object-top md:h-[72px] md:w-[72px]" loading="lazy" />
          <div>
            <span className="kicker">Free SME masterclass · {webinar.schedule}, {webinar.time_label}</span>
            <h3 className="mt-1.5 text-xl md:text-2xl">{webinar.title}</h3>
            <p className="mt-1 text-sm text-body md:text-[15px]">
              A weekly online session with {name} for owners moving from paper records to systems. Register once, join any Saturday.
            </p>
          </div>
          <Link to="/webinar" className="btn-brand group">
            Register free <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </AnimatedSection>
    </section>
  );
};

export default WebinarPromo;
