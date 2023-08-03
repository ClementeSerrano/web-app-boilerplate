import { useTheme } from 'styled-components';

import { useDevice } from '../../../../common/contexts/DeviceContext/DeviceContext.hooks';
import PosterCard from '../../../../common/components/PosterCard/PosterCard';
import OnMobileProjectsMobileImgDarkMode from '../../../../common/assets/images/features/mobile/projects-mobile-dark-mode.png';
import OnMobileProjectsMobileImgLightMode from '../../../../common/assets/images/features/mobile/projects-mobile-light-mode.png';

import {
  ProjectDescriptionSectionContainer,
  ProjectDescriptionSectionImg,
  ProjectDescriptionTitle,
} from './ProjectDescriptionSection.styles';

export default function ProjectDescriptionSection() {
  const theme = useTheme();

  const { isLaptop } = useDevice();

  return (
    <ProjectDescriptionSectionContainer withSeparator>
      <PosterCard
        bgColor={theme.palette.background.level2}
        style={{
          maxWidth: 1056,
          position: 'relative',
        }}
      >
        <ProjectDescriptionTitle variant="title3">
          Our mission is to accelerate the development of nature-based projects
          by opening access for investors.
        </ProjectDescriptionTitle>

        {isLaptop && (
          <ProjectDescriptionSectionImg
            src={
              theme.mode === 'dark'
                ? OnMobileProjectsMobileImgDarkMode
                : OnMobileProjectsMobileImgLightMode
            }
          />
        )}
      </PosterCard>
    </ProjectDescriptionSectionContainer>
  );
}
