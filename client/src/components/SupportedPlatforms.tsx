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

  const LogoCard = ({ name }: { name: string }) => (
    <div className="flex items-center justify-center h-12">
      <span className="text-lg font-bold text-foreground opacity-90">{name}</span>
    </div>
  );

  return (
    <section id="integrations" className="py-16 px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-4" data-testid="text-platforms-title">
            Works with your existing systems
          </h2>
          <p className="text-base text-muted-foreground max-w-2xl mx-auto" data-testid="text-platforms-subtitle">
            No migration. No retraining. Agent G fits into how you already work.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* EHRs */}
          <div className="bg-card/30 p-8 rounded-2xl border border-card/50">
            <h3 className="text-sm font-semibold text-cyan-400 uppercase tracking-wider mb-8 text-center">
              EHR Platforms
            </h3>
            <div className="flex flex-wrap gap-x-12 gap-y-8 justify-center items-center">
              {ehrPlatforms.map((platform, index) => (
                <LogoCard key={index} name={platform.name} />
              ))}
              <span className="text-muted-foreground text-sm font-medium">and similar platforms</span>
            </div>
          </div>

          {/* Lightweight Workflows */}
          <div className="bg-card/30 p-8 rounded-2xl border border-card/50 flex flex-col">
            <h3 className="text-sm font-semibold text-cyan-400 uppercase tracking-wider mb-8 text-center">
              Lightweight Workflows
            </h3>
            <div className="flex flex-wrap gap-x-12 gap-y-8 justify-center items-center flex-1">
              {workflowPlatforms.map((platform, index) => (
                <LogoCard key={index} name={platform.name} />
              ))}
            </div>
            <p className="text-xs text-muted-foreground text-center mt-6 italic">
              HIPAA-compliant Google Workspace (Docs, Calendar, Gmail)
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
