import { Zap, Database, Target, Sparkles } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export default function Features() {
  const features = [
    {
      icon: Sparkles,
      title: "Custom-trained to your business",
      description: "Fully tailored logic and language for your processes"
    },
    {
      icon: Zap,
      title: "Runs at any scale",
      description: "From one to one thousand automations per day"
    },
    {
      icon: Target,
      title: "Delivers human-grade quality",
      description: "Context-aware, detail-perfect, and ready for delivery"
    },
    {
      icon: Database,
      title: "Integrates seamlessly",
      description: "Built to sync with your CRM, files, and communications stack"
    }
  ];

  return (
    <section id="features" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6" data-testid="text-features-title">
            AI Automation for Modern Teams
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Built for precision. Designed to scale.
          </p>
          <p className="text-lg text-muted-foreground max-w-4xl mx-auto mt-6 leading-relaxed">
            Rosie isn't just an AI writer, it's a complete automation layer for your business.
            It learns your workflows, mirrors your tone, and works seamlessly across your tools, producing clean, consistent, on-brand results at any scale.
          </p>
          <p className="text-lg text-muted-foreground max-w-4xl mx-auto mt-4 leading-relaxed">
            Whether you're managing hundreds of client proposals, reviewing partner data, or generating daily operations reports, Rosie turns hours of manual effort into minutes of effortless automation.
          </p>
        </div>

        <h3 className="text-2xl md:text-3xl font-bold text-center mb-12" data-testid="text-features-subtitle">
          Smarter Workflows. Real Results.
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card key={index} className="hover-elevate transition-transform duration-200" data-testid={`card-feature-${index}`}>
                <CardContent className="p-8">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-6">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3" data-testid={`text-feature-title-${index}`}>
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed" data-testid={`text-feature-description-${index}`}>
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
