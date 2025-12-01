import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import SupportedPlatforms from "@/components/SupportedPlatforms";
import Features from "@/components/Features";
import AgenticWorkflows from "@/components/AgenticWorkflows";
import HowItWorks from "@/components/HowItWorks";
import CaseStudies from "@/components/CaseStudies";
import Pricing from "@/components/Pricing";
import SecurityCompliance from "@/components/SecurityCompliance";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <Hero />
        <SupportedPlatforms />
        <Features />
        <AgenticWorkflows />
        <HowItWorks />
        <CaseStudies />
        <Pricing />
        <SecurityCompliance />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
