import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Building2, Briefcase, Heart } from "lucide-react";

export default function CaseStudies() {
  const caseStudies = [
    {
      icon: Building2,
      title: "Real Estate Firm",
      description: "Automated client proposal generation for a firm sending 500+ property proposals monthly, reducing preparation time from 2 hours to 5 minutes per proposal.",
      tags: ["Proposal Automation", "CRM Integration"],
      iconBg: "bg-gradient-to-br from-blue-400 to-cyan-500",
      iconColor: "text-white",
      cardBg: "bg-gradient-to-br from-blue-400/25 to-cyan-500/25"
    },
    {
      icon: Briefcase,
      title: "Legal Practice",
      description: "Streamlined defendant demand letter creation across multiple cases, enabling attorneys to handle 3x more cases with consistent, compliant documentation.",
      tags: ["Document Generation", "Compliance"],
      iconBg: "bg-gradient-to-br from-violet-400/25 to-purple-500/25",
      iconColor: "text-white",
      cardBg: "bg-gradient-to-br from-violet-400/25 to-purple-500/25"
    },
    {
      icon: Heart,
      title: "Healthcare Practice",
      description: "Automated patient intake form processing and data entry, eliminating 20+ hours of manual work per week and improving data accuracy by 95%.",
      tags: ["Data Processing", "Healthcare"],
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
            Case Studies
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto" data-testid="text-case-studies-subtitle">
            Real results from businesses transforming their operations with AI automation
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
