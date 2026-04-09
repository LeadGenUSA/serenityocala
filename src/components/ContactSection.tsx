import { useState, useEffect, useRef, useCallback } from "react";
import { Phone, Mail, MapPin, Clock, Printer } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";

// Replace with your actual Cloudflare Turnstile site key
const TURNSTILE_SITE_KEY = "0x4AAAAAABeT2IT4GHaGPxB2";

declare global {
  interface Window {
    turnstile?: {
      render: (
        container: string | HTMLElement,
        options: {
          sitekey: string;
          callback: (token: string) => void;
          "expired-callback"?: () => void;
          "error-callback"?: () => void;
          theme?: "light" | "dark" | "auto";
        }
      ) => string;
      reset: (widgetId: string) => void;
      remove: (widgetId: string) => void;
    };
  }
}

const contactInfo = [
  {
    icon: Phone,
    label: "Phone",
    value: "352-671-7932",
    href: "tel:352-671-7932",
  },
  {
    icon: Printer,
    label: "Fax",
    value: "352-237-8363",
    href: "tel:352-237-8363",
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
    value: "20757 W. Pennsylvania Ave\nSuite B1\nDunnellon, FL 34431",
    href: "https://maps.google.com/?q=20757+W+Pennsylvania+Ave+Dunnellon+FL+34431",
  },
  {
    icon: Clock,
    label: "Hours",
    value: "By Appointment Only",
  },
];

export const ContactSection = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [turnstileToken, setTurnstileToken] = useState<string | null>(null);
  const turnstileRef = useRef<HTMLDivElement>(null);
  const widgetIdRef = useRef<string | null>(null);

  const renderWidget = useCallback(() => {
    if (
      window.turnstile &&
      turnstileRef.current &&
      !widgetIdRef.current
    ) {
      widgetIdRef.current = window.turnstile.render(turnstileRef.current, {
        sitekey: TURNSTILE_SITE_KEY,
        callback: (token: string) => setTurnstileToken(token),
        "expired-callback": () => setTurnstileToken(null),
        "error-callback": () => setTurnstileToken(null),
        theme: "light",
      });
    }
  }, []);

  useEffect(() => {
    // Load Turnstile script if not already loaded
    if (!document.querySelector('script[src*="turnstile"]')) {
      const script = document.createElement("script");
      script.src = "https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit";
      script.async = true;
      script.onload = () => renderWidget();
      document.head.appendChild(script);
    } else {
      // Script already loaded, render widget
      const interval = setInterval(() => {
        if (window.turnstile) {
          renderWidget();
          clearInterval(interval);
        }
      }, 100);
      return () => clearInterval(interval);
    }
  }, [renderWidget]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!firstName.trim() || !lastName.trim() || !email.trim() || !message.trim()) {
      toast.error("Please fill in all required fields.");
      return;
    }

    if (!turnstileToken) {
      toast.error("Please complete the CAPTCHA verification.");
      return;
    }

    setIsSubmitting(true);
    try {
      const res = await fetch("/api/send-contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          firstName: firstName.trim(),
          lastName: lastName.trim(),
          email: email.trim(),
          phone: phone.trim() || undefined,
          message: message.trim(),
          turnstileToken,
        }),
      });

      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data.error || "Failed to send message");
      }

      setSubmitted(true);
      toast.success("Message sent! We'll be in touch soon.");
      setFirstName("");
      setLastName("");
      setEmail("");
      setPhone("");
      setMessage("");
      setTurnstileToken(null);
    } catch (err: unknown) {
      const errorMessage = err instanceof Error ? err.message : "Something went wrong. Please try again.";
      toast.error(errorMessage);
    } finally {
      setIsSubmitting(false);
      // Reset Turnstile widget
      if (window.turnstile && widgetIdRef.current) {
        window.turnstile.reset(widgetIdRef.current);
      }
    }
  };

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
        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6 mb-12">
          {contactInfo.map((item, index) => (
            <Card
              key={index}
              className="p-4 bg-card-gradient border-border/50 text-center animate-fade-in-up opacity-0"
              style={{ animationDelay: `${(index + 1) * 100}ms` }}
            >
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-2">
                <item.icon className="w-4 h-4 text-primary" />
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

        {/* Contact Form Card */}
        <Card className="max-w-3xl mx-auto p-8 lg:p-12 bg-primary/5 border-primary/20 animate-fade-in-up opacity-0 delay-500">
          <div className="text-center mb-8">
            <h3 className="font-serif text-2xl lg:text-3xl text-foreground mb-4">
              Ready to Take the First Step?
            </h3>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Fill out the form below or call us directly to schedule your free
              consultation.
            </p>
          </div>

          {submitted ? (
            <div className="text-center py-8">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <Mail className="w-8 h-8 text-primary" />
              </div>
              <h4 className="font-serif text-xl text-foreground mb-2">
                Message Sent!
              </h4>
              <p className="text-muted-foreground mb-6">
                Thank you for reaching out. We'll get back to you soon.
              </p>
              <Button variant="outline" onClick={() => setSubmitted(false)}>
                Send Another Message
              </Button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="contact-firstName">First Name *</Label>
                  <Input
                    id="contact-firstName"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    placeholder="First name"
                    maxLength={50}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="contact-lastName">Last Name *</Label>
                  <Input
                    id="contact-lastName"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    placeholder="Last name"
                    maxLength={50}
                    required
                  />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="contact-email">Email *</Label>
                  <Input
                    id="contact-email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="your@email.com"
                    maxLength={255}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="contact-phone">Phone (optional)</Label>
                  <Input
                    id="contact-phone"
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="(555) 123-4567"
                    maxLength={20}
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="contact-message">Message *</Label>
                <Textarea
                  id="contact-message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="How can we help you?"
                  maxLength={2000}
                  rows={4}
                  required
                />
              </div>

              {/* Turnstile Widget */}
              <div ref={turnstileRef} className="flex justify-center" />

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button type="submit" size="lg" disabled={isSubmitting}>
                  {isSubmitting ? "Sending..." : "Send Message"}
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <a href="tel:352-671-7932" className="gap-2">
                    <Phone className="w-4 h-4" />
                    Call Now: 352-671-7932
                  </a>
                </Button>
              </div>
            </form>
          )}
        </Card>
      </div>
    </section>
  );
};
