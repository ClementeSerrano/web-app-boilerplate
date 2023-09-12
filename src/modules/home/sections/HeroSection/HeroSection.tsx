import { useTheme } from 'styled-components';

import ArrowIcon from 'lib/assets/icons/ArrowIcon';

import {
  HomePageSubtitle,
  HomePageTitle,
  HomePageGoToAppButton,
} from './HeroSection.styles';
import Grid from 'components/Grid/Grid';
import { useLayout } from 'contexts/LayoutContext/LayoutContext.hooks';
import { CSSProperties } from 'react';
import InformativePill from 'components/InformativePill/InformativePill';
import BoltCircledIcon from 'lib/assets/icons/BoltCircledIcon';

/**
 * Home module main page.
 */
export default function HeroSection() {
  const theme = useTheme();

  const { footerHeight } = useLayout();

  const handleRiskAssessmentTrialClick = () =>
    (window.location.href =
      'https://app.climeinvest.com/risk-assessments/trial');

  const handleGoToAppClick = () =>
    (window.location.href = 'https://app.climeinvest.com');

  const styles: CSSProperties = {
    paddingTop: 0,
    paddingBottom: 0,
    height: `calc(100vh - ${footerHeight}px)`,
  };

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
        style={{ marginBottom: theme.spacing.sm }}
      >
        <BoltCircledIcon
          height={16}
          style={{ marginRight: theme.spacing.xs }}
        />
        Try our new AI risk assessment tool
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
    </Grid>
  );
}
