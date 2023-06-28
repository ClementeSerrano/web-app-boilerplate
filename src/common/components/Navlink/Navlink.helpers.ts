import { lighten } from 'polished';
import { DefaultTheme } from 'styled-components';

import { parseSize } from '../../theme/theme.helpers';

import {
  NavlinkContainerProps,
  NavlinkFormat,
  NavlinkVariant,
} from './Navlink.types';

export function getNavlinkColor({
  format,
  variant,
  theme,
}: { theme: DefaultTheme } & Pick<
  NavlinkContainerProps,
  'variant' | 'format'
>): string {
  const configs: Record<NavlinkFormat, Record<NavlinkVariant, string>> = {
    text: {
      primary: theme.palette.primary.main,
      secondary: theme.palette.secondary.main,
      text: theme.palette.text.level1,
    },
    container: {
      primary: theme.palette.text.level1,
      secondary: theme.palette.text.level1,
      text: theme.palette.text.level1,
    },
    button: {
      primary: theme.palette.primary.contrastText,
      secondary: theme.palette.secondary.contrastText,
      text: theme.palette.text.level5,
    },
  };

  return configs[format][variant];
}

export function getNavlinkBgColor({
  variant,
  format,
  theme,
}: { theme: DefaultTheme } & Pick<
  NavlinkContainerProps,
  'variant' | 'format'
>): string {
  const configs: Record<NavlinkFormat, Record<NavlinkVariant, string>> = {
    text: {
      primary: 'unset',
      secondary: 'unset',
      text: 'unset',
    },
    container: {
      primary: 'unset',
      secondary: 'unset',
      text: 'unset',
    },
    button: {
      primary: theme.palette.primary.main,
      secondary: theme.palette.secondary.main,
      text: theme.palette.text.level3,
    },
  };

  return configs[format][variant];
}

export function getNavlinkActiveColor({
  variant,
  format,
  theme,
}: { theme: DefaultTheme } & Pick<
  NavlinkContainerProps,
  'variant' | 'format'
>): string {
  const configs: Record<NavlinkFormat, Record<NavlinkVariant, string>> = {
    text: {
      primary: theme.palette.primary.dark,
      secondary: theme.palette.secondary.dark,
      text: theme.palette.text.level3,
    },
    container: {
      primary: theme.palette.primary.main,
      secondary: theme.palette.secondary.main,
      text: theme.palette.text.level2,
    },
    button: {
      primary: theme.palette.primary.contrastText,
      secondary: theme.palette.secondary.contrastText,
      text: theme.palette.text.level2,
    },
  };

  return configs[format][variant];
}

export function getNavlinkActiveBgColor({
  format,
  variant,
  theme,
}: { theme: DefaultTheme } & Pick<
  NavlinkContainerProps,
  'variant' | 'format'
>): string {
  const configs: Record<NavlinkFormat, Record<NavlinkVariant, string>> = {
    text: {
      primary: theme.palette.primary.dark,
      secondary: theme.palette.secondary.dark,
      text: theme.palette.text.level3,
    },
    container: {
      primary:
        theme.mode === 'light'
          ? lighten(0.32, theme.palette.primary.main)
          : theme.palette.background.level2,
      secondary:
        theme.mode === 'light'
          ? lighten(0.32, theme.palette.secondary.main)
          : theme.palette.background.level2,
      text: theme.palette.background.level5,
    },
    button: {
      primary: theme.palette.primary.dark,
      secondary: theme.palette.secondary.dark,
      text: theme.palette.text.level2,
    },
  };

  return configs[format][variant];
}

export function getNavlinkOnHoverColor({
  format,
  variant,
  theme,
}: { theme: DefaultTheme } & Pick<
  NavlinkContainerProps,
  'format' | 'variant'
>): string {
  const configs: Record<NavlinkFormat, Record<NavlinkVariant, string>> = {
    text: {
      primary: theme.palette.primary.dark,
      secondary: theme.palette.secondary.dark,
      text: theme.palette.text.level3,
    },
    container: {
      primary: theme.palette.primary.main,
      secondary: theme.palette.secondary.main,
      text: theme.palette.text.level2,
    },
    button: {
      primary: theme.palette.primary.contrastText,
      secondary: theme.palette.secondary.contrastText,
      text: theme.palette.text.level2,
    },
  };

  return configs[format][variant];
}

export function getNavlinkOnHoverBgColor({
  variant,
  format,
  theme,
}: { theme: DefaultTheme } & Pick<
  NavlinkContainerProps,
  'variant' | 'format'
>): string {
  const configs: Record<NavlinkFormat, Record<NavlinkVariant, string>> = {
    text: {
      primary: 'unset',
      secondary: 'unset',
      text: 'unset',
    },
    container: {
      primary:
        theme.mode === 'light'
          ? lighten(0.32, theme.palette.primary.main)
          : theme.palette.background.level2,
      secondary:
        theme.mode === 'light'
          ? lighten(0.32, theme.palette.secondary.main)
          : theme.palette.background.level2,
      text: theme.palette.background.level5,
    },
    button: {
      primary: theme.palette.primary.dark,
      secondary: theme.palette.secondary.dark,
      text: theme.palette.text.level2,
    },
  };

  return configs[format][variant];
}

export function getNavlinkPadding({
  format,
  size,
  theme,
}: { theme: DefaultTheme } & Pick<
  NavlinkContainerProps,
  'format' | 'size'
>): string {
  if (format === 'text') return '0px';

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
