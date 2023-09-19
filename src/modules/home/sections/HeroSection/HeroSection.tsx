import { useTheme } from 'styled-components';

import ArrowIcon from 'lib/assets/icons/ArrowIcon';

import { HomePageSubtitle, HomePageTitle } from './HeroSection.styles';
import SectionContainer from 'components/SectionContainer/SectionContainer';
import Button from 'components/Button/Button';
import useGA from 'modules/rum/lib/hooks/useGA';
import { GAEvent } from 'modules/rum/lib/interfaces/ga-event.enum';

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
    <>
      <SectionContainer style={{ paddingBottom: theme.spacing.xl }}>
        <HomePageTitle variant="title2">
          Restore nature with confidence.
        </HomePageTitle>

        <HomePageSubtitle variant="title5" color="level3">
          The financial infrastructure to power the next generation of nature
          investments.
        </HomePageSubtitle>

        <Button
          onClick={handleGetStartedButtonClick}
          style={{ marginLeft: theme.spacing.sm, marginTop: theme.spacing.md }}
        >
          Get started{' '}
          <ArrowIcon height={14} style={{ marginLeft: theme.spacing.xxs }} />
        </Button>
      </SectionContainer>
    </>
  );
}
