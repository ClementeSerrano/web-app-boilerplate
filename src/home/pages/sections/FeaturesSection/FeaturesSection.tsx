import { useTheme } from 'styled-components';

import { useDevice } from '../../../../common/contexts/DeviceContext/DeviceContext.hooks';
import SectionContainer from '../../../../common/components/SectionContainer/SectionContainer';
import Typography from '../../../../common/components/Typography/Typography';

import ProjectsDarkMode from '../../../../common/assets/images/features/projects-dark-mode.png';
import ProjectsLightMode from '../../../../common/assets/images/features/projects-light-mode.png';

import ProjectPageMobileImgDarkMode from '../../../../common/assets/images/features/project-details-mobile-dark-mode.png';
import ProjectPageMobileImgLightMode from '../../../../common/assets/images/features/project-details-mobile-light-mode.png';
import OnPhoneProjectPageMobileImgDarkMode from '../../../../common/assets/images/features/mobile/project-details-mobile-dark-mode.png';
import OnPhoneProjectPageMobileImgLightMode from '../../../../common/assets/images/features/mobile/project-details-mobile-light-mode.png';

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
            Directly contribute to mitigating climate change, supporting
            biodiversity & local communities, and helping to create a
            sustainable future for us all.
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
            for attractive returns and earn 2-4x on average.
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
            Access to quality projects.
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
            A curated selection of high-impact, initiatives, from reforestation
            to blue carbon schemes. Every investment opportunity listed has been
            rigorously evaluated for both impact and financial viability.
          </Typography>
        </FeaturesTextsContainer>

        <FeaturesMockupsContainer position="right">
          {isPhone ? (
            <FeatureImg
              src={
                theme.mode === 'dark'
                  ? OnPhoneProjectPageMobileImgDarkMode
                  : OnPhoneProjectPageMobileImgLightMode
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
                    ? BuyTokensMobileImgDarkMode
                    : BuyTokensMobileImgLightMode
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
                  ? OnPhoneAIVerificationMobileImgDarkMode
                  : OnPhoneAIVerificationMobileImgLightMode
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
                    ? AIVerificationMobileImgDarkMode
                    : AIVerificationMobileImgLightMode
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
            AI-driven due diligence and impact prediction.
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
            A state-of-the-art predictive AI model that assesses each project
            against stringent financial and impact viability metrics. This
            ensures we only work with the highest quality projects.
          </Typography>
        </FeaturesTextsContainer>
      </FeaturesSubsectionContainer>
    </SectionContainer>
  );
}
