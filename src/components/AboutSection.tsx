import { Heart, Users, Brain, Sparkles } from "lucide-react";
import therapistImage from "@/assets/therapist-portrait.jpg";

const achievements = [
  { icon: Heart, text: "Satisfying relationships" },
  { icon: Brain, text: "Improved feelings management" },
  { icon: Sparkles, text: "Inner peace and tranquility" },
  { icon: Users, text: "Career success & productivity" },
];

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 lg:py-32 bg-section-gradient">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image Column */}
          <div className="relative animate-fade-in-up opacity-0">
            <div className="relative z-10">
              <img
                src={therapistImage}
                alt="Dr. Beth Robinson"
                className="w-full max-w-md mx-auto lg:mx-0 rounded-3xl shadow-elevated object-cover aspect-[3/4]"
              />
            </div>
            {/* Decorative elements */}
            <div className="absolute -bottom-6 -right-6 w-full h-full bg-primary/10 rounded-3xl -z-0" />
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-soft-teal/20 rounded-full blur-xl" />
          </div>

          {/* Content Column */}
          <div className="lg:pl-8">
            <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary text-sm font-medium rounded-full mb-4 animate-fade-in-up opacity-0">
              About Dr. Beth Robinson
            </span>

            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-foreground mb-6 animate-fade-in-up opacity-0 delay-100">
              Compassionate Care for Your{" "}
              <span className="text-gradient">Healing Journey</span>
            </h2>

            <div className="space-y-4 text-muted-foreground leading-relaxed animate-fade-in-up opacity-0 delay-200">
              <p>
                Life is more stressful than ever. It's time to clear away negative 
                self-beliefs and old traumas that get in the way of you achieving 
                your full potential.
              </p>
              <p>
                I believe that changing what you think influences the way you feel 
                and ultimately, what you do. With practice, you can learn to modify 
                your thought-scape and have a more positive dialogue with yourself.
              </p>
              <p className="font-medium text-foreground">
                It is never too late to strive for a better quality of life, 
                peacefulness, or greater achievement.
              </p>
            </div>

            {/* Achievements */}
            <div className="mt-10 grid sm:grid-cols-2 gap-4 animate-fade-in-up opacity-0 delay-300">
              {achievements.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 p-4 bg-card rounded-xl shadow-soft hover:shadow-card transition-shadow"
                >
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <item.icon className="w-5 h-5 text-primary" />
                  </div>
                  <span className="text-sm font-medium text-foreground">{item.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
