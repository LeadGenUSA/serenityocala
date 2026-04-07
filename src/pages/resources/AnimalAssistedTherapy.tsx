import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Heart, PawPrint, Shield, Sparkles } from "lucide-react";
import { Card } from "@/components/ui/card";
import bethAndJuli from "@/assets/beth-and-juli.jpg";
import juliTherapyRoom from "@/assets/juli-therapy-room.jpg";

const AnimalAssistedTherapy = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-32 pb-24">
        <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
          {/* Header */}
          <a href="/services" className="text-primary text-sm hover:underline mb-4 inline-block">
            ← Back to Services
          </a>
          <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary text-sm font-medium rounded-full mb-4 ml-4">
            Therapy Approach
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl text-foreground mb-6">
            Animal Assisted <span className="text-gradient">Therapy (AAT)</span>
          </h1>

          {/* Definition */}
          <section className="mb-12">
            <div className="flex flex-col md:flex-row gap-8">
              <Card className="p-8 bg-card-gradient border-border/50 flex-1">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <PawPrint className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h2 className="font-serif text-xl text-foreground mb-3">What is AAT?</h2>
                    <blockquote className="border-l-4 border-primary/30 pl-4 italic text-muted-foreground leading-relaxed">
                      "A goal-directed intervention in which an animal is incorporated as an integral 
                      part of the clinical health-care treatment process. AAT is delivered or directed 
                      by a professional health or human service provider who demonstrates skill and 
                      expertise regarding the clinical applications of human-animal interactions."
                    </blockquote>
                    <p className="text-sm text-muted-foreground mt-3">
                      — American Humane Association
                    </p>
                  </div>
                </div>
              </Card>
              <div className="flex-shrink-0">
                <img
                  src={juliTherapyRoom}
                  alt="Juli in Therapy Room"
                  className="w-40 h-40 rounded-2xl object-cover shadow-elevated"
                />
                <p className="text-sm text-muted-foreground text-center mt-2">Juli in Therapy Room</p>
              </div>
            </div>
          </section>

          {/* Meet Juli */}
          <section className="mb-12">
            <h2 className="font-serif text-2xl sm:text-3xl text-foreground mb-4">Meet Juli</h2>
            <div className="prose prose-muted max-w-none space-y-4">
              <p className="text-muted-foreground leading-relaxed">
                Juli has been working with Dr. Robinson in her office since 8 weeks old. She is a 
                larger toy poodle and completely hypoallergenic. Juli went through extensive obedience 
                training and passed her Canine Good Citizen test.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Juli is friendly and very loving. She is remarkable at detecting emotional hurts and 
                will offer lots of consolation for them! Juli is with Dr. Robinson almost every day 
                and loves coming to work.
              </p>
            </div>
          </section>

          {/* Benefits */}
          <section className="mb-12">
            <h2 className="font-serif text-2xl sm:text-3xl text-foreground mb-8">Benefits of Animal Assisted Therapy</h2>
            <div className="grid sm:grid-cols-2 gap-6">
              {[
                { icon: Heart, title: "Emotional Support", description: "Animals provide unconditional love and comfort, helping reduce anxiety and emotional distress during therapy sessions." },
                { icon: Shield, title: "Safe Environment", description: "The presence of a therapy animal creates a calming, non-judgmental space that encourages openness and trust." },
                { icon: Sparkles, title: "Stress Reduction", description: "Interacting with animals has been shown to lower cortisol levels and blood pressure, promoting relaxation." },
                { icon: PawPrint, title: "Enhanced Connection", description: "Therapy animals help bridge communication gaps and foster a stronger therapeutic relationship." },
              ].map((benefit, index) => (
                <Card key={index} className="p-6 bg-card-gradient border-border/50 hover:shadow-elevated transition-all duration-300 hover:-translate-y-1">
                  <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center mb-4">
                    <benefit.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-serif text-lg text-foreground mb-2">{benefit.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{benefit.description}</p>
                </Card>
              ))}
            </div>
          </section>

          {/* The Human-Animal Bond */}
          <section className="mb-12">
            <Card className="p-8 bg-card-gradient border-border/50 text-center">
              <h2 className="font-serif text-2xl text-foreground mb-3">The Human-Animal Bond</h2>
              <p className="text-muted-foreground leading-relaxed max-w-2xl mx-auto">
                Research continues to demonstrate the profound impact that the human-animal bond 
                has on mental and physical health. Animal assisted therapy harnesses this bond to 
                support healing, growth, and emotional well-being in a clinical setting.
              </p>
            </Card>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default AnimalAssistedTherapy;
