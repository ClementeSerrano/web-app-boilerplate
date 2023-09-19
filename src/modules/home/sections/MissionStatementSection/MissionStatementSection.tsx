import { useTheme } from 'styled-components';

import { useDevice } from '../../../../contexts/DeviceContext/DeviceContext.hooks';
import PosterCard from '../../../../components/PosterCard/PosterCard';
import OnMobileProjectsMobileImgDarkMode from 'lib/assets/images/features/mobile/projects-mobile-dark-mode.png';
import OnMobileProjectsMobileImgLightMode from 'lib/assets/images/features/mobile/projects-mobile-light-mode.png';

import {
  MissionStatementSectionContainer,
  MissionStatementSectionImg,
  ProjectDescriptionTitle,
} from './MissionStatementSection.styles';

export default function MissionStatementSection() {
  const theme = useTheme();

  const { isLaptop } = useDevice();

  return (
    <MissionStatementSectionContainer>
      <PosterCard
        bgColor={theme.palette.background.level2}
        style={{
          maxWidth: 1056,
          position: 'relative',
        }}
      >
        <ProjectDescriptionTitle variant="title4">
          We are building the financial infrastructure needed to power the next
          generation of nature investments.
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
