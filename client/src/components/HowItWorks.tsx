import { Card, CardContent } from "@/components/ui/card";
import { Brain, Cog, Database, RefreshCw, Shield, FileText, Link2, ShieldCheck, Sparkles, Eye, Lightbulb, ListChecks, Play, GraduationCap } from "lucide-react";
import generatedDataFlow from "@assets/generated_images/abstract_data_flow_cyan_lines.png";

export default function HowItWorks() {
  const features = [
    {
      icon: Brain,
      title: "Autonomous Decision-Making",
      description: "Unlike older AI models that only generate content, agentic AI can reason, plan, and decide on the next best action based on context.",
      iconBg: "bg-gradient-to-br from-pink-400 to-rose-500",
      iconColor: "text-white",
      cardBg: "bg-gradient-to-br from-pink-400/25 to-rose-500/25"
    },
    {
      icon: Cog,
      title: "Multi-Step Problem-Solving",
      description: "Breaks down complex, high-level goals into smaller, manageable subtasks and orchestrates the entire process from start to finish.",
      iconBg: "bg-gradient-to-br from-blue-400 to-indigo-500",
      iconColor: "text-white",
      cardBg: "bg-gradient-to-br from-blue-400/25 to-indigo-500/25"
    },
    {
      icon: Database,
      title: "Tool Use & External Integration",
      description: "Accesses and uses external tools like APIs, databases, or web browsers to gather real-time data and execute specific actions.",
      iconBg: "bg-gradient-to-br from-teal-400 to-cyan-500",
      iconColor: "text-white",
      cardBg: "bg-gradient-to-br from-teal-400/25 to-cyan-500/25"
    },
    {
      icon: RefreshCw,
      title: "Memory & Continuous Learning",
      description: "Retains context from past interactions and reflects on outcomes to refine future strategies and execution.",
      iconBg: "bg-gradient-to-br from-violet-400 to-purple-500",
      iconColor: "text-white",
      cardBg: "bg-gradient-to-br from-violet-400/25 to-purple-500/25"
    },
    {
      icon: Shield,
      title: "Human-in-the-Loop Oversight",
      description: "Designed to require human review and approval for high-stakes decisions or ethical judgments before proceeding.",
      iconBg: "bg-gradient-to-br from-emerald-400 to-green-500",
      iconColor: "text-white",
      cardBg: "bg-gradient-to-br from-emerald-400/25 to-green-500/25"
    }
  ];

  const customizationAspects = [
    {
      icon: FileText,
      title: "EHR Integration",
      description: "Connects to TherapyNotes, SimplePractice, and more. Pull data automatically to power your workflows.",
      iconBg: "bg-gradient-to-br from-orange-400 to-red-500",
      iconColor: "text-white"
    },
    {
      icon: Link2,
      title: "Google Workspace",
      description: "Works with HIPAA-compliant Gmail, Calendar, and Docs for lightweight, secure workflows.",
      iconBg: "bg-gradient-to-br from-cyan-400 to-blue-500",
      iconColor: "text-white"
    },
    {
      icon: ShieldCheck,
      title: "HIPAA-Eligible",
      description: "Infrastructure designed for healthcare data security, privacy, and full audit trails.",
      iconBg: "bg-gradient-to-br from-green-400 to-emerald-500",
      iconColor: "text-white"
    },
    {
      icon: Sparkles,
      title: "Ethical Growth",
      description: "Maintain trust and patient focus with capacity-aware automation that never over-promises.",
      iconBg: "bg-gradient-to-br from-fuchsia-400 to-pink-500",
      iconColor: "text-white"
    }
  ];

  const workflowSteps = [
    {
      icon: Eye,
      step: "Inquiry Capture",
      description: "Pulls inquiry data from your website, email, or directories — capturing name, contact info, and initial needs.",
      iconBg: "bg-gradient-to-br from-blue-400 to-cyan-500",
      iconColor: "text-white"
    },
    {
      icon: Lightbulb,
      step: "Initial Evaluation",
      description: "Identifies patient fit and urgency based on your practice's specific rules and specialty.",
      iconBg: "bg-gradient-to-br from-amber-400 to-yellow-500",
      iconColor: "text-white"
    },
    {
      icon: ListChecks,
      step: "Thoughtful Follow-up",
      description: "Sends personalized, caring follow-ups to ensure the patient feels heard while gathering missing info.",
      iconBg: "bg-gradient-to-br from-violet-400 to-purple-500",
      iconColor: "text-white"
    },
    {
      icon: Play,
      step: "Structured Hand-off",
      description: "Prepares a clean, organized intake summary ready for your EHR or Google Workspace workflow.",
      iconBg: "bg-gradient-to-br from-emerald-400 to-green-500",
      iconColor: "text-white"
    },
    {
      icon: GraduationCap,
      step: "Practice Insights",
      description: "Helps you understand inquiry patterns and onboarding health to support ethical growth.",
      iconBg: "bg-gradient-to-br from-pink-400 to-rose-500",
      iconColor: "text-white"
    }
  ];

  return (
    <section id="how-it-works" className="py-12 md:py-24 px-6 bg-background border-t border-border/10">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 text-center lg:text-left" data-testid="text-how-it-works-title">
          How Agent G Works
        </h2>
        <p className="text-lg text-muted-foreground mb-16 text-center lg:text-left max-w-4xl leading-relaxed" data-testid="text-how-it-works-subtitle">
          Agent G is built for practices where trust, fit, and thoughtful onboarding matter. It works quietly in the background to ensure every inquiry is met with a thoughtful, timely response.
        </p>

        <div className="mb-20">
          <h3 className="text-xl md:text-2xl font-bold mb-10 text-center lg:text-left" data-testid="text-key-features-title">
            Key Features of Agent G
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <Card key={index} className="hover-elevate transition-all duration-300 border-border bg-card/30" data-testid={`card-feature-${index}`}>
                  <CardContent className="p-6">
                    <div className={`w-10 h-10 rounded-lg ${feature.iconBg} flex items-center justify-center mb-5 bg-opacity-10`}>
                      <Icon className="w-5 h-5 text-foreground" />
                    </div>
                    <h4 className="text-base font-bold mb-3" data-testid={`text-feature-title-${index}`}>
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

        <div className="bg-card/30 rounded-xl p-8 md:p-12 border border-border">
          <div className="lg:grid lg:grid-cols-2 lg:gap-16 lg:items-center flex flex-col gap-12">
            <div className="relative aspect-square rounded-xl overflow-hidden border border-border">
              <img 
                src={generatedDataFlow} 
                alt="AI Data Flow" 
                className="w-full h-full object-cover brightness-90 hover:brightness-110 transition-all duration-500"
              />
            </div>
            
            <div className="flex flex-col">
              <h3 className="text-xl md:text-2xl font-bold mb-4" data-testid="text-customization-title">
                Built for Your Practice
              </h3>
              <p className="text-lg text-muted-foreground mb-10 leading-relaxed" data-testid="text-customization-intro">
                Agent G is designed to integrate seamlessly with your existing mental health workflows. Connect your EHR, configure your preferences, and start automating in minutes.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {customizationAspects.map((aspect, index) => {
                  const Icon = aspect.icon;
                  return (
                    <div key={index} className="flex gap-4" data-testid={`item-customization-${index}`}>
                      <div className="flex-shrink-0">
                        <div className={`w-10 h-10 rounded-lg ${aspect.iconBg} flex items-center justify-center bg-opacity-10`}>
                          <Icon className="w-5 h-5 text-foreground" />
                        </div>
                      </div>
                      <div>
                        <h4 className="text-base font-bold mb-2" data-testid={`text-customization-aspect-title-${index}`}>
                          {aspect.title}
                        </h4>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          {aspect.description}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-20">
          <div className="flex flex-col gap-12">
            <div className="flex flex-col max-w-4xl mx-auto text-center lg:text-left">
              <h3 className="text-xl md:text-2xl font-bold mb-4" data-testid="text-example-title">
                Agent G in Action
              </h3>
              <p className="text-muted-foreground mb-10 leading-relaxed" data-testid="text-example-intro">
                See how Agent G handles a new patient inquiry from first contact to EHR hand-off:
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
                {workflowSteps.map((step, index) => {
                  const Icon = step.icon;
                  return (
                    <div key={index} className="flex gap-4" data-testid={`item-example-step-${index}`}>
                      <div className="flex-shrink-0">
                        <div className={`w-10 h-10 rounded-lg ${step.iconBg} flex items-center justify-center bg-opacity-10`}>
                          <Icon className="w-5 h-5 text-foreground" />
                        </div>
                      </div>
                      <div className="flex-1">
                        <div className="flex items-baseline gap-2 mb-1">
                          <h4 className="text-sm font-bold text-foreground uppercase tracking-wider">{step.step}</h4>
                        </div>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          {step.description}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="flex items-center justify-center bg-background rounded-xl border border-border aspect-video overflow-hidden relative max-w-4xl mx-auto w-full">
                <img 
                  src={generatedDataFlow} 
                  alt="AI Data Flow visualization" 
                  className="w-full h-full object-cover opacity-50 brightness-75"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <Brain className="w-24 h-24 text-cyan-400/40" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
