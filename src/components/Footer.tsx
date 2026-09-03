import { Link } from "react-router-dom";
import logo from "@/assets/allspire-logo.png";
import { industryList } from "@/data/industries";
import { ITROVA_LINKS } from "@/config/itrova";
import { COMPANY, WHATSAPP_DISPLAY, whatsappLink } from "@/config/company";

const col = "flex flex-col gap-2.5 text-sm";
const link = "text-navy-foreground/80 transition-colors hover:text-white";

const Footer = () => (
  <footer className="band">
    <div className="container-tight pb-8 pt-14 md:pt-16">
      <div className="grid grid-cols-2 gap-8 md:grid-cols-6">
        <div className="col-span-2">
          <img src={logo} alt="Allspire" className="h-8 w-auto brightness-0 invert" />
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-navy-foreground/80">
            Intelligent digital products that help businesses scale faster and operate smarter.
          </p>
          <p className="mt-4 text-xs text-navy-foreground/60">{COMPANY.address}</p>
        </div>
        <div>
          <h4 className="mb-4 text-sm font-semibold text-white">Company</h4>
          <div className={col}>
            <Link to="/about" className={link}>About</Link>
            <Link to="/services" className={link}>Services</Link>
            <Link to="/work" className={link}>Work</Link>
            <Link to="/webinar" className={link}>Webinar</Link>
          </div>
        </div>
        <div>
          <h4 className="mb-4 text-sm font-semibold text-white">Industries</h4>
          <div className={col}>
            {industryList.map((i) => (
              <Link key={i.slug} to={`/industries/${i.slug}`} className={link}>{i.title}</Link>
            ))}
          </div>
        </div>
        <div>
          <h4 className="mb-4 text-sm font-semibold text-white">Products</h4>
          <div className={col}>
            <Link to="/products" className={link}>iTrova</Link>
            <a href={ITROVA_LINKS.pricing} className={link}>iTrova pricing</a>
            <a href={ITROVA_LINKS.guide} className={link}>iTrova guide</a>
            <a href={ITROVA_LINKS.affiliates} className={link}>Affiliate program</a>
          </div>
        </div>
        <div>
          <h4 className="mb-4 text-sm font-semibold text-white">Connect</h4>
          <div className={col}>
            <Link to="/contact" className={link}>Contact</Link>
            <a href={`mailto:${COMPANY.email}`} className={link}>{COMPANY.email}</a>
            <a href={whatsappLink()} target="_blank" rel="noopener noreferrer" className={link}>WhatsApp {WHATSAPP_DISPLAY}</a>
            <a href={COMPANY.linkedin} target="_blank" rel="noopener noreferrer" className={link}>LinkedIn</a>
            <a href={COMPANY.linktree} target="_blank" rel="noopener noreferrer" className={link}>Social links</a>
            <a href={COMPANY.github} target="_blank" rel="noopener noreferrer" className={link}>GitHub</a>
          </div>
        </div>
      </div>
      <div className="mt-12 flex flex-col gap-3 border-t border-white/10 pt-6 text-xs text-navy-foreground/70 md:flex-row md:items-center md:justify-between">
        <p>© {new Date().getFullYear()} {COMPANY.legalName} · RC {COMPANY.rc}. All rights reserved.</p>
        <div className="flex gap-5">
          <Link to="/privacy" className={link}>Privacy</Link>
          <Link to="/terms" className={link}>Terms</Link>
          <Link to="/dpa" className={link}>DPA</Link>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
