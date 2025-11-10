import { Shield, Lock, FileCheck, Activity } from "lucide-react";
import { Card } from "@/components/ui/card";

export default function SecurityCompliance() {
  const securityFeatures = [
    {
      icon: Shield,
      title: "Enterprise-Grade Security",
      description: "AWS infrastructure with SOC 2 Type II, ISO 27001, and HIPAA-eligible services",
      iconBg: "bg-gradient-to-br from-cyan-400 to-blue-500",
    },
    {
      icon: Lock,
      title: "Data Encryption",
      description: "End-to-end encryption at rest and in transit for all data",
      iconBg: "bg-gradient-to-br from-blue-400 to-violet-500",
    },
    {
      icon: FileCheck,
      title: "Access Control",
      description: "IAM-based access control with role-based permissions",
      iconBg: "bg-gradient-to-br from-violet-400 to-purple-500",
    },
    {
      icon: Activity,
      title: "Continuous Monitoring",
      description: "24/7 logging and monitoring through AWS CloudTrail",
      iconBg: "bg-gradient-to-br from-purple-400 to-pink-500",
    },
  ];

  return (
    <section id="security" className="py-24 px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4" data-testid="text-security-title">
            Security & Compliance
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto" data-testid="text-security-subtitle">
            Built on AWS infrastructure with enterprise-grade security and compliance certifications
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {securityFeatures.map((feature) => {
            const Icon = feature.icon;
            return (
              <Card
                key={feature.title}
                className="p-6 bg-gradient-to-br from-card/50 to-card/30 backdrop-blur-sm"
                data-testid={`card-security-${feature.title.toLowerCase().replace(/\s+/g, '-')}`}
              >
                <div className={`w-12 h-12 rounded-lg ${feature.iconBg} bg-opacity-25 flex items-center justify-center mb-4`}>
                  <Icon className="w-6 h-6 text-foreground" />
                </div>
                <h3 className="text-lg font-semibold mb-2" data-testid={`text-security-${feature.title.toLowerCase().replace(/\s+/g, '-')}-title`}>
                  {feature.title}
                </h3>
                <p className="text-sm text-muted-foreground" data-testid={`text-security-${feature.title.toLowerCase().replace(/\s+/g, '-')}-description`}>
                  {feature.description}
                </p>
              </Card>
            );
          })}
        </div>

        <div className="bg-card/30 rounded-lg p-8 border border-border">
          <p className="text-base text-muted-foreground leading-relaxed mb-4" data-testid="text-security-aws-statement">
            <strong className="text-foreground">CurlyBraces.ai runs entirely on AWS infrastructure</strong>, inheriting AWS's enterprise-grade security controls and compliance certifications (including SOC 2 Type II, ISO 27001, and HIPAA-eligible services).
          </p>
          <p className="text-base text-muted-foreground leading-relaxed" data-testid="text-security-safeguards">
            We implement additional safeguards such as encryption at rest and in transit, IAM-based access control, and continuous logging through AWS CloudTrail.
          </p>
        </div>
      </div>
    </section>
  );
}
