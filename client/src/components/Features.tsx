import { Users, Building2, Zap, Activity, Heart, Sparkles } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import cuttlefishImage from "@assets/stock_images/cuttlefish_camouflag_774f53ef.jpg";

export default function Features() {
  const categories = [
    { title: "Therapists & Psychologists", icon: Users },
    { title: "Group Practices & Clinics", icon: Building2 },
    { title: "Acupuncturists", icon: Zap },
    { title: "Physical Therapists", icon: Activity },
    { title: "Massage & Bodywork Practices", icon: Heart },
    { title: "Nutrition & Integrative Care", icon: Sparkles }
  ];

  return (
    <section id="who-its-for" className="relative py-12 md:py-24 px-6 overflow-hidden bg-card">
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
          
          <div className="lg:w-1/2 flex flex-col justify-center">
            <div>
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-6 text-left" data-testid="text-features-title">
                Built for mental health & wellness practices
              </h2>
              <p className="text-xl text-muted-foreground leading-relaxed text-left mb-6 italic" data-testid="text-features-subtitle">
                Designed for practices where trust, fit, and thoughtful onboarding matter.
              </p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category, index) => {
            const Icon = category.icon;
            return (
              <Card key={index} className="bg-background/50 border-cyan-500/10 hover-elevate transition-all duration-300">
                <CardContent className="p-8 flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-cyan-500/10 flex items-center justify-center shrink-0">
                    <Icon className="w-6 h-6 text-cyan-400" />
                  </div>
                  <h3 className="text-lg font-medium text-foreground">{category.title}</h3>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
