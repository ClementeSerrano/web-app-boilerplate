import ProjectsSection from './sections/ProblemStatementSection/ProblemStatementSection';
import FeaturesSection from './sections/FeaturesSection/FeaturesSection';
import CompetitiveAdvantagesSection from './sections/HowItWorksSection/HowItWorksSection';
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
