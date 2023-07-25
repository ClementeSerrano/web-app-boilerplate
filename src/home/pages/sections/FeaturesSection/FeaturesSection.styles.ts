import styled from 'styled-components';

export const FeaturesSubsectionContainer = styled.div`
  display: flex;
  position: relative;
  margin-top: 80px;
  justify-content: space-between;
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

export const FeaturesIconsContainer = styled.div`
  flex: 0.4;
  position: relative;

  @media (max-width: 600px) {
    display: none;
  }
`;

export const FeatureImg = styled.img`
  position: absolute;
  height: 400px;
  border-radius: 12px;
  box-shadow: rgb(0 0 0 / 11%) 0px 1px 20px 3px;
`;
