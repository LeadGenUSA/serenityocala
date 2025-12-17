import officeImage from "@/assets/therapy-office.jpg";

export const OfficeSection = () => {
  return (
    <section className="py-24 lg:py-32 bg-section-gradient overflow-hidden">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Content */}
          <div className="order-2 lg:order-1">
            <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary text-sm font-medium rounded-full mb-4 animate-fade-in-up opacity-0">
              A Safe Space
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-foreground mb-6 animate-fade-in-up opacity-0 delay-100">
              Your Sanctuary for{" "}
              <span className="text-gradient">Healing & Growth</span>
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6 animate-fade-in-up opacity-0 delay-200">
              Our calming, comfortable office in Dunnellon provides the perfect 
              environment for your therapeutic journey. Surrounded by natural 
              light and thoughtful design, you'll feel at ease from the moment 
              you arrive.
            </p>
            <div className="space-y-4 animate-fade-in-up opacity-0 delay-300">
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-primary mt-2" />
                <p className="text-foreground">
                  <span className="font-medium">Private & Confidential</span> — 
                  Your privacy is our priority
                </p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-primary mt-2" />
                <p className="text-foreground">
                  <span className="font-medium">Comfortable Environment</span> — 
                  Designed for relaxation and openness
                </p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-primary mt-2" />
                <p className="text-foreground">
                  <span className="font-medium">Accessible Location</span> — 
                  Easy to find in Dunnellon
                </p>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="order-1 lg:order-2 relative animate-fade-in-up opacity-0">
            <div className="relative z-10">
              <img
                src={officeImage}
                alt="Therapy office interior"
                className="w-full rounded-3xl shadow-elevated object-cover aspect-[4/3]"
              />
            </div>
            {/* Decorative elements */}
            <div className="absolute -bottom-6 -left-6 w-full h-full bg-soft-teal/10 rounded-3xl -z-0" />
          </div>
        </div>
      </div>
    </section>
  );
};
