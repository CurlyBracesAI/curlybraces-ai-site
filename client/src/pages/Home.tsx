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
        <section id="agent-g-definition" className="py-12 bg-background border-y border-card/20">
          <div className="max-w-4xl mx-auto px-6">
            <p className="text-xl md:text-2xl text-foreground text-center leading-relaxed italic">
              Agent G is an AI assistant built for mental health and wellness practices to handle the messy, time-consuming work that happens before a patient ever receives care. It manages inbound inquiries, evaluates fit, follows up thoughtfully, and prepares clean hand-offs to existing systems — without touching clinical notes, scheduling, or billing.
            </p>
          </div>
        </section>
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
