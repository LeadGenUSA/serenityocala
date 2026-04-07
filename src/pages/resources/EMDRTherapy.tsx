import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const EMDRTherapy = () => {
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
            <p className="text-sm text-muted-foreground italic mb-6">
              By Steve B. Reed, L.P.C., L.M.F.T
            </p>

            <h1 className="font-serif text-3xl sm:text-4xl text-foreground mb-8">
              What is <span className="text-gradient">EMDR Therapy</span>?
            </h1>

            <p className="text-muted-foreground leading-relaxed">
              Eye Movement Desensitization and Reprocessing (EMDR Therapy) is a therapeutic technique developed by Francine Shapiro, Ph.D. in 1987. The method was originated by Dr. Shapiro when she noted that disturbing thoughts suddenly disappeared after engaging in a particular type of eye movement. As she deliberately retrieved the disturbing thoughts, they were no longer upsetting to her. This positive effect prompted her to retrieve other disturbing images, engage in the eye movements, and note the result.
            </p>

            <p className="text-muted-foreground leading-relaxed">
              Upon discovering that a variety of disturbing thoughts and images were no longer upsetting to her, Dr. Shapiro began a study to note the effects with others. Since 1987 this methodology has evolved into a multifaceted approach to treat a variety of different problems with a wide number of populations. EMDR is frequently used in the treatment of traumatic experiences and the disturbing feelings and thoughts that accompany trauma. Additional uses include resolution of grief, relief from chronic pain, performance enhancement, smoking cessation, depression and dealing with addictions.
            </p>

            <p className="text-muted-foreground leading-relaxed">
              The procedure of EMDR treatment involves the client focusing on a disturbing image while the trained therapist facilitates a type of eye movement by having the client follow the movement of the therapist's fingers across the field of vision.
            </p>

            <p className="text-muted-foreground leading-relaxed">
              Traumatic images are physiologically and neurologically arousing and this can interfere with the processing of the information in the brain. Consequently, the experience gets misplaced or frozen in our nervous system. The effect of trauma on the brain is like having a traffic police officer in your brain which gets very tired and sends the distressing signal to an unauthorized parking zone where it gets stored in the wrong area. EMDR retrieves the signal and parks it in the authorized zone.
            </p>

            <p className="text-muted-foreground leading-relaxed">
              Researchers do not know why EMDR Therapy works. The similarities of the eye movement patterns and Rapid Eye Movement (REM) sleep have contributed to theorizing a connection between the two. Information is processed when dreaming occurs. Dreaming occurs in the stage of sleep known as REM sleep. When the client accesses the disturbing image and thought that accompanies the image while moving their eyes back and forth, the information seems to be processing at an accelerated rate.
            </p>

            <p className="text-muted-foreground leading-relaxed">
              With EMDR, feelings of tension are usually significantly reduced, the image seems to change by fading or becoming more distant, and the power of the negative thoughts are often diminished.
            </p>

            <h2 className="font-serif text-2xl text-foreground mt-10 mb-4">
              EMDR Therapy Assumptions About Healing
            </h2>

            <ol className="space-y-2 text-muted-foreground">
              <li>EMDR therapy uncovers hidden aspects of problems.</li>
              <li>EMDR therapy gets you unstuck and allows a natural movement toward healing.</li>
              <li>EMDR therapy generates a new perspective of your problem.</li>
              <li>EMDR therapy allows you to go directly to your healing destination and eliminate incorrect pathways.</li>
              <li>EMDR therapy creates new pathways beyond the limitations of your previous route.</li>
              <li>EMDR therapy accesses the natural healing abilities of your deeper self.</li>
              <li>EMDR therapy enables your ability to let go.</li>
              <li>EMDR therapy installs positive behaviors and allows you to connect to useful resources within yourself.</li>
            </ol>

            <h2 className="font-serif text-2xl text-foreground mt-10 mb-4">
              Research Results
            </h2>

            <p className="text-muted-foreground leading-relaxed">
              The research on EMDR therapy has indicated that the effects remain stable over time. Research has reported the following positive therapeutic results:
            </p>

            <ol className="space-y-2 text-muted-foreground">
              <li>Combat veterans who were not able to be free of symptoms no longer experience flashbacks or nightmares.</li>
              <li>People with phobias revealed a rapid reduction of fear and symptoms.</li>
              <li>People with panic disorder reported recovering at a more rapid rate when compared to other treatment methods.</li>
              <li>Crime survivors and police officers were no longer disturbed by the after effects of violent assaults.</li>
              <li>People have been relieved of excessive grief due to the loss of a loved one.</li>
              <li>Children have been symptom free from trauma of assault or natural disaster.</li>
              <li>Sexual assault survivors were able to lead normal lives and have intimate relationships.</li>
              <li>Accident and burn survivors who were debilitated are now able to resume productive lives.</li>
              <li>Those with sexual dysfunction are now able to maintain healthy sexual relationships.</li>
              <li>Clients with chemical dependency have decreased tendency to relapse and show signs of stable recovery.</li>
              <li>People with dissociative disorders progress at a rate more rapid than traditional treatment.</li>
              <li>Clients with a wide variety of PTSD diagnoses experienced relief from symptoms with EMDR.</li>
            </ol>
          </article>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default EMDRTherapy;
