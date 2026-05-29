import HeroSection from '../sections/HeroSection'
import AboutSection from '../sections/AboutSection'
import SkillsSection from '../sections/SkillsSection'
import ExperienceSection from '../sections/ExperienceSection'
import ProjectsSection from '../sections/ProjectsSection'
import GitHubSection from '../sections/GitHubSection'
import CertificationsSection from '../sections/CertificationsSection'
import ContactSection from '../sections/ContactSection'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <main>
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ExperienceSection />
      <ProjectsSection />
      <GitHubSection />
      <CertificationsSection />
      <ContactSection />
      <Footer />
    </main>
  )
}
