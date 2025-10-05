import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";

export default function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [location] = useLocation();

  const navItems = [
    { name: "Home", href: "/" },
    { name: "Features", href: "#features" },
    { name: "Case Studies", href: "#case-studies" },
    { name: "Contact", href: "#contact" },
  ];

  const handleNavClick = (href: string) => {
    if (href.startsWith("#")) {
      const element = document.getElementById(href.slice(1));
      element?.scrollIntoView({ behavior: "smooth" });
    }
    setMobileMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-md border-b border-border">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="text-xl font-bold text-primary hover-elevate active-elevate-2 px-2 py-1 rounded-md -ml-2" data-testid="link-home">
            {"{"}curlybraces.ai{"}"}
          </Link>

          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => handleNavClick(item.href)}
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors hover-elevate active-elevate-2 px-3 py-2 rounded-md"
                data-testid={`link-${item.name.toLowerCase().replace(" ", "-")}`}
              >
                {item.name}
              </button>
            ))}
            <Button
              variant="default"
              size="sm"
              onClick={() => handleNavClick("#contact")}
              data-testid="button-get-started"
            >
              Get Started
            </Button>
          </div>

          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            data-testid="button-mobile-menu"
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden bg-card border-t border-border">
          <div className="px-6 py-4 space-y-3">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => handleNavClick(item.href)}
                className="block w-full text-left text-base font-medium text-muted-foreground hover:text-foreground transition-colors hover-elevate active-elevate-2 px-3 py-2 rounded-md"
                data-testid={`mobile-link-${item.name.toLowerCase().replace(" ", "-")}`}
              >
                {item.name}
              </button>
            ))}
            <Button
              variant="default"
              className="w-full"
              onClick={() => handleNavClick("#contact")}
              data-testid="button-mobile-get-started"
            >
              Get Started
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
}
