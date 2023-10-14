import { useTheme } from 'styled-components';

import { useDevice } from 'contexts/DeviceContext/DeviceContext.hooks';
import SectionContainer from 'components/SectionContainer/SectionContainer';
import Typography from 'components/Typography/Typography';

import RiskAssessmentTrialDarkMode from 'lib/assets/images/features/risk-assessment-trial-dark-mode.jpg';
import RiskAssessmentTrialLightMode from 'lib/assets/images/features/risk-assessment-trial-light-mode.jpg';
import OnPhoneRiskAssessmentTrialImgDarkMode from 'lib/assets/images/features/mobile/on-mobile-risk-assessment-trial-dark-mode.jpg';
import OnPhoneRiskAssessmentTrialImgLightMode from 'lib/assets/images/features/mobile/on-mobile-risk-assessment-trial-light-mode.jpg';

import RiskAssessmentResultDarkMode from 'lib/assets/images/features/risk-assessment-result-dark-mode.jpg';
import RiskAssessmentResultLightMode from 'lib/assets/images/features/risk-assessment-result-light-mode.jpg';
import MobileRiskAssessmentResultImgDarkMode from 'lib/assets/images/features/mobile/risk-assessment-results-mobile-dark-mode.jpg';
import MobileRiskAssessmentResultImgLightMode from 'lib/assets/images/features/mobile/risk-assessment-results-mobile-light-mode.jpg';
import OnPhoneRiskAssessmentResultDarkMode from 'lib/assets/images/features/mobile/on-mobile-risk-assessment-results-dark-mode.jpg';
import OnPhoneRiskAssessmentResultLightMode from 'lib/assets/images/features/mobile/on-mobile-risk-assessment-results-light-mode.jpg';

import {
  FeaturesSubsectionContainer,
  FeaturesTextsContainer,
  FeaturesMockupsContainer,
  FeaturesImg,
} from './Features.styles';

export default function Features() {
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
              marginBottom: isPhone ? theme.spacing.md : theme.spacing.lg,
            }}
          >
            Upload your project.
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
            Add your project documents. Anyone assessing a carbon removal or
            avoidance project can use our AI model to instantly identify
            co-benefits claims made by a project and assess the impact on
            reputation risk and carbon price.
          </Typography>
        </FeaturesTextsContainer>

        <FeaturesMockupsContainer $position="right">
          {isPhone ? (
            <FeaturesImg
              src={
                theme.mode === 'dark'
                  ? OnPhoneRiskAssessmentTrialImgDarkMode
                  : OnPhoneRiskAssessmentTrialImgLightMode
              }
            />
          ) : (
            <FeaturesImg
              src={
                theme.mode === 'dark'
                  ? RiskAssessmentTrialDarkMode
                  : RiskAssessmentTrialLightMode
              }
            />
          )}
        </FeaturesMockupsContainer>
      </FeaturesSubsectionContainer>

      <FeaturesSubsectionContainer>
        <FeaturesMockupsContainer $position="left">
          {isPhone ? (
            <FeaturesImg
              src={
                theme.mode === 'dark'
                  ? OnPhoneRiskAssessmentResultDarkMode
                  : OnPhoneRiskAssessmentResultLightMode
              }
            />
          ) : (
            <>
              <FeaturesImg
                src={
                  theme.mode === 'dark'
                    ? RiskAssessmentResultDarkMode
                    : RiskAssessmentResultLightMode
                }
              />

              <FeaturesImg
                src={
                  theme.mode === 'dark'
                    ? MobileRiskAssessmentResultImgDarkMode
                    : MobileRiskAssessmentResultImgLightMode
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
              marginBottom: isPhone ? theme.spacing.md : theme.spacing.lg,
            }}
          >
            Reputation impact analysis & co-benefits due diligence.
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
            Receive an instant assessment of a project claims with detailed
            analysis, scores and feedback. Understand how reputation risk and
            carbon price will be impacted by each claim made by the project to
            verify and monitor those claims on an ongoing basis.
          </Typography>
        </FeaturesTextsContainer>
      </FeaturesSubsectionContainer>

      <FeaturesSubsectionContainer style={{ justifyContent: 'center' }}>
        <Typography as="h1" variant="title3" style={{ textAlign: 'center' }}>
          And more coming soon.
        </Typography>
      </FeaturesSubsectionContainer>

      {/* <FeaturesSubsectionContainer>
        <FeaturesMockupsContainer $position="left">
          {isPhone ? (
            <FeaturesImg
              src={
                theme.mode === 'dark'
                  ? OnPhonePortfolioMobileDarkMode
                  : OnPhonePortfolioMobileLightMode
              }
            />
          ) : (
            <>
              <FeaturesImg
                src={
                  theme.mode === 'dark' ? PortfolioDarkMode : PortfolioLightMode
                }
              />

              <FeaturesImg
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
      </FeaturesSubsectionContainer> */}
    </SectionContainer>
  );
}
