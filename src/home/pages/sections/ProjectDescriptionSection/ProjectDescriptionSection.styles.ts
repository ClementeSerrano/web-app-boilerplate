import styled from 'styled-components';
import SectionContainer from '../../../../common/components/SectionContainer/SectionContainer';
import Typography from '../../../../common/components/Typography/Typography';

export const ProjectDescriptionSectionContainer = styled(SectionContainer)`
  @media (max-width: 600px) {
    padding: 80px;
  }
`;

export const ProjectDescriptionSectionImg = styled.img`
  position: absolute;
  right: 80px;
  bottom: 0;
  height: 440px;
  border-radius: 12px;
  box-shadow: 0px 16px 70px 0px rgba(0, 0, 0, 0.2);
  border: 2px solid ${({ theme }) => theme.palette.background.level2};
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
  border-bottom-color: transparent;
`;

export const ProjectDescriptionTitle = styled(Typography)`
  max-width: 560px;
  font-weight: ${({ theme }) => theme.typography.fontWeights.bold};
  line-height: 1.3;

  @media (max-width: 600px) {
    font-size: 1.8rem;
  }
`;
