import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import logo from "@/assets/allspire-logo.png";
import ThemeToggle from "@/components/ThemeToggle";
import { industryList } from "@/data/industries";
import { useCaseStudies } from "@/hooks/useSiteContent";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

type NavItem = { label: string; path: string; items?: { label: string; path: string }[] };

const industryItems = industryList.map((i) => ({ label: i.title, path: `/industries/${i.slug}` }));

const baseLinks: NavItem[] = [
  { label: "Home", path: "/" },
  { label: "Services", path: "/services" },
  { label: "Industries", path: "/industries", items: industryItems },
  { label: "Products", path: "/products" },
  { label: "About", path: "/about" },
  { label: "Webinar", path: "/webinar" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();
  const { items: stories } = useCaseStudies();

  // "Work" only exists once a case study is published.
  const links = stories.length > 0 ? [...baseLinks.slice(0, 4), { label: "Work", path: "/work" }, ...baseLinks.slice(4)] : baseLinks;

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  const isActive = (link: NavItem) => (link.path === "/" ? pathname === "/" : pathname.startsWith(link.path));
  const linkClass = (active: boolean) =>
    `relative py-1 text-sm font-medium transition-colors hover:text-foreground after:absolute after:-bottom-1 after:left-0 after:h-0.5 after:rounded-full after:bg-primary after:transition-all ${
      active ? "text-foreground after:w-full" : "text-muted-foreground after:w-0"
    }`;

  return (
    <nav className="fixed inset-x-0 top-0 z-50 border-b border-border/70 bg-background/85 backdrop-blur-xl">
      <div className="container-tight flex h-16 items-center justify-between md:h-[72px]">
        <Link to="/" className="flex items-center" aria-label="Allspire home">
          <img src={logo} alt="Allspire" className="h-9 md:h-10 dark:brightness-0 dark:invert" />
        </Link>

        <div className="hidden items-center gap-7 lg:flex">
          {links.map((link) =>
            link.items ? (
              <DropdownMenu key={link.path}>
                <DropdownMenuTrigger asChild>
                  <button type="button" className={`${linkClass(isActive(link))} flex items-center gap-1 outline-none`}>
                    {link.label}
                    <ChevronDown className="h-3.5 w-3.5" />
                  </button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="center" className="w-52 rounded-xl border-border bg-card p-1.5">
                  {link.items.map((item) => (
                    <DropdownMenuItem key={item.path} asChild>
                      <Link to={item.path} className="cursor-pointer rounded-lg px-3 py-2 text-sm">
                        {item.label}
                      </Link>
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <Link key={link.path} to={link.path} className={linkClass(isActive(link))}>
                {link.label}
              </Link>
            ),
          )}
          <div className="ml-2 flex items-center gap-3">
            <ThemeToggle />
            <Link to="/contact" className="btn-brand !min-h-[40px] !py-2.5">
              Talk to us
            </Link>
          </div>
        </div>

        <div className="flex items-center gap-2 lg:hidden">
          <ThemeToggle />
          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border bg-card text-foreground"
            onClick={() => setOpen(!open)}
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? "Close menu" : "Open menu"}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-nav"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="overflow-hidden border-b border-border bg-background lg:hidden"
          >
            <div className="container-tight max-h-[calc(100vh-4rem)] overflow-y-auto pb-6 pt-2">
              {links.map((link) =>
                link.items ? (
                  <div key={link.path} className="border-b border-border/60 py-2">
                    <span className="block py-2 text-sm font-semibold text-foreground">{link.label}</span>
                    <div className="grid grid-cols-2 gap-1 pb-1">
                      {link.items.map((item) => (
                        <Link
                          key={item.path}
                          to={item.path}
                          className={`rounded-lg px-3 py-2.5 text-sm ${pathname === item.path ? "bg-accent text-accent-foreground" : "text-muted-foreground"}`}
                        >
                          {item.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                ) : (
                  <Link
                    key={link.path}
                    to={link.path}
                    className={`block border-b border-border/60 py-3.5 text-[15px] font-medium ${isActive(link) ? "text-primary" : "text-foreground"}`}
                  >
                    {link.label}
                  </Link>
                ),
              )}
              <Link to="/contact" className="btn-brand mt-5 w-full">
                Talk to us
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
