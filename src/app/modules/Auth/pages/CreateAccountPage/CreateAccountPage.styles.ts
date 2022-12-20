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

export function getCreateAccountTitleStyle(theme: DefaultTheme): CSSProperties {
  return {
    margin: `0px auto ${theme.spacing.md}px auto`,
    maxWidth: theme.breakpoints.values.xs,
  };
}
