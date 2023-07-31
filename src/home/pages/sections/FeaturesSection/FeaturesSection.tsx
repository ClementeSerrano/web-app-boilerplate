import { useTheme } from 'styled-components';

import { useDevice } from '../../../../common/contexts/DeviceContext/DeviceContext.hooks';
import SectionContainer from '../../../../common/components/SectionContainer/SectionContainer';
import Typography from '../../../../common/components/Typography/Typography';

import ProjectsDarkMode from '../../../../common/assets/images/features/projects-dark-mode.png';
import ProjectsLightMode from '../../../../common/assets/images/features/projects-light-mode.png';
import ProjectPageMobileImgDarkMode from '../../../../common/assets/images/features/project-details-mobile-dark-mode.png';
import ProjectPageMobileImgLightMode from '../../../../common/assets/images/features/project-details-mobile-light-mode.png';
import PortfolioDarkMode from '../../../../common/assets/images/features/portfolio-dark-mode.png';
import PortfolioMobileDarkMode from '../../../../common/assets/images/features/portfolio-mobile-dark-mode.png';
import PortfolioLightMode from '../../../../common/assets/images/features/portfolio-light-mode.png';
import PortfolioMobileLightMode from '../../../../common/assets/images/features/portfolio-mobile-light-mode.png';
import ProjectsMobileImgDarkMode from '../../../../common/assets/images/features/projects-mobile-dark-mode.png';
import ProjectsMobileImgLightMode from '../../../../common/assets/images/features/projects-mobile-light-mode.png';

import {
  FeaturesSubsectionContainer,
  FeaturesTextsContainer,
  FeaturesIconsContainer,
  FeatureImg,
} from './FeaturesSection.styles';

export default function FeaturesSection() {
  const { isPhone } = useDevice();
  const theme = useTheme();

  return (
    <SectionContainer withSeparator>
      <FeaturesSubsectionContainer>
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
            style={{ maxWidth: 380 }}
          >
            Directly contribute to mitigating climate change, supporting
            biodiversity & local communities, and helping to create a
            sustainable future for us all.
          </Typography>
        </FeaturesTextsContainer>

        <FeaturesIconsContainer>
          <FeatureImg
            src={theme.mode === 'dark' ? ProjectsDarkMode : ProjectsLightMode}
            style={{
              position: 'absolute',
              top: 0,
              right: 138,
              height: 392,
              border: `2px solid ${theme.palette.background.level2}`,
            }}
          />

          <FeatureImg
            src={
              theme.mode === 'dark'
                ? ProjectPageMobileImgDarkMode
                : ProjectPageMobileImgLightMode
            }
            style={{
              top: 16,
              right: 0,
              height: 360,
              border: `2px solid ${theme.palette.background.level2}`,
            }}
          />
        </FeaturesIconsContainer>
      </FeaturesSubsectionContainer>

      <FeaturesSubsectionContainer>
        <FeaturesIconsContainer>
          <FeatureImg
            src={theme.mode === 'dark' ? PortfolioDarkMode : PortfolioLightMode}
            style={{
              position: 'absolute',
              left: 0,
              top: 0,
              height: 312,
              border: `2px solid ${theme.palette.background.level2}`,
            }}
          />

          <FeatureImg
            src={
              theme.mode === 'dark'
                ? PortfolioMobileDarkMode
                : PortfolioMobileLightMode
            }
            style={{
              position: 'absolute',
              left: 380,
              top: 28,
              height: 360,
              border: `2px solid ${theme.palette.background.level2}`,
            }}
          />
        </FeaturesIconsContainer>

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

      <FeaturesSubsectionContainer>
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
            style={{ maxWidth: 380 }}
          >
            A curated selection of high-impact, initiatives, from reforestation
            to blue carbon schemes. Every investment opportunity listed has been
            rigorously evaluated for both impact and financial viability.
          </Typography>
        </FeaturesTextsContainer>

        <FeaturesIconsContainer>
          <FeatureImg
            src={
              theme.mode === 'dark'
                ? ProjectsMobileImgDarkMode
                : ProjectsMobileImgLightMode
            }
            style={{
              height: 380,
              position: 'absolute',
              bottom: 0,
              right: 0,
              border: `2px solid ${theme.palette.background.level2}`,
            }}
          />

          <FeatureImg
            src={
              theme.mode === 'dark'
                ? ProjectsMobileImgDarkMode
                : ProjectsMobileImgLightMode
            }
            style={{
              height: 380,
              position: 'absolute',
              bottom: 0,
              right: 431,
              border: `2px solid ${theme.palette.background.level2}`,
            }}
          />

          <FeatureImg
            src={
              theme.mode === 'dark'
                ? ProjectsMobileImgDarkMode
                : ProjectsMobileImgLightMode
            }
            style={{
              height: 480,
              position: 'absolute',
              bottom: 0,
              right: 192,
              border: `2px solid ${theme.palette.background.level2}`,
            }}
          />
        </FeaturesIconsContainer>
      </FeaturesSubsectionContainer>

      <FeaturesSubsectionContainer>
        <FeaturesIconsContainer>
          <FeatureImg
            src={theme.mode === 'dark' ? PortfolioDarkMode : PortfolioLightMode}
            style={{
              position: 'absolute',
              left: 0,
              top: 0,
              height: 312,
              border: `2px solid ${theme.palette.background.level2}`,
            }}
          />

          <FeatureImg
            src={
              theme.mode === 'dark'
                ? PortfolioMobileDarkMode
                : PortfolioMobileLightMode
            }
            style={{
              position: 'absolute',
              left: 380,
              top: 28,
              height: 360,
              border: `2px solid ${theme.palette.background.level2}`,
            }}
          />
        </FeaturesIconsContainer>

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
