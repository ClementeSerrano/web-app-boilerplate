import { useTheme } from 'styled-components';

import { useDevice } from '../../../../common/contexts/DeviceContext/DeviceContext.hooks';
import SectionContainer from '../../../../common/components/SectionContainer/SectionContainer';
import Typography from '../../../../common/components/Typography/Typography';

import ProjectsDarkMode from '../../../../common/assets/images/features/projects-dark-mode.png';
import ProjectsLightMode from '../../../../common/assets/images/features/projects-light-mode.png';

import ProjectPageMobileImgDarkMode from '../../../../common/assets/images/features/project-details-mobile-dark-mode.png';
import ProjectPageMobileImgLightMode from '../../../../common/assets/images/features/project-details-mobile-light-mode.png';

import PortfolioDarkMode from '../../../../common/assets/images/features/portfolio-dark-mode.png';
import PortfolioLightMode from '../../../../common/assets/images/features/portfolio-light-mode.png';

import PortfolioMobileDarkMode from '../../../../common/assets/images/features/portfolio-mobile-dark-mode.png';
import PortfolioMobileLightMode from '../../../../common/assets/images/features/portfolio-mobile-light-mode.png';
import OnPhonePortfolioMobileDarkMode from '../../../../common/assets/images/features/mobile/portfolio-mobile-dark-mode.png';
import OnPhonePortfolioMobileLightMode from '../../../../common/assets/images/features/mobile/portfolio-mobile-light-mode.png';

import ProjectsMobileImgDarkMode from '../../../../common/assets/images/features/projects-mobile-dark-mode.png';
import ProjectsMobileImgLightMode from '../../../../common/assets/images/features/projects-mobile-light-mode.png';
import OnMobileProjectsMobileImgDarkMode from '../../../../common/assets/images/features/mobile/projects-mobile-dark-mode.png';
import OnMobileProjectsMobileImgLightMode from '../../../../common/assets/images/features/mobile/projects-mobile-light-mode.png';

import BuyTokensMobileImgDarkMode from '../../../../common/assets/images/features/buy-tokens-mobile-dark-mode.png';
import BuyTokensMobileImgLightMode from '../../../../common/assets/images/features/buy-tokens-mobile-light-mode.png';

import AIVerificationMobileImgDarkMode from '../../../../common/assets/images/features/ai-verification-mobile-dark-mode.png';
import AIVerificationMobileImgLightMode from '../../../../common/assets/images/features/ai-verification-mobile-light-mode.png';
import OnPhoneAIVerificationMobileImgDarkMode from '../../../../common/assets/images/features/mobile/ai-verification-mobile-dark-mode.png';
import OnPhoneAIVerificationMobileImgLightMode from '../../../../common/assets/images/features/mobile/ai-verification-mobile-light-mode.png';

import {
  FeaturesSubsectionContainer,
  FeaturesTextsContainer,
  FeaturesMockupsContainer,
  FeatureImg,
} from './FeaturesSection.styles';

export default function FeaturesSection() {
  const { isPhone } = useDevice();
  const theme = useTheme();

  return (
    <SectionContainer withSeparator>
      <FeaturesSubsectionContainer
        style={{ flexDirection: isPhone ? 'column-reverse' : 'row' }}
      >
        <FeaturesTextsContainer>
          <Typography
            as="h1"
            variant="title3"
            style={{
              maxWidth: 380,
              textAlign: isPhone ? 'center' : 'left',
              marginBottom: theme.spacing.lg,
            }}
          >
            Mitigate climate change.
          </Typography>

          <Typography
            as="p"
            variant="title5"
            color="level3"
            style={{
              maxWidth: 380,
              textAlign: isPhone ? 'center' : 'left',
            }}
          >
            Directly contribute to building a nature-based project that supports
            biodiversity & local communities. This will mitigate climate change
            and help create a sustainable future for us all.
          </Typography>
        </FeaturesTextsContainer>

        <FeaturesMockupsContainer position="right">
          {isPhone ? (
            <FeatureImg
              src={
                theme.mode === 'dark'
                  ? OnMobileProjectsMobileImgDarkMode
                  : OnMobileProjectsMobileImgLightMode
              }
            />
          ) : (
            <FeatureImg
              src={theme.mode === 'dark' ? ProjectsDarkMode : ProjectsLightMode}
            />
          )}
        </FeaturesMockupsContainer>
      </FeaturesSubsectionContainer>

      <FeaturesSubsectionContainer>
        <FeaturesMockupsContainer position="left">
          {isPhone ? (
            <FeatureImg
              src={
                theme.mode === 'dark'
                  ? OnPhonePortfolioMobileDarkMode
                  : OnPhonePortfolioMobileLightMode
              }
            />
          ) : (
            <>
              <FeatureImg
                src={
                  theme.mode === 'dark' ? PortfolioDarkMode : PortfolioLightMode
                }
              />

              <FeatureImg
                src={
                  theme.mode === 'dark'
                    ? PortfolioMobileDarkMode
                    : PortfolioMobileLightMode
                }
                style={{ position: 'absolute', right: 88, top: 24 }}
              />
            </>
          )}
        </FeaturesMockupsContainer>

        <FeaturesTextsContainer
          style={{ alignItems: isPhone ? 'center' : 'flex-end' }}
        >
          <Typography
            as="h1"
            variant="title3"
            style={{
              maxWidth: 380,
              textAlign: isPhone ? 'center' : 'right',
              marginBottom: theme.spacing.lg,
            }}
          >
            Generate attractive returns.
          </Typography>

          <Typography
            as="p"
            variant="title5"
            color="level3"
            style={{
              maxWidth: 380,
              textAlign: isPhone ? 'center' : 'right',
            }}
          >
            Going green doesn't mean compromising on returns. Diversify your
            investment portfolio and invest in projects that have the potential
            to earn 2-4x on average.
          </Typography>
        </FeaturesTextsContainer>
      </FeaturesSubsectionContainer>

      <FeaturesSubsectionContainer
        style={{ flexDirection: isPhone ? 'column-reverse' : 'row' }}
      >
        <FeaturesTextsContainer>
          <Typography
            as="h1"
            variant="title3"
            style={{
              maxWidth: 380,
              textAlign: isPhone ? 'center' : 'left',
              marginBottom: theme.spacing.lg,
            }}
          >
            AI driven due diligence.
          </Typography>

          <Typography
            as="p"
            variant="title5"
            color="level3"
            style={{
              maxWidth: 380,
              textAlign: isPhone ? 'center' : 'left',
            }}
          >
            A curated selection of vetted projects, from reforestation to blue
            carbon schemes. Our state-of-the-art predictive AI model assesses
            each project against stringent financial viability and climate
            impact metrics.
          </Typography>
        </FeaturesTextsContainer>

        <FeaturesMockupsContainer position="right">
          {isPhone ? (
            <FeatureImg
              src={
                theme.mode === 'dark'
                  ? OnPhoneAIVerificationMobileImgDarkMode
                  : OnPhoneAIVerificationMobileImgLightMode
              }
            />
          ) : (
            <>
              <FeatureImg
                src={
                  theme.mode === 'dark'
                    ? ProjectsMobileImgDarkMode
                    : ProjectsMobileImgLightMode
                }
                style={{ marginRight: 16 }}
              />

              <FeatureImg
                src={
                  theme.mode === 'dark'
                    ? ProjectPageMobileImgDarkMode
                    : ProjectPageMobileImgLightMode
                }
                style={{ marginRight: 16 }}
              />

              <FeatureImg
                src={
                  theme.mode === 'dark'
                    ? AIVerificationMobileImgDarkMode
                    : AIVerificationMobileImgLightMode
                }
              />
            </>
          )}
        </FeaturesMockupsContainer>
      </FeaturesSubsectionContainer>

      <FeaturesSubsectionContainer>
        <FeaturesMockupsContainer position="left">
          {isPhone ? (
            <FeatureImg
              src={
                theme.mode === 'dark'
                  ? OnPhonePortfolioMobileDarkMode
                  : OnPhonePortfolioMobileLightMode
              }
            />
          ) : (
            <>
              <FeatureImg
                src={
                  theme.mode === 'dark' ? PortfolioDarkMode : PortfolioLightMode
                }
              />

              <FeatureImg
                src={
                  theme.mode === 'dark'
                    ? BuyTokensMobileImgDarkMode
                    : BuyTokensMobileImgLightMode
                }
                style={{ position: 'absolute', right: 88, top: 24 }}
              />
            </>
          )}
        </FeaturesMockupsContainer>

        <FeaturesTextsContainer
          style={{ alignItems: isPhone ? 'center' : 'flex-end' }}
        >
          <Typography
            as="h1"
            variant="title3"
            style={{
              maxWidth: 380,
              textAlign: isPhone ? 'center' : 'right',
              marginBottom: theme.spacing.lg,
            }}
          >
            Monitor and trade your investment stake.
          </Typography>

          <Typography
            as="p"
            variant="title5"
            color="level3"
            style={{
              maxWidth: 380,
              textAlign: isPhone ? 'center' : 'right',
            }}
          >
            Buy and sell shares in the projects on our trading platform. Once
            the project has reached its financing goal, you can trade your stake
            as the value of the project changes.
          </Typography>
        </FeaturesTextsContainer>
      </FeaturesSubsectionContainer>
    </SectionContainer>
  );
}
