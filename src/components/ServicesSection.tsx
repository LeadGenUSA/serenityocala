import { 
  Sparkles, 
  Heart, 
  Users, 
  Brain, 
  TreePine,
  Waves
} from "lucide-react";
import { Card } from "@/components/ui/card";

const services = [
  {
    icon: Sparkles,
    title: "EFT Therapy",
    description: "Emotional Freedom Techniques to release emotional pain and trauma through tapping on meridian points.",
  },
  {
    icon: Brain,
    title: "EMDR Therapy",
    description: "Eye Movement Desensitization and Reprocessing for healing trauma and PTSD symptoms.",
  },
  {
    icon: Waves,
    title: "CBT",
    description: "Cognitive Behavioral Therapy to identify and change negative thought patterns affecting your life.",
  },
  {
    icon: TreePine,
    title: "Animal Assisted Therapy",
    description: "Experience healing through the calming presence and unconditional support of therapy animals.",
  },
  {
    icon: Users,
    title: "Couples Counseling",
    description: "Strengthen your relationship through improved communication and deeper understanding.",
  },
  {
    icon: Heart,
    title: "Individual Therapy",
    description: "Personalized one-on-one sessions tailored to your unique needs and healing journey.",
  },
];

export const ServicesSection = () => {
  return (
    <section id="services" className="py-24 lg:py-32 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary text-sm font-medium rounded-full mb-4 animate-fade-in-up opacity-0">
            Our Services
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-foreground mb-6 animate-fade-in-up opacity-0 delay-100">
            Therapeutic Approaches for{" "}
            <span className="text-gradient">Lasting Change</span>
          </h2>
          <p className="text-muted-foreground leading-relaxed animate-fade-in-up opacity-0 delay-200">
            Every person's journey is unique. We offer a range of evidence-based 
            therapies to help you find the approach that resonates with you.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <Card
              key={index}
              className="group p-6 lg:p-8 bg-card-gradient border-border/50 hover:shadow-elevated transition-all duration-300 hover:-translate-y-1 animate-fade-in-up opacity-0"
              style={{ animationDelay: `${(index + 1) * 100}ms` }}
            >
              <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                <service.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-serif text-xl text-foreground mb-3">
                {service.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {service.description}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
