import styled from 'styled-components';

export const ProjectsCardsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(24rem, 1fr));
  width: 100%;
  max-width: 1200px;
  margin: auto;

  @media (max-width: 600px) {
    grid-template-columns: repeat(auto-fill, minmax(8rem, 1fr));
  }
`;

export const ProjectsSectionTitle = styled.h1`
  font-size: 1rem;
  font-weight: 400;
  letter-spacing: 0.2rem;
  line-height: 1.5;
  text-transform: uppercase;
  color: ${({ theme }) => theme.palette.primary.main};
  margin-bottom: 24px;
  text-align: center;

  @media (max-width: 600px) {
    font-size: 14px;
  }
`;

export const ProjectLink = styled.a`
  justify-self: center;
`;

export const ProjectLogoImg = styled.img`
  height: 124px;

  @media (max-width: 600px) {
    height: 88px;
  }
`;
