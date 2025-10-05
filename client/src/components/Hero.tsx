import { ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import NeuralBackground from "./NeuralBackground";

export default function Hero() {
  const handleGetStarted = () => {
    const element = document.getElementById("contact");
    element?.scrollIntoView({ behavior: "smooth" });
  };

  const handleLearnMore = () => {
    const element = document.getElementById("features");
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden">
      <NeuralBackground />
      
      <div className="relative z-10 max-w-4xl mx-auto px-6 py-24 text-center">
        <Badge className="mb-6 bg-primary/10 text-primary border-primary/20 hover:bg-primary/15" data-testid="badge-announcement">
          <Sparkles className="w-3 h-3 mr-1.5" />
          We're offering a limited number of case studies
        </Badge>

        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight" data-testid="text-hero-title">
          <span className="text-primary">{"{"}curlybraces.ai{"}"}</span>
          <br />
          <span className="text-foreground">Generative AI Automation that naturally adapts to your business</span>
        </h1>

        <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed" data-testid="text-hero-subtitle">
          Introducing <strong className="text-foreground">Rosie</strong> — our AI proposal & document assistant. 
          Designed to produce high-volume, highly-detailed client reports tailored to your company's workflows.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button
            size="lg"
            className="text-base px-8"
            onClick={handleGetStarted}
            data-testid="button-hero-cta"
          >
            Let's talk
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="text-base px-8 bg-background/50 backdrop-blur-sm"
            onClick={handleLearnMore}
            data-testid="button-hero-secondary"
          >
            Learn more
          </Button>
        </div>
      </div>
    </section>
  );
}
