import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const Cancellations = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <section className="py-20 bg-secondary/30">
          <div className="container mx-auto px-4 lg:px-8 text-center">
            <h1 className="font-serif text-4xl md:text-5xl text-foreground mb-4">
              Cancellations
            </h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Our cancellation and missed appointment policy.
            </p>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4 lg:px-8 max-w-3xl prose prose-lg">
            <h2 className="font-serif text-2xl text-foreground mb-4">Missed Appointments</h2>
            <p className="text-muted-foreground mb-6">
              If you are unable to attend a scheduled session, please make sure to cancel or reschedule at least <strong>24 hours in advance</strong>. Sessions missed without 24-hour notice will be charged the full session fee.
            </p>

            <h2 className="font-serif text-2xl text-foreground mb-4">How to Cancel</h2>
            <p className="text-muted-foreground mb-6">
              You may cancel by calling our office at{" "}
              <a href="tel:352-671-7932" className="text-primary hover:underline">352-671-7932</a>.
              If calling outside of business hours, please leave a message on the 24-hour answering service. Messages are checked regularly.
            </p>

            <h2 className="font-serif text-2xl text-foreground mb-4">Court Appearances</h2>
            <p className="text-muted-foreground">
              If you are involved in legal proceedings and are required to attend a court appearance that conflicts with your scheduled session, please notify the office as soon as possible so that we can reschedule your appointment accordingly.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Cancellations;
