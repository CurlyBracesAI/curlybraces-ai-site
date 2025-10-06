import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Contact() {
  return (
    <section id="contact" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6" data-testid="text-contact-title">
            Let's talk
          </h2>
          <p className="text-xl text-muted-foreground" data-testid="text-contact-subtitle">
            — and put Rosie to work for your team
          </p>
        </div>

        <Card className="border-primary/20 bg-card/50 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="text-2xl text-center" data-testid="text-contact-card-title">
              Get in Touch
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="gap-2"
                onClick={() => window.location.href = 'mailto:hello@curlybraces.ai'}
                data-testid="button-contact-email"
              >
                <Mail className="w-5 h-5" />
                hello@curlybraces.ai
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="gap-2"
                onClick={() => console.log('Schedule consultation clicked')}
                data-testid="button-contact-schedule"
              >
                <MessageSquare className="w-5 h-5" />
                Schedule a consultation
              </Button>
            </div>

            <div className="pt-6 border-t border-border text-center">
              <p className="text-sm text-muted-foreground mb-4" data-testid="text-contact-beta-note">
                CurlyBraces.ai is currently onboarding beta partners for custom AI builds.
                Selected participants receive free implementation in exchange for case study participation.
              </p>
              <p className="text-xs text-muted-foreground italic" data-testid="text-contact-disclaimer">
                AI can make mistakes. Review all generated content for accuracy.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
