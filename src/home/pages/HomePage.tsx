import HeroSection from './sections/HeroSection/HeroSection';
import ProblemStatementSection from './sections/ProblemStatementSection/ProblemStatementSection';
import FeaturesSection from './sections/FeaturesSection/FeaturesSection';
import HowItWorksSection from './sections/HowItWorksSection/HowItWorksSection';
import StartTodaySection from './sections/StartTodaySection/StartTodaySection';
import MissionStatementSection from './sections/MissionStatementSection/MissionStatementSection';

/**
 * Home module main page.
 */
export default function HomePage() {
  return (
    <>
      <HeroSection />

      <ProblemStatementSection />

      <FeaturesSection />

      <HowItWorksSection />

      <MissionStatementSection />

      <StartTodaySection />
    </>
  );
}
