import { useState } from "react";
import { Check } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";

type Cycle = "monthly" | "quarterly" | "annual";

const CYCLES: { key: Cycle; label: string; period: string; months: number }[] = [
  { key: "monthly", label: "Monthly", period: "/month", months: 1 },
  { key: "quarterly", label: "Quarterly", period: "/quarter", months: 3 },
  { key: "annual", label: "Annually", period: "/year", months: 12 },
];

type PlanCycle = { list: number; discount: number };
type Cap = { value: number; label: string };
type Plan = {
  key: string;
  name: string;
  description: string;
  highlight?: boolean;
  cycles: Partial<Record<Cycle, PlanCycle>>;
  features: string[];
  caps: Cap[]; // resource limits — only listed where a tier is actually capped
};

// Mirrors the iTrova plan catalogue (active shared plans; the inactive bi-annual cycles are
// omitted). `list` is the gross list price and the shown price is list × (1 − discount%), exactly
// like the app's cyclePrice(). Enterprise had no stored description — copy drafted here.
const PLANS: Plan[] = [
  {
    key: "free",
    name: "Free",
    description: "Everything to run a small business",
    cycles: { monthly: { list: 0, discount: 0 } },
    features: ["Inventory", "Point of Sale", "Invoices", "Reports", "Team management", "CSV Import"],
    caps: [{ value: 25, label: "products" }, { value: 50, label: "invoices" }, { value: 3, label: "team members" }],
  },
  {
    key: "pro",
    name: "Pro",
    description: "For growing businesses",
    cycles: { monthly: { list: 10000, discount: 0 }, quarterly: { list: 30000, discount: 25 }, annual: { list: 120000, discount: 25 } },
    features: ["Inventory", "Point of Sale", "Suppliers", "Raw materials", "Invoices", "Purchase orders", "Reports", "Team management", "CSV Import", "CSV Export"],
    caps: [{ value: 1000, label: "products" }, { value: 10, label: "suppliers" }, { value: 7, label: "team members" }],
  },
  {
    key: "business",
    name: "Business",
    description: "For multi-branch operations",
    highlight: true,
    cycles: { monthly: { list: 25000, discount: 0 }, quarterly: { list: 75000, discount: 20 }, annual: { list: 300000, discount: 20 } },
    features: ["Inventory", "Point of Sale", "Suppliers", "Raw materials", "Invoices", "Purchase orders", "Reports", "Team management", "CSV Import", "CSV Export", "AI Business Insights", "Priority support", "General Store", "Production"],
    caps: [{ value: 10000, label: "products" }, { value: 25, label: "suppliers" }, { value: 15, label: "team members" }],
  },
  {
    key: "enterprise",
    name: "Enterprise",
    description: "For established businesses that need it all",
    cycles: { monthly: { list: 50000, discount: 0 }, quarterly: { list: 150000, discount: 20 }, annual: { list: 600000, discount: 20 } },
    features: ["Inventory", "Point of Sale", "Suppliers", "Raw materials", "Invoices", "Purchase orders", "Reports", "Team management", "CSV Import", "CSV Export", "AI Business Insights", "Priority support", "General Store", "Production", "Advanced analytics", "Dedicated support", "Export invoices", "Expenditure", "Accounting", "Assets"],
    caps: [], // unlimited
  },
];

const naira = (n: number) => `₦${Math.round(n).toLocaleString("en-NG")}`;
const priceFor = (c: PlanCycle) => Math.round(c.list * (1 - c.discount / 100));

const ItrovaPricing = () => {
  const [cycle, setCycle] = useState<Cycle>("monthly");
  const period = CYCLES.find((c) => c.key === cycle)!;

  return (
    <section className="section-padding surface-elevated">
      <div className="container-tight">
        <AnimatedSection className="text-center mb-10">
          <span className="text-sm font-medium text-primary mb-2 block">Pricing</span>
          <h2 className="text-3xl md:text-4xl font-bold">Simple, transparent plans</h2>
          <p className="text-muted-foreground mt-3 max-w-2xl mx-auto">
            Start free and upgrade as you grow. Prices are in Naira — longer billing cycles save you more.
          </p>

          {/* Billing-cycle toggle */}
          <div className="mt-8 inline-flex rounded-full border border-border bg-background/60 p-1">
            {CYCLES.map((c) => (
              <button
                key={c.key}
                type="button"
                onClick={() => setCycle(c.key)}
                aria-pressed={cycle === c.key}
                className={`rounded-full px-4 py-1.5 text-sm font-medium transition-colors ${
                  cycle === c.key ? "gradient-bg text-primary-foreground" : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {c.label}
              </button>
            ))}
          </div>
        </AnimatedSection>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {PLANS.map((plan, i) => {
            const prev = i > 0 ? PLANS[i - 1] : null;
            const newFeatures = prev ? plan.features.filter((f) => !prev.features.includes(f)) : plan.features;
            const pc = plan.cycles[cycle] ?? plan.cycles.monthly!;
            const isFree = plan.key === "free";
            const price = priceFor(pc);
            const showSavings = !isFree && cycle !== "monthly" && pc.discount > 0;
            const perMonth = showSavings ? Math.round(price / period.months) : 0;

            return (
              <AnimatedSection key={plan.key} delay={i * 0.08}>
                <div className={`glass-card h-full p-6 flex flex-col ${plan.highlight ? "relative ring-2 ring-primary" : ""}`}>
                  {plan.highlight && (
                    <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full gradient-bg px-3 py-0.5 text-xs font-semibold text-primary-foreground">
                      Most popular
                    </span>
                  )}

                  <h3 className="text-xl font-bold">{plan.name}</h3>
                  <p className="mt-1 min-h-[2.5rem] text-sm text-muted-foreground">{plan.description}</p>

                  <div className="mt-4">
                    <div className="flex items-baseline gap-1">
                      <span className="text-3xl font-bold">{isFree ? "₦0" : naira(price)}</span>
                      {!isFree && <span className="text-sm text-muted-foreground">{period.period}</span>}
                    </div>
                    <div className="mt-1 h-5 text-xs font-medium text-primary">
                      {showSavings ? `Save ${pc.discount}% · ~${naira(perMonth)}/mo` : isFree ? "Free forever" : " "}
                    </div>
                  </div>

                  {/* Usage limits — shown only where the plan is capped (Enterprise is unlimited). */}
                  {plan.caps.length > 0 && (
                    <p className="mt-3 text-xs text-muted-foreground">
                      Up to {plan.caps.map((c) => `${c.value.toLocaleString("en-NG")} ${c.label}`).join(" · ")}
                    </p>
                  )}

                  <a
                    href="https://itrova.allspire.tech"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`mt-5 w-full ${plan.highlight ? "btn-glass-primary" : "btn-glass-secondary"}`}
                  >
                    {isFree ? "Start free" : "Get iTrova"}
                  </a>

                  <ul className="mt-6 space-y-2 text-sm">
                    {prev && <li className="font-medium text-muted-foreground">Everything in {prev.name}, plus:</li>}
                    {newFeatures.map((f) => (
                      <li key={f} className="flex items-start gap-2">
                        <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </AnimatedSection>
            );
          })}
        </div>

        <p className="mt-10 text-center text-xs text-muted-foreground">
          Prices are per billing cycle and exclude any applicable taxes. All plans include free product updates.
        </p>
      </div>
    </section>
  );
};

export default ItrovaPricing;
