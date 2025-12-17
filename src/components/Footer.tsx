import { Phone, Mail, MapPin } from "lucide-react";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-primary-foreground py-16">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center">
                <span className="text-primary-foreground font-serif text-xl font-semibold">S</span>
              </div>
              <div>
                <span className="font-serif text-xl tracking-wide">Serenity</span>
                <span className="block text-[10px] tracking-[0.2em] text-primary-foreground/60 uppercase">
                  Institute
                </span>
              </div>
            </div>
            <p className="text-primary-foreground/70 text-sm leading-relaxed">
              Dr. Beth Robinson, PhD, LHMC<br />
              Consultation & Counseling for Adults, Children, and Couples
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-serif text-lg mb-4">Quick Links</h4>
            <nav className="space-y-2">
              {["About", "Services", "Contact"].map((link) => (
                <a
                  key={link}
                  href={`#${link.toLowerCase()}`}
                  className="block text-primary-foreground/70 hover:text-primary-foreground transition-colors text-sm"
                >
                  {link}
                </a>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-serif text-lg mb-4">Contact</h4>
            <div className="space-y-3 text-sm">
              <a
                href="tel:352-671-7932"
                className="flex items-center gap-2 text-primary-foreground/70 hover:text-primary-foreground transition-colors"
              >
                <Phone className="w-4 h-4" />
                352-671-7932
              </a>
              <a
                href="mailto:drbeth@serenityocala.com"
                className="flex items-center gap-2 text-primary-foreground/70 hover:text-primary-foreground transition-colors"
              >
                <Mail className="w-4 h-4" />
                drbeth@serenityocala.com
              </a>
              <div className="flex items-start gap-2 text-primary-foreground/70">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span>
                  20757 W. Pennsylvania Ave, Ste. B1<br />
                  Dunnellon, FL 34431
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-primary-foreground/10 flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-primary-foreground/50">
          <p>© {currentYear} Serenity Institute. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-primary-foreground transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-primary-foreground transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
