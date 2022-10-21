import styled, { keyframes } from "styled-components";
import { parseVectorHeight } from "../../theme/theme.helpers";
import { LoadingAnimationProps } from "./LoadingAnimation.types";

const loadingAnimationContainerKeyframe = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

export const LoadingAnimationContainer = styled.div<
  Required<LoadingAnimationProps>
>`
  display: inline-block;
  width: ${({ height }) => parseVectorHeight(height)}
  height: ${({ height }) => parseVectorHeight(height)}

  &:after {
    content: " ";
    display: block;
    width: 50px;
    height: 50px;
    margin: 8px;
    border-radius: 50%;
    border: 4px solid ${({ color }) => color};
    border-color: ${({ color }) => `${color} transparent ${color} transparent`};
    animation: ${loadingAnimationContainerKeyframe} 1.2s linear infinite;
  }
`;
