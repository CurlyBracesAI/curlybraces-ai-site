import { Card, CardContent } from "@/components/ui/card";
import snakeImage from "@assets/stock_images/snake_vertical_portr_38647f22.jpg";

export default function AgenticWorkflows() {
  const agents = [
    {
      name: "Agent A — Client Report/Proposal Engine:",
      description: "Creates in-depth structured, branded proposals instantly.",
    },
    {
      name: "Agent B — Client & Partner Introductions/Tours:",
      description: "Automates multiple scheduling and introductions.",
    },
    {
      name: "Agent C — Daily In-house Triage Reports:",
      description: "Summarizes project activity, planning and performance updates.",
    },
    {
      name: "Agent D — Inventory Updates:",
      description: "Provides analysis and intelegent predictions for short and long-term inventory.",
    },
    {
      name: "Agent E — Instant Content Sync:",
      description:
        "Maintains cross-platform consistency of client data and online listings.",
    },
    {
      name: "Agent F — Market Finder:",
      description: "Scans public and private data sources for new marketing/sales opportunities.",
    },
  ];

  return (
    <section id="current-agents" className="py-12 md:py-24 px-6 bg-card">
      <div className="max-w-7xl mx-auto">
        <div className="lg:grid lg:grid-cols-2 lg:gap-12">
          <div></div>
          <div className="mb-12">
            <h2
              className="text-4xl md:text-5xl font-bold mb-6 max-w-md"
              data-testid="text-workflows-title"
            >
              Our Current Agentic<br />Workflows (Commercial RE)
            </h2>
            <p
              className="text-lg text-muted-foreground leading-relaxed max-w-md"
              data-testid="text-workflows-subtitle"
            >
              Each Rosie Agent represents a specialized AI automation build that
              is running and in production:
            </p>
          </div>
        </div>

        <div className="lg:grid lg:grid-cols-2 lg:gap-12 lg:items-stretch flex flex-col gap-12">
          <div className="flex items-stretch">
            <img
              src={snakeImage}
              alt=""
              className="w-full h-full object-cover"
            />
          </div>

          <div className="flex flex-col">
            <div className="space-y-6 mb-6">
              {agents.map((agent, index) => (
                <Card
                  key={index}
                  className="hover-elevate transition-all duration-200"
                  data-testid={`card-agent-${index}`}
                >
                  <CardContent className="p-6">
                    <p
                      className="leading-relaxed"
                      data-testid={`text-agent-${index}`}
                    >
                      <strong className="text-foreground">{agent.name}</strong>{" "}
                      <span className="text-muted-foreground">
                        {agent.description}
                      </span>
                    </p>
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
