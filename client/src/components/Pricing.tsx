import { Check, ArrowRight } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export default function Pricing() {
  const plans = [
    {
      name: "Basic",
      price: "$15",
      period: "/mo",
      description: "Perfect for solo professionals getting started with AI automation",
      features: [
        "AI proposal generator",
        "Intake summaries",
        "Automatic Deal Notes",
        "Light usage included"
      ],
      cardBg: "bg-gradient-to-br from-blue-400/25 to-cyan-500/25",
      buttonVariant: "outline" as const
    },
    {
      name: "Core",
      price: "$29",
      period: "/mo",
      description: "For growing teams who need advanced automation capabilities",
      features: [
        "All Basic features",
        "Multi-step automations",
        "Agent chaining",
        "Higher usage limits",
        "Priority support"
      ],
      cardBg: "bg-gradient-to-br from-violet-400/25 to-purple-500/25",
      popular: true,
      buttonVariant: "default" as const
    },
    {
      name: "Team",
      price: "$49",
      period: "/user/mo",
      description: "For full sales teams with high-volume automation needs",
      features: [
        "All Core features",
        "Usage-based billing",
        "Team management",
        "Custom integrations",
        "Dedicated support"
      ],
      cardBg: "bg-gradient-to-br from-emerald-400/25 to-teal-500/25",
      buttonVariant: "outline" as const
    }
  ];

  const addOns = [
    { name: "Follow-Up Agent", description: "Automated follow-up sequences" },
    { name: "Email Draft Agent", description: "AI-powered email drafting" },
    { name: "Triage Agent", description: "Intelligent lead prioritization" },
    { name: "Data Enrichment Agent", description: "Automatic data completion" }
  ];

  return (
    <section id="pricing" className="py-12 md:py-24 px-6 bg-card">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6" data-testid="text-pricing-title">
            Simple, Transparent Pricing
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto" data-testid="text-pricing-subtitle">
            Start free, upgrade as you grow. No hidden fees, no long-term contracts.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {plans.map((plan, index) => (
            <Card 
              key={index} 
              className={`relative hover-elevate transition-all duration-200 ${plan.cardBg}`}
              data-testid={`card-pricing-${plan.name.toLowerCase()}`}
            >
              {plan.popular && (
                <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-cyan-500 to-blue-500 text-white no-default-hover-elevate no-default-active-elevate">
                  Most Popular
                </Badge>
              )}
              <CardHeader className="text-center pb-4">
                <CardTitle className="text-2xl" data-testid={`text-pricing-${plan.name.toLowerCase()}-name`}>
                  {plan.name}
                </CardTitle>
                <div className="mt-4">
                  <span className="text-4xl font-bold" data-testid={`text-pricing-${plan.name.toLowerCase()}-price`}>
                    {plan.price}
                  </span>
                  <span className="text-muted-foreground">{plan.period}</span>
                </div>
                <p className="text-sm text-muted-foreground mt-2">
                  {plan.description}
                </p>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-3">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-2">
                      <Check className="w-5 h-5 text-emerald-500 flex-shrink-0" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button 
                  className={`w-full mt-6 ${plan.popular ? 'bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white border-0 no-default-hover-elevate' : ''}`}
                  variant={plan.buttonVariant}
                  data-testid={`button-pricing-${plan.name.toLowerCase()}`}
                >
                  Start Free Trial
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="bg-card/30 rounded-lg p-8 border border-border">
          <h3 className="text-2xl font-bold mb-6 text-center" data-testid="text-addons-title">
            Optional Add-Ons
          </h3>
          <p className="text-center text-muted-foreground mb-8">
            Extend your automation capabilities with specialized agents
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {addOns.map((addon, index) => (
              <div 
                key={index} 
                className="p-4 rounded-lg bg-background/50 border border-border hover-elevate"
                data-testid={`card-addon-${index}`}
              >
                <h4 className="font-semibold mb-1">{addon.name}</h4>
                <p className="text-sm text-muted-foreground">{addon.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
