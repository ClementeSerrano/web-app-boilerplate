import { useTheme } from 'styled-components';

import { useDevice } from 'contexts/DeviceContext/DeviceContext.hooks';
import PosterCard from 'components/PosterCard/PosterCard';
import BgImgDarkMode from 'lib/assets/images/backgrounds/mission-bg-dark-mode.jpg';
import BgImgLightMode from 'lib/assets/images/backgrounds/mission-bg-light-mode.jpg';

import { ProjectDescriptionTitle } from './MissionStatementSection.styles';
import SectionContainer from 'components/SectionContainer/SectionContainer';

export default function MissionStatementSection() {
  const { isLaptop, isPhone } = useDevice();
  const theme = useTheme();

  return (
    <SectionContainer style={{ paddingTop: isPhone ? 0 : 'unset' }}>
      <PosterCard
        bgImg={theme.mode === 'dark' ? BgImgDarkMode : BgImgLightMode}
        style={{
          minHeight: isLaptop ? 400 : 'unset',
          maxWidth: 1056,
          position: 'relative',
        }}
      >
        <ProjectDescriptionTitle variant="title4">
          We are building the financial infrastructure needed to power the next
          generation of nature investments.
        </ProjectDescriptionTitle>
      </PosterCard>
    </SectionContainer>
  );
}
