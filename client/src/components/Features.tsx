import { Zap, Bot, Users, ShieldCheck } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import cuttlefishImage from "@assets/stock_images/cuttlefish_camouflag_774f53ef.jpg";

export default function Features() {
  const features = [
    {
      icon: Zap,
      title: "Plug-and-Play Setup",
      description: "Works instantly with Pipedrive, Wix, HubSpot (coming soon). Connect in minutes, not weeks.",
      iconBg: "bg-gradient-to-br from-amber-400 to-orange-500",
      iconColor: "text-white",
      cardBg: "bg-gradient-to-br from-amber-400/25 to-orange-500/25"
    },
    {
      icon: Bot,
      title: "Purpose-Built AI Agents",
      description: "Proposal writer, follow-up generator, triage assistant, data enricher — ready to deploy.",
      iconBg: "bg-gradient-to-br from-violet-500 to-purple-600",
      iconColor: "text-white",
      cardBg: "bg-gradient-to-br from-violet-500/25 to-purple-600/25"
    },
    {
      icon: Users,
      title: "Scales With Your Team",
      description: "From solo users to full sales teams. Per-user and usage-based plans available.",
      iconBg: "bg-gradient-to-br from-emerald-400 to-teal-500",
      iconColor: "text-white",
      cardBg: "bg-gradient-to-br from-emerald-400/25 to-teal-500/25"
    },
    {
      icon: ShieldCheck,
      title: "Enterprise-Grade Quality",
      description: "Accurate outputs, SOC2-based practices, secure API workflows. Built for professionals.",
      iconBg: "bg-gradient-to-br from-cyan-400 to-blue-500",
      iconColor: "text-white",
      cardBg: "bg-gradient-to-br from-cyan-400/25 to-blue-500/25"
    }
  ];

  return (
    <section id="features" className="relative py-12 md:py-24 px-6 overflow-hidden bg-card">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-stretch gap-12 mb-16">
          <div className="lg:w-1/2 flex items-stretch">
            <div className="w-full relative flex items-stretch">
              <img 
                src={cuttlefishImage} 
                alt="" 
                className="w-full h-auto object-contain"
              />
            </div>
          </div>
          
          <div className="lg:w-1/2 flex flex-col justify-between">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-left" data-testid="text-features-title">
                AI Automation, Ready to Install
              </h2>
              <p className="text-xl text-muted-foreground leading-relaxed text-left mb-6">
                No engineering required. No months of setup.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed text-left mb-4">
                Rosie AI agents connect directly to your existing platforms — Pipedrive, Wix, and more — to automate proposals, follow-ups, and reports from day one.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed text-left">
                Choose your subscription, install the integration, and start automating. Whether you're a solo professional or managing a full sales team, Rosie scales with your needs.
              </p>
            </div>
          </div>
        </div>

        <h3 className="text-2xl md:text-3xl font-bold text-center mb-12" data-testid="text-features-subtitle">
          Everything You Need to Automate
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card key={index} className={`hover-elevate transition-transform duration-200 ${feature.cardBg}`} data-testid={`card-feature-${index}`}>
                <CardContent className="p-8">
                  <div className={`w-12 h-12 rounded-lg ${feature.iconBg} flex items-center justify-center mb-6`}>
                    <Icon className={`w-6 h-6 ${feature.iconColor}`} />
                  </div>
                  <h3 className="text-xl font-semibold mb-3" data-testid={`text-feature-title-${index}`}>
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed" data-testid={`text-feature-description-${index}`}>
                    {feature.description}
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
