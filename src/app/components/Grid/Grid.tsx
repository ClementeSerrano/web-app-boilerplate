import { GridProps } from './Grid.types';
import { GridContainer } from './Grid.styles';
import { useTheme } from 'styled-components';
import { useMemo } from 'react';

export default function Grid({
  children,
  as: Component = 'div',
  container = false,
  size = 'lg',
  format: baseFormat,
  direction = 'column',
  align = 'unset',
  justify = 'unset',
  ...props
}: GridProps) {
  const theme = useTheme();

  const format = useMemo(() => {
    if (baseFormat) return baseFormat;

    switch (theme.mode) {
      case 'dark':
        return 'darker';
      case 'light':
        return 'lighter';

      default:
        return 'main';
    }
  }, [baseFormat, theme.mode]);

  return (
    <GridContainer
      as={Component}
      size={size}
      container={container}
      direction={direction}
      align={align}
      justify={justify}
      format={format}
      {...props}
    >
      {children}
    </GridContainer>
  );
}
