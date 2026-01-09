import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, ArrowRight, Building2 } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Contact() {
  const handleStartTrial = () => {
    const element = document.getElementById("pricing");
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="contact" className="py-12 md:py-24 px-6 bg-background border-t border-border/10">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6" data-testid="text-contact-title">
            Get Started Today
          </h2>
          <p className="text-xl text-muted-foreground" data-testid="text-contact-subtitle">
            Start your free trial and automate your workflows in minutes
          </p>
        </div>

        <Card className="border-primary/20 bg-card/50 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="text-2xl text-center" data-testid="text-contact-card-title">
              Ready to Automate?
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="gap-2 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white border-0 no-default-hover-elevate"
                onClick={handleStartTrial}
                data-testid="button-contact-trial"
              >
                Start Free Trial
                <ArrowRight className="w-5 h-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="gap-2"
                onClick={() => window.location.href = 'mailto:enterprise@curlybraces.ai'}
                data-testid="button-contact-enterprise"
              >
                <Building2 className="w-5 h-5" />
                Request Enterprise Plan
              </Button>
            </div>

            <div className="pt-6 border-t border-border text-center">
              <p className="text-sm text-muted-foreground mb-4" data-testid="text-contact-support-note">
                Questions? Our support team is here to help you get started.
              </p>
              <a 
                href="mailto:support@curlybraces.ai" 
                className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
                data-testid="link-contact-support"
              >
                <Mail className="w-4 h-4" />
                support@curlybraces.ai
              </a>
              <p className="text-xs text-muted-foreground italic mt-4" data-testid="text-contact-disclaimer">
                AI can make mistakes. Review all generated content for accuracy.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
