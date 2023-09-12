import { useTheme } from 'styled-components';

import { useDevice } from '../../../../contexts/DeviceContext/DeviceContext.hooks';
import PosterCard from '../../../../components/PosterCard/PosterCard';
import OnMobileProjectsMobileImgDarkMode from '../../../../common/assets/images/features/mobile/projects-mobile-dark-mode.png';
import OnMobileProjectsMobileImgLightMode from '../../../../common/assets/images/features/mobile/projects-mobile-light-mode.png';

import {
  MissionStatementSectionContainer,
  MissionStatementSectionImg,
  ProjectDescriptionTitle,
} from './MissionStatementSection.styles';

export default function MissionStatementSection() {
  const theme = useTheme();

  const { isLaptop } = useDevice();

  return (
    <MissionStatementSectionContainer withSeparator>
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
          <MissionStatementSectionImg
            src={
              theme.mode === 'dark'
                ? OnMobileProjectsMobileImgDarkMode
                : OnMobileProjectsMobileImgLightMode
            }
          />
        )}
      </PosterCard>
    </MissionStatementSectionContainer>
  );
}
