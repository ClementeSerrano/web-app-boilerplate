import {
  ProjectsCardsContainer,
  ProjectsSectionTitle,
  ProjectLink,
  ProjectLogoImg,
} from './ProjectsSection.styles';
import { PROJECTS } from './ProjectsSection.constants';
import SectionContainer from '../../../../common/components/SectionContainer/SectionContainer';
import { useTheme } from 'styled-components';

export default function ProjectsSection() {
  const theme = useTheme();

  return (
    <SectionContainer style={{ paddingTop: theme.spacing.md }}>
      <ProjectsSectionTitle>
        Empowering first-class climate projects
      </ProjectsSectionTitle>

      <ProjectsCardsContainer>
        {PROJECTS.map((project, index) => (
          <ProjectLink
            key={`company-${index}`}
            href={project.domain}
            target="_blank"
          >
            <ProjectLogoImg src={project.logo} />
          </ProjectLink>
        ))}
      </ProjectsCardsContainer>
    </SectionContainer>
  );
}
