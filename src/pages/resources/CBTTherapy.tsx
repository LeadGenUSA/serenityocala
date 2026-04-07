import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const CBTTherapy = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-32 pb-24">
        <div className="container mx-auto px-4 lg:px-8 max-w-3xl">
          <Link
            to="/resources"
            className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Resources
          </Link>

          <article className="prose prose-lg max-w-none dark:prose-invert">
            <h1 className="font-serif text-3xl sm:text-4xl text-foreground mb-8">
              What is <span className="text-gradient">Cognitive Behavioral Therapy</span>?
            </h1>

            <p className="text-muted-foreground leading-relaxed font-medium text-lg">
              CBT is a form of psychotherapy that emphasizes the important role of thinking in how we feel and what we do.
            </p>

            <p className="text-muted-foreground leading-relaxed">
              Cognitive-behavioral therapy does not exist as a distinct therapeutic technique. The term "cognitive-behavioral therapy (CBT)" is a very general term for a classification of therapies with similarities. There are several approaches to cognitive-behavioral therapy, including Rational Emotive Behavior Therapy, Rational Behavior Therapy, Rational Living Therapy, Cognitive Therapy, and Dialectic Behavior Therapy.
            </p>

            <p className="text-muted-foreground leading-relaxed">
              However, most cognitive-behavioral therapies have the following characteristics:
            </p>

            <h2 className="font-serif text-xl text-foreground mt-8 mb-3">
              1. CBT is based on the Cognitive Model of Emotional Response
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Cognitive-behavioral therapy is based on the idea that our thoughts cause our feelings and behaviors, not external things, like people, situations, and events. The benefit of this fact is that we can change the way we think to feel / act better even if the situation does not change.
            </p>

            <h2 className="font-serif text-xl text-foreground mt-8 mb-3">
              2. CBT is Briefer and Time-Limited
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Cognitive-behavioral therapy is considered among the most rapid in terms of results obtained. The average number of sessions clients receive (across all types of problems and approaches to CBT) is only 16. Other forms of therapy, like psychoanalysis, can take years. What enables CBT to be briefer is its highly instructive nature and the fact that it makes use of homework assignments. CBT is time-limited in that we help clients understand at the very beginning of the therapy process that there will be a point when the formal therapy will end.
            </p>

            <h2 className="font-serif text-xl text-foreground mt-8 mb-3">
              3. A Sound Therapeutic Relationship is Necessary but Not the Focus
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Some forms of therapy assume that the main reason people get better in therapy is because of the positive relationship between the therapist and client. Cognitive-behavioral therapists believe it is important to have a good, trusting relationship, but that is not enough. CBT therapists believe that the clients change because they learn how to think differently and they act on that learning. Therefore, CBT therapists focus on teaching rational self-counseling skills.
            </p>

            <h2 className="font-serif text-xl text-foreground mt-8 mb-3">
              4. CBT is a Collaborative Effort
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Cognitive-behavioral therapists seek to learn what their clients want out of life (their goals) and then help their clients achieve those goals. The therapist's role is to listen, teach, and encourage, while the client's role is to express concerns, learn, and implement that learning.
            </p>

            <h2 className="font-serif text-xl text-foreground mt-8 mb-3">
              5. CBT is Based on Stoic Philosophy
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Not all approaches to CBT emphasize stoicism. Rational Emotive Behavior Therapy, Rational Behavior Therapy, and Rational Living Therapy emphasize stoicism. Cognitive-behavioral therapy does not tell people how they should feel. However, most people seeking therapy do not want to feel the way they have been feeling. The approaches that emphasize stoicism teach the benefits of feeling, at worst, calm when confronted with undesirable situations.
            </p>

            <h2 className="font-serif text-xl text-foreground mt-8 mb-3">
              6. CBT Uses the Socratic Method
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Cognitive-behavioral therapists want to gain a very good understanding of their clients' concerns. That's why they often ask questions. They also encourage their clients to ask questions of themselves, like, "How do I really know that those people are laughing at me?" "Could they be laughing about something else?"
            </p>

            <h2 className="font-serif text-xl text-foreground mt-8 mb-3">
              7. CBT is Structured and Directive
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Cognitive-behavioral therapists have a specific agenda for each session. Specific techniques / concepts are taught during each session. CBT focuses on the client's goals. We do not tell our clients what their goals "should" be, or what they "should" tolerate. We are directive in the sense that we show our clients how to think and behave in ways to obtain what they want.
            </p>

            <h2 className="font-serif text-xl text-foreground mt-8 mb-3">
              8. CBT is Based on an Educational Model
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              CBT is based on the scientifically supported assumption that most emotional and behavioral reactions are learned. Therefore, the goal of therapy is to help clients unlearn their unwanted reactions and to learn a new way of reacting. The educational emphasis of CBT has an additional benefit — it leads to long term results. When people understand how and why they are doing well, they know what to do to continue doing well.
            </p>

            <h2 className="font-serif text-xl text-foreground mt-8 mb-3">
              9. CBT Theory and Techniques Rely on the Inductive Method
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              A central aspect of rational thinking is that it is based on fact. Often, we upset ourselves about things when, in fact, the situation isn't like we think it is. The inductive method encourages us to look at our thoughts as being hypotheses or guesses that can be questioned and tested. If we find that our hypotheses are incorrect, then we can change our thinking to be in line with how the situation really is.
            </p>

            <h2 className="font-serif text-xl text-foreground mt-8 mb-3">
              10. Homework is a Central Feature of CBT
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              If when you attempted to learn your multiplication tables you spent only one hour per week studying them, you might still be wondering what 5 × 5 equals. The same is the case with psychotherapy. Goal achievement could take a very long time if all a person were only to think about the techniques and topics taught for one hour per week. That's why CBT therapists assign reading assignments and encourage their clients to practice the techniques learned.
            </p>
          </article>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default CBTTherapy;
