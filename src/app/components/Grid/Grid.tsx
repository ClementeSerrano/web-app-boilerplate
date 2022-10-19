import { GridProps } from "./Grid.types";
import { GridContainer } from "./Grid.styles";

export default function Grid({
  children,
  as: Component = "div",
  container = false,
  size = "md",
  format = "main",
  ...props
}: GridProps) {
  return (
    <GridContainer as={Component} size={size} container={container} {...props}>
      {children}
    </GridContainer>
  );
}
