import { GridProps } from './Grid.interfaces';
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
  fluid,
  maxHeight,
  maxWidth,
  bordered,
  ...props
}: GridProps) {
  return (
    <GridContainer
      as={Component}
      $size={size}
      $container={container}
      $direction={direction}
      $align={align}
      $justify={justify}
      $variant={variant}
      $fluid={fluid}
      $maxHeight={maxHeight}
      $maxWidth={maxWidth}
      $bordered={bordered}
      {...props}
    >
      {children}
    </GridContainer>
  );
}
