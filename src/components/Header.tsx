import { useState, useEffect } from "react";
import { Menu, X, Phone, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import serenityLogo from "@/assets/serenity-new-logo.png";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Resources", href: "/resources" },
  { name: "Self-Assessment", href: "/self-assessment" },
  { name: "Contact", href: "#contact" },
];

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-card/95 backdrop-blur-md shadow-soft py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="#home" className="flex items-center gap-3 group">
            <img 
              src={serenityLogo} 
              alt="Serenity Institute" 
              className="h-20 w-auto group-hover:scale-105 transition-transform drop-shadow-[0_0_15px_rgba(93,173,161,0.9)]"
            />
            <div className="hidden sm:block">
              <span className="font-serif text-xl text-foreground tracking-wide">
                Serenity
              </span>
              <span className="block text-[10px] tracking-[0.2em] text-muted-foreground uppercase">
                Institute
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-primary after:transition-all hover:after:w-full"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Contact & CTA */}
          <div className="hidden lg:flex items-center gap-6">
            <a
              href="tel:352-671-7932"
              className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              <Phone className="w-4 h-4" />
              <span>352-671-7932</span>
            </a>
            <Button variant="default" size="sm" asChild>
              <a href="#contact">Book Consultation</a>
            </Button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 text-foreground"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`lg:hidden overflow-hidden transition-all duration-300 ${
            isMobileMenuOpen ? "max-h-96 mt-4" : "max-h-0"
          }`}
        >
          <nav className="flex flex-col gap-4 py-4 border-t border-border">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-foreground hover:text-primary transition-colors py-2"
              >
                {link.name}
              </a>
            ))}
            <div className="flex flex-col gap-3 pt-4 border-t border-border">
              <a
                href="tel:352-671-7932"
                className="flex items-center gap-2 text-muted-foreground"
              >
                <Phone className="w-4 h-4" />
                <span>352-671-7932</span>
              </a>
              <a
                href="mailto:drbeth@serenityocala.com"
                className="flex items-center gap-2 text-muted-foreground"
              >
                <Mail className="w-4 h-4" />
                <span>drbeth@serenityocala.com</span>
              </a>
              <Button variant="default" className="mt-2" asChild>
                <a href="#contact">Book Consultation</a>
              </Button>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};
