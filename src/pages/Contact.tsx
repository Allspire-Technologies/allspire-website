import { useState, FormEvent } from "react";
import { ArrowRight, Check, Copy, MessageCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import PageLayout from "@/components/PageLayout";
import AnimatedSection from "@/components/AnimatedSection";
import { useSeo } from "@/hooks/useSeo";
import { COMPANY, WHATSAPP_DISPLAY, whatsappLink } from "@/config/company";

const Contact = () => {
  useSeo("Contact", "Talk to Allspire about your project. WhatsApp, email or the form; we reply within one business day.");
  const { toast } = useToast();
  const [form, setForm] = useState({ name: "", email: "", message: "", company: "" });
  const [sending, setSending] = useState(false);
  const [copied, setCopied] = useState<string | null>(null);

  const copyValue = async (label: string, value: string) => {
    try {
      await navigator.clipboard.writeText(value);
      setCopied(label);
      window.setTimeout(() => setCopied(null), 1800);
    } catch {
      toast({ title: "Copy did not work", description: value });
    }
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (sending) return;
    setSending(true);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok || !data?.ok) throw new Error(data?.error || "Something went wrong.");
      toast({ title: "Message sent", description: "We will be in touch within one business day." });
      setForm({ name: "", email: "", message: "", company: "" });
    } catch (err) {
      toast({
        variant: "destructive",
        title: "Could not send your message",
        description: err instanceof Error ? err.message : `Please try again, or email ${COMPANY.email}.`,
      });
    } finally {
      setSending(false);
    }
  };

  const cards = [
    { label: "WhatsApp", value: WHATSAPP_DISPLAY, href: whatsappLink(), copy: `+${WHATSAPP_DISPLAY.replace(/\D/g, "")}` },
    { label: "Email", value: COMPANY.email, href: `mailto:${COMPANY.email}`, copy: COMPANY.email },
    { label: "Office", value: COMPANY.address, href: undefined, copy: COMPANY.address },
  ];

  return (
    <PageLayout>
      <section className="container-tight py-14 md:py-20">
        <AnimatedSection className="max-w-2xl">
          <span className="kicker">Contact</span>
          <h1 className="mt-2 text-4xl md:text-5xl">Let's talk</h1>
          <p className="mt-4 text-lg text-body">Have a project in mind? WhatsApp is the fastest way to reach us. The form lands in the same inbox.</p>
          <a href={whatsappLink()} target="_blank" rel="noopener noreferrer" className="btn-brand btn-lg mt-6">
            <MessageCircle className="h-5 w-5" /> Chat on WhatsApp
          </a>
        </AnimatedSection>

        <div className="mt-10 grid gap-5 lg:grid-cols-[1.3fr_1fr]">
          <AnimatedSection>
            <form onSubmit={handleSubmit} className="card-soft p-6 md:p-7">
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label htmlFor="name" className="label">Name *</label>
                  <input id="name" type="text" required autoComplete="name" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} className="field" placeholder="Your name" />
                </div>
                <div>
                  <label htmlFor="email" className="label">Email *</label>
                  <input id="email" type="email" required autoComplete="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} className="field" placeholder="you@company.com" />
                </div>
              </div>
              <div className="mt-4">
                <label htmlFor="message" className="label">What are you building? *</label>
                <textarea id="message" required rows={5} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} className="field resize-none" placeholder="A few lines is enough. We reply within one business day." />
              </div>
              {/* Honeypot: hidden from people, tempting to bots. Filled = silently dropped server-side. */}
              <div className="absolute -left-[9999px]" aria-hidden="true">
                <label>
                  Company
                  <input type="text" tabIndex={-1} autoComplete="off" value={form.company} onChange={(e) => setForm({ ...form, company: e.target.value })} />
                </label>
              </div>
              <button type="submit" disabled={sending} className="btn-brand mt-5 w-full disabled:cursor-not-allowed disabled:opacity-70 sm:w-auto">
                {sending ? "Sending" : <>Send message <ArrowRight className="h-4 w-4" /></>}
              </button>
            </form>
          </AnimatedSection>

          <AnimatedSection delay={0.08}>
            <div className="grid content-start gap-3">
              {cards.map((c) => (
                <div key={c.label} className="card-soft flex items-start justify-between gap-3 p-5">
                  <div className="min-w-0">
                    <div className="text-[12px] font-semibold uppercase tracking-[0.08em] text-muted-foreground">{c.label}</div>
                    {c.href ? (
                      <a href={c.href} target={c.href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer" className="mt-1 block break-words text-[15px] font-semibold text-accent-foreground hover:underline">
                        {c.value}
                      </a>
                    ) : (
                      <p className="mt-1 text-sm text-body">{c.value}</p>
                    )}
                  </div>
                  <button
                    type="button"
                    onClick={() => copyValue(c.label, c.copy)}
                    className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-border text-muted-foreground transition hover:border-primary/40 hover:text-primary"
                    aria-label={`Copy ${c.label}`}
                  >
                    {copied === c.label ? <Check className="h-4 w-4 text-emerald-500" /> : <Copy className="h-4 w-4" />}
                  </button>
                </div>
              ))}
              <div className="card-soft p-5">
                <div className="text-[12px] font-semibold uppercase tracking-[0.08em] text-muted-foreground">Elsewhere</div>
                <div className="mt-2 flex flex-wrap gap-2">
                  {[
                    { name: "LinkedIn", href: COMPANY.linkedin },
                    { name: "Social links", href: COMPANY.linktree },
                    { name: "GitHub", href: COMPANY.github },
                  ].map((s) => (
                    <a key={s.name} href={s.href} target="_blank" rel="noopener noreferrer" className="chip transition-colors hover:border-primary/40 hover:text-primary">
                      {s.name}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </PageLayout>
  );
};

export default Contact;
