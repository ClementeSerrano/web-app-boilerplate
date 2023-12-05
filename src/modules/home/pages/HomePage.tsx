import Grid from 'components/Grid/Grid';
import { useLayout } from 'contexts/LayoutContext/LayoutContext.hooks';
import HeroSection from '../sections/HeroSection/HeroSection';

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
    </Grid>
  );
}
