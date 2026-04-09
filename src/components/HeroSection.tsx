import { ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-nature.jpg";

export const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Peaceful nature scene"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/70 to-background/30" />
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-1/4 right-1/4 w-72 h-72 bg-primary/5 rounded-full blur-3xl animate-pulse-soft" />
      <div className="absolute bottom-1/4 left-1/3 w-96 h-96 bg-soft-teal/5 rounded-full blur-3xl animate-pulse-soft delay-200" />

      {/* Content */}
      <div className="container mx-auto px-4 lg:px-8 relative z-10 pt-24">
        <div className="max-w-2xl">
          <div className="animate-fade-in-up opacity-0">
            <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary text-sm font-medium rounded-full mb-6">
              Now in Dunnellon, FL
            </span>
          </div>

          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl xl:text-7xl text-foreground leading-tight mb-6 animate-fade-in-up opacity-0 delay-100">
            Find Your Path to{" "}
            <span className="text-gradient">Inner Peace</span>
          </h1>

          <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed mb-8 animate-fade-in-up opacity-0 delay-200">
            Dr. Beth Robinson, PhD, LHMC offers compassionate counseling for adults, 
            adolescents, and couples. Over 20 years helping people transform their lives 
            through EFT, EMDR, CBT, and Animal Assisted Psychotherapy.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up opacity-0 delay-300">
            <Button size="lg" asChild>
              <a href="#contact">Schedule a Consultation</a>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <a href="#services">Explore Services</a>
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="mt-12 pt-8 border-t border-border/50 animate-fade-in-up opacity-0 delay-400">
            <div className="flex flex-wrap gap-8">
              <div>
                <div className="text-3xl font-serif text-primary">20+</div>
                <div className="text-sm text-muted-foreground">Years Experience</div>
              </div>
              <div>
                <div className="text-3xl font-serif text-primary">PhD</div>
                <div className="text-sm text-muted-foreground">Licensed Counselor</div>
              </div>
              <div>
                <div className="text-3xl font-serif text-primary">All Ages</div>
                <div className="text-sm text-muted-foreground">Adults to Children</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-float">
        <a
          href="#about"
          className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
        >
          <span className="text-xs tracking-wider uppercase">Scroll</span>
          <ArrowDown className="w-4 h-4" />
        </a>
      </div>
    </section>
  );
};
