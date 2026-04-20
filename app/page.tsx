import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { ExperienceSection } from "@/components/ExperienceSection";
import { IASection } from "@/components/IASection";
import { CompetencesSection } from "@/components/CompetencesSection";
import { PortfolioSection } from "@/components/PortfolioSection";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { ContactSection } from "@/components/ContactSection";

export default function Home() {
  return (
    <main className="relative w-full overflow-x-hidden">
      <Navbar />
      <HeroSection />
      <ExperienceSection />
      <IASection />
      <CompetencesSection />
      <PortfolioSection />
      <TestimonialsSection />
      <ContactSection />
    </main>
  );
}
