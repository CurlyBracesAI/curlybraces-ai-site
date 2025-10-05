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
              Generative AI Automation that naturally adapts to your business
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold mb-4" data-testid="text-footer-quick-links-title">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors hover-elevate active-elevate-2 px-2 py-1 rounded-md -ml-2"
                  data-testid="link-footer-features"
                >
                  Features
                </button>
              </li>
              <li>
                <button
                  onClick={() => document.getElementById('case-studies')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors hover-elevate active-elevate-2 px-2 py-1 rounded-md -ml-2"
                  data-testid="link-footer-case-studies"
                >
                  Case Studies
                </button>
              </li>
              <li>
                <button
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors hover-elevate active-elevate-2 px-2 py-1 rounded-md -ml-2"
                  data-testid="link-footer-contact"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold mb-4" data-testid="text-footer-contact-title">Contact</h4>
            <a
              href="mailto:hello@curlybraces.ai"
              className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors hover-elevate active-elevate-2 px-2 py-1 rounded-md -ml-2"
              data-testid="link-footer-email"
            >
              <Mail className="w-4 h-4" />
              hello@curlybraces.ai
            </a>
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
