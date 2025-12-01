export default function SupportedPlatforms() {
  const supportedNow = [
    { name: "Pipedrive", logo: "https://cdn.brandfetch.io/pipedrive.com/logo?format=svg&width=200" },
    { name: "Wix", logo: "https://cdn.brandfetch.io/wix.com/logo?format=svg&width=200" }
  ];

  const comingSoonLogos = [
    { name: "Webflow", logo: "https://cdn.brandfetch.io/webflow.com/logo?format=svg&width=200" },
    { name: "WordPress", logo: "https://cdn.brandfetch.io/wordpress.org/logo?format=svg&width=200" },
    { name: "Shopify", logo: "https://cdn.brandfetch.io/shopify.com/logo?format=svg&width=200" },
    { name: "Zoho", logo: "https://cdn.brandfetch.io/zohocorp.com/logo?format=svg&width=200" },
    { name: "Close.com", logo: "https://cdn.brandfetch.io/close.com/logo?format=svg&width=200" },
    { name: "Monday.com", logo: "https://cdn.brandfetch.io/monday.com/logo?format=svg&width=200" },
    { name: "Asana", logo: "https://cdn.brandfetch.io/asana.com/logo?format=svg&width=200" },
    { name: "TherapyNotes", logo: "https://cdn.brandfetch.io/therapynotes.com/logo?format=svg&width=200" },
    { name: "Clio", logo: "https://cdn.brandfetch.io/clio.com/logo?format=svg&width=200" },
    { name: "QuickBooks", logo: "https://cdn.brandfetch.io/quickbooks.com/logo?format=svg&width=200" },
    { name: "SimplePractice", logo: "https://cdn.brandfetch.io/simplepractice.com/logo?format=svg&width=200" },
    { name: "Lawcus", logo: "https://cdn.brandfetch.io/lawcus.com/logo?format=svg&width=200" }
  ];

  const comingSoonTextOnly = [
    { name: "HubSpot" },
    { name: "Salesforce" },
    { name: "Zendesk" }
  ];

  const LogoCard = ({ name, logo }: { name: string; logo: string }) => (
    <div className="flex flex-col items-center gap-2 p-1">
      <div className="w-40 h-40 flex items-center justify-center bg-white rounded-md p-2 hover:shadow-md transition-shadow">
        <img 
          src={logo} 
          alt={name}
          className="max-w-full max-h-full"
          data-testid={`logo-${name.toLowerCase()}`}
        />
      </div>
      <span className="text-xs text-muted-foreground font-medium text-center">{name}</span>
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
        <div className="mb-2">
          <h3 className="text-sm font-semibold text-foreground uppercase tracking-wider mb-3 text-center" data-testid="text-platforms-supported-now">
            Supported Now
          </h3>
          <div className="flex justify-center">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-1 justify-items-center">
              {supportedNow.map((platform, index) => (
                <LogoCard key={index} name={platform.name} logo={platform.logo} />
              ))}
            </div>
          </div>
        </div>

        {/* Row 2: Coming Soon with Logos */}
        <div className="mb-2">
          <h3 className="text-sm font-semibold text-foreground uppercase tracking-wider mb-3 text-center" data-testid="text-platforms-coming-soon">
            Coming Soon
          </h3>
          <div className="flex justify-center">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-1 justify-items-center">
              {comingSoonLogos.map((platform, index) => (
                <LogoCard key={index} name={platform.name} logo={platform.logo} />
              ))}
            </div>
          </div>
        </div>

        {/* Row 3: Coming Soon Text-Only */}
        <div className="mb-12">
          <h3 className="text-sm font-semibold text-foreground uppercase tracking-wider mb-8 text-center" data-testid="text-platforms-approval">
            Coming Soon (Awaiting Marketplace Approval)
          </h3>
          <div className="flex flex-wrap items-center justify-center gap-4" data-testid="text-platforms-textonly">
            {comingSoonTextOnly.map((platform, index) => (
              <span key={index} className="text-2xl text-muted-foreground font-medium">
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
