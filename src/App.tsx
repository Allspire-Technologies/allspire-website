import { Suspense } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { lazyWithRetry } from "@/lib/lazyWithRetry";
import Index from "./pages/Index";
import ExternalRedirect from "./components/ExternalRedirect";
import { ITROVA_LINKS } from "./config/itrova";
import ScrollToTop from "./components/ScrollToTop";

// Home ships in the main bundle; every other page is its own chunk.
const About = lazyWithRetry(() => import("./pages/About"));
const Services = lazyWithRetry(() => import("./pages/Services"));
const Products = lazyWithRetry(() => import("./pages/Products"));
const Contact = lazyWithRetry(() => import("./pages/Contact"));
const Webinar = lazyWithRetry(() => import("./pages/Webinar"));
const Work = lazyWithRetry(() => import("./pages/Work"));
const WorkDetail = lazyWithRetry(() => import("./pages/WorkDetail"));
const IndustryDetail = lazyWithRetry(() => import("./pages/IndustryDetail"));
const NotFound = lazyWithRetry(() => import("./pages/NotFound"));
const PrivacyPolicy = lazyWithRetry(() => import("./pages/PrivacyPolicy"));
const TermsOfService = lazyWithRetry(() => import("./pages/TermsOfService"));
const DataProcessingAgreement = lazyWithRetry(() => import("./pages/DataProcessingAgreement"));

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Suspense fallback={<div className="min-h-screen bg-background" aria-busy="true" />}>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/products" element={<Products />} />
            {/* Renamed from Projects to Products; keep old links/bookmarks working. */}
            <Route path="/projects" element={<Navigate to="/products" replace />} />
            <Route path="/work" element={<Work />} />
            <Route path="/work/:slug" element={<WorkDetail />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/webinar" element={<Webinar />} />
            {/* The iTrova guide lives on itrova.co now; public/_redirects 301s this before the SPA. */}
            <Route path="/docs/itrova" element={<ExternalRedirect to={ITROVA_LINKS.guide} />} />
            <Route path="/industries" element={<Navigate to="/industries/retail" replace />} />
            <Route path="/industries/:slug" element={<IndustryDetail />} />
            <Route path="/privacy" element={<PrivacyPolicy />} />
            <Route path="/terms" element={<TermsOfService />} />
            <Route path="/dpa" element={<DataProcessingAgreement />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
