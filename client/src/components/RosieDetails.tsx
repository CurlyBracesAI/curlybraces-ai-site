import { Card, CardContent } from "@/components/ui/card";
import { Building2, Compass, Heart, Scale } from "lucide-react";
import cuttlefishImage from "@assets/stock_images/camouflaged_insect_b_eef38471.jpg";

export default function RosieDetails() {
  const industries = [
    {
      icon: Building2,
      title: "Real Estate",
      description: "Generates and sends curated property proposals automatically",
      iconBg: "bg-gradient-to-br from-blue-400 to-cyan-500",
      iconColor: "text-white",
      cardBg: "bg-gradient-to-br from-blue-400/5 to-cyan-500/5"
    },
    {
      icon: Compass,
      title: "Architecture & Engineering",
      description: "Drafts tailored RFP responses and zoning memos",
      iconBg: "bg-gradient-to-br from-orange-400 to-amber-500",
      iconColor: "text-white",
      cardBg: "bg-gradient-to-br from-orange-400/5 to-amber-500/5"
    },
    {
      icon: Heart,
      title: "Healthcare & Wellness",
      description: "Handles intake, scheduling, and client communications",
      iconBg: "bg-gradient-to-br from-rose-400 to-pink-500",
      iconColor: "text-white",
      cardBg: "bg-gradient-to-br from-rose-400/5 to-pink-500/5"
    },
    {
      icon: Scale,
      title: "Legal & Finance",
      description: "Produces compliant, consistent documentation at scale",
      iconBg: "bg-gradient-to-br from-violet-400 to-purple-500",
      iconColor: "text-white",
      cardBg: "bg-gradient-to-br from-violet-400/5 to-purple-500/5"
    }
  ];

  return (
    <section className="py-12 md:py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-center lg:text-left" data-testid="text-rosie-title">
          Adapted for Professionals<br />Who Need Precision
        </h2>
        <p className="text-xl text-muted-foreground mb-12 text-center lg:text-left max-w-3xl" data-testid="text-rosie-subtitle">
          Rosie powers automated workflows across multiple industries
        </p>

        <div className="flex flex-col lg:flex-row items-stretch gap-12 mb-12">
          <div className="lg:w-1/2 relative">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {industries.map((industry, index) => {
                const Icon = industry.icon;
                return (
                  <Card key={index} className={`hover-elevate transition-all duration-200 ${industry.cardBg}`} data-testid={`card-industry-${index}`}>
                    <CardContent className="p-6">
                      <div className={`w-12 h-12 rounded-lg ${industry.iconBg} flex items-center justify-center mb-4`}>
                        <Icon className={`w-6 h-6 ${industry.iconColor}`} />
                      </div>
                      <h3 className="text-lg font-semibold mb-2" data-testid={`text-industry-title-${index}`}>
                        {industry.title}
                      </h3>
                      <p className="text-muted-foreground text-sm leading-relaxed" data-testid={`text-industry-description-${index}`}>
                        {industry.description}
                      </p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>

          <div className="lg:w-1/2 flex items-stretch">
            <div className="w-full relative">
              <img 
                src={cuttlefishImage} 
                alt="" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        <p className="text-lg text-muted-foreground text-center lg:text-left max-w-3xl" data-testid="text-rosie-footer">
          Wherever accuracy and volume matter, Rosie scales with you.
        </p>
      </div>
    </section>
  );
}
