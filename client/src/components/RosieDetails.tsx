import { Card, CardContent } from "@/components/ui/card";

export default function RosieDetails() {
  return (
    <section className="py-24 px-6 bg-card/30">
      <div className="max-w-4xl mx-auto">
        <Card className="border-primary/20 bg-card/50 backdrop-blur-sm">
          <CardContent className="p-8 md:p-12 space-y-6">
            <h3 className="text-2xl md:text-3xl font-bold text-center mb-8" data-testid="text-rosie-title">
              Introducing Rosie — our AI proposal & document assistant
            </h3>
            
            <p className="text-lg text-foreground leading-relaxed" data-testid="text-rosie-description-1">
              Rosie is a custom-trained generative AI automation agent. Designed to produce high-volume, 
              highly-detailed client reports tailored to your company's workflows. Drafting individual, 
              focused, on-brand proposals that scale with you — from five, to five hundred, to five 
              thousand individually curated documents, all at the touch of a button.
            </p>
            
            <p className="text-lg text-foreground leading-relaxed" data-testid="text-rosie-description-2">
              Rosie curates, formats, and personalizes your client proposals and reports with context-aware 
              intelligence — producing multiple custom, detailed documents. Freeing up your team, working 
              instantly across all your tools, and never skipping a detail.
            </p>
            
            <div className="pt-6 border-t border-border">
              <p className="text-base text-muted-foreground leading-relaxed" data-testid="text-rosie-use-cases">
                Whether you're a real estate firm sending endless client proposals, an accounting team 
                preparing continuous onboarding packets, an attorney practice sending multiple defendant 
                demands, or a healthcare practice chasing down vast numbers of intake forms — we design 
                AI-powered automated systems that remove repetitive chores to free up your personnel and 
                power your business.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
