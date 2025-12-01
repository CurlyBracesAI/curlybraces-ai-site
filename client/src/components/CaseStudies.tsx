import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Building2, Briefcase, Heart, Clock, TrendingUp, CheckCircle } from "lucide-react";

export default function CaseStudies() {
  const caseStudies = [
    {
      icon: Building2,
      title: "Real Estate Agency",
      result: "2 hours → 5 minutes",
      resultLabel: "per proposal",
      description: "A real estate firm sending 500+ property proposals monthly now generates each proposal in under 5 minutes. The Proposal Generator agent pulls data directly from Pipedrive and creates branded, client-ready documents instantly.",
      tags: ["Proposal Generator", "Pipedrive"],
      iconBg: "bg-gradient-to-br from-blue-400 to-cyan-500",
      iconColor: "text-white",
      cardBg: "bg-gradient-to-br from-blue-400/25 to-cyan-500/25"
    },
    {
      icon: Briefcase,
      title: "Sales Team",
      result: "3x more",
      resultLabel: "follow-ups sent",
      description: "A B2B sales team tripled their follow-up volume without adding headcount. The Follow-Up Agent automatically drafts personalized messages based on deal stage, past interactions, and time since last contact.",
      tags: ["Follow-Up Agent", "HubSpot"],
      iconBg: "bg-gradient-to-br from-violet-400 to-purple-500",
      iconColor: "text-white",
      cardBg: "bg-gradient-to-br from-violet-400/25 to-purple-500/25"
    },
    {
      icon: Heart,
      title: "Healthcare Practice",
      result: "20+ hours",
      resultLabel: "saved weekly",
      description: "A healthcare practice eliminated 20+ hours of manual data entry per week. The Data Enricher agent automatically processes intake forms and populates patient records with 95% accuracy.",
      tags: ["Data Enricher", "Automation"],
      iconBg: "bg-gradient-to-br from-rose-400 to-pink-500",
      iconColor: "text-white",
      cardBg: "bg-gradient-to-br from-rose-400/25 to-pink-500/25"
    }
  ];

  return (
    <section id="case-studies" className="py-12 md:py-24 px-6 bg-card">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6" data-testid="text-case-studies-title">
            See What's Possible
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto" data-testid="text-case-studies-subtitle">
            Real results from teams using Rosie AI agents to automate their workflows
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {caseStudies.map((study, index) => {
            const Icon = study.icon;
            return (
              <Card key={index} className={`hover-elevate transition-all duration-200 ${study.cardBg}`} data-testid={`card-case-study-${index}`}>
                <CardHeader>
                  <div className={`w-12 h-12 rounded-lg ${study.iconBg} flex items-center justify-center mb-4`}>
                    <Icon className={`w-6 h-6 ${study.iconColor}`} />
                  </div>
                  <CardTitle data-testid={`text-case-study-title-${index}`}>
                    {study.title}
                  </CardTitle>
                  <div className="mt-2">
                    <span className="text-2xl font-bold text-primary">{study.result}</span>
                    <span className="text-sm text-muted-foreground ml-2">{study.resultLabel}</span>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground leading-relaxed" data-testid={`text-case-study-description-${index}`}>
                    {study.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {study.tags.map((tag, tagIndex) => (
                      <Badge 
                        key={tagIndex} 
                        variant="secondary"
                        className="text-xs"
                        data-testid={`badge-case-study-tag-${index}-${tagIndex}`}
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
