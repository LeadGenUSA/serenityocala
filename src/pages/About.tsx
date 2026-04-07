import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { GraduationCap, Award, BookOpen } from "lucide-react";

const credentials = [
  {
    icon: GraduationCap,
    degree: "Doctor of Philosophy, Applied Psychology",
    school: "Akamai University",
    year: "2016",
  },
  {
    icon: Award,
    degree: "Master of Science in Rehabilitation Counseling",
    school: "UNC-Chapel Hill",
    year: "1994",
  },
  {
    icon: BookOpen,
    degree: "Bachelor of Arts in Psychology",
    school: "UNC-Wilmington",
    detail: "Graduated with Honors",
  },
];

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-32 pb-24">
        <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
          <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary text-sm font-medium rounded-full mb-4">
            About
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl text-foreground mb-12">
            About <span className="text-gradient">Dr. Beth Robinson</span>, PhD, LMHC
          </h1>

          <div className="grid md:grid-cols-[280px_1fr] gap-10 items-start mb-16">
            <div className="relative">
              <img
                src="/lovable-uploads/957a1878-d3ae-417b-b87b-471a2c035c74.png"
                alt="Dr. Beth Robinson"
                className="w-full max-w-[280px] mx-auto rounded-2xl shadow-elevated object-cover aspect-[3/4]"
              />
              <div className="absolute -bottom-4 -right-4 w-full h-full bg-primary/10 rounded-2xl -z-10" />
            </div>

            <div className="space-y-5 text-muted-foreground leading-relaxed">
              <p>
                I believe that changing what you think, changes the way you feel
                and ultimately, what you do. What you do determines your level of
                functioning throughout your life, affecting your potential as well
                as your quality of life.
              </p>
              <p>
                It is never too late to strive for a better quality of life,
                peacefulness or greater achievement.
              </p>
              <p>
                Life is more stressful than ever. It's time to clear away negative
                self-beliefs and old traumas that get in the way of you achieving
                your full potential.
              </p>
              <p>
                With over 20 years of professional experience, Dr. Beth Robinson
                provides compassionate counseling for adults, children, and
                couples, specializing in EFT, EMDR, CBT, and Animal Assisted
                Psychotherapy.
              </p>
            </div>
          </div>

          {/* Credentials */}
          <h2 className="font-serif text-3xl text-foreground mb-8">Credentials</h2>
          <div className="grid sm:grid-cols-3 gap-6">
            {credentials.map((cred, i) => (
              <div
                key={i}
                className="p-6 bg-card rounded-xl shadow-soft border border-border hover:shadow-card transition-shadow"
              >
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <cred.icon className="w-5 h-5 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground text-sm mb-1">
                  {cred.degree}
                </h3>
                <p className="text-muted-foreground text-sm">{cred.school}</p>
                {cred.year && (
                  <p className="text-muted-foreground/70 text-xs mt-1">{cred.year}</p>
                )}
                {cred.detail && (
                  <p className="text-primary text-xs font-medium mt-1">{cred.detail}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default About;
