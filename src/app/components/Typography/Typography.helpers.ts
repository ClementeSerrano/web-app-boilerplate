import { DefaultTheme } from 'styled-components';
import { parseSize } from '../../theme/theme.helpers';

import { TypographyProps } from './Typography.types';

export function getTypographyColor({
  variant = 'paragraph1',
  mode,
  palette,
}: Pick<TypographyProps, 'variant'> &
  Pick<DefaultTheme, 'mode' | 'palette'>): string {
  switch (variant) {
    case 'title1':
    case 'title2':
    case 'title3':
    case 'title4':
    case 'title5':
    case 'title6':
    case 'button':
      return mode === 'dark' ? palette.text.light : palette.text.dark;

    case 'subtitle1':
    case 'subtitle2':
    case 'paragraph1':
    case 'paragraph2':
    case 'paragraph3':
      return palette.text.main;

    default:
      return palette.text.main;
  }
}

export function getMobileTypographyFontSize({
  variant = 'paragraph1',
  typography,
}: Pick<TypographyProps, 'variant'> &
  Pick<DefaultTheme, 'typography'>): string {
  switch (variant) {
    case 'title1':
      return parseSize({
        value: typography.fontBaseSize * typography.fontSizeScales.xxxl,
        from: 'px',
        to: 'rem',
        withUnits: true,
      }) as string;
    case 'title2':
    case 'title3':
      return parseSize({
        value: typography.fontBaseSize * typography.fontSizeScales.xxl,
        from: 'px',
        to: 'rem',
        withUnits: true,
      }) as string;
    case 'title4':
    case 'title5':
    case 'title6':
      return parseSize({
        value: typography.fontBaseSize * typography.fontSizeScales.xl,
        from: 'px',
        to: 'rem',
        withUnits: true,
      }) as string;
    case 'paragraph1':
    case 'paragraph2':
    case 'paragraph3':
    case 'subtitle1':
    case 'subtitle2':
    case 'button':
      return parseSize({
        value: typography.fontBaseSize * typography.fontSizeScales.md,
        from: 'px',
        to: 'rem',
        withUnits: true,
      }) as string;
    default:
      return '';
  }
}
