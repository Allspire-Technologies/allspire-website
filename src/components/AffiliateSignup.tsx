import { useState, FormEvent } from "react";
import { ArrowRight, TrendingUp, Wallet, Users } from "lucide-react";
import { motion } from "framer-motion";
import { useToast } from "@/hooks/use-toast";
import AnimatedSection from "@/components/AnimatedSection";

// "Become an affiliate" — posts to /api/affiliate (Cloudflare Function → Supabase applications
// queue). Mirrors the Contact form (honeypot + graceful errors). Applications are reviewed in the CRM.
const AffiliateSignup = () => {
  const { toast } = useToast();
  const [form, setForm] = useState({ name: "", phone: "", email: "", how_promote: "", company: "" });
  const [sending, setSending] = useState(false);

  const submit = async (e: FormEvent) => {
    e.preventDefault();
    if (sending) return;
    setSending(true);
    try {
      const res = await fetch("/api/affiliate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok || !data?.ok) throw new Error(data?.error || "Something went wrong.");
      toast({ title: "Application received!", description: "We'll review it and send your referral link by email." });
      setForm({ name: "", phone: "", email: "", how_promote: "", company: "" });
    } catch (err) {
      toast({
        variant: "destructive",
        title: "Couldn't submit your application",
        description: err instanceof Error ? err.message : "Please try again, or email hello@allspire.tech.",
      });
    } finally {
      setSending(false);
    }
  };

  const perks = [
    { icon: Wallet, title: "Earn recurring income", body: "Get a share of what every business you refer pays in their first year." },
    { icon: TrendingUp, title: "You only need a link", body: "Share your referral link — signups are tracked and attributed to you automatically." },
    { icon: Users, title: "Built for our market", body: "iTrova sells itself to shops, traders and SMBs. Bookkeepers, POS agents and consultants do great." },
  ];
  const field = "w-full px-4 py-3 rounded-xl border border-border bg-card/60 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary/30 transition-all";

  return (
    <section id="affiliate" className="section-padding surface-elevated">
      <div className="container-tight">
        <AnimatedSection className="max-w-3xl mx-auto text-center mb-14">
          <span className="text-sm font-medium text-primary mb-4 block">Partner with us</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">Become an iTrova <span className="gradient-text">affiliate</span></h2>
          <p className="text-lg text-muted-foreground">Refer businesses to iTrova and earn a share of their subscription. Apply below — we'll set you up with a referral link and everything you need.</p>
        </AnimatedSection>

        <div className="grid md:grid-cols-5 gap-12 max-w-4xl mx-auto">
          <AnimatedSection className="md:col-span-2 space-y-8">
            {perks.map((p) => (
              <div key={p.title}>
                <div className="flex items-center gap-3 mb-2"><p.icon className="w-5 h-5 text-primary" /><h3 className="font-semibold">{p.title}</h3></div>
                <p className="text-muted-foreground text-sm">{p.body}</p>
              </div>
            ))}
          </AnimatedSection>

          <AnimatedSection delay={0.1} className="md:col-span-3">
            <form onSubmit={submit} className="space-y-5">
              <div>
                <label className="text-sm font-medium mb-1.5 block">Full name</label>
                <input type="text" required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} className={field} placeholder="Your name" />
              </div>
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className="text-sm font-medium mb-1.5 block">Phone / WhatsApp</label>
                  <input type="tel" required value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} className={field} placeholder="e.g. 0803 123 4567" />
                </div>
                <div>
                  <label className="text-sm font-medium mb-1.5 block">Email</label>
                  <input type="email" required value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} className={field} placeholder="you@email.com" />
                </div>
              </div>
              <div>
                <label className="text-sm font-medium mb-1.5 block">How will you promote iTrova?</label>
                <textarea rows={4} value={form.how_promote} onChange={(e) => setForm({ ...form, how_promote: e.target.value })} className={`${field} resize-none`} placeholder="e.g. my WhatsApp business community, market association, clients I consult for…" />
              </div>
              {/* Honeypot — hidden from people, tempting to bots. Filled = silently dropped. */}
              <div className="absolute -left-[9999px]" aria-hidden="true">
                <label>Company<input type="text" tabIndex={-1} autoComplete="off" value={form.company} onChange={(e) => setForm({ ...form, company: e.target.value })} /></label>
              </div>
              <motion.button type="submit" disabled={sending} className="btn-glass-primary w-full disabled:opacity-70 disabled:cursor-not-allowed" whileTap={{ scale: sending ? 1 : 0.98 }}>
                {sending ? "Submitting…" : <>Apply to join <ArrowRight className="w-4 h-4" /></>}
              </motion.button>
            </form>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default AffiliateSignup;
