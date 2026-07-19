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
  modules: string[]; // the plan's real module keys (plans.modules) — the shown features derive from these
  caps: Cap[]; // resource limits from plans.limits — listed only where a tier is actually capped
};

// Display names for module keys, so a tier's features are driven by its actual modules (and can't
// drift from what the plan really includes).
const MODULE_LABELS: Record<string, string> = {
  inventory: "Inventory",
  pos: "Point of Sale",
  invoices: "Invoices",
  reports: "Reports",
  team: "Team management",
  csv_import: "CSV Import",
  csv_export: "CSV Export",
  suppliers: "Suppliers",
  raw_materials: "Raw materials",
  purchase_orders: "Purchase orders",
  general_store: "General Store",
  production: "Production",
  insights: "AI Business Insights",
  priority_support: "Priority support",
  export_invoices: "Export invoices",
  expenditure: "Expenditure",
  accounting: "Accounting",
  assets: "Assets",
  advanced_analytics: "Advanced analytics",
  dedicated_support: "Dedicated support",
};

// Mirrors the iTrova plan catalogue (active shared plans). `modules` + `caps` come straight from the
// DB (plans.modules / plans.limits), so features and limits stay aligned per plan. Prices: `list` is
// the gross list price, shown as list × (1 − discount%) like the app's cyclePrice(); inactive
// bi-annual cycles are omitted. Enterprise had no stored description — copy drafted here.
const PLANS: Plan[] = [
  {
    key: "free",
    name: "Free",
    description: "Everything to run a small business",
    cycles: { monthly: { list: 0, discount: 0 } },
    modules: ["inventory", "pos", "invoices", "reports", "team", "csv_import"],
    caps: [{ value: 25, label: "products" }, { value: 50, label: "invoices" }, { value: 3, label: "team members" }],
  },
  {
    key: "pro",
    name: "Pro",
    description: "For growing businesses",
    cycles: { monthly: { list: 10000, discount: 0 }, quarterly: { list: 30000, discount: 25 }, annual: { list: 120000, discount: 25 } },
    modules: ["inventory", "pos", "suppliers", "raw_materials", "invoices", "purchase_orders", "reports", "team", "csv_import", "csv_export"],
    caps: [{ value: 1000, label: "products" }, { value: 10, label: "suppliers" }, { value: 7, label: "team members" }],
  },
  {
    key: "business",
    name: "Business",
    description: "For multi-branch operations",
    highlight: true,
    cycles: { monthly: { list: 25000, discount: 0 }, quarterly: { list: 75000, discount: 20 }, annual: { list: 300000, discount: 20 } },
    modules: ["inventory", "pos", "suppliers", "raw_materials", "invoices", "purchase_orders", "reports", "team", "csv_import", "csv_export", "general_store", "production", "insights", "priority_support"],
    caps: [{ value: 10000, label: "products" }, { value: 25, label: "suppliers" }, { value: 15, label: "team members" }],
  },
  {
    key: "enterprise",
    name: "Enterprise",
    description: "For established businesses that need it all",
    cycles: { monthly: { list: 50000, discount: 0 }, quarterly: { list: 150000, discount: 20 }, annual: { list: 600000, discount: 20 } },
    modules: ["inventory", "pos", "suppliers", "raw_materials", "invoices", "purchase_orders", "reports", "team", "csv_import", "csv_export", "export_invoices", "general_store", "production", "expenditure", "accounting", "assets", "insights", "advanced_analytics", "priority_support", "dedicated_support"],
    caps: [], // unlimited
  },
];

// Custom "contact us" tier — mirrors the iTrova app's Custom Pricing card (Settings billing).
// Not a stored plan: it's a bespoke tier above Enterprise, so it has no price and links to sales.
const CUSTOM_IDEAL = ["Enterprise deployments", "Sector-specific implementations"];
const CUSTOM_PLUS = [
  "Custom branding",
  "Custom workflows",
  "Custom reports",
  "Dedicated infrastructure",
  "Staff payroll management",
  "SLA agreements",
  "Custom onboarding and training",
];
const CONTACT_SALES = "mailto:hello@allspire.tech?subject=Custom%20Plan%20enquiry";

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
            const newFeatures = (prev ? plan.modules.filter((m) => !prev.modules.includes(m)) : plan.modules).map((m) => MODULE_LABELS[m] ?? m);
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
                      {showSavings ? `Save ${pc.discount}% · ~${naira(perMonth)}/mo` : isFree ? "Free (Capped usage)" : " "}
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

        {/* Custom "contact us" tier — full-width beneath the priced plans. */}
        <AnimatedSection delay={PLANS.length * 0.08} className="mt-8">
          <div className="glass-card p-6 md:p-8 ring-1 ring-primary/20 flex flex-col lg:flex-row gap-6 lg:gap-8">
            <div className="lg:w-1/4 lg:border-r lg:border-border/60 lg:pr-8 space-y-3">
              <div>
                <span className="inline-block rounded-full border border-primary/30 bg-primary/5 px-3 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-primary">
                  Custom Plan
                </span>
                <h3 className="mt-2 text-2xl font-bold">Custom Pricing</h3>
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Ideal for</p>
                <ul className="mt-1.5 space-y-1">
                  {CUSTOM_IDEAL.map((t) => (
                    <li key={t} className="text-sm text-muted-foreground">{t}</li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="flex-1 space-y-4">
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Includes</p>
                <p className="mt-1.5 flex items-center gap-2 text-sm">
                  <Check className="h-4 w-4 shrink-0 text-primary" />
                  Everything in {PLANS[PLANS.length - 1].name}
                </p>
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Plus</p>
                <ul className="mt-1.5 grid gap-x-6 gap-y-1.5 sm:grid-cols-2">
                  {CUSTOM_PLUS.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-sm">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <a href={CONTACT_SALES} className="btn-glass-primary w-full sm:w-auto">
                Contact Sales
              </a>
            </div>
          </div>
        </AnimatedSection>

        <p className="mt-10 text-center text-xs text-muted-foreground">
          Prices are per billing cycle and exclude any applicable taxes. All plans include free product updates.
        </p>
      </div>
    </section>
  );
};

export default ItrovaPricing;
