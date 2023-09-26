import { useDevice } from 'contexts/DeviceContext/DeviceContext.hooks';
import PosterCard from 'components/PosterCard/PosterCard';
import BgImg from 'lib/assets/images/backgrounds/mission-bg.jpg';

import { ProjectDescriptionTitle } from './MissionStatementSection.styles';
import SectionContainer from 'components/SectionContainer/SectionContainer';

export default function MissionStatementSection() {
  const { isLaptop, isPhone } = useDevice();

  return (
    <SectionContainer style={{ paddingTop: isPhone ? 0 : 'unset' }}>
      <PosterCard
        bgImg={BgImg}
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
