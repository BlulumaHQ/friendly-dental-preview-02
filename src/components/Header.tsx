import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone, MapPin } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import logo from "@/assets/friendly-dental-logo.svg";

const navLinks = [
  { label: "HOME", path: "/" },
  { label: "OUR OFFICE", path: "/our-office" },
  { label: "OUR TEAM", path: "/our-team" },
  { label: "OUR SERVICES", path: "/our-services" },
  { label: "CONTACT", path: "/contact" },
  { label: "中文", path: "/chinese" },
];

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-background/95 backdrop-blur-md shadow-sm" : "bg-background"
      }`}
    >
      {/* Top bar */}
      <div className="border-b border-border">
        <div className="container mx-auto flex items-center justify-between py-3 px-4">
          <Link to="/" className="flex-shrink-0">
            <img src={logo} alt="Friendly Dental Centre" className="h-10 md:h-12" />
          </Link>
          <div className="hidden md:flex items-center gap-6 text-sm text-muted-foreground">
            <a href="tel:6042738315" className="flex items-center gap-2 hover:text-primary transition-colors">
              <Phone className="w-4 h-4" />
              604-273-8315
            </a>
            <a
              href="https://maps.app.goo.gl/siy6NG1vN6Ckz9zR9"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-primary transition-colors"
            >
              <MapPin className="w-4 h-4" />
              120 - 5508 Hollybridge Way, Richmond
            </a>
          </div>
          <button
            className="md:hidden p-2 text-foreground"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Nav bar */}
      <nav className="hidden md:block border-b border-border">
        <div className="container mx-auto flex items-center justify-center gap-8 py-3 px-4">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`text-sm font-medium tracking-wide transition-colors hover:text-primary ${
                location.pathname === link.path
                  ? "text-primary"
                  : "text-foreground"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>
      </nav>

      {/* Mobile drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-background border-b border-border overflow-hidden"
          >
            <div className="flex flex-col py-4 px-6 gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`py-3 text-sm font-medium tracking-wide border-b border-border last:border-0 transition-colors ${
                    location.pathname === link.path
                      ? "text-primary"
                      : "text-foreground"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <div className="pt-4 flex flex-col gap-2 text-sm text-muted-foreground">
                <a href="tel:6042738315" className="flex items-center gap-2">
                  <Phone className="w-4 h-4" /> 604-273-8315
                </a>
                <a
                  href="https://maps.app.goo.gl/siy6NG1vN6Ckz9zR9"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2"
                >
                  <MapPin className="w-4 h-4" /> 120 - 5508 Hollybridge Way, Richmond
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
