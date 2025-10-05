export default function NeuralBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <div className="absolute inset-0 bg-gradient-to-br from-[hsl(220,15%,8%)] via-[hsl(200,20%,10%)] to-[hsl(220,15%,8%)]" />
      <div 
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: `
            radial-gradient(circle at 20% 30%, hsl(190 85% 55% / 0.15) 0%, transparent 50%),
            radial-gradient(circle at 80% 70%, hsl(190 85% 55% / 0.1) 0%, transparent 50%),
            radial-gradient(circle at 40% 80%, hsl(190 85% 55% / 0.12) 0%, transparent 40%)
          `
        }}
      />
      <svg className="absolute inset-0 w-full h-full opacity-20">
        <defs>
          <pattern id="neural-grid" width="100" height="100" patternUnits="userSpaceOnUse">
            <circle cx="50" cy="50" r="1.5" fill="hsl(190 85% 55%)" opacity="0.4" />
            <line x1="50" y1="50" x2="100" y2="0" stroke="hsl(190 85% 55%)" strokeWidth="0.5" opacity="0.2" />
            <line x1="50" y1="50" x2="0" y2="100" stroke="hsl(190 85% 55%)" strokeWidth="0.5" opacity="0.2" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#neural-grid)" />
      </svg>
    </div>
  );
}
