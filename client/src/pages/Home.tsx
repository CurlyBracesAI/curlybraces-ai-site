import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import RosieDetails from "@/components/RosieDetails";
import AgenticWorkflows from "@/components/AgenticWorkflows";
import HowItWorks from "@/components/HowItWorks";
import CaseStudies from "@/components/CaseStudies";
import SecurityCompliance from "@/components/SecurityCompliance";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <Hero />
        <Features />
        <RosieDetails />
        <AgenticWorkflows />
        <HowItWorks />
        <CaseStudies />
        <SecurityCompliance />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
