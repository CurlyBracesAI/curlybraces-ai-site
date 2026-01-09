import { Shield, Lock, Eye, FileCheck } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import snakeImage from "@assets/stock_images/snake_vertical_portr_38647f22.jpg";

export default function AgenticWorkflows() {
  const capabilities = [
    {
      name: "Inquiry Management",
      description: "Handles website, email, directory, and referral inquiries.",
      badge: "Core",
      badgeColor: "bg-cyan-500 text-white",
      cardBg: "bg-gradient-to-br from-cyan-500/20 to-blue-500/20"
    },
    {
      name: "Pre-Intake Triage",
      description: "Performs triage based on your practice's specific rules and criteria.",
      badge: "Core",
      badgeColor: "bg-cyan-500 text-white",
      cardBg: "bg-gradient-to-br from-cyan-500/20 to-blue-500/20"
    },
    {
      name: "Onboarding Follow-up",
      description: "Manages follow-ups and recovery for patients who drop off during intake.",
      badge: "Growth",
      badgeColor: "bg-blue-500 text-white",
      cardBg: "bg-gradient-to-br from-blue-500/20 to-indigo-500/20"
    },
    {
      name: "Ethical Outreach",
      description: "Supports thoughtful, capacity-aware outreach to maintain practice health.",
      badge: "Ethics",
      badgeColor: "bg-emerald-500 text-white",
      cardBg: "bg-gradient-to-br from-emerald-500/20 to-teal-500/20"
    },
    {
      name: "System Hand-offs",
      description: "Prepares structured hand-offs to EHRs or Google-based workflows.",
      badge: "Seamless",
      badgeColor: "bg-violet-500 text-white",
      cardBg: "bg-gradient-to-br from-violet-500/20 to-purple-500/20"
    }
  ];

  const limitations = [
    "No clinical notes",
    "No diagnosis or treatment records",
    "No scheduling or billing",
    "Never replaces professional judgment"
  ];

  return (
    <section id="meet-agent-g" className="py-12 md:py-24 px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-stretch gap-12">
          <div className="lg:w-1/2 flex items-stretch">
            <div className="w-full relative h-[600px] lg:h-auto">
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
                className="text-4xl md:text-5xl font-bold mb-6 max-w-2xl"
                data-testid="text-workflows-title"
              >
                Meet Rosie Agent G
              </h2>
              <p
                className="text-lg text-muted-foreground leading-relaxed max-w-2xl mb-12"
                data-testid="text-workflows-subtitle"
              >
                Agent G handles the specialized workflows of mental health and wellness practices. It works quietly in the background to ensure every inquiry is met with a thoughtful, timely response.
              </p>
            </div>

            <div className="space-y-4 mb-10">
              {capabilities.map((item, index) => (
                <Card
                  key={index}
                  className={`hover-elevate transition-all duration-200 ${item.cardBg} border-0`}
                  data-testid={`card-agent-${index}`}
                >
                  <CardContent className="p-5">
                    <div className="flex items-start gap-3">
                      <Badge 
                        className={`${item.badgeColor} shrink-0 no-default-hover-elevate no-default-active-elevate`}
                        data-testid={`badge-agent-${index}`}
                      >
                        {item.badge}
                      </Badge>
                      <p
                        className="leading-relaxed"
                        data-testid={`text-agent-${index}`}
                      >
                        <strong className="text-foreground">{item.name}:</strong>{" "}
                        <span className="text-muted-foreground">
                          {item.description}
                        </span>
                      </p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="p-6 bg-card/30 rounded-lg border border-red-500/20">
              <h3 className="text-sm font-semibold text-red-400 uppercase tracking-wider mb-4">What Agent G Does NOT Do</h3>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {limitations.map((limit, i) => (
                  <li key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                    <span className="w-1.5 h-1.5 rounded-full bg-red-500/50" />
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
