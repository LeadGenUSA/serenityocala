import { useState, useEffect, useRef, useCallback } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";

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

const checklistItems = [
  "I want more peace in my life",
  "I want better relationships",
  "I want greater career success",
  "I want greater performance abilities",
  "I want my work to include wellness",
  "I want to motivate my family, employees or management team",
];

const SelfAssessment = () => {
  const [checked, setChecked] = useState<Record<number, boolean>>({});
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [turnstileToken, setTurnstileToken] = useState<string | null>(null);
  const turnstileRef = useRef<HTMLDivElement>(null);
  const widgetIdRef = useRef<string | null>(null);

  const renderWidget = useCallback(() => {
    if (window.turnstile && turnstileRef.current && !widgetIdRef.current) {
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
    if (!document.querySelector('script[src*="turnstile"]')) {
      const script = document.createElement("script");
      script.src = "https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit";
      script.async = true;
      script.onload = () => renderWidget();
      document.head.appendChild(script);
    } else {
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
    if (!name.trim() || !email.trim()) {
      toast.error("Please fill in your name and email.");
      return;
    }

    if (!turnstileToken) {
      toast.error("Please complete the CAPTCHA verification.");
      return;
    }

    const checkedItems = checklistItems.filter((_, i) => checked[i]);

    setIsSubmitting(true);
    try {
      const res = await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: name.trim(),
          email: email.trim(),
          checkedItems,
          message: message.trim(),
          turnstileToken,
        }),
      });

      if (!res.ok) {
        throw new Error("Failed to send");
      }

      toast.success("Thank you! We'll be in touch soon.");
      setChecked({});
      setName("");
      setEmail("");
      setMessage("");
      setTurnstileToken(null);
    } catch {
      toast.error("Something went wrong. Please try calling us at 352-671-7932.");
    } finally {
      setIsSubmitting(false);
      if (window.turnstile && widgetIdRef.current) {
        window.turnstile.reset(widgetIdRef.current);
      }
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-32 pb-24">
        <div className="container mx-auto px-4 lg:px-8 max-w-3xl">
          <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary text-sm font-medium rounded-full mb-4">
            Self-Assessment
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl text-foreground mb-4">
            How Can We <span className="text-gradient">Help You</span>?
          </h1>
          <p className="text-muted-foreground leading-relaxed mb-12 max-w-2xl">
            Check all that apply to you, then fill out the form below and we'll
            reach out to discuss how we can support your goals.
          </p>

          <form onSubmit={handleSubmit} className="space-y-10">
            {/* Checklist */}
            <div className="space-y-4">
              {checklistItems.map((item, i) => (
                <label
                  key={i}
                  className="flex items-center gap-3 p-4 bg-card rounded-xl border border-border hover:border-primary/30 transition-colors cursor-pointer"
                >
                  <Checkbox
                    checked={!!checked[i]}
                    onCheckedChange={(v) =>
                      setChecked((prev) => ({ ...prev, [i]: !!v }))
                    }
                  />
                  <span className="text-foreground text-sm">{item}</span>
                </label>
              ))}
            </div>

            {/* Contact Fields */}
            <div className="space-y-5">
              <div>
                <Label htmlFor="name">Name</Label>
                <Input
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Your name"
                  className="mt-1.5"
                  maxLength={100}
                />
              </div>
              <div>
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@example.com"
                  className="mt-1.5"
                  maxLength={255}
                />
              </div>
              <div>
                <Label htmlFor="message">Message (optional)</Label>
                <Textarea
                  id="message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Tell us more about your goals..."
                  className="mt-1.5"
                  maxLength={1000}
                />
              </div>
            </div>

            {/* Turnstile Widget */}
            <div ref={turnstileRef} />

            <Button type="submit" size="lg" disabled={isSubmitting}>
              {isSubmitting ? "Sending..." : "Submit Assessment"}
            </Button>
          </form>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default SelfAssessment;
