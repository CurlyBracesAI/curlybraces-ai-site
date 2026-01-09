import { Mail } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-card/30 py-12 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <h3 className="text-lg font-bold text-primary mb-4" data-testid="text-footer-logo">
              {"{"}curlybraces.ai{"}"}
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed" data-testid="text-footer-tagline">
              Ethical AI for onboarding and growth in mental health & wellness practices. Built for trust and precision.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold mb-4" data-testid="text-footer-quick-links-title">Product</h4>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => document.getElementById('who-its-for')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors hover-elevate active-elevate-2 px-2 py-1 rounded-md -ml-2"
                  data-testid="link-footer-features"
                >
                  Who It's For
                </button>
              </li>
              <li>
                <button
                  onClick={() => document.getElementById('meet-agent-g')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors hover-elevate active-elevate-2 px-2 py-1 rounded-md -ml-2"
                  data-testid="link-footer-agents"
                >
                  Agent G
                </button>
              </li>
              <li>
                <button
                  onClick={() => document.getElementById('integrations')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors hover-elevate active-elevate-2 px-2 py-1 rounded-md -ml-2"
                  data-testid="link-footer-integrations"
                >
                  Integrations
                </button>
              </li>
              <li>
                <button
                  onClick={() => document.getElementById('case-studies')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors hover-elevate active-elevate-2 px-2 py-1 rounded-md -ml-2"
                  data-testid="link-footer-case-studies"
                >
                  Use Cases
                </button>
              </li>
              <li>
                <button
                  onClick={() => document.getElementById('security')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors hover-elevate active-elevate-2 px-2 py-1 rounded-md -ml-2"
                  data-testid="link-footer-security"
                >
                  Security
                </button>
              </li>
              <li>
                <a
                  href="https://rosie.curlybraces.ai"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block text-sm text-muted-foreground hover:text-foreground transition-colors hover-elevate active-elevate-2 px-2 py-1 rounded-md -ml-2"
                  data-testid="link-footer-rosie-assistant"
                >
                  Try Rosie Free
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold mb-4" data-testid="text-footer-contact-title">Support</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="mailto:support@curlybraces.ai"
                  className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors hover-elevate active-elevate-2 px-2 py-1 rounded-md -ml-2"
                  data-testid="link-footer-support"
                >
                  <Mail className="w-4 h-4" />
                  support@curlybraces.ai
                </a>
              </li>
              <li>
                <a
                  href="mailto:enterprise@curlybraces.ai"
                  className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors hover-elevate active-elevate-2 px-2 py-1 rounded-md -ml-2"
                  data-testid="link-footer-enterprise"
                >
                  <Mail className="w-4 h-4" />
                  Enterprise Inquiries
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border text-center">
          <p className="text-sm text-muted-foreground" data-testid="text-footer-copyright">
            © {currentYear} CurlyBraces.ai. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
