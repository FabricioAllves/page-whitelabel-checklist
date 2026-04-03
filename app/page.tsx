import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import LogoStrip from "@/components/LogoStrip";
import Features from "@/components/Features";
import Sectors from "@/components/Sectors";
import HowItWorks from "@/components/HowItWorks";
import PhoneMockup from "@/components/PhoneMockup";
import RolesBenefits from "@/components/RolesBenefits";
import Stats from "@/components/Stats";
import Testimonials from "@/components/Testimonials";
import Pricing from "@/components/Pricing";
import FAQ from "@/components/FAQ";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <LogoStrip />
      <Features />
      <Sectors />
      <HowItWorks />
      <PhoneMockup />
      <RolesBenefits />
      <Stats />
      <Testimonials />
      <Pricing />
      <FAQ />
      <CTA />
      <Footer />
    </main>
  );
}
