import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import snakeImage from "@assets/stock_images/snake_vertical_portr_38647f22.jpg";

export default function AgenticWorkflows() {
  const agents = [
    {
      name: "Proposal Generator",
      description: "Creates in-depth structured, branded proposals instantly from your CRM data.",
      badge: "Available",
      badgeColor: "bg-emerald-500 text-white",
      cardBg: "bg-gradient-to-br from-emerald-500/25 to-teal-500/25"
    },
    {
      name: "Follow-Up Agent",
      description: "Automates personalized follow-up sequences based on deal stage and activity.",
      badge: "Available",
      badgeColor: "bg-blue-500 text-white",
      cardBg: "bg-gradient-to-br from-blue-500/25 to-cyan-500/25"
    },
    {
      name: "Triage Assistant",
      description: "Summarizes daily activity, prioritizes leads, and generates performance reports.",
      badge: "Available",
      badgeColor: "bg-violet-500 text-white",
      cardBg: "bg-gradient-to-br from-violet-500/25 to-purple-500/25"
    },
    {
      name: "Data Enricher",
      description: "Automatically completes missing contact and company information.",
      badge: "Available",
      badgeColor: "bg-orange-500 text-white",
      cardBg: "bg-gradient-to-br from-orange-500/25 to-amber-500/25"
    },
    {
      name: "Content Sync Agent",
      description: "Maintains cross-platform consistency of client data and listings.",
      badge: "Available",
      badgeColor: "bg-pink-500 text-white",
      cardBg: "bg-gradient-to-br from-pink-500/25 to-rose-500/25"
    },
    {
      name: "Deal Notes Agent",
      description: "Automatically generates and updates deal notes from communications.",
      badge: "Available",
      badgeColor: "bg-amber-500 text-white",
      cardBg: "bg-gradient-to-br from-amber-500/25 to-yellow-500/25"
    },
  ];

  return (
    <section id="current-agents" className="py-12 md:py-24 px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-stretch gap-12">
          <div className="lg:w-1/2 flex items-stretch">
            <div className="w-full relative h-[600px] lg:h-auto">
              <img
                src={snakeImage}
                alt=""
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
                Ready-to-Deploy<br />AI Agents
              </h2>
              <p
                className="text-lg text-muted-foreground leading-relaxed max-w-2xl mb-12"
                data-testid="text-workflows-subtitle"
              >
                Each Rosie Agent is a purpose-built automation that installs directly into your platform. Choose the agents you need and start automating immediately:
              </p>
            </div>

            <div className="space-y-6 mb-6">
              {agents.map((agent, index) => (
                <Card
                  key={index}
                  className={`hover-elevate transition-all duration-200 ${agent.cardBg}`}
                  data-testid={`card-agent-${index}`}
                >
                  <CardContent className="p-6">
                    <div className="flex items-start gap-3">
                      <Badge 
                        className={`${agent.badgeColor} shrink-0 no-default-hover-elevate no-default-active-elevate`}
                        data-testid={`badge-agent-${index}`}
                      >
                        {agent.badge}
                      </Badge>
                      <p
                        className="leading-relaxed"
                        data-testid={`text-agent-${index}`}
                      >
                        <strong className="text-foreground">{agent.name}:</strong>{" "}
                        <span className="text-muted-foreground">
                          {agent.description}
                        </span>
                      </p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <p
              className="text-muted-foreground leading-relaxed max-w-md"
              data-testid="text-workflows-footer"
            >
              New agents are added regularly. All agents work seamlessly with your existing integrations and subscription plan.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
