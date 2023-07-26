import styled from 'styled-components';

export const CompetitiveAdvantagesCardsContainer = styled.div`
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

export const CompetitiveAdvantagesIconContainer = styled.div`
  display: flex;
  justify-content: left;
  align-items: center;
  border: 0 solid #000;
  border-radius: 16px;
  margin-bottom: 16px;
`;
