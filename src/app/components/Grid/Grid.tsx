import { useThemeModeBackgroundColor } from '../../theme/hooks/useThemeModeBackgroundColor';

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
  variant,
  ...props
}: GridProps) {
  const backgroundColor = useThemeModeBackgroundColor(variant);

  return (
    <GridContainer
      as={Component}
      size={size}
      container={container}
      direction={direction}
      align={align}
      justify={justify}
      backgroundColor={backgroundColor}
      {...props}
    >
      {children}
    </GridContainer>
  );
}
