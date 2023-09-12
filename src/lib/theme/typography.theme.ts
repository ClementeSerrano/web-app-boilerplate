import { parseSize } from '../utils/theme.utils';
import {
  FontSizes,
  FontSizeScales,
  FontWeights,
  ThemeTypography,
} from '../interfaces/theme.interfaces';

const fontBaseSize = 16;

const fontSizeScales: FontSizeScales = {
  xxxxxl: 6,
  xxxxl: 3.75,
  xxxl: 3,
  xxl: 2.125,
  xl: 1.5,
  lg: 1.25,
  md: 1,
  sm: 0.875,
  xs: 0.75,
};

const fontSizes: FontSizes = {
  xxxxxl: parseSize({
    value: fontBaseSize * fontSizeScales.xxxxxl,
    from: 'px',
    to: 'rem',
    withUnits: true,
  }) as string,
  xxxxl: parseSize({
    value: fontBaseSize * fontSizeScales.xxxxl,
    from: 'px',
    to: 'rem',
    withUnits: true,
  }) as string,
  xxxl: parseSize({
    value: fontBaseSize * fontSizeScales.xxxl,
    from: 'px',
    to: 'rem',
    withUnits: true,
  }) as string,
  xxl: parseSize({
    value: fontBaseSize * fontSizeScales.xxl,
    from: 'px',
    to: 'rem',
    withUnits: true,
  }) as string,
  xl: parseSize({
    value: fontBaseSize * fontSizeScales.xl,
    from: 'px',
    to: 'rem',
    withUnits: true,
  }) as string,
  lg: parseSize({
    value: fontBaseSize * fontSizeScales.lg,
    from: 'px',
    to: 'rem',
    withUnits: true,
  }) as string,
  md: parseSize({
    value: fontBaseSize * fontSizeScales.md,
    from: 'px',
    to: 'rem',
    withUnits: true,
  }) as string,
  sm: parseSize({
    value: fontBaseSize * fontSizeScales.sm,
    from: 'px',
    to: 'rem',
    withUnits: true,
  }) as string,
  xs: parseSize({
    value: fontBaseSize * fontSizeScales.xs,
    from: 'px',
    to: 'rem',
    withUnits: true,
  }) as string,
};

const fontWeights: FontWeights = {
  light: 300,
  regular: 400,
  medium: 500,
  bold: 700,
};

export const themeTypography: ThemeTypography = {
  fontBaseSize,
  fontSizeScales,
  fontSizes,
  fontWeights,
  title1: {
    fontFamily: 'SFPro',
    fontWeight: fontWeights.bold,
    fontSize: fontSizes.xxxxxl,
    lineHeight: 1,
    letterSpacing: '-0.015em',
  },
  title2: {
    fontFamily: 'SFPro',
    fontWeight: fontWeights.bold,
    fontSize: fontSizes.xxxxl,
    lineHeight: 1,
    letterSpacing: '-.003em',
  },
  title3: {
    fontFamily: 'SFPro',
    fontWeight: fontWeights.bold,
    fontSize: fontSizes.xxxl,
    lineHeight: 1.1,
    letterSpacing: '0em',
  },
  title4: {
    fontFamily: 'SFPro',
    fontWeight: fontWeights.medium,
    fontSize: fontSizes.xxl,
    lineHeight: 1.1,
    letterSpacing: '0em',
  },
  title5: {
    fontFamily: 'SFPro',
    fontWeight: fontWeights.medium,
    fontSize: fontSizes.xl,
    lineHeight: 1.3,
    letterSpacing: '0em',
  },
  title6: {
    fontFamily: 'SFPro',
    fontWeight: fontWeights.bold,
    fontSize: fontSizes.lg,
    lineHeight: 1.3,
    letterSpacing: '0em',
  },
  subtitle1: {
    fontFamily: 'SFPro',
    fontWeight: fontWeights.regular,
    fontSize: fontSizes.md,
    letterSpacing: '0.2rem',
    lineHeight: '1.5',
    textTransform: 'uppercase',
  },
  subtitle2: {
    fontFamily: 'SFPro',
    fontWeight: fontWeights.bold,
    fontSize: fontSizes.sm,
    letterSpacing: '0.2rem',
    lineHeight: '1.5',
    textTransform: 'uppercase',
  },
  paragraph1: {
    fontFamily: 'SFPro',
    fontWeight: fontWeights.regular,
    fontSize: fontSizes.md,
    lineHeight: 1.3,
    letterSpacing: '0em',
  },
  paragraph2: {
    fontFamily: 'SFPro',
    fontWeight: fontWeights.regular,
    fontSize: fontSizes.sm,
    lineHeight: 1.3,
    letterSpacing: '0em',
  },
  paragraph3: {
    fontFamily: 'SFPro',
    fontWeight: fontWeights.regular,
    fontSize: fontSizes.xs,
    lineHeight: 1.3,
    letterSpacing: '0em',
  },
  button: {
    fontFamily: 'SFPro',
    fontWeight: fontWeights.bold,
    fontSize: fontSizes.md,
    lineHeight: 1.3,
    letterSpacing: '0em',
  },
  link: {
    fontFamily: 'SFPro',
    fontWeight: fontWeights.regular,
    fontSize: fontSizes.md,
    lineHeight: 1.3,
    letterSpacing: '0em',
    textDecoration: 'none',
  },
};
