export default function SupportedPlatforms() {
  const supportedNow = [
    { name: "Pipedrive", logo: "pipedrive" },
    { name: "Wix", logo: "wix" }
  ];

  const comingSoonLogos = [
    { name: "Webflow", logo: "webflow" },
    { name: "WordPress", logo: "wordpress" },
    { name: "Shopify", logo: "shopify" },
    { name: "Zoho", logo: "zoho" },
    { name: "Close.com", logo: "closecom" },
    { name: "Monday.com", logo: "monday" },
    { name: "Asana", logo: "asana" }
  ];

  const comingSoonTextOnly = [
    { name: "HubSpot" },
    { name: "Salesforce" },
    { name: "Zendesk" }
  ];

  const LogoPlaceholder = ({ name, logo }: { name: string; logo: string }) => (
    <div className="flex flex-col items-center gap-2 p-4">
      <div className="w-16 h-16 flex items-center justify-center bg-muted rounded-md grayscale opacity-75 hover:opacity-100 transition-opacity">
        <span className="text-xs font-semibold text-muted-foreground text-center px-1">{name}</span>
      </div>
      <span className="text-xs text-muted-foreground font-medium">{name}</span>
    </div>
  );

  return (
    <section className="py-16 px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4" data-testid="text-platforms-title">
            Works Seamlessly With the Tools You Already Use
          </h2>
          <p className="text-base text-muted-foreground max-w-2xl mx-auto" data-testid="text-platforms-subtitle">
            Plug-and-play AI agents for your CRM and website platforms. No engineering. No custom builds. Just install, connect, and automate.
          </p>
        </div>

        {/* Row 1: Supported Now */}
        <div className="mb-16">
          <h3 className="text-sm font-semibold text-foreground uppercase tracking-wider mb-8 text-center" data-testid="text-platforms-supported-now">
            Supported Now
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 justify-items-center">
            {supportedNow.map((platform, index) => (
              <LogoPlaceholder key={index} name={platform.name} logo={platform.logo} />
            ))}
          </div>
        </div>

        {/* Row 2: Coming Soon with Logos */}
        <div className="mb-16">
          <h3 className="text-sm font-semibold text-foreground uppercase tracking-wider mb-8 text-center" data-testid="text-platforms-coming-soon">
            Coming Soon
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 justify-items-center">
            {comingSoonLogos.map((platform, index) => (
              <LogoPlaceholder key={index} name={platform.name} logo={platform.logo} />
            ))}
          </div>
        </div>

        {/* Row 3: Coming Soon Text-Only */}
        <div className="mb-12">
          <h3 className="text-sm font-semibold text-foreground uppercase tracking-wider mb-8 text-center" data-testid="text-platforms-approval">
            Coming Soon (Awaiting Marketplace Approval)
          </h3>
          <div className="flex flex-wrap items-center justify-center gap-4" data-testid="text-platforms-textonly">
            {comingSoonTextOnly.map((platform, index) => (
              <span key={index} className="text-base text-muted-foreground font-medium">
                {platform.name}
                {index < comingSoonTextOnly.length - 1 && <span className="ml-4">•</span>}
              </span>
            ))}
          </div>
        </div>

        {/* Legal Disclaimer */}
        <div className="text-center pt-8 border-t border-border">
          <p className="text-xs text-muted-foreground" data-testid="text-platforms-disclaimer">
            Integrations planned for Q1–Q3 2026. Platform approvals pending.
          </p>
        </div>
      </div>
    </section>
  );
}
