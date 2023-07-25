import { useTheme } from 'styled-components';

import { useDevice } from '../../../../common/contexts/DeviceContext/DeviceContext.hooks';
import SectionContainer from '../../../../common/components/SectionContainer/SectionContainer';
import Typography from '../../../../common/components/Typography/Typography';

import BODashImg from '../../../../common/assets/images/features/bo-dash.png';
import BOShoppersImg from '../../../../common/assets/images/features/bo-shoppers.png';
import BOOrdersImg from '../../../../common/assets/images/features/bo-orders.png';
import GalleryHomeImg from '../../../../common/assets/images/features/gallery-home.png';
import GalleryProfileImg from '../../../../common/assets/images/features/gallery-profile.png';
import GalleryCrossSells1Img from '../../../../common/assets/images/features/gallery-crosssells1.png';
import GalleryCrossSells2Img from '../../../../common/assets/images/features/gallery-crosssells2.png';
import GalleryCrossSells3Img from '../../../../common/assets/images/features/gallery-crosssells3.png';

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
    <SectionContainer variant="level2">
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
            By investing in nature-based carbon removal projects, you directly
            contribute to mitigating climate change, supporting biodiversity &
            local communities, and helping to create a sustainable future for us
            all.
          </Typography>
        </FeaturesTextsContainer>

        <FeaturesIconsContainer>
          <FeatureImg
            src={BODashImg}
            style={{
              position: 'absolute',
              top: 0,
              right: 80,
              height: 312,
            }}
          />

          <FeatureImg
            src={BOShoppersImg}
            style={{
              top: 16,
              right: 180,
              height: 360,
            }}
          />

          <FeatureImg
            src={BOOrdersImg}
            style={{
              top: 16,
              right: 0,
              height: 360,
            }}
          />
        </FeaturesIconsContainer>
      </FeaturesSubsectionContainer>

      <FeaturesSubsectionContainer>
        <FeaturesIconsContainer>
          <FeatureImg
            src={GalleryHomeImg}
            style={{
              position: 'absolute',
              left: 0,
              top: 0,
              height: 312,
              border: `2px solid ${theme.palette.background.level2}`,
            }}
          />

          <FeatureImg
            src={GalleryProfileImg}
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
            Going green doesn't mean compromising on returns. Invest directly in
            carefully selected projects that work to combat climate change and
            have the potential for attractive returns.
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
            Access to a curated selection of high-impact, nature-based carbon
            removal projects. From reforestation initiatives to blue carbon
            schemes, every investment opportunity listed has been rigorously
            evaluated for both impact and potential returns.
          </Typography>
        </FeaturesTextsContainer>

        <FeaturesIconsContainer>
          <FeatureImg
            src={GalleryCrossSells1Img}
            style={{
              height: 380,
              position: 'absolute',
              bottom: 0,
              right: 0,
              border: `2px solid ${theme.palette.background.level2}`,
            }}
          />

          <FeatureImg
            src={GalleryCrossSells3Img}
            style={{
              height: 380,
              position: 'absolute',
              bottom: 0,
              right: 431,
              border: `2px solid ${theme.palette.background.level2}`,
            }}
          />

          <FeatureImg
            src={GalleryCrossSells2Img}
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
    </SectionContainer>
  );
}
