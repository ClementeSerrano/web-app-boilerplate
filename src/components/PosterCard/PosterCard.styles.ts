import styled from 'styled-components';

export const PosterCardContainer = styled.article`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  overflow: hidden;
  padding: 72px;
  width: calc(100% - 144px);
  height: 100%;
  border-radius: 40px;
  color: ${({ theme }) => theme.colors.white.main};

  @media (max-width: 600px) {
    padding: 32px;
    width: calc(100% - 64px);
  }
`;

export const PosterCardChildrenContainer = styled.div`
  z-index: 1;
`;

export const PosterCardBlackMask = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.2);
`;
