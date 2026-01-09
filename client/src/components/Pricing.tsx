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
      description: "For solo practitioners getting started with AI inquiry management",
      features: [
        "Inquiry Management",
        "Pre-Intake Triage",
        "Onboarding Follow-up",
        "Standard EHR Hand-off"
      ],
      cardBg: "bg-background",
      buttonVariant: "outline" as const
    },
    {
      name: "Core",
      price: "$29",
      period: "/mo",
      description: "For growing practices requiring advanced practice insights",
      features: [
        "All Basic features",
        "Ethical Growth Agent",
        "Capacity Planning",
        "HIPAA-compliant workflows",
        "Priority hand-offs"
      ],
      cardBg: "bg-background",
      popular: true,
      buttonVariant: "default" as const
    },
    {
      name: "Team",
      price: "$49",
      period: "/user/mo",
      description: "For group practices with high inquiry volume",
      features: [
        "All Core features",
        "Group scheduling rules",
        "Custom EHR logic",
        "Dedicated support agent"
      ],
      cardBg: "bg-background",
      buttonVariant: "outline" as const
    }
  ];

  const addOns = [
    { name: "EHR Deep Sync", description: "Secondary system integration" },
    { name: "Custom Triage", description: "Practice-specific evaluation logic" },
    { name: "Recall Agent", description: "Ethical patient recall workflows" },
    { name: "Onboarding Kit", description: "Custom templates & hand-offs" }
  ];

  return (
    <section id="pricing" className="py-12 md:py-24 px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4" data-testid="text-pricing-title">
            Simple, Transparent Pricing
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed" data-testid="text-pricing-subtitle">
            Choose the plan that fits your practice's inquiry volume and growth goals.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {plans.map((plan, index) => (
            <Card 
              key={index} 
              className={`relative hover-elevate transition-all duration-300 border-border ${plan.cardBg}`}
              data-testid={`card-pricing-${plan.name.toLowerCase()}`}
            >
              {plan.popular && (
                <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-cyan-500 to-blue-500 text-white border-0 py-1 px-4 text-[10px] uppercase tracking-wider no-default-hover-elevate no-default-active-elevate">
                  Most Popular
                </Badge>
              )}
              <CardHeader className="text-center pb-6">
                <CardTitle className="text-xl font-bold" data-testid={`text-pricing-${plan.name.toLowerCase()}-name`}>
                  {plan.name}
                </CardTitle>
                <div className="mt-6 flex items-baseline justify-center gap-1">
                  <span className="text-5xl font-bold tracking-tight" data-testid={`text-pricing-${plan.name.toLowerCase()}-price`}>
                    {plan.price}
                  </span>
                  <span className="text-muted-foreground text-sm uppercase tracking-wide">{plan.period}</span>
                </div>
                <p className="text-sm text-muted-foreground mt-4 px-4 leading-relaxed">
                  {plan.description}
                </p>
              </CardHeader>
              <CardContent className="space-y-6">
                <ul className="space-y-4">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start gap-3">
                      <Check className="w-4 h-4 text-cyan-400 mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button 
                  className={`w-full mt-6 ${plan.popular ? 'bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white border-0 no-default-hover-elevate h-11' : 'h-11'}`}
                  variant={plan.buttonVariant}
                  data-testid={`button-pricing-${plan.name.toLowerCase()}`}
                >
                  Request Access
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="bg-card/30 rounded-xl p-8 md:p-12 border border-border">
          <h3 className="text-xl font-bold mb-4 text-center" data-testid="text-addons-title">
            Optional Add-Ons
          </h3>
          <p className="text-center text-muted-foreground mb-10 max-w-2xl mx-auto text-sm leading-relaxed">
            Extend Agent G's capabilities for your specific practice needs
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {addOns.map((addon, index) => (
              <div 
                key={index} 
                className="p-5 rounded-lg bg-background border border-border hover-elevate transition-all duration-300"
                data-testid={`card-addon-${index}`}
              >
                <h4 className="text-sm font-bold mb-2">{addon.name}</h4>
                <p className="text-xs text-muted-foreground leading-relaxed">{addon.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
