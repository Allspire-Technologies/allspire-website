import { Rocket, Globe, RefreshCw, Bot, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import PageLayout from "@/components/PageLayout";
import AnimatedSection from "@/components/AnimatedSection";

const services = [
  {
    icon: Rocket,
    title: "Product Development",
    desc: "We take your idea from concept to a fully realized product. Our process covers discovery, design, engineering, QA, and launch, giving you a product that's ready to compete.",
    features: ["Product strategy & roadmapping", "UI/UX design", "Full-stack engineering", "Launch & iteration support"],
  },
  {
    icon: Globe,
    title: "Web & Mobile Applications",
    desc: "We build high-performance web and mobile applications that delight users. From responsive web apps to native iOS and Android experiences, we deliver quality at every pixel.",
    features: ["Responsive web applications", "iOS & Android development", "Progressive Web Apps", "Cross-platform solutions"],
  },
  {
    icon: RefreshCw,
    title: "Digital Transformation Consulting",
    desc: "We help enterprises modernize their technology stack, migrate legacy systems, and adopt cloud-native architectures that reduce cost and increase agility.",
    features: ["Legacy system modernization", "Cloud migration", "Process automation", "Technology audits"],
  },
  {
    icon: Bot,
    title: "AI & Automation Solutions",
    desc: "We design and deploy AI-powered workflows that automate repetitive tasks, extract insights from data, and enable intelligent decision-making across your organization.",
    features: ["Machine learning models", "Natural language processing", "Robotic process automation", "Predictive analytics"],
  },
];

const Services = () => (
  <PageLayout>
    <section className="section-padding relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 pointer-events-none" />
      <div className="container-tight relative">
        <AnimatedSection className="max-w-3xl mx-auto text-center mb-16">
          <span className="text-sm font-medium text-primary mb-4 block">Services</span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Solutions that <span className="gradient-text">drive growth</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            From strategy to execution, we provide end-to-end technology services tailored to your business goals.
          </p>
        </AnimatedSection>

        <div className="space-y-8">
          {services.map((s, i) => (
            <AnimatedSection key={s.title} delay={i * 0.1}>
              <motion.div
                className="glass-card p-8 md:p-10"
                whileHover={{ y: -4 }}
                transition={{ type: "spring", stiffness: 300, damping: 25 }}
              >
                <div className="flex flex-col md:flex-row gap-8">
                  <div className="flex-shrink-0">
                    <div className="w-14 h-14 rounded-xl gradient-bg flex items-center justify-center">
                      <s.icon className="w-7 h-7 text-primary-foreground" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h2 className="text-2xl font-bold mb-3">{s.title}</h2>
                    <p className="text-muted-foreground leading-relaxed mb-5">{s.desc}</p>
                    <ul className="grid sm:grid-cols-2 gap-2">
                      {s.features.map((f) => (
                        <li key={f} className="flex items-center gap-2 text-sm text-muted-foreground">
                          <span className="w-1.5 h-1.5 rounded-full gradient-bg flex-shrink-0" />
                          {f}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection className="text-center mt-16">
          <Link to="/contact" className="btn-glass-primary group">
            Discuss Your Project <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </AnimatedSection>
      </div>
    </section>
  </PageLayout>
);

export default Services;
