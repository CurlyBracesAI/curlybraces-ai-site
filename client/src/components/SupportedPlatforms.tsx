import { Badge } from "@/components/ui/badge";

export default function SupportedPlatforms() {
  const platforms = [
    { name: "Pipedrive", status: "live" },
    { name: "Wix", status: "live" },
    { name: "HubSpot", status: "coming" },
    { name: "Salesforce", status: "coming" },
    { name: "Zoho", status: "coming" },
    { name: "Close.com", status: "coming" },
    { name: "Webflow", status: "coming" },
    { name: "WordPress", status: "coming" },
    { name: "Monday.com", status: "coming" },
    { name: "Asana", status: "coming" },
    { name: "Shopify", status: "coming" }
  ];

  return (
    <section className="py-8 px-6 bg-background border-y border-border">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-12">
          <p className="text-sm text-muted-foreground font-medium uppercase tracking-wider" data-testid="text-platforms-label">
            Supported Platforms
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 md:gap-8">
            {platforms.map((platform, index) => (
              <div key={index} className="flex items-center gap-2" data-testid={`platform-${platform.name.toLowerCase()}`}>
                <span className="text-lg font-semibold text-foreground">{platform.name}</span>
                {platform.status === "coming" && (
                  <Badge variant="secondary" className="text-xs">
                    Coming Soon
                  </Badge>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
