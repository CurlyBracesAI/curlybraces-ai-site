import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Bot, FileText, Mail, Database, FileSearch, ClipboardCheck } from "lucide-react";

export default function AgenticWorkflows() {
  const agents = [
    {
      icon: FileText,
      name: "Proposal Generator",
      description: "Automatically creates customized client proposals from templates and CRM data",
      status: "Active"
    },
    {
      icon: Mail,
      name: "Email Response Agent",
      description: "Drafts context-aware email responses based on company guidelines and previous conversations",
      status: "Active"
    },
    {
      icon: Database,
      name: "Data Integration Rosie",
      description: "Syncs and transforms data across multiple platforms including CRMs, databases, and documentation systems",
      status: "Active"
    },
    {
      icon: FileSearch,
      name: "Document Analyzer",
      description: "Reviews and extracts key information from client documents, contracts, and forms",
      status: "Active"
    },
    {
      icon: ClipboardCheck,
      name: "Compliance Checker",
      description: "Ensures all generated documents meet regulatory and company compliance standards",
      status: "Active"
    },
    {
      icon: Bot,
      name: "Workflow Orchestrator",
      description: "Coordinates multiple AI agents to complete complex multi-step business processes",
      status: "Active"
    }
  ];

  return (
    <section className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6" data-testid="text-workflows-title">
            Current Agentic Workflows
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto" data-testid="text-workflows-subtitle">
            Our suite of specialized AI agents working together to automate your business processes
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {agents.map((agent, index) => {
            const Icon = agent.icon;
            return (
              <Card key={index} className="hover-elevate transition-all duration-200" data-testid={`card-agent-${index}`}>
                <CardHeader className="pb-4">
                  <div className="flex items-start justify-between gap-4">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Icon className="w-5 h-5 text-primary" />
                    </div>
                    <Badge 
                      className="bg-chart-2/10 text-chart-2 border-chart-2/20 hover:bg-chart-2/15" 
                      data-testid={`badge-agent-status-${index}`}
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-chart-2 mr-1.5" />
                      {agent.status}
                    </Badge>
                  </div>
                  <CardTitle className="text-lg mt-3" data-testid={`text-agent-name-${index}`}>
                    {agent.name}
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-0">
                  <p className="text-sm text-muted-foreground leading-relaxed" data-testid={`text-agent-description-${index}`}>
                    {agent.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
