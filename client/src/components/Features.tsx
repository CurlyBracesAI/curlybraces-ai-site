import { Zap, Database, Target } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export default function Features() {
  const features = [
    {
      icon: Zap,
      title: "Trained to your company's specifications",
      description: "Writes at scale in seconds"
    },
    {
      icon: Database,
      title: "Built to process thousands of inputs",
      description: "Across forms, databases, CRMs, client platforms, and specialist documentation flows"
    },
    {
      icon: Target,
      title: "Designed for professionals who need precision",
      description: "And the ability to execute at large volume"
    }
  ];

  return (
    <section id="features" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6" data-testid="text-features-title">
            AI Automation: Transforming Productivity,<br />Efficiency, and Operational Excellence
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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
