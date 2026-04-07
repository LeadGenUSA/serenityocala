import { Phone, Mail, MapPin, Printer, Facebook, Linkedin, Youtube } from "lucide-react";
import serenityLogo from "@/assets/serenity-new-logo.png";

const socialLinks = [
  { name: "Facebook", href: "https://www.facebook.com/serenityinstituteinc", icon: Facebook },
  { name: "LinkedIn", href: "https://www.linkedin.com/in/beth-maharaj-44708978/", icon: Linkedin },
  { name: "X", href: "https://x.com/drbethlmhc", icon: () => (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  )},
  { name: "YouTube", href: "https://www.youtube.com/channel/UC7rwr0oF_mAJChQzamm1rQQ", icon: Youtube },
];

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-primary-foreground py-16">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <img 
              src={serenityLogo} 
              alt="Serenity Institute" 
              className="h-24 w-auto mb-4"
            />
            <p className="text-primary-foreground/70 text-sm leading-relaxed mb-4">
              Dr. Beth Robinson, PhD, LHMC<br />
              Consultation & Counseling for Adults, Children, and Couples
            </p>
            <div className="flex items-center gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.name}
                  className="text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
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
              <a
                href="/resources"
                className="block text-primary-foreground/70 hover:text-primary-foreground transition-colors text-sm"
              >
                Resources
              </a>
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
              <div className="flex items-center gap-2 text-primary-foreground/70">
                <Printer className="w-4 h-4" />
                Fax: 352-237-8363
              </div>
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
