import { useTheme } from 'styled-components';
import Lottie from 'react-lottie';

import ArrowIcon from 'lib/assets/icons/ArrowIcon';

import {
  HomePageSubtitle,
  HomePageTitle,
  HomePageGoToAppButton,
} from './HeroSection.styles';
import Grid from 'components/Grid/Grid';
import { useLayout } from 'contexts/LayoutContext/LayoutContext.hooks';
import { useDevice } from 'contexts/DeviceContext/DeviceContext.hooks';
import { CSSProperties } from 'react';
import InformativePill from 'components/InformativePill/InformativePill';
import BoltCircledIcon from 'lib/assets/icons/BoltCircledIcon';
import floatingBlurredCirclesAnimation from 'lib/assets/lotties/floating-blurred-circles-animation.json';

/**
 * Home module main page.
 */
export default function HeroSection() {
  const theme = useTheme();
  const { isPhone } = useDevice();

  const { footerHeight } = useLayout();

  const handleRiskAssessmentTrialClick = () =>
    (window.location.href =
      'https://app.climeinvest.com/risk-assessments/trial');

  const handleGoToAppClick = () =>
    (window.location.href = 'https://app.climeinvest.com');

  const styles: CSSProperties = {
    paddingTop: 24,
    paddingBottom: 0,
    height: `calc(100vh - ${footerHeight + 24}px)`,
  };

  const animationOptions = {
    loop: true,
    autoplay: true,
    animationData: floatingBlurredCirclesAnimation,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };

  const animationSize = isPhone ? 200 : 400;

  return (
    <Grid
      variant="level1"
      container
      maxWidth
      maxHeight
      as="section"
      align="center"
      justify="center"
      size="lg"
      style={styles}
    >
      <InformativePill
        onClick={handleRiskAssessmentTrialClick}
        style={{ marginBottom: theme.spacing.md }}
      >
        <BoltCircledIcon
          height={16}
          style={{ marginRight: theme.spacing.xs }}
        />
        Try our new risk assessments engine
        <ArrowIcon height={12} style={{ marginLeft: theme.spacing.xxs }} />
      </InformativePill>

      <HomePageTitle variant="title2">
        Restore nature with confidence.
      </HomePageTitle>

      <HomePageSubtitle variant="title5" color="level3">
        The financial infrastructure to power the next generation of nature
        investments.
      </HomePageSubtitle>

      <HomePageGoToAppButton onClick={handleGoToAppClick}>
        Get started
        <ArrowIcon height={16} style={{ marginLeft: theme.spacing.xxs }} />
      </HomePageGoToAppButton>

      <Lottie
        options={animationOptions}
        height={animationSize}
        width={animationSize}
      />
    </Grid>
  );
}
