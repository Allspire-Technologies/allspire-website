import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import { useCopy } from "@/hooks/useSiteContent";

interface Props {
  headline?: string;
  sub?: string;
  cta?: string;
}

const CtaBand = ({ headline, sub, cta = "Talk to us" }: Props) => {
  const copy = useCopy();
  return (
    <section className="container-tight pb-16 md:pb-24">
      <AnimatedSection>
        <div className="flex flex-col gap-6 rounded-3xl bg-primary px-7 py-9 text-primary-foreground md:flex-row md:items-center md:justify-between md:px-11 md:py-10">
          <div>
            <h2 className="text-2xl text-white md:text-3xl">{headline ?? copy.cta_headline}</h2>
            <p className="mt-2 text-base text-white/85">{sub ?? copy.cta_sub}</p>
          </div>
          <Link to="/contact" className="btn btn-lg group shrink-0 bg-white text-brand-deep hover:bg-white/90 dark:text-[#1f2ac2]">
            {cta} <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </AnimatedSection>
    </section>
  );
};

export default CtaBand;
