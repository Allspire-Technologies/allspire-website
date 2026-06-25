import { Link } from "react-router-dom";
import logo from "@/assets/allspire-logo.png";
import { docsProducts } from "@/data/docs";

const industries = [
  { name: "Real Estate", slug: "real-estate" },
  { name: "Finance", slug: "finance" },
  { name: "Retail", slug: "retail" },
  { name: "Logistics", slug: "logistics" },
  { name: "Education", slug: "education" },
];

const Footer = () => (
  <footer className="border-t border-border/50 bg-secondary/30 backdrop-blur-sm">
    <div className="container-tight section-padding">
      <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-12">
        <div className="col-span-2 md:col-span-1">
          <img src={logo} alt="Allspire" className="h-8 w-auto mb-3" />
          <p className="text-sm text-muted-foreground leading-relaxed">
            Building intelligent digital products that help businesses scale faster.
          </p>
        </div>
        <div>
          <h4 className="font-semibold text-sm mb-4">Company</h4>
          <div className="flex flex-col gap-3">
            <Link to="/about" className="text-sm text-muted-foreground hover:text-foreground transition-colors">About</Link>
            <Link to="/services" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Services</Link>
            <Link to="/projects" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Projects</Link>
          </div>
        </div>
        <div>
          <h4 className="font-semibold text-sm mb-4">Industries</h4>
          <div className="flex flex-col gap-3">
            {industries.map((i) => (
              <Link
                key={i.slug}
                to={`/industries/${i.slug}`}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                {i.name}
              </Link>
            ))}
          </div>
        </div>
        <div>
          <h4 className="font-semibold text-sm mb-4">Docs</h4>
          <div className="flex flex-col gap-3">
            {docsProducts.map((p) => (
              <Link
                key={p.slug}
                to={`/docs/${p.slug}`}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                {p.title}
              </Link>
            ))}
          </div>
        </div>
        <div>
          <h4 className="font-semibold text-sm mb-4">Connect</h4>
          <div className="flex flex-col gap-3">
            <Link to="/contact" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Contact</Link>
            <a href="mailto:hello@allspire.tech" className="text-sm text-muted-foreground hover:text-foreground transition-colors">hello@allspire.tech</a>
            <a href="" target="_blank" rel="noopener noreferrer" className="text-sm text-muted-foreground hover:text-foreground transition-colors">LinkedIn</a>
            <a href="https://x.com/allspirehq" target="_blank" rel="noopener noreferrer" className="text-sm text-muted-foreground hover:text-foreground transition-colors">X (Twitter)</a>
            <a href="https://github.com/Allspire-Technologies" target="_blank" rel="noopener noreferrer" className="text-sm text-muted-foreground hover:text-foreground transition-colors">GitHub</a>
          </div>
        </div>
      </div>
      <div className="border-t border-border/50 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-sm text-muted-foreground">© 2026 Allspire. All rights reserved.</p>
        <div className="flex gap-6">
          <Link to="/privacy" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Privacy Policy</Link>
          <Link to="/terms" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Terms of Service</Link>
          <Link to="/dpa" className="text-sm text-muted-foreground hover:text-foreground transition-colors">DPA</Link>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
