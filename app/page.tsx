// ── Root Page — assembles all sections in order ──────────────────────────────
import Navbar              from "@/components/Navbar";
import Footer              from "@/components/Footer";
import HeroSection         from "@/sections/HeroSection";
import AboutSection        from "@/sections/AboutSection";
import ProjectsSection     from "@/sections/ProjectsSection";
import ImpactSection       from "@/sections/ImpactSection";
import TrustSection        from "@/sections/TrustSection";
import TeamSection         from "@/sections/TeamSection";
import DonateSection       from "@/sections/DonateSection";
import ContactSection      from "@/sections/ContactSection";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <ImpactSection />
      <TrustSection />
      <TeamSection />
      <DonateSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
