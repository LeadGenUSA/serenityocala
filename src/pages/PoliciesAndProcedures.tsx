import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const PoliciesAndProcedures = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <section className="py-20 bg-secondary/30">
          <div className="container mx-auto px-4 lg:px-8 text-center">
            <h1 className="font-serif text-4xl md:text-5xl text-foreground mb-4">
              Policies &amp; Procedures
            </h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Important information about our practice guidelines and your rights.
            </p>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4 lg:px-8 max-w-3xl prose prose-lg">
            <h2 className="font-serif text-2xl text-foreground mb-4">Confidentiality</h2>
            <p className="text-muted-foreground mb-4">
              All information disclosed within sessions and the written records of those sessions are confidential and may not be revealed to anyone without your written permission, except where disclosure is required by law.
            </p>
            <p className="text-muted-foreground mb-2">Exceptions to confidentiality include:</p>
            <ul className="text-muted-foreground space-y-2 mb-8 list-disc pl-6">
              <li>Suspected child abuse or dependent adult or elder abuse, which the therapist is required by law to report.</li>
              <li>If a client threatens serious bodily harm to another person, the therapist is required to notify the police and inform the intended victim.</li>
              <li>If a client intends to harm himself or herself, the therapist will make every effort to ensure the client's safety.</li>
            </ul>

            <h2 className="font-serif text-2xl text-foreground mb-4">Minors</h2>
            <p className="text-muted-foreground mb-8">
              If you are under 18 years of age, please be aware that the law may provide your parents the right to examine your treatment records. It is the therapist's policy to request an agreement from parents that they consent to give up access to your records. If they agree, the therapist will provide them with only general information about your progress unless the therapist feels there is a safety risk to you or someone else.
            </p>

            <h2 className="font-serif text-2xl text-foreground mb-4">After Hours Emergencies</h2>
            <p className="text-muted-foreground mb-8">
              If you need to contact the therapist after business hours, you may leave a message on the answering machine. The therapist checks messages regularly and will return your call as soon as possible. If you are in crisis and cannot wait for a return call, please call 911, go to the nearest emergency room, or call the National Suicide Prevention Lifeline at 988.
            </p>

            <h2 className="font-serif text-2xl text-foreground mb-4">Vacations</h2>
            <p className="text-muted-foreground mb-8">
              The therapist will notify you in advance of any planned absences and will provide you with the name of a colleague to contact in case of emergency during such absences.
            </p>

            <h2 className="font-serif text-2xl text-foreground mb-4">Terminating Treatment</h2>
            <p className="text-muted-foreground">
              The length of treatment and the timing of the eventual termination of treatment depend on the specifics of your treatment plan and the progress you achieve. It is a good idea to plan for the end of therapy, as it is a significant transition. The therapist will discuss a plan for termination with you as you approach the completion of your treatment goals.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default PoliciesAndProcedures;
