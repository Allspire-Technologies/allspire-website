import { motion } from "framer-motion";
import PageLayout from "@/components/PageLayout";
import AnimatedSection from "@/components/AnimatedSection";
import projectMedflow from "@/assets/project-medflow.jpg";
import projectFinedge from "@/assets/project-finedge.jpg";
import projectShopsmart from "@/assets/project-shopsmart.jpg";
import projectLogitrack from "@/assets/project-logitrack.jpg";

const projects = [
  {
    title: "MedFlow Platform",
    industry: "Healthcare",
    desc: "A HIPAA-compliant patient management platform that reduced administrative overhead by 40% for a network of 200+ clinics.",
    tags: ["React", "Node.js", "AWS", "FHIR"],
    image: projectMedflow,
  },
  {
    title: "FinEdge Analytics",
    industry: "Finance",
    desc: "Real-time risk analytics dashboard for a top-20 bank, processing 2M+ transactions daily with sub-second latency.",
    tags: ["Python", "Kafka", "PostgreSQL", "D3.js"],
    image: projectFinedge,
  },
  {
    title: "ShopSmart AI",
    industry: "Retail",
    desc: "AI-powered recommendation engine that increased average order value by 28% for a leading e-commerce brand.",
    tags: ["TensorFlow", "Next.js", "Redis", "GCP"],
    image: projectShopsmart,
  },
  {
    title: "LogiTrack Suite",
    industry: "Logistics",
    desc: "End-to-end fleet management and route optimization platform serving 5,000+ vehicles across 12 countries.",
    tags: ["Flutter", "Go", "MongoDB", "Mapbox"],
    image: projectLogitrack,
  },
];

const Projects = () => (
  <PageLayout>
    <section className="section-padding relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 pointer-events-none" />
      <div className="container-tight relative">
        <AnimatedSection className="max-w-3xl mx-auto text-center mb-16">
          <span className="text-sm font-medium text-primary mb-4 block">Case Studies</span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Work that <span className="gradient-text">speaks</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A selection of projects where we've helped businesses transform through technology.
          </p>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((p, i) => (
            <AnimatedSection key={p.title} delay={i * 0.1}>
              <motion.div
                className="glass-card overflow-hidden group"
                whileHover={{ y: -6 }}
                transition={{ type: "spring", stiffness: 300, damping: 25 }}
              >
                <div className="h-48 overflow-hidden">
                  <img
                    src={p.image}
                    alt={p.title}
                    width={800}
                    height={512}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-8">
                  <span className="text-xs font-medium text-primary uppercase tracking-wider">{p.industry}</span>
                  <h3 className="text-xl font-bold mt-1 mb-3">{p.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4">{p.desc}</p>
                  <div className="flex flex-wrap gap-2">
                    {p.tags.map((t) => (
                      <span key={t} className="glass-pill text-xs !px-3 !py-1 text-secondary-foreground">
                        {t}
                      </span>
                    ))}
                  </div>
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
