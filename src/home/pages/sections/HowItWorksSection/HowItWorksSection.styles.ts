import styled from 'styled-components';
import Card from '../../../../common/components/Card/Card';
import Typography from '../../../../common/components/Typography/Typography';

export const HowItWorksCardsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(19rem, 1fr));
  gap: 16px;
  max-width: 1200px;
  margin: auto;

  @media (max-width: 600px) {
    grid-template-columns: repeat(auto-fill, minmax(12rem, 1fr));
    max-width: unset;
    margin: unset;
  }
`;

export const HowItWorksCard = styled(Card)`
  padding: 32px 52px;
  background-color: ${({ theme }) => theme.palette.background.level2};

  @media (max-width: 600px) {
    padding: 32px 24px;
    align-items: center;
  }
`;

export const HowItWorksSectionTitle = styled(Typography)`
  text-align: center;
  margin-bottom: ${({ theme }) => theme.spacing.lg}px;
`;

export const HowItWorksTitle = styled(Typography)`
  color: ${({ theme }) => theme.palette.primary.main};
  font-weight: ${({ theme }) => theme.typography.fontWeights.bold};

  @media (max-width: 600px) {
    text-align: center;
  }
`;

export const HowItWorksSubtitle = styled(Typography)`
  margin-bottom: ${({ theme }) => theme.spacing.sm}px;

  @media (max-width: 600px) {
    text-align: center;
  }
`;

export const HowItWorksParagraph = styled(Typography)`
  @media (max-width: 600px) {
    text-align: center;
  }
`;

export const HowItWorksIconContainer = styled.div`
  display: flex;
  justify-content: left;
  align-items: center;
  border: 0 solid #000;
  border-radius: 16px;
  margin-bottom: 16px;
`;
