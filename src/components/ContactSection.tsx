import { Phone, Mail, MapPin, Clock, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const contactInfo = [
  {
    icon: Phone,
    label: "Phone",
    value: "352-671-7932",
    href: "tel:352-671-7932",
  },
  {
    icon: Mail,
    label: "Email",
    value: "drbeth@serenityocala.com",
    href: "mailto:drbeth@serenityocala.com",
  },
  {
    icon: MapPin,
    label: "Address",
    value: "20757 W. Pennsylvania Ave, Ste. B1\nDunnellon, FL 34431",
    href: "https://maps.google.com/?q=20757+W+Pennsylvania+Ave+Dunnellon+FL+34431",
  },
  {
    icon: Clock,
    label: "Hours",
    value: "By Appointment Only",
  },
];

export const ContactSection = () => {
  return (
    <section id="contact" className="py-24 lg:py-32 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary text-sm font-medium rounded-full mb-4 animate-fade-in-up opacity-0">
            Get in Touch
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-foreground mb-6 animate-fade-in-up opacity-0 delay-100">
            Begin Your Journey to{" "}
            <span className="text-gradient">Wellness</span>
          </h2>
          <p className="text-muted-foreground leading-relaxed animate-fade-in-up opacity-0 delay-200">
            Taking the first step is often the hardest. Reach out today for a 
            consultation and discover how we can help you achieve your goals.
          </p>
        </div>

        {/* Contact Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {contactInfo.map((item, index) => (
            <Card
              key={index}
              className="p-6 bg-card-gradient border-border/50 text-center animate-fade-in-up opacity-0"
              style={{ animationDelay: `${(index + 1) * 100}ms` }}
            >
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <item.icon className="w-5 h-5 text-primary" />
              </div>
              <div className="text-xs text-muted-foreground uppercase tracking-wider mb-2">
                {item.label}
              </div>
              {item.href ? (
                <a
                  href={item.href}
                  target={item.href.startsWith("http") ? "_blank" : undefined}
                  rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="text-foreground hover:text-primary transition-colors whitespace-pre-line text-sm"
                >
                  {item.value}
                </a>
              ) : (
                <span className="text-foreground whitespace-pre-line text-sm">
                  {item.value}
                </span>
              )}
            </Card>
          ))}
        </div>

        {/* CTA Card */}
        <Card className="max-w-3xl mx-auto p-8 lg:p-12 bg-primary/5 border-primary/20 text-center animate-fade-in-up opacity-0 delay-500">
          <h3 className="font-serif text-2xl lg:text-3xl text-foreground mb-4">
            Ready to Take the First Step?
          </h3>
          <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
            Call today to schedule your free consultation and begin your 
            journey toward inner peace and personal growth.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild>
              <a href="tel:352-671-7932" className="gap-2">
                <Phone className="w-4 h-4" />
                Call Now: 352-671-7932
              </a>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <a href="mailto:drbeth@serenityocala.com" className="gap-2">
                <Mail className="w-4 h-4" />
                Send Email
                <ArrowRight className="w-4 h-4" />
              </a>
            </Button>
          </div>
        </Card>
      </div>
    </section>
  );
};
