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
    color: "from-blue-500 to-cyan-400",
    headline: "Digitizing the future of property",
    description:
      "We help real estate companies modernize operations — from property management platforms to AI-powered valuation engines — so they can close deals faster and deliver exceptional tenant experiences.",
    stats: [
      { value: "40%", label: "Faster deal closings" },
      { value: "3x", label: "Lead conversion improvement" },
      { value: "60%", label: "Reduction in manual tasks" },
    ],
    capabilities: [
      { icon: Layers, title: "Property Management Platforms", desc: "Centralized dashboards for portfolios, leases, and maintenance workflows." },
      { icon: LineChart, title: "Market Analytics & Valuation", desc: "AI-driven pricing models and market trend analysis for smarter investments." },
      { icon: Users, title: "Tenant Experience Portals", desc: "Self-service portals for rent payments, maintenance requests, and communication." },
      { icon: Globe, title: "Virtual Tours & Listings", desc: "Immersive 3D tours and intelligent listing platforms that convert visitors into leads." },
    ],
    caseStudy: {
      title: "PropFlow — Portfolio Management Suite",
      desc: "Built a unified property management platform for a 200+ unit portfolio, reducing vacancy rates by 25% and automating lease renewals.",
    },
  },
  finance: {
    title: "Finance",
    slug: "finance",
    icon: Landmark,
    color: "from-indigo-500 to-blue-400",
    headline: "Smarter financial technology",
    description:
      "From neobanking platforms to compliance automation, we build secure, scalable fintech solutions that help financial institutions innovate while maintaining regulatory trust.",
    stats: [
      { value: "99.99%", label: "Uptime guarantee" },
      { value: "5x", label: "Faster compliance reporting" },
      { value: "50%", label: "Cost reduction in operations" },
    ],
    capabilities: [
      { icon: ShieldCheck, title: "Regulatory Compliance Tools", desc: "Automated KYC/AML workflows and audit-ready reporting systems." },
      { icon: BarChart3, title: "Trading & Analytics Platforms", desc: "Real-time dashboards with algorithmic insights for informed decision-making." },
      { icon: Cpu, title: "Payment Infrastructure", desc: "PCI-compliant payment gateways, digital wallets, and settlement engines." },
      { icon: Workflow, title: "Risk Management Systems", desc: "ML-powered fraud detection and portfolio risk assessment platforms." },
    ],
    caseStudy: {
      title: "FinEdge — Investment Dashboard",
      desc: "Designed a real-time investment analytics dashboard for a mid-size asset manager, improving portfolio visibility and reducing reporting cycles by 80%.",
    },
  },
  retail: {
    title: "Retail",
    slug: "retail",
    icon: ShoppingCart,
    color: "from-purple-500 to-pink-400",
    headline: "Commerce, reimagined",
    description:
      "We empower retailers with technology that bridges online and offline — from headless e-commerce to AI-personalized shopping experiences that maximize revenue per visitor.",
    stats: [
      { value: "35%", label: "Increase in AOV" },
      { value: "2x", label: "Faster page load times" },
      { value: "45%", label: "Boost in retention" },
    ],
    capabilities: [
      { icon: Globe, title: "Headless Commerce Platforms", desc: "Flexible, API-first storefronts that scale globally with blazing performance." },
      { icon: Users, title: "Personalization Engines", desc: "AI-driven product recommendations and dynamic content tailored to each shopper." },
      { icon: BarChart3, title: "Inventory & Supply Chain", desc: "Real-time inventory tracking and demand forecasting to eliminate stockouts." },
      { icon: Clock, title: "Omnichannel Solutions", desc: "Unified experiences across web, mobile, in-store kiosks, and social commerce." },
    ],
    caseStudy: {
      title: "ShopSmart — E-commerce Platform",
      desc: "Launched a headless e-commerce platform for a fashion brand that doubled mobile conversions and cut page load times by 60%.",
    },
  },
  logistics: {
    title: "Logistics",
    slug: "logistics",
    icon: Truck,
    color: "from-violet-500 to-indigo-400",
    headline: "Intelligent supply chains",
    description:
      "We build logistics technology that brings visibility, automation, and intelligence to every mile — helping companies move goods faster, cheaper, and more sustainably.",
    stats: [
      { value: "30%", label: "Reduction in delivery times" },
      { value: "20%", label: "Fuel cost savings" },
      { value: "95%", label: "On-time delivery rate" },
    ],
    capabilities: [
      { icon: Globe, title: "Fleet Management Systems", desc: "GPS tracking, route optimization, and driver management in one platform." },
      { icon: Workflow, title: "Warehouse Automation", desc: "Smart warehouse management with barcode scanning, pick-pack-ship, and robotics integration." },
      { icon: LineChart, title: "Demand Forecasting", desc: "ML-powered forecasting models that optimize inventory levels across the supply chain." },
      { icon: CheckCircle, title: "Last-Mile Delivery", desc: "Customer-facing tracking, delivery scheduling, and proof-of-delivery solutions." },
    ],
    caseStudy: {
      title: "LogiTrack — Fleet Intelligence",
      desc: "Deployed an AI-powered fleet management platform that reduced fuel costs by 20% and improved on-time delivery rates to 95%.",
    },
  },
  education: {
    title: "Education",
    slug: "education",
    icon: GraduationCap,
    color: "from-emerald-500 to-teal-400",
    headline: "Empowering the next generation of learners",
    description:
      "We build edtech platforms that make learning more accessible, engaging, and effective — from K-12 school management to enterprise training and online course marketplaces.",
    stats: [
      { value: "3x", label: "Student engagement increase" },
      { value: "50%", label: "Administrative time saved" },
      { value: "10M+", label: "Learners served" },
    ],
    capabilities: [
      { icon: Layers, title: "Learning Management Systems", desc: "Feature-rich LMS platforms with course creation, progress tracking, and certification." },
      { icon: Users, title: "Student Information Systems", desc: "End-to-end school management covering enrollment, attendance, grading, and parent communication." },
      { icon: Cpu, title: "Adaptive Learning Engines", desc: "AI-powered personalized learning paths that adapt to each student's pace and style." },
      { icon: BarChart3, title: "Analytics & Reporting", desc: "Data dashboards for educators and administrators to track outcomes and identify at-risk students." },
    ],
    caseStudy: {
      title: "EduSpark — Online Learning Platform",
      desc: "Built a scalable online learning marketplace serving 500K+ students with live classes, quizzes, and AI-generated study plans.",
    },
  },
} as const;

export type IndustrySlug = keyof typeof industriesData;
