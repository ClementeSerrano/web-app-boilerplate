import styled from 'styled-components';

export const FeaturesSubsectionContainer = styled.div`
  display: flex;
  margin-top: 80px;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 1200px;
  margin: auto;

  &:not(:first-child) {
    margin-top: 240px;

    @media (max-width: 600px) {
      margin-top: 48px;
    }
  }

  @media (max-width: 600px) {
    flex: 1;
    margin-top: 0;
    flex-direction: column;
  }
`;

export const FeaturesTextsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 424px;
  z-index: 1;

  @media (max-width: 600px) {
    margin: auto;
  }
`;

export const FeaturesMockupsContainer = styled.div<{
  $position?: 'left' | 'right';
}>`
  position: relative;
  display: flex;
  flex: 1;
  justify-content: ${({ $position }) =>
    $position === 'right' ? 'flex-end' : 'flex-start'};

  @media (max-width: 600px) {
    justify-content: center;
  }
`;

export const FeaturesImg = styled.img`
  height: 480px;
  border-radius: 12px;
  box-shadow: 0px 16px 70px 0px rgba(0, 0, 0, 0.2);
  border: 2px solid ${({ theme }) => theme.palette.background.level2};

  @media (max-width: 600px) {
    height: 290px;
    margin-bottom: 24px;
    border-bottom-right-radius: 0;
    border-bottom-left-radius: 0;
    border-bottom-color: transparent;
  }
`;
