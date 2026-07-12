import { useState, FormEvent } from "react";
import { Mail, MapPin, Phone, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { useToast } from "@/hooks/use-toast";
import PageLayout from "@/components/PageLayout";
import AnimatedSection from "@/components/AnimatedSection";

const Contact = () => {
  const { toast } = useToast();
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    toast({ title: "Message sent!", description: "We'll be in touch shortly." });
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <PageLayout>
      <section className="section-padding relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 pointer-events-none" />
        <div className="container-tight relative">
          <AnimatedSection className="max-w-3xl mx-auto text-center mb-16">
            <span className="text-sm font-medium text-primary mb-4 block">Contact</span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Let's <span className="gradient-text">talk</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              Have a project in mind? We'd love to hear about it.
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-5 gap-12 max-w-4xl mx-auto">
            <AnimatedSection className="md:col-span-3">
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="text-sm font-medium mb-1.5 block">Name</label>
                  <input
                    type="text"
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-border bg-card/60 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary/30 transition-all"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium mb-1.5 block">Email</label>
                  <input
                    type="email"
                    required
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-border bg-card/60 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary/30 transition-all"
                    placeholder="you@company.com"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium mb-1.5 block">Message</label>
                  <textarea
                    required
                    rows={5}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-border bg-card/60 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary/30 transition-all resize-none"
                    placeholder="Tell us about your project..."
                  />
                </div>
                <motion.button
                  type="submit"
                  className="btn-glass-primary w-full"
                  whileTap={{ scale: 0.98 }}
                >
                  Send Message <ArrowRight className="w-4 h-4" />
                </motion.button>
              </form>
            </AnimatedSection>

            <AnimatedSection delay={0.1} className="md:col-span-2">
              <div className="space-y-8">
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <Mail className="w-5 h-5 text-primary" />
                    <h3 className="font-semibold">Email</h3>
                  </div>
                  <p className="text-muted-foreground text-sm">hello@allspire.tech</p>
                </div>
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <MapPin className="w-5 h-5 text-primary" />
                    <h3 className="font-semibold">Office</h3>
                  </div>
                  <p className="text-muted-foreground text-sm">
                    No 15, Oladayo Alokan street, Ewu Elepe, Ikorodu, Lagos state.
                  </p>
                </div>
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <Phone className="w-5 h-5 text-primary" />
                    <h3 className="font-semibold">WhatsApp</h3>
                  </div>
                  <a
                    href="https://wa.me/2348137000305"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    +234 813 700 0305
                  </a>
                </div>
                <div>
                  <h3 className="font-semibold mb-3">Follow Us</h3>
                  <div className="flex gap-3">
                    {[
                      { name: "LinkedIn", href: "https://www.linkedin.com/company/allspiretech/" },
                      { name: "Social Links", href: "https://linktr.ee/allspirehq" },
                      { name: "GitHub", href: "https://github.com/Allspire-Technologies" },
                    ].map((s) => (
                      <a
                        key={s.name}
                        href={s.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="glass-pill cursor-pointer text-muted-foreground hover:text-foreground"
                      >
                        {s.name}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default Contact;
