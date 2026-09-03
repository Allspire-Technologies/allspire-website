import { motion } from "framer-motion";
import { ArrowRight, BookOpen, Handshake, ShoppingCart, WifiOff, Calculator } from "lucide-react";
import PageLayout from "@/components/PageLayout";
import AnimatedSection from "@/components/AnimatedSection";
import { ITROVA_LINKS } from "@/config/itrova";
import itrovaDashboard from "@/assets/itrova-dashboard.png";

// iTrova has its own site now (itrova.co). This page is the product card that hands visitors
// over: what it is, three reasons to care, and the links. Pricing, the guide and the affiliate
// program live on itrova.co and are no longer duplicated here.

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

const Products = () => (
  <PageLayout>
    <section className="section-padding relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 pointer-events-none" />
      <div className="container-tight relative">
        <AnimatedSection className="max-w-3xl mx-auto text-center mb-14">
          <span className="text-sm font-medium text-primary mb-4 block">Products</span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Meet <span className="gradient-text">iTrova</span>
          </h1>
          <p className="text-lg text-muted-foreground">
            The point of sale, inventory and accounting app we built for shops, traders and small
            manufacturers across Nigeria. Live in production and now on its own site.
          </p>
        </AnimatedSection>

        <AnimatedSection delay={0.1}>
          <div className="glass-card overflow-hidden p-0 max-w-5xl mx-auto">
            <div className="flex items-center gap-1.5 px-4 py-2.5 border-b border-border/50 bg-muted/40">
              <span className="w-2.5 h-2.5 rounded-full bg-border" />
              <span className="w-2.5 h-2.5 rounded-full bg-border" />
              <span className="w-2.5 h-2.5 rounded-full bg-border" />
              <span className="ml-3 text-xs font-mono text-muted-foreground">itrova.co</span>
            </div>
            <img src={itrovaDashboard} alt="The iTrova dashboard" className="w-full" loading="eager" />
            <div className="p-6 md:p-10">
              <div className="grid md:grid-cols-3 gap-8">
                {highlights.map((h) => (
                  <div key={h.title}>
                    <div className="w-11 h-11 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-4">
                      <h.icon className="w-5 h-5" />
                    </div>
                    <h2 className="font-semibold text-lg mb-2">{h.title}</h2>
                    <p className="text-sm text-muted-foreground">{h.desc}</p>
                  </div>
                ))}
              </div>
              <div className="mt-10 flex flex-col sm:flex-row flex-wrap gap-3">
                <motion.a
                  href={ITROVA_LINKS.home}
                  className="btn-glass-primary group text-center"
                  whileTap={{ scale: 0.98 }}
                >
                  Explore iTrova <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </motion.a>
                <a href={ITROVA_LINKS.pricing} className="btn-glass-secondary text-center">
                  See pricing
                </a>
                <a href={ITROVA_LINKS.affiliates} className="btn-glass-secondary text-center">
                  <Handshake className="w-4 h-4" /> Become an affiliate
                </a>
                <a href={ITROVA_LINKS.guide} className="btn-glass-secondary text-center">
                  <BookOpen className="w-4 h-4" /> User guide
                </a>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  </PageLayout>
);

export default Products;
