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
    <section id="who-its-for" className="relative py-12 md:py-24 px-6 overflow-hidden bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="lg:grid lg:grid-cols-2 lg:gap-16 lg:items-center flex flex-col gap-12 mb-16">
          <div className="relative aspect-square rounded-xl overflow-hidden border border-border bg-background flex items-center justify-center p-8">
            <img 
              src={cuttlefishImage} 
              alt="Adaptive automation for wellness practices" 
              className="w-full h-full object-contain"
            />
          </div>
          
          <div className="flex flex-col">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-6 text-left" data-testid="text-features-title">
              Built for mental health & wellness practices
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed text-left mb-10 italic" data-testid="text-features-subtitle">
              Designed for practices where trust, fit, and thoughtful onboarding matter.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {categories.map((category, index) => {
                const Icon = category.icon;
                return (
                  <div key={index} className="flex items-center gap-3 p-4 rounded-lg bg-background border border-border hover-elevate transition-all duration-300">
                    <div className="w-8 h-8 rounded-full bg-cyan-500/10 flex items-center justify-center shrink-0">
                      <Icon className="w-4 h-4 text-cyan-400" />
                    </div>
                    <h3 className="text-sm font-medium text-foreground">{category.title}</h3>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
