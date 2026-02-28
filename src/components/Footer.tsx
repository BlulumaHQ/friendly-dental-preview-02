import { Link } from "react-router-dom";
import { Facebook, Twitter, Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <h3 className="font-display text-xl mb-4">Friendly Dental Centre</h3>
            <p className="text-background/70 text-sm leading-relaxed">
              Our team is happy to help you and your family achieving that perfect smile!
            </p>
            <div className="flex gap-4 mt-6">
              <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer" className="text-background/60 hover:text-secondary transition-colors" aria-label="Facebook">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer" className="text-background/60 hover:text-secondary transition-colors" aria-label="Twitter">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" className="text-background/60 hover:text-secondary transition-colors" aria-label="Instagram">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-display text-lg mb-4">Links</h4>
            <ul className="space-y-2 text-sm text-background/70">
              <li><Link to="/our-office" className="hover:text-secondary transition-colors">Our Office</Link></li>
              <li><Link to="/our-team" className="hover:text-secondary transition-colors">Our Team</Link></li>
              <li><Link to="/our-services" className="hover:text-secondary transition-colors">Our Services</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-display text-lg mb-4">Services</h4>
            <ul className="space-y-2 text-sm text-background/70">
              <li><Link to="/our-services#implants" className="hover:text-secondary transition-colors">Implants</Link></li>
              <li><Link to="/our-services#orthodontics" className="hover:text-secondary transition-colors">Orthodontics</Link></li>
              <li><Link to="/our-services#pediatric" className="hover:text-secondary transition-colors">Pediatric</Link></li>
              <li><Link to="/our-services#esthetics" className="hover:text-secondary transition-colors">Esthetics</Link></li>
              <li><Link to="/our-services#restoratives" className="hover:text-secondary transition-colors">Restoratives</Link></li>
              <li><Link to="/our-services#maintenance" className="hover:text-secondary transition-colors">Maintenance</Link></li>
            </ul>
          </div>

          {/* Vancouver Office */}
          <div>
            <h4 className="font-display text-lg mb-4">Vancouver Office</h4>
            <a
              href="https://littlemountaindental.ca/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-background/70 hover:text-secondary transition-colors"
            >
              Little Mountain Dental Centre
            </a>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-background/10">
        <div className="container mx-auto px-4 py-4 text-center">
          <span className="text-sm text-background/60">
            © 2023 Friendly Dental Centre
          </span>
          <span className="text-background/30 mx-2">|</span>
          <span className="text-xs text-background/40 font-normal">
            Web Design by Bluluma.com
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
