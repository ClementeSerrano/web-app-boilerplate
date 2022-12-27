import { lighten } from 'polished';
import { DefaultTheme } from 'styled-components';
import { parseSize } from '../../theme/theme.helpers';

import { NavlinkContainerProps } from './Navlink.types';

export function getNavlinkPadding({
  container,
  size,
  theme,
}: { theme: DefaultTheme } & Pick<
  NavlinkContainerProps,
  'container' | 'size'
>): string {
  if (!container) return '0px';

  switch (size) {
    case 'sm':
      return `${theme.spacing.xxxs}px ${theme.spacing.sm}px`;

    case 'md':
      return `${theme.spacing.xxs}px ${theme.spacing.sm}px`;

    case 'lg':
      return `${theme.spacing.sm}px ${theme.spacing.md}px`;

    default:
      return `${theme.spacing.xs}px ${theme.spacing.sm}px`;
  }
}

export function getNavlinkActiveColor({
  variant,
  theme,
}: { theme: DefaultTheme } & Pick<NavlinkContainerProps, 'variant'>): string {
  return theme.palette[variant].main;
}

export function getNavlinkActiveBgColor({
  variant,
  container,
  theme,
}: { theme: DefaultTheme } & Pick<
  NavlinkContainerProps,
  'variant' | 'container'
>): string {
  if (!container) return 'unset';

  if (variant === 'text') {
    return theme.palette.background.level3;
  }

  switch (theme.mode) {
    case 'light':
      return lighten(0.32, theme.palette[variant].main);

    case 'dark':
      return theme.palette.background.level3;

    default:
      return lighten(0.32, theme.palette[variant].main);
  }
}

export function getNavlinkOnHoverColor({
  variant,
  theme,
}: { theme: DefaultTheme } & Pick<NavlinkContainerProps, 'variant'>): string {
  return theme.palette[variant].light;
}

export function getNavlinkOnHoverBgColor({
  variant,
  container,
  theme,
}: { theme: DefaultTheme } & Pick<
  NavlinkContainerProps,
  'variant' | 'container'
>): string {
  if (!container) return 'unset';

  if (variant === 'text') {
    return theme.palette.background.level4;
  }

  switch (theme.mode) {
    case 'light':
      return lighten(0.34, theme.palette[variant].main);

    case 'dark':
      return theme.palette.background.level4;

    default:
      return lighten(0.34, theme.palette[variant].main);
  }
}

export function getNavlinkFontSize({
  size,
  theme,
}: { theme: DefaultTheme } & Pick<NavlinkContainerProps, 'size'>) {
  if (size === 'sm')
    return parseSize({
      value: theme.typography.fontBaseSize * theme.typography.fontSizeScales.sm,
      from: 'px',
      to: 'rem',
      withUnits: true,
    });

  return theme.typography.button.fontSize;
}
