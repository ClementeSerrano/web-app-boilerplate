import Grid from 'components/Grid/Grid';
import { useLayout } from 'contexts/LayoutContext/LayoutContext.hooks';
import FeaturesSection from '../sections/FeaturesSection/Features';
import HeroSection from '../sections/HeroSection/HeroSection';
// import FeaturesSection from '../sections/FeaturesSection/FeaturesSection';
import ValuePropositionsSection from '../sections/ValuePropositionsSection/ValuePropositionsSection';
import MissionStatementSection from '../sections/MissionStatementSection/MissionStatementSection';

/**
 * Home module main page.
 */
export default function HomePage() {
  const { footerHeight } = useLayout();

  return (
    <Grid
      container
      justify="center"
      style={{ padding: 0, minHeight: `calc(100vh - ${footerHeight}px)` }}
    >
      <HeroSection />

      <ValuePropositionsSection />

      <FeaturesSection />

      <MissionStatementSection />
    </Grid>
  );
}
