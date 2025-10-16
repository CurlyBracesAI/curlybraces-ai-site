import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import snakeImage from "@assets/stock_images/snake_vertical_portr_38647f22.jpg";

export default function AgenticWorkflows() {
  const agents = [
    {
      name: "Agent A — Client Report/Proposal Engine:",
      description: "Creates in-depth structured, branded proposals instantly.",
      badge: "Active",
      badgeColor: "bg-emerald-500 text-white",
      cardBg: "bg-gradient-to-br from-emerald-500/5 to-teal-500/5"
    },
    {
      name: "Agent B — Client & Partner Introductions/Tours:",
      description: "Automates multiple scheduling and introductions.",
      badge: "Active",
      badgeColor: "bg-blue-500 text-white",
      cardBg: "bg-gradient-to-br from-blue-500/5 to-cyan-500/5"
    },
    {
      name: "Agent C — Daily In-house Triage Reports:",
      description: "Summarizes project activity, planning and performance updates.",
      badge: "Active",
      badgeColor: "bg-violet-500 text-white",
      cardBg: "bg-gradient-to-br from-violet-500/5 to-purple-500/5"
    },
    {
      name: "Agent D — Inventory Updates:",
      description: "Provides analysis and intelegent predictions for short and long-term inventory.",
      badge: "Active",
      badgeColor: "bg-orange-500 text-white",
      cardBg: "bg-gradient-to-br from-orange-500/5 to-amber-500/5"
    },
    {
      name: "Agent E — Instant Content Sync:",
      description:
        "Maintains cross-platform consistency of client data and online listings.",
      badge: "Active",
      badgeColor: "bg-pink-500 text-white",
      cardBg: "bg-gradient-to-br from-pink-500/5 to-rose-500/5"
    },
    {
      name: "Agent F — Market Finder:",
      description: "Scans public and private data sources for new marketing/sales opportunities.",
      badge: "Active",
      badgeColor: "bg-amber-500 text-white",
      cardBg: "bg-gradient-to-br from-amber-500/5 to-yellow-500/5"
    },
  ];

  return (
    <section id="current-agents" className="py-12 md:py-24 px-6 bg-card">
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
                Our Current Agentic<br />Workflows (Office RE)
              </h2>
              <p
                className="text-lg text-muted-foreground leading-relaxed max-w-2xl mb-12"
                data-testid="text-workflows-subtitle"
              >
                Each Rosie Agent represents a specialized AI automation build that
                is running and in production (presently for RE, to be adapted to your requiremnts):
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
                        <strong className="text-foreground">{agent.name}</strong>{" "}
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
              We continue to expand Rosie's agent library and invite partners to
              join our <strong className="text-foreground">beta program</strong>{" "}
              for custom domain-specific builds.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
