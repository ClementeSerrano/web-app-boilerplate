import ProjectsSection from './sections/ProjectsSection/ProjectsSection';
import FeaturesSection from './sections/FeaturesSection/FeaturesSection';
import CompetitiveAdvantagesSection from './sections/CompetitiveAdvantagesSection/CompetitiveAdvantages';
import StartTodaySection from './sections/StartTodaySection/StartTodaySection';
import HeroSection from './sections/HeroSection/HeroSection';

/**
 * Home module main page.
 */
export default function HomePage() {
  return (
    <>
      <HeroSection />

      <ProjectsSection />

      <FeaturesSection />

      <CompetitiveAdvantagesSection />

      <StartTodaySection />
    </>
  );
}
