import { motion } from "framer-motion";
import {
  Package, ShoppingCart, Boxes, ReceiptText, Users, BarChart3, ArrowRight,
} from "lucide-react";
import PageLayout from "@/components/PageLayout";
import AnimatedSection from "@/components/AnimatedSection";
import itrovaDashboard from "@/assets/itrova-dashboard.png";
import itrovaPos from "@/assets/itrova-pos.png";
import itrovaInventory from "@/assets/itrova-inventory.png";
import itrovaReports from "@/assets/itrova-reports.png";

const capabilities = [
  {
    icon: Package,
    title: "Inventory & Stock Control",
    desc: "Track finished products, stock levels and categories with low-stock alerts, stock adjustments and CSV import/export.",
  },
  {
    icon: ShoppingCart,
    title: "Point of Sale",
    desc: "Fast walk-in sales with cash, transfer and POS-terminal payments, automatic stock deduction and instant receipts.",
  },
  {
    icon: Boxes,
    title: "Suppliers & Raw Materials",
    desc: "A supplier directory and separate raw-material inventory, with a bill-of-materials that deducts inputs on every sale.",
  },
  {
    icon: ReceiptText,
    title: "Invoices & Purchase Orders",
    desc: "Generate invoices and supplier purchase orders, track payment status and send them over WhatsApp or email.",
  },
  {
    icon: Users,
    title: "Team & Roles",
    desc: "Invite staff with owner, manager and cashier roles, enforced end-to-end with row-level security.",
  },
  {
    icon: BarChart3,
    title: "Reports & Analytics",
    desc: "Revenue, gross profit, top-selling products, sales by staff, inventory turnover and supplier spend.",
  },
];

const gallery = [
  { image: itrovaPos, title: "Point of Sale", caption: "Ring up walk-in sales in seconds." },
  { image: itrovaInventory, title: "Inventory", caption: "Every product, stock level and status at a glance." },
  { image: itrovaReports, title: "Reports", caption: "Revenue, profit and stock health over any range." },
];

const Projects = () => (
  <PageLayout>
    {/* Header */}
    <section className="section-padding relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 pointer-events-none" />
      <div className="container-tight relative">
        <AnimatedSection className="max-w-3xl mx-auto text-center mb-16">
          <span className="text-sm font-medium text-primary mb-4 block">Flagship Product</span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Work that <span className="gradient-text">speaks</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We pour everything we know into the products we build. Here's the one we built end-to-end, live in production today.
          </p>
        </AnimatedSection>

        {/* Featured project */}
        <AnimatedSection>
          <div className="glass-card overflow-hidden">
            {/* Browser-chrome + screenshot */}
            <div className="border-b border-border/60">
              <div className="flex items-center gap-2 px-5 py-3">
                <div className="w-3 h-3 rounded-full bg-red-400" />
                <div className="w-3 h-3 rounded-full bg-yellow-400" />
                <div className="w-3 h-3 rounded-full bg-green-400" />
                <span className="ml-auto text-xs text-muted-foreground font-mono">itrova.app</span>
              </div>
              <img
                src={itrovaDashboard}
                alt="iTrova dashboard showing daily sales, inventory and stock alerts"
                width={1440}
                height={900}
                className="w-full"
              />
            </div>

            {/* Intro */}
            <div className="p-8 md:p-12">
              <span className="text-xs font-medium text-primary uppercase tracking-wider">
                Retail &amp; Distribution · SaaS Platform
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">iTrova</h2>
              <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl">
                A comprehensive business management platform purpose-built for small and medium-sized
                businesses across Nigeria and Africa. iTrova connects every part of a business, from the
                raw materials coming in to the finished products going out; bringing inventory, point of
                sale, suppliers, invoicing, team management and reporting into one seamless platform.
              </p>
              <a
                href="https://itrova.allspire.tech"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-glass-primary group mt-8 inline-flex"
              >
                Get iTrova
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>

    {/* Capabilities */}
    <section className="section-padding surface-elevated">
      <div className="container-tight">
        <AnimatedSection className="text-center mb-16">
          <span className="text-sm font-medium text-primary mb-2 block">What's Inside</span>
          <h2 className="text-3xl md:text-4xl font-bold">Built for every part of the business</h2>
        </AnimatedSection>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {capabilities.map((c, i) => (
            <AnimatedSection key={c.title} delay={i * 0.1}>
              <motion.div
                className="glass-card p-8 h-full group cursor-default"
                whileHover={{ y: -4 }}
                transition={{ type: "spring", stiffness: 300, damping: 25 }}
              >
                <div className="w-12 h-12 rounded-xl gradient-bg flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
                  <c.icon className="w-6 h-6 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{c.title}</h3>
                <p className="text-muted-foreground leading-relaxed text-sm">{c.desc}</p>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>

    {/* Gallery */}
    <section className="section-padding">
      <div className="container-tight">
        <AnimatedSection className="text-center mb-16">
          <span className="text-sm font-medium text-primary mb-2 block">A Closer Look</span>
          <h2 className="text-3xl md:text-4xl font-bold">Inside the product</h2>
        </AnimatedSection>
        <div className="grid md:grid-cols-3 gap-8">
          {gallery.map((g, i) => (
            <AnimatedSection key={g.title} delay={i * 0.1}>
              <motion.div
                className="glass-card overflow-hidden group h-full"
                whileHover={{ y: -6 }}
                transition={{ type: "spring", stiffness: 300, damping: 25 }}
              >
                <div className="overflow-hidden border-b border-border/60">
                  <img
                    src={g.image}
                    alt={`iTrova ${g.title} screen`}
                    width={1440}
                    height={900}
                    loading="lazy"
                    className="w-full group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold mb-1">{g.title}</h3>
                  <p className="text-sm text-muted-foreground">{g.caption}</p>
                </div>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  </PageLayout>
);

export default Projects;