import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import logo from "@/assets/allspire-logo.png";
import ThemeToggle from "@/components/ThemeToggle";
import { industriesData } from "@/data/industries";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const navLinks = [
  { label: "Home", path: "/" },
  { label: "About", path: "/about" },
  { label: "Services", path: "/services" },
  { label: "Industries", path: "/industries", isDropdown: true },
  { label: "Projects", path: "/projects" },
  { label: "iTrova Guide", path: "/itrova-guide" },
  { label: "Contact", path: "/contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/70 backdrop-blur-xl border-b border-border/50">
      <div className="container-tight flex items-center justify-between h-16 md:h-20">
        <Link to="/" className="flex items-center gap-2">
          <img src={logo} alt="Allspire" className="h-10 md:h-12" />
        </Link>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) =>
            link.isDropdown ? (
              <DropdownMenu key={link.path}>
                <DropdownMenuTrigger asChild>
                  <button
                    className={`relative text-sm font-medium transition-colors hover:text-primary flex items-center gap-1 outline-none ${
                      location.pathname.startsWith("/industries")
                        ? "text-primary"
                        : "text-muted-foreground"
                    }`}
                  >
                    {link.label}
                    <ChevronDown className="h-3.5 w-3.5" />
                    {location.pathname.startsWith("/industries") && (
                      <motion.div
                        layoutId="nav-indicator"
                        className="absolute -bottom-1 left-0 right-0 h-0.5 gradient-bg rounded-full"
                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                      />
                    )}
                  </button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="center" className="w-48">
                  {Object.values(industriesData).map((industry) => (
                    <DropdownMenuItem key={industry.slug} asChild>
                      <Link
                        to={`/industries/${industry.slug}`}
                        className="flex items-center gap-2 cursor-pointer"
                      >
                        <industry.icon className="h-4 w-4" />
                        {industry.title}
                      </Link>
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <Link
                key={link.path}
                to={link.path}
                className={`relative text-sm font-medium transition-colors hover:text-primary ${
                  location.pathname === link.path
                    ? "text-primary"
                    : "text-muted-foreground"
                }`}
              >
                {link.label}
                {location.pathname === link.path && (
                  <motion.div
                    layoutId="nav-indicator"
                    className="absolute -bottom-1 left-0 right-0 h-0.5 gradient-bg rounded-full"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </Link>
            )
          )}
          <ThemeToggle />
          <Link to="/contact" className="btn-glass-primary btn-glass-sm">
            Get Started
          </Link>
        </div>

        {/* Mobile toggle */}
        <motion.button
          className="md:hidden text-foreground"
          onClick={() => setOpen(!open)}
          whileTap={{ scale: 0.9 }}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </motion.button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="md:hidden overflow-hidden bg-background/90 backdrop-blur-xl border-b border-border/50"
          >
            <div className="px-6 pb-6 pt-2">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.path}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                >
                  {link.isDropdown ? (
                    <>
                      <span className={`block py-3 text-sm font-medium ${
                        location.pathname.startsWith("/industries")
                          ? "text-primary"
                          : "text-muted-foreground"
                      }`}>
                        {link.label}
                      </span>
                      <div className="pl-4 space-y-1">
                        {Object.values(industriesData).map((industry) => (
                          <Link
                            key={industry.slug}
                            to={`/industries/${industry.slug}`}
                            onClick={() => setOpen(false)}
                            className={`flex items-center gap-2 py-2 text-sm ${
                              location.pathname === `/industries/${industry.slug}`
                                ? "text-primary"
                                : "text-muted-foreground"
                            }`}
                          >
                            <industry.icon className="h-4 w-4" />
                            {industry.title}
                          </Link>
                        ))}
                      </div>
                    </>
                  ) : (
                    <Link
                      to={link.path}
                      onClick={() => setOpen(false)}
                      className={`block py-3 text-sm font-medium ${
                        location.pathname === link.path
                          ? "text-primary"
                          : "text-muted-foreground"
                      }`}
                    >
                      {link.label}
                    </Link>
                  )}
                </motion.div>
              ))}
              <div className="flex items-center gap-3 mt-4">
                <ThemeToggle />
                <Link
                  to="/contact"
                  onClick={() => setOpen(false)}
                  className="flex-1 btn-glass-primary btn-glass-sm text-center"
                >
                  Get Started
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
