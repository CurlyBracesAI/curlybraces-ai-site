import { ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import NeuralBackground from "./NeuralBackground";
import brainImage from "@assets/background1_1759787585993.jpg";

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
      
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1/2 h-full pointer-events-none z-0 hidden lg:block">
        <img 
          src={brainImage} 
          alt="" 
          className="absolute right-0 top-1/2 -translate-y-1/2 w-[600px] h-auto opacity-30 object-contain"
        />
      </div>
      
      <div className="relative z-10 max-w-4xl mx-auto px-6 py-24 text-center">
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight" data-testid="text-hero-title">
          <span className="text-primary">{"{"}curlybraces.ai{"}"}</span>
          <br />
          <span className="text-foreground">AI Automation that adapts — and elevates — your business</span>
        </h1>

        <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed" data-testid="text-hero-subtitle">
          Meet <strong className="text-foreground">Rosie</strong>, our intelligent workflow assistant built for real-world performance.
          <br />
          From client proposals to end-to-end operations, Rosie automates the repetitive, the manual, and the mundane — freeing your team to focus on strategy, creativity, and growth.
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
