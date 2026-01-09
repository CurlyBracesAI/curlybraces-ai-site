import { ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import NeuralBackground from "./NeuralBackground";
import arcticFoxImage from "@assets/stock_images/arctic_fox_winter_wh_2ef11a3d.jpg";

export default function Hero() {
  const handleGetStarted = () => {
    const element = document.getElementById("pricing");
    element?.scrollIntoView({ behavior: "smooth" });
  };

  const handleLearnMore = () => {
    const element = document.getElementById("features");
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-[85vh] flex items-center overflow-hidden">
      <NeuralBackground />
      
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-24 w-full flex items-center">
        <div className="lg:w-1/2 lg:pr-12 relative">
          <div className="relative">
            <h1 className="font-bold leading-tight mb-10 text-left" data-testid="text-hero-title">
              <span className="text-2xl md:text-3xl lg:text-4xl text-primary block mb-6">{"{"}curlybraces.ai{"}"}</span>
              <span className="text-4xl md:text-5xl lg:text-6xl text-foreground block">AI for onboarding and growth in mental health & wellness practices</span>
            </h1>

            <p className="text-base md:text-lg text-muted-foreground mb-8 leading-relaxed text-left" data-testid="text-hero-subtitle">
              Agent G manages inquiries, triage, follow-ups, and onboarding so practitioners can focus on care, not admin.
              <br /><br />
              <span className="text-sm">Works with EHR systems or HIPAA-compliant Google-based workflows. No notes. No billing. No disruption.</span>
            </p>

            <div className="flex flex-col sm:flex-row items-start gap-4 mb-6">
              <Button
                size="lg"
                className="text-base px-8 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white border-0 no-default-hover-elevate"
                onClick={handleGetStarted}
                data-testid="button-hero-cta"
              >
                Request early access
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <a
                href="#agent-g-definition"
              >
                <Button
                  size="lg"
                  variant="outline"
                  className="text-base px-8 border-cyan-500/50 text-foreground hover:border-cyan-500 backdrop-blur-sm"
                  data-testid="button-hero-how-it-works"
                >
                  <Sparkles className="mr-2 h-4 w-4" />
                  See how Agent G works
                </Button>
              </a>
            </div>
            <p className="text-xs text-muted-foreground">
              Rosie is CurlyBraces’ AI system. Rosie Agent G is its first agent, focused on onboarding and growth for mental health and wellness practices.
            </p>
            
            <div className="absolute left-full top-[calc(3rem+1.5rem)] bottom-0 w-[500px] pointer-events-none z-0 hidden lg:block ml-12">
              <img 
                src={arcticFoxImage} 
                alt="" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
