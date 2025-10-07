import chameleon1 from "@assets/stock_images/chameleon_changing_c_79e0fb76.jpg";
import chameleon2 from "@assets/stock_images/chameleon_changing_c_744a3f89.jpg";
import chameleon3 from "@assets/stock_images/chameleon_changing_c_761e6962.jpg";
import octopus1 from "@assets/stock_images/octopus_camouflage_u_c3291d1b.jpg";
import octopus2 from "@assets/stock_images/octopus_camouflage_u_032b33bc.jpg";
import octopus3 from "@assets/stock_images/octopus_camouflage_u_e249e7d1.jpg";
import arcticFox1 from "@assets/stock_images/arctic_fox_winter_wh_e53617a0.jpg";
import arcticFox2 from "@assets/stock_images/arctic_fox_winter_wh_2ef11a3d.jpg";
import cuttlefish1 from "@assets/stock_images/cuttlefish_camouflag_890799bf.jpg";
import cuttlefish2 from "@assets/stock_images/cuttlefish_camouflag_774f53ef.jpg";

export default function ImagePreview() {
  const categories = [
    {
      title: "🦎 Chameleons - Masters of Color Adaptation",
      images: [
        { src: chameleon1, name: "chameleon_changing_c_79e0fb76.jpg" },
        { src: chameleon2, name: "chameleon_changing_c_744a3f89.jpg" },
        { src: chameleon3, name: "chameleon_changing_c_761e6962.jpg" },
      ]
    },
    {
      title: "🐙 Octopuses - Intelligent Camouflage",
      images: [
        { src: octopus1, name: "octopus_camouflage_u_c3291d1b.jpg" },
        { src: octopus2, name: "octopus_camouflage_u_032b33bc.jpg" },
        { src: octopus3, name: "octopus_camouflage_u_e249e7d1.jpg" },
      ]
    },
    {
      title: "🦊 Arctic Foxes - Seasonal Adaptation",
      images: [
        { src: arcticFox1, name: "arctic_fox_winter_wh_e53617a0.jpg" },
        { src: arcticFox2, name: "arctic_fox_winter_wh_2ef11a3d.jpg" },
      ]
    },
    {
      title: "🦑 Cuttlefish - Pattern Changing Masters",
      images: [
        { src: cuttlefish1, name: "cuttlefish_camouflag_890799bf.jpg" },
        { src: cuttlefish2, name: "cuttlefish_camouflag_774f53ef.jpg" },
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-background p-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-primary text-center mb-12">
          🦎 Adaptive Nature Images - Pick Your Favorites!
        </h1>

        {categories.map((category, idx) => (
          <div key={idx} className="mb-16">
            <h2 className="text-2xl font-bold text-primary mb-6 pb-3 border-b-2 border-primary">
              {category.title}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {category.images.map((image, imgIdx) => (
                <div key={imgIdx} className="bg-card border border-border rounded-lg p-4">
                  <img 
                    src={image.src} 
                    alt={image.name}
                    className="w-full h-64 object-cover rounded cursor-pointer hover:scale-105 transition-transform"
                  />
                  <p className="mt-3 text-xs text-muted-foreground font-mono">
                    {image.name}
                  </p>
                </div>
              ))}
            </div>
          </div>
        ))}

        <div className="text-center mt-16 p-8 bg-card border border-border rounded-lg">
          <p className="text-xl text-primary mb-3">
            Pick your favorites and let me know which ones you'd like to use!
          </p>
          <p className="text-muted-foreground">
            Consider: Which for Hero section? Which for Features section?
          </p>
        </div>
      </div>
    </div>
  );
}
