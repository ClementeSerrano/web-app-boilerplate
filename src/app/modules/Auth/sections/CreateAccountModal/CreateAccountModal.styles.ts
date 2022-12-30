import { CSSProperties } from 'react';
import { DefaultTheme } from 'styled-components';

export function getCreateAccountFormContainerStyle(
  theme: DefaultTheme,
): CSSProperties {
  return {
    margin: '0px auto',
    maxWidth: theme.breakpoints.values.xs,
  };
}
