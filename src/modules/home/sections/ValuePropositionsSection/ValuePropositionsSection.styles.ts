import styled from 'styled-components';
import Card from '../../../../components/Card/Card';
import Typography from '../../../../components/Typography/Typography';

export const ValuePropositionCardsContainer = styled.div`
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

export const ValuePropositionSubtitle = styled(Typography)`
  margin-top: ${({ theme }) => theme.spacing.lg}px;
  max-width: 1200px;
  text-align: center;
`;

export const ValuePropositionCard = styled(Card)`
  padding: 32px 52px;
  background-color: ${({ theme }) => theme.palette.background.level2};

  @media (max-width: 600px) {
    padding: 32px 24px;
    align-items: center;
  }
`;

export const ValuePropositionIconContainer = styled.div`
  display: flex;
  justify-content: left;
  align-items: center;
  border: 0 solid #000;
  border-radius: 16px;
  margin-bottom: 16px;
`;
