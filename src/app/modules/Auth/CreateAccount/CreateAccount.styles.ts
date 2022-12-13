import { CSSProperties } from 'react';
import { DefaultTheme } from 'styled-components';

export function getCreateAccountFormContainerStyle(
  theme: DefaultTheme,
): CSSProperties {
  return {
    marginRight: theme.spacing.lg,
    maxWidth: theme.breakpoints.values.xs,
  };
}
