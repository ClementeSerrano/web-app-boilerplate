import styled from 'styled-components';
import { animated } from 'react-spring';
import Grid from '../Grid/Grid';

export const DialogBackdrop = styled(animated.div)`
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  left: 0;
  top: 0;
  width: 100%;
  height: 100vh;
  z-index: 200;
  background-color: ${({ theme }) =>
    theme.mode === 'dark'
      ? 'rgba(25, 26, 35, 0.3)'
      : 'rgba(255, 255, 255, 0.65)'};
  overflow: hidden;
`;

export const DialogContainer = styled(animated(Grid))`
  position: fixed;
  animation-duration: 0.75s;
  width: 25vw;
  border-radius: ${({ theme }) => theme.shape.borderRadius.sm}px;
  background-color: ${({ theme }) =>
    theme.mode === 'dark'
      ? theme.palette.background.level2
      : theme.palette.background.level1};

  border: ${({ theme }) =>
    theme.mode === 'dark'
      ? `1px solid ${theme.palette.background.level3}`
      : 'unset'};
  box-shadow: rgb(0 0 0 / 50%) 0px 16px 70px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 3;
  max-height: 75vh;
`;

export const DialogBaseHeader = styled.header<{ childrenCount: number }>`
  display: flex;
  align-items: center;
  justify-content: ${({ childrenCount }) =>
    childrenCount > 1 ? 'space-between' : 'flex-end'};
  width: 100%;
  margin-bottom: ${({ theme }) => theme.spacing.sm}px;
`;
