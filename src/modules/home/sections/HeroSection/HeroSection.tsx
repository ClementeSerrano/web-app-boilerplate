import { useTheme } from 'styled-components';

import ArrowIcon from 'lib/assets/icons/ArrowIcon';

import { HomePageSubtitle, HomePageTitle } from './HeroSection.styles';
import SectionContainer from 'components/SectionContainer/SectionContainer';
import Button from 'components/Button/Button';
import useGA from 'modules/rum/lib/hooks/useGA';
import { GAEvent } from 'modules/rum/lib/interfaces/ga-event.enum';
import InformativePill from 'components/InformativePill/InformativePill';
import BoltCircledIcon from 'lib/assets/icons/BoltCircledIcon';

/**
 * Home module main page.
 */
export default function HeroSection() {
  const ga = useGA();

  const theme = useTheme();

  const handleGetStartedButtonClick = () => {
    ga.sendCustomEvent(GAEvent.getStartedClick);

    window.location.href = 'https://app.climeinvest.com';
  };

  return (
    <SectionContainer style={{ paddingBottom: theme.spacing.xl }}>
      <InformativePill
        onClick={handleGetStartedButtonClick}
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
        AI-assessments on climate and co-benefits to get pricing and reputation
        impact analysis.
      </HomePageSubtitle>

      <Button
        onClick={handleGetStartedButtonClick}
        style={{ marginLeft: theme.spacing.sm, marginTop: theme.spacing.md }}
      >
        Get started{' '}
        <ArrowIcon height={14} style={{ marginLeft: theme.spacing.xxs }} />
      </Button>
    </SectionContainer>
  );
}
