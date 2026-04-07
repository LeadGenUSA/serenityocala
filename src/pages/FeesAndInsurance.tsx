import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Link } from "react-router-dom";

const FeesAndInsurance = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <section className="py-20 bg-secondary/30">
          <div className="container mx-auto px-4 lg:px-8 text-center">
            <h1 className="font-serif text-4xl md:text-5xl text-foreground mb-4">
              Fees &amp; Insurance
            </h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Information about session fees and insurance coverage.
            </p>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4 lg:px-8 max-w-3xl prose prose-lg">
            <p className="text-muted-foreground mb-6">
              Fees for service are discussed during the initial consultation so that both the client and therapist can determine whether treatment is feasible. The therapist is committed to making therapy accessible and will work with clients to find a solution that fits their financial situation.
            </p>
            <p className="text-muted-foreground mb-6">
              For questions about insurance coverage and accepted plans, please contact our office directly. We are happy to discuss your options and help determine your benefits.
            </p>
            <p className="text-muted-foreground">
              Please{" "}
              <Link to="/#contact" className="text-primary hover:underline">
                contact us
              </Link>{" "}
              or call <a href="tel:352-671-7932" className="text-primary hover:underline">352-671-7932</a> for more information.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default FeesAndInsurance;
