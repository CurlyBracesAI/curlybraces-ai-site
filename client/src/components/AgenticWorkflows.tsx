import { Shield, Lock, Eye, FileCheck } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import snakeImage from "@assets/stock_images/snake_vertical_portr_38647f22.jpg";

export default function AgenticWorkflows() {
  const capabilities = [
    {
      name: "Inquiry Management",
      description: "Handles website, email, and directory inquiries.",
      badge: "Core",
      badgeColor: "bg-cyan-500/10 text-cyan-400 border-cyan-500/20",
      cardBg: "bg-background"
    },
    {
      name: "Pre-Intake Triage",
      description: "Performs triage based on your practice's specific rules.",
      badge: "Core",
      badgeColor: "bg-cyan-500/10 text-cyan-400 border-cyan-500/20",
      cardBg: "bg-background"
    },
    {
      name: "Onboarding Follow-up",
      description: "Manages follow-ups for patients during intake.",
      badge: "Growth",
      badgeColor: "bg-blue-500/10 text-blue-400 border-blue-500/20",
      cardBg: "bg-background"
    },
    {
      name: "Ethical Outreach",
      description: "Supports capacity-aware outreach to maintain health.",
      badge: "Ethics",
      badgeColor: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20",
      cardBg: "bg-background"
    },
    {
      name: "System Hand-offs",
      description: "Prepares structured hand-offs to EHRs or Workspace.",
      badge: "Seamless",
      badgeColor: "bg-violet-500/10 text-violet-400 border-violet-500/20",
      cardBg: "bg-background"
    }
  ];

  const limitations = [
    "No clinical notes",
    "No diagnosis or treatment records",
    "No scheduling or billing",
    "Never replaces judgment"
  ];

  return (
    <section id="meet-agent-g" className="py-12 md:py-24 px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2 flex items-center justify-center">
            <div className="w-full max-w-md relative aspect-[3/4] rounded-xl overflow-hidden border border-border">
              <img
                src={snakeImage}
                alt="Agent G visual representative"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <div className="lg:w-1/2 flex flex-col">
            <div>
              <h2
                className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4"
                data-testid="text-workflows-title"
              >
                Meet Rosie Agent G
              </h2>
              <p
                className="text-base text-muted-foreground leading-relaxed max-w-xl mb-10"
                data-testid="text-workflows-subtitle"
              >
                Agent G handles the specialized workflows of mental health practices, working quietly to ensure every inquiry is met with a thoughtful, timely response.
              </p>
            </div>

            <div className="space-y-3 mb-8">
              {capabilities.map((item, index) => (
                <Card
                  key={index}
                  className={`hover-elevate transition-all duration-300 border-border bg-card/30`}
                  data-testid={`card-agent-${index}`}
                >
                  <CardContent className="p-4">
                    <div className="flex items-center gap-3">
                      <Badge 
                        variant="outline"
                        className={`${item.badgeColor} shrink-0 text-[10px] uppercase tracking-wider py-0 px-2 h-5 no-default-hover-elevate no-default-active-elevate`}
                        data-testid={`badge-agent-${index}`}
                      >
                        {item.badge}
                      </Badge>
                      <p
                        className="text-sm leading-relaxed"
                        data-testid={`text-agent-${index}`}
                      >
                        <strong className="text-foreground font-bold">{item.name}:</strong>{" "}
                        <span className="text-muted-foreground">
                          {item.description}
                        </span>
                      </p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="p-5 bg-card/30 rounded-xl border border-border">
              <h3 className="text-[10px] font-bold text-muted-foreground uppercase tracking-[0.2em] mb-4">Guardrails</h3>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2">
                {limitations.map((limit, i) => (
                  <li key={i} className="flex items-center gap-2 text-xs text-muted-foreground/80">
                    <div className="w-1 h-1 rounded-full bg-cyan-500/40" />
                    {limit}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
