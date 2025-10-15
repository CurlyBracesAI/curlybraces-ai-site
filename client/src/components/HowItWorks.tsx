import { Card, CardContent } from "@/components/ui/card";
import { Brain, Cog, Database, RefreshCw, Shield } from "lucide-react";

export default function HowItWorks() {
  const features = [
    {
      icon: Brain,
      title: "Autonomous Decision-Making",
      description: "Unlike older AI models that only generate content, agentic AI can reason, plan, and decide on the next best action based on context."
    },
    {
      icon: Cog,
      title: "Multi-Step Problem-Solving",
      description: "Breaks down complex, high-level goals into smaller, manageable subtasks and orchestrates the entire process from start to finish."
    },
    {
      icon: Database,
      title: "Tool Use & External Integration",
      description: "Accesses and uses external tools like APIs, databases, or web browsers to gather real-time data and execute specific actions."
    },
    {
      icon: RefreshCw,
      title: "Memory & Continuous Learning",
      description: "Retains context from past interactions and reflects on outcomes to refine future strategies and execution."
    },
    {
      icon: Shield,
      title: "Human-in-the-Loop Oversight",
      description: "Designed to require human review and approval for high-stakes decisions or ethical judgments before proceeding."
    }
  ];

  const customizationAspects = [
    {
      title: "Proprietary Data Integration",
      description: "Trained on your organization's specific documents, communications, and historical data."
    },
    {
      title: "Tech Stack Connection",
      description: "Integrates with your ERP, CRM, and other software systems to act across your entire ecosystem."
    },
    {
      title: "Goals & Guardrails",
      description: "Program the AI's objectives and set clear boundaries for auditable, secure, and compliant decisions."
    },
    {
      title: "Custom User Experience",
      description: "Streamlined interfaces make complex workflows simple for your employees to manage."
    }
  ];

  return (
    <section id="how-it-works" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-center" data-testid="text-how-it-works-title">
          How Agentic AI Works
        </h2>
        <p className="text-xl text-muted-foreground mb-16 text-center max-w-4xl mx-auto" data-testid="text-how-it-works-subtitle">
          An intelligent, Agentic AI workflow assistant uses autonomous agents to perform complex, multi-step business processes with minimal human oversight. These systems are highly flexible, able to adapt and learn from real-time data and changing conditions.
        </p>

        <div className="mb-20">
          <h3 className="text-2xl md:text-3xl font-bold mb-10 text-center" data-testid="text-key-features-title">
            Key Features of Agentic AI
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <Card key={index} className="hover-elevate transition-all duration-200" data-testid={`card-feature-${index}`}>
                  <CardContent className="p-6">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <h4 className="text-lg font-semibold mb-3" data-testid={`text-feature-title-${index}`}>
                      {feature.title}
                    </h4>
                    <p className="text-muted-foreground text-sm leading-relaxed" data-testid={`text-feature-description-${index}`}>
                      {feature.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        <div className="bg-card/30 rounded-lg p-8 md:p-12">
          <h3 className="text-2xl md:text-3xl font-bold mb-6" data-testid="text-customization-title">
            Customization for Real-World Business Performance
          </h3>
          <p className="text-lg text-muted-foreground mb-10 max-w-4xl" data-testid="text-customization-intro">
            Customizing an agentic AI assistant to meet your specific business requirements is what enables it to deliver optimal real-world performance. This process incorporates your company's unique data, systems, and logic.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {customizationAspects.map((aspect, index) => (
              <div key={index} className="flex gap-4" data-testid={`item-customization-${index}`}>
                <div className="flex-shrink-0 w-2 h-2 rounded-full bg-primary mt-2"></div>
                <div>
                  <h4 className="text-lg font-semibold mb-2" data-testid={`text-customization-aspect-title-${index}`}>
                    {aspect.title}
                  </h4>
                  <p className="text-muted-foreground leading-relaxed" data-testid={`text-customization-aspect-description-${index}`}>
                    {aspect.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 max-w-4xl mx-auto">
          <h3 className="text-2xl md:text-3xl font-bold mb-6" data-testid="text-example-title">
            Example: Customer Support Assistant
          </h3>
          <p className="text-muted-foreground mb-6" data-testid="text-example-intro">
            A customized workflow assistant for a retail company handling a missing package:
          </p>
          
          <div className="space-y-4">
            <div className="flex gap-4" data-testid="item-example-step-0">
              <div className="flex-shrink-0">
                <div className="w-8 h-8 rounded-full bg-primary/20 text-primary flex items-center justify-center font-bold">1</div>
              </div>
              <div>
                <strong className="text-foreground">Perception:</strong>{" "}
                <span className="text-muted-foreground">Receives an email from a customer about a missing package.</span>
              </div>
            </div>
            
            <div className="flex gap-4" data-testid="item-example-step-1">
              <div className="flex-shrink-0">
                <div className="w-8 h-8 rounded-full bg-primary/20 text-primary flex items-center justify-center font-bold">2</div>
              </div>
              <div>
                <strong className="text-foreground">Reasoning:</strong>{" "}
                <span className="text-muted-foreground">Analyzes the email, accesses the CRM to see customer history and order status, identifies the need to track the package.</span>
              </div>
            </div>
            
            <div className="flex gap-4" data-testid="item-example-step-2">
              <div className="flex-shrink-0">
                <div className="w-8 h-8 rounded-full bg-primary/20 text-primary flex items-center justify-center font-bold">3</div>
              </div>
              <div>
                <strong className="text-foreground">Planning:</strong>{" "}
                <span className="text-muted-foreground">Breaks down the task: Check logistics tracking API, draft customer response, alert team if complex.</span>
              </div>
            </div>
            
            <div className="flex gap-4" data-testid="item-example-step-3">
              <div className="flex-shrink-0">
                <div className="w-8 h-8 rounded-full bg-primary/20 text-primary flex items-center justify-center font-bold">4</div>
              </div>
              <div>
                <strong className="text-foreground">Execution:</strong>{" "}
                <span className="text-muted-foreground">Autonomously queries the API, finds shipping information, and drafts a personalized response with the new estimated delivery date.</span>
              </div>
            </div>
            
            <div className="flex gap-4" data-testid="item-example-step-4">
              <div className="flex-shrink-0">
                <div className="w-8 h-8 rounded-full bg-primary/20 text-primary flex items-center justify-center font-bold">5</div>
              </div>
              <div>
                <strong className="text-foreground">Learning:</strong>{" "}
                <span className="text-muted-foreground">Reviews the process and uses the outcome to improve handling of similar cases in the future.</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
