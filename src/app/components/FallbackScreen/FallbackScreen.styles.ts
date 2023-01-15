import styled from 'styled-components';

export const FallbackScreenContainer = styled.section`
  height: 100vh;
  width: 100vw;
  background-color: ${({ theme }) => theme.palette.background.level1};
`;

export const FallbackScreenInnerContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const FallbackScreenTitle = styled.h1`
  margin-top: ${({ theme }) => theme.spacing.sm}px;
  color: ${({ theme }) => theme.palette.text.level1};
  font-size: ${({ theme }) => theme.typography.title3.fontSize};
  font-weight: ${({ theme }) => theme.typography.title3.fontWeight};
`;

export const FallbackScreenParagraph = styled.p`
  margin-top: ${({ theme }) => theme.spacing.xs}px;
  color: ${({ theme }) => theme.palette.text.level2};
  font-size: ${({ theme }) => theme.typography.paragraph1.fontSize};
  font-weight: ${({ theme }) => theme.typography.paragraph1.fontWeight};
  text-align: center;
`;
