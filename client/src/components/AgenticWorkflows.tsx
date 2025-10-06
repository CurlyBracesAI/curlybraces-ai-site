import { Card, CardContent } from "@/components/ui/card";

export default function AgenticWorkflows() {
  const agents = [
    {
      name: "Agent A — Client Proposal Engine:",
      description: "Creates structured, branded proposals instantly."
    },
    {
      name: "Agent B — Client & Partner Tours:",
      description: "Automates scheduling and introductions."
    },
    {
      name: "Agent C — Daily Triage Reports:",
      description: "Summarizes activity and performance updates."
    },
    {
      name: "Agent D — Partner Updates:",
      description: "Drafts personalized monthly outreach emails."
    },
    {
      name: "Agent E — Content Sync:",
      description: "Maintains cross-platform consistency for data and listings."
    },
    {
      name: "Agent F — Market Finder:",
      description: "Scans public and private data for new opportunities."
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
            Each Rosie Agent represents a specialized automation built and running in production:
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
          We continue to expand Rosie's agent library and invite partners to join our{" "}
          <strong className="text-foreground">beta program</strong> for custom domain-specific builds.
        </p>
      </div>
    </section>
  );
}
