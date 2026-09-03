import { ArrowRight, BookOpen, Handshake, ShoppingCart, WifiOff, Calculator } from "lucide-react";
import PageLayout from "@/components/PageLayout";
import AnimatedSection from "@/components/AnimatedSection";
import Shot from "@/components/site/Shot";
import CtaBand from "@/components/site/CtaBand";
import { ITROVA_LINKS } from "@/config/itrova";
import { useSeo } from "@/hooks/useSeo";
import itrovaDashboard from "@/assets/itrova-dashboard.png";

// iTrova has its own site (itrova.co). This page is the product card that hands visitors over.

const highlights = [
  {
    icon: WifiOff,
    title: "Sells even without network",
    desc: "The point of sale keeps working when the connection drops; sales save on the device and sync when it returns.",
  },
  {
    icon: ShoppingCart,
    title: "Sales, stock and invoices in one place",
    desc: "Every sale deducts stock, raises the receipt and lands in the books. Invoices, suppliers and purchase orders included.",
  },
  {
    icon: Calculator,
    title: "Accounting that writes itself",
    desc: "Double-entry books, profit and loss, VAT, payroll and assets, built from everyday activity without an accountant.",
  },
];

const Products = () => {
  useSeo("Products", "Meet iTrova, the point of sale, inventory and accounting app Allspire built for shops, traders and small manufacturers across Nigeria.");
  return (
    <PageLayout>
      <section className="relative overflow-hidden">
        <div className="grid-bg absolute inset-0" aria-hidden="true" />
        <div className="container-tight relative py-16 md:py-20">
          <AnimatedSection className="max-w-3xl">
            <span className="eyebrow">Products</span>
            <h1 className="mt-4 text-4xl md:text-5xl">Meet iTrova</h1>
            <p className="mt-4 text-lg text-body">
              The point of sale, inventory and accounting app we built for shops, traders and small manufacturers across Nigeria. Live in production and now on its own site.
            </p>
          </AnimatedSection>
        </div>
      </section>

      <section className="container-tight pb-16 md:pb-24">
        <AnimatedSection>
          <Shot src={itrovaDashboard} alt="The iTrova dashboard" label="itrova.co" eager />
        </AnimatedSection>
        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {highlights.map((h, i) => (
            <AnimatedSection key={h.title} delay={i * 0.06}>
              <div className="card-soft h-full p-6">
                <div className="ico"><h.icon className="h-5 w-5" /></div>
                <h2 className="mt-4 text-lg">{h.title}</h2>
                <p className="mt-1.5 text-sm text-body">{h.desc}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
        <AnimatedSection delay={0.1} className="mt-8 flex flex-col flex-wrap gap-3 sm:flex-row">
          <a href={ITROVA_LINKS.home} className="btn-brand group">
            Explore iTrova <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </a>
          <a href={ITROVA_LINKS.pricing} className="btn-line">See pricing</a>
          <a href={ITROVA_LINKS.affiliates} className="btn-line"><Handshake className="h-4 w-4" /> Become an affiliate</a>
          <a href={ITROVA_LINKS.guide} className="btn-line"><BookOpen className="h-4 w-4" /> User guide</a>
        </AnimatedSection>
      </section>

      <CtaBand headline="Need software like this for your business?" sub="iTrova started as a problem we understood well. Tell us yours." />
    </PageLayout>
  );
};

export default Products;
