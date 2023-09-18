import { useTheme } from 'styled-components';
import { useLocation } from 'react-router-dom';

import ArrowIcon from 'lib/assets/icons/ArrowIcon';

import { HomePageSubtitle, HomePageTitle } from './HeroSection.styles';
import InformativePill from 'components/InformativePill/InformativePill';
import BoltCircledIcon from 'lib/assets/icons/BoltCircledIcon';
import SectionContainer from 'components/SectionContainer/SectionContainer';
import Navlink from 'components/Navlink/Navlink';
import { ROUTE_PATHS } from 'routes/routes.constants';

/**
 * Home module main page.
 */
export default function HeroSection() {
  const location = useLocation();

  const theme = useTheme();

  const handleRiskAssessmentTrialClick = () =>
    (window.location.href =
      'https://app.climeinvest.com/risk-assessments/trial');

  return (
    <>
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

        <Navlink
          to={ROUTE_PATHS.waitlistRegister}
          format="button"
          state={{ backgroundLocation: location }}
          style={{ marginLeft: theme.spacing.sm, marginTop: theme.spacing.md }}
        >
          Sign up{' '}
          <ArrowIcon height={14} style={{ marginLeft: theme.spacing.xxs }} />
        </Navlink>
      </SectionContainer>
    </>
  );
}
