export default function SupportedPlatforms() {
  const ehrPlatforms = [
    { name: "TherapyNotes", logo: "https://cdn.brandfetch.io/therapynotes.com/logo?format=svg&width=200" },
    { name: "SimplePractice", logo: "https://cdn.brandfetch.io/simplepractice.com/logo?format=svg&width=200" },
    { name: "TheraNest", logo: "" },
    { name: "Jane", logo: "" }
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
    <section id="integrations" className="py-12 md:py-24 px-6 bg-card border-t border-border/10">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-3" data-testid="text-platforms-title">
            Works with your existing systems
          </h2>
          <p className="text-sm text-muted-foreground max-w-2xl mx-auto leading-relaxed" data-testid="text-platforms-subtitle">
            No migration. No retraining. Agent G fits into how you already work.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-3">
          {/* EHRs */}
          <div className="bg-card/30 p-3 rounded-lg border border-card/50">
            <div className="flex justify-center mb-2">
              <span className="px-3 py-0.5 rounded-full bg-cyan-500 text-white text-[9px] font-bold uppercase tracking-wider shadow-sm">
                EHR Platforms
              </span>
            </div>
            <div className="flex flex-wrap gap-x-6 gap-y-1 justify-center items-center">
              {ehrPlatforms.map((platform, index) => (
                <LogoCard key={index} name={platform.name} />
              ))}
              <span className="text-muted-foreground text-sm font-medium opacity-60">and similar platforms</span>
            </div>
          </div>

          {/* Lightweight Workflows */}
          <div className="bg-card/30 p-3 rounded-lg border border-card/50 flex flex-col">
            <div className="flex justify-center mb-2">
              <span className="px-3 py-0.5 rounded-full bg-violet-500 text-white text-[9px] font-bold uppercase tracking-wider shadow-sm">
                Lightweight Workflows
              </span>
            </div>
            <div className="flex flex-wrap gap-x-6 gap-y-1 justify-center items-center flex-1">
              {workflowPlatforms.map((platform, index) => (
                <LogoCard key={index} name={platform.name} />
              ))}
            </div>
            <p className="text-sm text-muted-foreground text-center mt-1 italic opacity-70">
              HIPAA-compliant Google Workspace (Docs, Calendar, Gmail)
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
