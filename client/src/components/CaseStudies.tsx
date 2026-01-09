import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Building2, Briefcase, Heart, Clock, TrendingUp, CheckCircle } from "lucide-react";

export default function CaseStudies() {
  const caseStudies = [
    {
      icon: Building2,
      title: "Mental Health Practice",
      result: "15 mins → 2 mins",
      resultLabel: "per inquiry",
      description: "A growing practice automated their inbound triage. Agent G identifies patient fit instantly and drafts personalized follow-ups, reducing administrative response time by 85%.",
      tags: ["Agent G", "TherapyNotes"],
      iconBg: "bg-cyan-500/10",
      iconColor: "text-cyan-400",
      cardBg: "bg-background"
    },
    {
      icon: Heart,
      title: "Wellness Clinic",
      result: "12+ hours",
      resultLabel: "saved weekly",
      description: "By automating patient onboarding and EHR data entry, this group clinic eliminated manual transcription errors and freed up their front-desk team for patient interaction.",
      tags: ["Onboarding", "SimplePractice"],
      iconBg: "bg-blue-500/10",
      iconColor: "text-blue-400",
      cardBg: "bg-background"
    },
    {
      icon: Briefcase,
      title: "Group Practice",
      result: "98%",
      resultLabel: "capture rate",
      description: "A large multi-disciplinary practice ensured no inquiry fell through the cracks. Agent G manages the initial conversation and prepares structured intake summaries automatically.",
      tags: ["Triage", "Google Workspace"],
      iconBg: "bg-violet-500/10",
      iconColor: "text-violet-400",
      cardBg: "bg-background"
    }
  ];

  return (
    <section id="case-studies" className="py-12 md:py-24 px-6 bg-card">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4" data-testid="text-case-studies-title">
            See What's Possible
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed" data-testid="text-case-studies-subtitle">
            Real results from practices using Rosie Agent G to automate their inquiry and onboarding workflows.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {caseStudies.map((study, index) => {
            const Icon = study.icon;
            return (
              <Card key={index} className={`border-border hover-elevate transition-all duration-300 ${study.cardBg}`} data-testid={`card-case-study-${index}`}>
                <CardHeader className="pb-4">
                  <div className={`w-10 h-10 rounded-lg ${study.iconBg} flex items-center justify-center mb-4`}>
                    <Icon className={`w-5 h-5 ${study.iconColor}`} />
                  </div>
                  <CardTitle className="text-lg" data-testid={`text-case-study-title-${index}`}>
                    {study.title}
                  </CardTitle>
                  <div className="mt-1 flex items-baseline gap-2">
                    <span className="text-2xl font-bold text-foreground">{study.result}</span>
                    <span className="text-xs text-muted-foreground uppercase tracking-wider">{study.resultLabel}</span>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-sm text-muted-foreground leading-relaxed" data-testid={`text-case-study-description-${index}`}>
                    {study.description}
                  </p>
                  <div className="flex flex-wrap gap-2 pt-2">
                    {study.tags.map((tag, tagIndex) => (
                      <Badge 
                        key={tagIndex} 
                        variant="outline"
                        className="text-[10px] uppercase tracking-wider font-semibold py-0"
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
