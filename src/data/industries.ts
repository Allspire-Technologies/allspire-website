import {
  Building2, Landmark, ShoppingCart, Truck, GraduationCap,
  BarChart3, Users, Clock, CheckCircle, Layers, LineChart,
  ShieldCheck, Cpu, Globe, Workflow,
} from "lucide-react";

export const industriesData = {
  "real-estate": {
    title: "Real Estate",
    slug: "real-estate",
    icon: Building2,
    tagline: "Portfolios, leases, tenant portals",
    headline: "Property businesses that close faster and keep tenants happy",
    description:
      "We help real estate companies modernize operations, from property management platforms to AI-powered valuation engines, so they can close deals faster and deliver exceptional tenant experiences.",
    capabilities: [
      { icon: Layers, title: "Property Management Platforms", desc: "Centralized dashboards for portfolios, leases, and maintenance workflows." },
      { icon: LineChart, title: "Market Analytics & Valuation", desc: "AI-driven pricing models and market trend analysis for smarter investments." },
      { icon: Users, title: "Tenant Experience Portals", desc: "Self-service portals for rent payments, maintenance requests, and communication." },
      { icon: Globe, title: "Virtual Tours & Listings", desc: "Immersive 3D tours and intelligent listing platforms that convert visitors into leads." },
    ],
  },
  finance: {
    title: "Finance",
    slug: "finance",
    icon: Landmark,
    tagline: "Compliance, payments, risk",
    headline: "Financial technology that is secure, compliant and fast",
    description:
      "From neobanking platforms to compliance automation, we build secure, scalable fintech solutions that help financial institutions innovate while maintaining regulatory trust.",
    capabilities: [
      { icon: ShieldCheck, title: "Regulatory Compliance Tools", desc: "Automated KYC/AML workflows and audit-ready reporting systems." },
      { icon: BarChart3, title: "Trading & Analytics Platforms", desc: "Real-time dashboards with algorithmic insights for informed decision-making." },
      { icon: Cpu, title: "Payment Infrastructure", desc: "PCI-compliant payment gateways, digital wallets, and settlement engines." },
      { icon: Workflow, title: "Risk Management Systems", desc: "ML-powered fraud detection and portfolio risk assessment platforms." },
    ],
  },
  retail: {
    title: "Retail",
    slug: "retail",
    icon: ShoppingCart,
    tagline: "Commerce, inventory, POS",
    headline: "Retail that sells on every channel and never runs out of stock",
    description:
      "We empower retailers with technology that bridges online and offline, from headless e-commerce to AI-personalized shopping experiences that maximize revenue per visitor.",
    capabilities: [
      { icon: Globe, title: "Headless Commerce Platforms", desc: "Flexible, API-first storefronts that scale globally with blazing performance." },
      { icon: Users, title: "Personalization Engines", desc: "AI-driven product recommendations and dynamic content tailored to each shopper." },
      { icon: BarChart3, title: "Inventory & Supply Chain", desc: "Real-time inventory tracking and demand forecasting to eliminate stockouts." },
      { icon: Clock, title: "Omnichannel Solutions", desc: "Unified experiences across web, mobile, in-store kiosks, and social commerce." },
    ],
  },
  logistics: {
    title: "Logistics",
    slug: "logistics",
    icon: Truck,
    tagline: "Fleet, routing, tracking",
    headline: "Supply chains with visibility on every mile",
    description:
      "We build logistics technology that brings visibility, automation, and intelligence to every mile; helping companies move goods faster, cheaper, and more sustainably.",
    capabilities: [
      { icon: Globe, title: "Fleet Management Systems", desc: "GPS tracking, route optimization, and driver management in one platform." },
      { icon: Workflow, title: "Warehouse Automation", desc: "Smart warehouse management with barcode scanning, pick-pack-ship, and robotics integration." },
      { icon: LineChart, title: "Demand Forecasting", desc: "ML-powered forecasting models that optimize inventory levels across the supply chain." },
      { icon: CheckCircle, title: "Last-Mile Delivery", desc: "Customer-facing tracking, delivery scheduling, and proof-of-delivery solutions." },
    ],
  },
  education: {
    title: "Education",
    slug: "education",
    icon: GraduationCap,
    tagline: "Learning platforms, admin",
    headline: "Learning platforms that make teaching and administration lighter",
    description:
      "We build edtech platforms that make learning more accessible, engaging, and effective; from K-12 school management to enterprise training and online course marketplaces.",
    capabilities: [
      { icon: Layers, title: "Learning Management Systems", desc: "Feature-rich LMS platforms with course creation, progress tracking, and certification." },
      { icon: Users, title: "Student Information Systems", desc: "End-to-end school management covering enrollment, attendance, grading, and parent communication." },
      { icon: Cpu, title: "Adaptive Learning Engines", desc: "AI-powered personalized learning paths that adapt to each student's pace and style." },
      { icon: BarChart3, title: "Analytics & Reporting", desc: "Data dashboards for educators and administrators to track outcomes and identify at-risk students." },
    ],
  },
} as const;

export type IndustrySlug = keyof typeof industriesData;
export const industryList = Object.values(industriesData);
