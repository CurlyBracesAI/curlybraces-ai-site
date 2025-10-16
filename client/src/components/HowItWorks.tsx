import { Card, CardContent } from "@/components/ui/card";
import { Brain, Cog, Database, RefreshCw, Shield, FileText, Link2, ShieldCheck, Sparkles, Eye, Lightbulb, ListChecks, Play, GraduationCap } from "lucide-react";
import octopusImage from "@assets/stock_images/octopus_camouflage_u_e249e7d1.jpg";

export default function HowItWorks() {
  const features = [
    {
      icon: Brain,
      title: "Autonomous Decision-Making",
      description: "Unlike older AI models that only generate content, agentic AI can reason, plan, and decide on the next best action based on context.",
      iconBg: "bg-gradient-to-br from-pink-400 to-rose-500",
      iconColor: "text-white",
      cardBg: "bg-gradient-to-br from-pink-400/5 to-rose-500/5"
    },
    {
      icon: Cog,
      title: "Multi-Step Problem-Solving",
      description: "Breaks down complex, high-level goals into smaller, manageable subtasks and orchestrates the entire process from start to finish.",
      iconBg: "bg-gradient-to-br from-blue-400 to-indigo-500",
      iconColor: "text-white",
      cardBg: "bg-gradient-to-br from-blue-400/5 to-indigo-500/5"
    },
    {
      icon: Database,
      title: "Tool Use & External Integration",
      description: "Accesses and uses external tools like APIs, databases, or web browsers to gather real-time data and execute specific actions.",
      iconBg: "bg-gradient-to-br from-teal-400 to-cyan-500",
      iconColor: "text-white",
      cardBg: "bg-gradient-to-br from-teal-400/5 to-cyan-500/5"
    },
    {
      icon: RefreshCw,
      title: "Memory & Continuous Learning",
      description: "Retains context from past interactions and reflects on outcomes to refine future strategies and execution.",
      iconBg: "bg-gradient-to-br from-violet-400 to-purple-500",
      iconColor: "text-white",
      cardBg: "bg-gradient-to-br from-violet-400/5 to-purple-500/5"
    },
    {
      icon: Shield,
      title: "Human-in-the-Loop Oversight",
      description: "Designed to require human review and approval for high-stakes decisions or ethical judgments before proceeding.",
      iconBg: "bg-gradient-to-br from-emerald-400 to-green-500",
      iconColor: "text-white",
      cardBg: "bg-gradient-to-br from-emerald-400/5 to-green-500/5"
    }
  ];

  const customizationAspects = [
    {
      icon: FileText,
      title: "Proprietary Data Integration",
      description: "Trained on your organization's specific documents, communications, and historical data.",
      iconBg: "bg-gradient-to-br from-orange-400 to-red-500",
      iconColor: "text-white"
    },
    {
      icon: Link2,
      title: "Tech Stack Connection",
      description: "Integrates with your ERP, CRM, and other software systems to act across your entire ecosystem.",
      iconBg: "bg-gradient-to-br from-cyan-400 to-blue-500",
      iconColor: "text-white"
    },
    {
      icon: ShieldCheck,
      title: "Goals & Guardrails",
      description: "Program the AI's objectives and set clear boundaries for auditable, secure, and compliant decisions.",
      iconBg: "bg-gradient-to-br from-green-400 to-emerald-500",
      iconColor: "text-white"
    },
    {
      icon: Sparkles,
      title: "Custom User Experience",
      description: "Streamlined interfaces make complex workflows simple for your employees to manage.",
      iconBg: "bg-gradient-to-br from-fuchsia-400 to-pink-500",
      iconColor: "text-white"
    }
  ];

  const workflowSteps = [
    {
      icon: Eye,
      step: "Perception",
      description: "Monitors project timelines, drawing software progress (Schematic Design, Design Development, Construction Documents & Administration), team schedules, and upcoming deadlines.",
      iconBg: "bg-gradient-to-br from-blue-400 to-cyan-500",
      iconColor: "text-white"
    },
    {
      icon: Lightbulb,
      step: "Reasoning",
      description: "Analyzes which projects are on track versus behind schedule, identifies bottlenecks, and correlates team capacity with project demands.",
      iconBg: "bg-gradient-to-br from-amber-400 to-yellow-500",
      iconColor: "text-white"
    },
    {
      icon: ListChecks,
      step: "Planning",
      description: "Determines resource reallocation needs, prioritizes critical deliverables, and structures weekly report for staff and management stakeholders.",
      iconBg: "bg-gradient-to-br from-violet-400 to-purple-500",
      iconColor: "text-white"
    },
    {
      icon: Play,
      step: "Execution",
      description: "Generates detailed triage report with project status updates, deadline alerts, staffing recommendations, and executive summary for weekly meetings.",
      iconBg: "bg-gradient-to-br from-emerald-400 to-green-500",
      iconColor: "text-white"
    },
    {
      icon: GraduationCap,
      step: "Learning",
      description: "Refines deadline predictions based on project outcomes and improves resource allocation suggestions over time.",
      iconBg: "bg-gradient-to-br from-pink-400 to-rose-500",
      iconColor: "text-white"
    }
  ];

  return (
    <section id="how-it-works" className="py-12 md:py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-center lg:text-left" data-testid="text-how-it-works-title">
          How Rosie Agentic AI Works
        </h2>
        <p className="text-xl text-muted-foreground mb-16 text-center lg:text-left max-w-4xl" data-testid="text-how-it-works-subtitle">
          An intelligent, Agentic AI workflow assistant uses autonomous agents to perform complex, multi-step business processes with minimal human oversight. These systems are highly flexible, able to adapt and learn from real-time data and changing conditions.
        </p>

        <div className="mb-20">
          <h3 className="text-2xl md:text-3xl font-bold mb-10 text-center lg:text-left" data-testid="text-key-features-title">
            Key Features of Agentic AI
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <Card key={index} className={`hover-elevate transition-all duration-200 ${feature.cardBg}`} data-testid={`card-feature-${index}`}>
                  <CardContent className="p-6">
                    <div className={`w-12 h-12 rounded-lg ${feature.iconBg} flex items-center justify-center mb-4`}>
                      <Icon className={`w-6 h-6 ${feature.iconColor}`} />
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
            {customizationAspects.map((aspect, index) => {
              const Icon = aspect.icon;
              return (
                <div key={index} className="flex gap-4" data-testid={`item-customization-${index}`}>
                  <div className="flex-shrink-0">
                    <div className={`w-10 h-10 rounded-lg ${aspect.iconBg} flex items-center justify-center`}>
                      <Icon className={`w-5 h-5 ${aspect.iconColor}`} />
                    </div>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold mb-2" data-testid={`text-customization-aspect-title-${index}`}>
                      {aspect.title}
                    </h4>
                    <p className="text-muted-foreground leading-relaxed" data-testid={`text-customization-aspect-description-${index}`}>
                      {aspect.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="mt-20">
          <div className="lg:grid lg:grid-cols-2 lg:gap-12 lg:items-stretch flex flex-col gap-12">
            <div className="flex flex-col">
              <h3 className="text-2xl md:text-3xl font-bold mb-4" data-testid="text-example-title">
                Example: Intelligent Adaptation
              </h3>
              <p className="text-muted-foreground mb-8" data-testid="text-example-intro">
                An architectural practice using an AI agent to generate weekly triage reports for staff and management:
              </p>
              
              <div className="space-y-4 flex-1">
                {workflowSteps.map((step, index) => {
                  const Icon = step.icon;
                  return (
                    <div key={index} className="flex gap-3" data-testid={`item-example-step-${index}`}>
                      <div className="flex-shrink-0">
                        <div className={`w-10 h-10 rounded-lg ${step.iconBg} flex items-center justify-center`}>
                          <Icon className={`w-5 h-5 ${step.iconColor}`} />
                        </div>
                      </div>
                      <div className="flex-1">
                        <div className="flex items-baseline gap-2 mb-1">
                          <h4 className="text-base font-semibold text-foreground">{step.step}:</h4>
                        </div>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          {step.description}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="flex items-stretch">
              <img 
                src={octopusImage} 
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
