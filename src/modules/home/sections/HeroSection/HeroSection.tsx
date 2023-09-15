import { useTheme } from 'styled-components';
// import Lottie from 'react-lottie';

import ArrowIcon from 'lib/assets/icons/ArrowIcon';

import {
  HomePageSubtitle,
  HomePageTitle,
  HomePageGoToAppButton,
} from './HeroSection.styles';
import InformativePill from 'components/InformativePill/InformativePill';
import BoltCircledIcon from 'lib/assets/icons/BoltCircledIcon';
import SectionContainer from 'components/SectionContainer/SectionContainer';

/**
 * Home module main page.
 */
export default function HeroSection() {
  const theme = useTheme();

  const handleRiskAssessmentTrialClick = () =>
    (window.location.href =
      'https://app.climeinvest.com/risk-assessments/trial');

  const handleGoToAppClick = () =>
    (window.location.href = 'https://app.climeinvest.com');

  return (
    <SectionContainer style={{ paddingBottom: theme.spacing.xl }}>
      <InformativePill
        onClick={handleRiskAssessmentTrialClick}
        style={{ marginBottom: theme.spacing.md }}
      >
        <BoltCircledIcon
          height={16}
          style={{ marginRight: theme.spacing.xxs }}
        />
        Try our community risk assessment AI
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
        Sign up
        <ArrowIcon height={16} style={{ marginLeft: theme.spacing.xxs }} />
      </HomePageGoToAppButton>

      {/* {isLaptop && (
        <Lottie options={animationOptions} height={400} width={400} />
      )} */}
    </SectionContainer>
  );
}
