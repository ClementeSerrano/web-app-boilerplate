import { GridProps } from './Grid.types';
import { GridContainer } from './Grid.styles';

export default function Grid({
  children,
  as: Component = 'div',
  container = false,
  size = 'lg',
  direction = 'column',
  align = 'unset',
  justify = 'unset',
  variant = 'level1',
  ...props
}: GridProps) {
  return (
    <GridContainer
      as={Component}
      size={size}
      container={container}
      direction={direction}
      align={align}
      justify={justify}
      variant={variant}
      {...props}
    >
      {children}
    </GridContainer>
  );
}
