import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ExternalLink, BookOpen, Brain, Heart, PawPrint, FileText, Moon } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Link } from "react-router-dom";

const resources = [
  {
    title: "What is EMDR Therapy?",
    description: "Eye Movement Desensitization and Reprocessing",
    author: "By Steve B. Reed, L.P.C., L.M.F.T",
    href: "/resources/emdr-therapy",
    internal: true,
    icon: Brain,
  },
  {
    title: "What is Cognitive Behavioral Therapy?",
    description:
      "CBT is a form of psychotherapy that emphasizes the important role of thinking in how we feel and what we do.",
    href: "/resources/cbt",
    internal: true,
    icon: BookOpen,
  },
  {
    title: "What is EFT?",
    description: "Emotional Freedom Techniques",
    author: "By Steve B. Reed, L.P.C., L.M.F.T",
    href: "/resources/eft",
    internal: true,
    icon: Heart,
  },
  {
    title: "Differential Gene Expression after EFT Treatment",
    description: "Effect of Emotional Freedom Techniques on Genes",
    author: "By Dr. Beth Robinson, L.M.H.C",
    href: "/resources/differential-gene-expression",
    internal: true,
    icon: FileText,
  },
  {
    title: "Depression and Sleep Disorders",
    description: "Understanding the connection between depression and sleep quality.",
    href: "https://www.tuck.com/depression-and-sleep/",
    icon: Moon,
  },
  {
    title: "Guide to Anxiety and Sleep",
    description: "How anxiety affects sleep and strategies for improvement.",
    href: "https://www.tuck.com/anxiety-guide-sleep/",
    icon: Moon,
  },
  {
    title: "Animal Assisted Therapy",
    description: "Learn how animal assisted therapy can support mental health treatment.",
    href: "https://www.drugrehab.com/treatment/types-of-therapy/animal-assisted/",
    icon: PawPrint,
  },
  {
    title: "Assisted Living for Seniors with Clinical Depression",
    description: "Resources and guidance for seniors managing clinical depression.",
    href: "https://www.caring.com/senior-living/assisted-living/assisted-living-for-seniors-with-depression/",
    icon: Heart,
  },
];

const Resources = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="pt-32 pb-24">
        <div className="container mx-auto px-4 lg:px-8">
          {/* Header */}
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary text-sm font-medium rounded-full mb-4 animate-fade-in-up opacity-0">
              Learn More
            </span>
            <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-foreground mb-6 animate-fade-in-up opacity-0 delay-100">
              Therapy <span className="text-gradient">Resources</span>
            </h1>
            <p className="text-muted-foreground leading-relaxed animate-fade-in-up opacity-0 delay-200">
              Explore these curated resources to learn more about the therapeutic
              approaches we use and related topics in mental health and wellness.
            </p>
          </div>

          {/* Resource Cards */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {resources.map((resource, index) => (
              <a
                key={index}
                href={resource.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group"
              >
                <Card
                  className="p-6 h-full bg-card-gradient border-border/50 hover:border-primary/30 hover:shadow-md transition-all duration-300 animate-fade-in-up opacity-0"
                  style={{ animationDelay: `${(index + 1) * 80}ms` }}
                >
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                      <resource.icon className="w-5 h-5 text-primary" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-serif text-base text-foreground group-hover:text-primary transition-colors mb-1 flex items-center gap-1.5">
                        {resource.title}
                        <ExternalLink className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0" />
                      </h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {resource.description}
                      </p>
                      {resource.author && (
                        <p className="text-xs text-muted-foreground/70 mt-2 italic">
                          {resource.author}
                        </p>
                      )}
                    </div>
                  </div>
                </Card>
              </a>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Resources;
