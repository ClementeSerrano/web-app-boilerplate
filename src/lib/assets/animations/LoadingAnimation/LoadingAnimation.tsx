import { useTheme } from "styled-components";

import { LoadingAnimationContainer } from "./LoadingAnimation.styles";
import { LoadingAnimationProps } from "./LoadingAnimation.types";

export default function LoadingAnimation({
  color: baseColor,
  height = 80,
}: LoadingAnimationProps) {
  const theme = useTheme();

  const color = baseColor || theme.palette.primary.main;

  return <LoadingAnimationContainer color={color} height={height} />;
}
