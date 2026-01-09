import { Users, Building2, Zap, Activity, Heart, Sparkles } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import generatedAiBrain from "@assets/generated_images/abstract_ai_brain_glowing_cyan.png";

export default function Features() {
  const categories = [
    { title: "Therapists & Psychologists", icon: Users, bg: "bg-pink-500/10", color: "text-pink-400" },
    { title: "Group Practices & Clinics", icon: Building2, bg: "bg-blue-500/10", color: "text-blue-400" },
    { title: "Acupuncturists", icon: Zap, bg: "bg-amber-500/10", color: "text-amber-400" },
    { title: "Physical Therapists", icon: Activity, bg: "bg-emerald-500/10", color: "text-emerald-400" },
    { title: "Massage & Bodywork Practices", icon: Heart, bg: "bg-rose-500/10", color: "text-rose-400" },
    { title: "Nutrition & Integrative Care", icon: Sparkles, bg: "bg-violet-500/10", color: "text-violet-400" }
  ];

  return (
    <section id="who-its-for" className="relative py-12 md:py-24 px-6 overflow-hidden bg-background border-t border-border/10">
      <div className="max-w-7xl mx-auto">
        <div className="lg:grid lg:grid-cols-2 lg:gap-16 lg:items-center flex flex-col gap-12 mb-16">
          <div className="relative aspect-square rounded-xl overflow-hidden border border-border bg-background">
            <img 
              src={generatedAiBrain} 
              alt="AI Mind Visualization" 
              className="w-full h-full object-cover brightness-90 hover:brightness-110 transition-all duration-500"
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
                  <div key={index} className="flex items-center gap-3 p-4 rounded-lg bg-card/30 border border-border hover-elevate transition-all duration-300">
                    <div className={`w-8 h-8 rounded-full ${category.bg} flex items-center justify-center shrink-0`}>
                      <Icon className={`w-4 h-4 ${category.color}`} />
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
