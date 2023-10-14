import { useDevice } from 'contexts/DeviceContext/DeviceContext.hooks';
import PosterCard from 'components/PosterCard/PosterCard';

import { ProjectDescriptionTitle } from './MissionStatementSection.styles';
import SectionContainer from 'components/SectionContainer/SectionContainer';

export default function MissionStatementSection() {
  const { isLaptop, isPhone } = useDevice();

  return (
    <SectionContainer style={{ paddingTop: isPhone ? 0 : 'unset' }}>
      <PosterCard
        bgColor="linear-gradient(225deg, #1623A6 0%, #3343D4 29%, #175EAC 73%, #009fd8 100%)"
        style={{
          minHeight: isLaptop ? 400 : 'unset',
          maxWidth: 1056,
          position: 'relative',
        }}
      >
        <ProjectDescriptionTitle variant="title3" color="level5">
          Our mission is to facilitate the development of the next generation of
          carbon projects.
        </ProjectDescriptionTitle>
      </PosterCard>
    </SectionContainer>
  );
}
