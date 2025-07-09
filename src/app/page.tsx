import ContactSection from "@/components/contact-section";
import ExperienceEducationSection from "@/components/experience-edu-section";
import Footer from "@/components/footer";
import HeroSection from "@/components/hero-section";
import ProjectsSection from "@/components/project-section";
import SkillsSection from "@/components/skills-section";


export default function Home() {
  return (
    <>
      <HeroSection /> 
      <SkillsSection />
      <ProjectsSection />
      <ExperienceEducationSection />
      <ContactSection />
      <Footer />
    </>
  );
}