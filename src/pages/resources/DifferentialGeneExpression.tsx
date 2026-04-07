import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Link } from "react-router-dom";
import { ArrowLeft, ExternalLink } from "lucide-react";

const DifferentialGeneExpression = () => {
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
              By Dr. Beth Robinson, L.M.H.C
            </p>

            <h1 className="font-serif text-2xl sm:text-3xl text-foreground mb-8">
              Differential Gene Expression after{" "}
              <span className="text-gradient">Emotional Freedom Techniques (EFT)</span>{" "}
              Treatment
            </h1>

            <p className="text-muted-foreground leading-relaxed text-base italic">
              A Novel Pilot Protocol for Salivary mRNA Assessment
            </p>

            <p className="text-sm text-muted-foreground mb-8">
              Marjorie E. Maharaj, Department of Applied Psychology, Akamai University, Hilo, HI
            </p>

            <h2 className="font-serif text-2xl text-foreground mt-10 mb-4">Abstract</h2>

            <p className="text-muted-foreground leading-relaxed">
              Biopsychology is a rapidly expanding field of study since the completion of the Human Genome Project in 2003. There is little data measuring the effect of psychotherapeutic interventions on gene expression, due to the technical, logistical, and financial requirements of analysis. Being able to measure easily the effects of therapeutic experiences can validate the benefits of intervention.
            </p>

            <p className="text-muted-foreground leading-relaxed">
              In order to test the feasibility of gene expression testing in a private practice setting, this study compared messenger ribonucleic acid (mRNA) and gene expression before and after psychotherapy and a control condition. With four non-clinical adult participants, it piloted a novel methodology using saliva stored at room temperature. A preliminary test of the interleukin-8 (IL8) gene in both blood and saliva was performed in order to determine equivalency in the two biofluids; convergent validity was found.
            </p>

            <p className="text-muted-foreground leading-relaxed">
              Following saliva test validation, a broad, genome-wide analysis was performed to detect differential gene expression in samples collected before and after treatment with Emotional Freedom Techniques (EFT), an evidence-based practice combining acupressure and cognitive exposure. The control treatment was non-therapeutic social interaction. Differential expression between EFT and control was found in numerous genes implicated in overall health (p &lt; 0.05).
            </p>

            <p className="text-muted-foreground leading-relaxed">
              Further, the differentially expressed genes in this study were shown to be linked to immunity, pro or anti-inflammatory, as well as neuronal processes in the brain. Ten of the 72 differentially expressed genes are identified as promising targets for downstream research. The data show promise for the future use of salivary samples to determine the effects of therapy.
            </p>

            <h2 className="font-serif text-2xl text-foreground mt-10 mb-4">
              Psychotherapy and Neuroplasticity
            </h2>

            <p className="text-muted-foreground leading-relaxed">
              Psychotherapeutic modalities are broadly effective, with no one method showing clear superiority over others. Psychotherapy is also efficacious for physical conditions, with a great deal of evidence supporting the link between mental and physical health. Experiential and somatic therapies have been shown to yield improvements in much shorter treatment time frames, typically including techniques that induce the relaxation response to lower emotional distress, anxiety, or insomnia.
            </p>

            <p className="text-muted-foreground leading-relaxed">
              Brain plasticity, or neurogenesis, is the lifelong ability of the brain to change, grow, and reorganize neural pathways based on new experiences and even injury. Genetic processes have been shown to result in neuronal growth in the brain by increasing the number of synapses between neurons. Plasticity may be triggered by adverse life experiences, such as trauma, loss, and injury, as well as by positive experiences such as novelty, learning, and psychotherapeutic interventions.
            </p>

            <h2 className="font-serif text-2xl text-foreground mt-10 mb-4">
              About EFT
            </h2>

            <p className="text-muted-foreground leading-relaxed">
              Emotional Freedom Techniques (EFT) is an evidence-based psychotherapy self-help technique. It has been validated in over 100 studies, meta-analyses, and review papers. EFT uses elements of exposure and cognitive therapies, and combines them with acupressure (i.e., fingertip stimulation of acupuncture points).
            </p>

            <p className="text-muted-foreground leading-relaxed">
              Meta-analyses have found "large" treatment effects for anxiety, depression, and PTSD. The treatment time frames were brief, ranging from one session for phobias to between four and ten sessions for PTSD. The effect sizes for EFT found in meta-analyses are larger than those typically observed in conventional psychotherapy and psychopharmacology trials.
            </p>

            <h2 className="font-serif text-2xl text-foreground mt-10 mb-4">
              Key Findings
            </h2>

            <p className="text-muted-foreground leading-relaxed">
              The study found differential expression between EFT and the control condition in 72 genes implicated in overall health. These differentially expressed genes were shown to be linked to immunity, pro or anti-inflammatory processes, as well as neuronal processes in the brain. The data show promise for the future use of salivary samples to determine the effects of therapy, and this pilot protocol illustrated the challenges and limitations of novel technologies employed in biopsychology.
            </p>

            <div className="mt-10 p-4 bg-primary/5 rounded-lg border border-primary/20">
              <p className="text-sm text-muted-foreground mb-2">
                Read the full research paper:
              </p>
              <a
                href="https://www.serenityocala.com/resource-content/Differential-Gene-Expression-After-EFT-Treatment.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors text-sm font-medium"
              >
                Download PDF
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </article>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default DifferentialGeneExpression;
