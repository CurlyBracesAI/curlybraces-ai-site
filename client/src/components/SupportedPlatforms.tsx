export default function SupportedPlatforms() {
  const ehrPlatforms = [
    { name: "TherapyNotes", logo: "https://cdn.brandfetch.io/therapynotes.com/logo?format=svg&width=200" },
    { name: "SimplePractice", logo: "https://cdn.brandfetch.io/simplepractice.com/logo?format=svg&width=200" }
  ];

  const workflowPlatforms = [
    { name: "Google Workspace", logo: "https://cdn.brandfetch.io/google.com/logo?format=svg&width=200" },
    { name: "Google Calendar", logo: "https://cdn.brandfetch.io/google.com/logo?format=svg&width=200" },
    { name: "Gmail", logo: "https://cdn.brandfetch.io/google.com/logo?format=svg&width=200" }
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
    <section id="integrations" className="py-16 px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4" data-testid="text-platforms-title">
            Works with your existing systems
          </h2>
          <p className="text-base text-muted-foreground max-w-2xl mx-auto" data-testid="text-platforms-subtitle">
            No migration. No retraining. Agent G fits into how you already work.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* EHRs */}
          <div className="bg-card/30 p-8 rounded-2xl border border-card/50">
            <h3 className="text-sm font-semibold text-cyan-400 uppercase tracking-wider mb-6 text-center">
              EHR Platforms
            </h3>
            <div className="flex flex-wrap gap-4 justify-center">
              {ehrPlatforms.map((platform, index) => (
                <LogoCard key={index} name={platform.name} logo={platform.logo} />
              ))}
              <div className="flex flex-col items-center justify-center p-1 w-40 h-40">
                <span className="text-muted-foreground text-sm font-medium text-center">and similar platforms</span>
              </div>
            </div>
          </div>

          {/* Lightweight Workflows */}
          <div className="bg-card/30 p-8 rounded-2xl border border-card/50">
            <h3 className="text-sm font-semibold text-cyan-400 uppercase tracking-wider mb-6 text-center">
              Lightweight Workflows
            </h3>
            <div className="flex flex-wrap gap-4 justify-center">
              {workflowPlatforms.map((platform, index) => (
                <LogoCard key={index} name={platform.name} logo={platform.logo} />
              ))}
            </div>
            <p className="text-xs text-muted-foreground text-center mt-4 italic">
              HIPAA-compliant Google Workspace (Docs, Calendar, Gmail)
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
