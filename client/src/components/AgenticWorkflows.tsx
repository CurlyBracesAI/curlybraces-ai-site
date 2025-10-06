import { Card, CardContent } from "@/components/ui/card";

export default function AgenticWorkflows() {
  const agents = [
    {
      name: "Rosie AI Agent A — Client Shortlist Proposal:",
      description: "Generates structured, client-ready proposals drawn directly from CRM deal data."
    },
    {
      name: "Rosie AI Agent B — Client & Partner Tours:",
      description: "Coordinates introductions and manages tour scheduling between clients and suite partners."
    },
    {
      name: "Rosie AI Agent C — Daily Triage Report:",
      description: "Reviews all deal and activity updates, producing concise daily internal reports."
    },
    {
      name: "Rosie AI Agent D — Partner Intros Update:",
      description: "Summarizes partner activity and drafts professional outreach updates automatically."
    },
    {
      name: "Rosie AI Agent E — AWS | Pipedrive | Wix Sync Updater:",
      description: "Maintains cross-platform data integrity for listings, images, and metadata."
    },
    {
      name: "Rosie AI Agent F — New Inventory Finder:",
      description: "Identifies new office and partner opportunities across public and private data sources."
    }
  ];

  return (
    <section id="current-agents" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-6" data-testid="text-workflows-title">
            Current Agentic Workflows
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed" data-testid="text-workflows-subtitle">
            Our team continues to expand Rosie's operational intelligence, building agentic systems that already run in production.
            Each is designed for precision, context-aware automation, and seamless hand-off between platforms.
          </p>
        </div>

        <div className="space-y-6 mb-12">
          {agents.map((agent, index) => (
            <Card key={index} className="hover-elevate transition-all duration-200" data-testid={`card-agent-${index}`}>
              <CardContent className="p-6">
                <p className="leading-relaxed" data-testid={`text-agent-${index}`}>
                  <strong className="text-foreground">{agent.name}</strong>{" "}
                  <span className="text-muted-foreground">{agent.description}</span>
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <p className="text-center text-muted-foreground leading-relaxed" data-testid="text-workflows-footer">
          We continue to grow this suite of agents and are actively inviting partners to join our{" "}
          <strong className="text-foreground">beta testing program</strong> — particularly those seeking custom, domain-specific AI solutions built for their own workflows.
        </p>
      </div>
    </section>
  );
}
