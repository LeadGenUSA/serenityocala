import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Brain, Sparkles, Waves, TreePine, Users, Heart, MessageSquare, Building2 } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Services = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-32 pb-24">
        <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
          {/* Header */}
          <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary text-sm font-medium rounded-full mb-4">
            Our Services
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl text-foreground mb-6">
            Healing Through <span className="text-gradient">Evidence-Based</span> Care
          </h1>
          <p className="text-muted-foreground leading-relaxed mb-16 max-w-3xl">
            Every person's journey is unique. We offer a range of therapeutic approaches 
            to help you find the path that resonates with you.
          </p>

          {/* What is Therapy */}
          <section className="mb-16">
            <h2 className="font-serif text-2xl sm:text-3xl text-foreground mb-4">What is Therapy</h2>
            <div className="prose prose-muted max-w-none">
              <p className="text-muted-foreground leading-relaxed">
                Therapy is the process of solving emotional problems by talking with a person 
                professionally trained to help people achieve a more fulfilling individual life, 
                marital relationship, or family relationship. The process of change will, in many 
                ways, be unique to your particular situation. Who you are as a person will help to 
                determine how you go about changing your life. The process of change begins by first 
                clearly defining the problem, and then discussing your thoughts and feelings, 
                understanding the origin of the difficulty, and developing new skills and healthy 
                attitudes about yourself and others.
              </p>
              <p className="text-muted-foreground leading-relaxed mt-4">
                As the patient, you have the right to ask your therapist questions about his/her 
                qualifications, background, and orientation. The most important factor in the success 
                of therapy is good communication between therapist and patient.
              </p>
            </div>
          </section>

          {/* Consultation */}
          <section className="mb-16">
            <Card className="p-8 bg-card-gradient border-border/50">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Building2 className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h2 className="font-serif text-2xl text-foreground mb-2">Consultation</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    Serenity Institute can provide individual/group, business, or corporate consultation 
                    for training or motivational speaking. We would be happy to provide a free 30-minute 
                    initial workshop in stress management to your company upon request from the human 
                    resource director.
                  </p>
                </div>
              </div>
            </Card>
          </section>

          {/* Counseling / Therapy */}
          <section className="mb-16">
            <h2 className="font-serif text-2xl sm:text-3xl text-foreground mb-4">Counseling / Therapy</h2>
            <div className="space-y-3 text-muted-foreground leading-relaxed mb-6">
              <p>If you have thoughts that get in the way of living each moment to the fullest…</p>
              <p>If your emotions control you… If you have sleep problems… If you have chronic unhealthy relationships…</p>
              <p>If you have flashbacks, nightmares, insomnia, or rages due to a traumatic experience or experiences…</p>
              <p>If you have a troublesome or unhealthy habit…</p>
              <p>If you cry frequently or experience prolonged sadness…</p>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              One of the methods used to treat the aforementioned problems is{" "}
              <a href="/resources/emdr-therapy" className="text-primary hover:underline">E.M.D.R.</a>{" "}
              — a therapeutic tool that can assist you in rapidly processing and healing.
            </p>
          </section>

          {/* Services Grid */}
          <section className="mb-16">
            <h2 className="font-serif text-2xl sm:text-3xl text-foreground mb-8">Our Therapeutic Approaches</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { icon: Sparkles, title: "EFT Therapy", description: "Emotional Freedom Techniques to release emotional pain and trauma through tapping on meridian points.", href: "/resources/eft" },
                { icon: Brain, title: "EMDR Therapy", description: "Eye Movement Desensitization and Reprocessing for healing trauma and PTSD symptoms.", href: "/resources/emdr-therapy" },
                { icon: Waves, title: "CBT", description: "Cognitive Behavioral Therapy to identify and change negative thought patterns affecting your life.", href: "/resources/cbt" },
                { icon: TreePine, title: "Animal Assisted Therapy", description: "Experience healing through the calming presence and unconditional support of therapy animals.", href: null },
                { icon: Users, title: "Couples Counseling", description: "Strengthen your relationship through improved communication and deeper understanding.", href: null },
                { icon: Heart, title: "Individual Therapy", description: "Personalized one-on-one sessions tailored to your unique needs and healing journey.", href: null },
              ].map((service, index) => (
                <Card key={index} className="group p-6 bg-card-gradient border-border/50 hover:shadow-elevated transition-all duration-300 hover:-translate-y-1">
                  <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <service.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-serif text-lg text-foreground mb-2">{service.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-3">{service.description}</p>
                  {service.href && (
                    <a href={service.href} className="text-primary text-sm font-medium hover:underline">
                      Learn more →
                    </a>
                  )}
                </Card>
              ))}
            </div>
          </section>

          {/* CTA */}
          <section className="text-center py-12 px-6 bg-card-gradient rounded-2xl border border-border/50">
            <MessageSquare className="w-10 h-10 text-primary mx-auto mb-4" />
            <h2 className="font-serif text-2xl text-foreground mb-3">Ready to Begin?</h2>
            <p className="text-muted-foreground mb-6 max-w-lg mx-auto">
              Take the first step toward a more fulfilling life. Reach out for a consultation today.
            </p>
            <Button size="lg" asChild>
              <a href="/#contact">Book a Consultation</a>
            </Button>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Services;
