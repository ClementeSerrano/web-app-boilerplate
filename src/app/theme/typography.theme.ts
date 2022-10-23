import { parseSize } from "./theme.helpers";
import { FontSizeScales, FontWeights, ThemeTypography } from "./theme.types";

const fontBaseSize = 14;

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

const fontWeights: FontWeights = {
  light: 300,
  regular: 400,
  medium: 500,
  bold: 700,
};

export const themeTypography: ThemeTypography = {
  fontBaseSize,
  fontSizeScales,
  fontWeights,
  title1: {
    fontFamily: "SFPro",
    fontWeight: fontWeights.bold,
    fontSize: parseSize({
      value: fontBaseSize * fontSizeScales.xxxxxl,
      from: "px",
      to: "rem",
      withUnits: true,
    }),
    lineHeight: 1,
    letterSpacing: "-0.015em",
  },
  title2: {
    fontFamily: "SFPro",
    fontWeight: fontWeights.bold,
    fontSize: parseSize({
      value: fontBaseSize * fontSizeScales.xxxxl,
      from: "px",
      to: "rem",
      withUnits: true,
    }),
    lineHeight: 1,
    letterSpacing: "-.003em",
  },
  title3: {
    fontFamily: "SFPro",
    fontWeight: fontWeights.bold,
    fontSize: parseSize({
      value: fontBaseSize * fontSizeScales.xxxl,
      from: "px",
      to: "rem",
      withUnits: true,
    }),
    lineHeight: 1.1,
    letterSpacing: "0em",
  },
  title4: {
    fontFamily: "SFPro",
    fontWeight: fontWeights.medium,
    fontSize: parseSize({
      value: fontBaseSize * fontSizeScales.xxl,
      from: "px",
      to: "rem",
      withUnits: true,
    }),
    lineHeight: 1.1,
    letterSpacing: "0em",
  },
  title5: {
    fontFamily: "SFPro",
    fontWeight: fontWeights.medium,
    fontSize: parseSize({
      value: fontBaseSize * fontSizeScales.xl,
      from: "px",
      to: "rem",
      withUnits: true,
    }),
    lineHeight: 1.1,
    letterSpacing: "0em",
  },
  title6: {
    fontFamily: "SFPro",
    fontWeight: fontWeights.bold,
    fontSize: parseSize({
      value: fontBaseSize * fontSizeScales.lg,
      from: "px",
      to: "rem",
      withUnits: true,
    }),
    lineHeight: 1.1,
    letterSpacing: "0em",
  },
  subtitle1: {
    fontFamily: "SFPro",
    fontWeight: fontWeights.regular,
    fontSize: parseSize({
      value: fontBaseSize * fontSizeScales.md,
      from: "px",
      to: "rem",
      withUnits: true,
    }),
    letterSpacing: "0.2rem",
    lineHeight: "1.5",
    textTransform: "uppercase",
  },
  subtitle2: {
    fontFamily: "SFPro",
    fontWeight: fontWeights.bold,
    fontSize: parseSize({
      value: fontBaseSize * fontSizeScales.sm,
      from: "px",
      to: "rem",
      withUnits: true,
    }),
    letterSpacing: "0.2rem",
    lineHeight: "1.5",
    textTransform: "uppercase",
  },
  paragraph1: {
    fontFamily: "SFPro",
    fontWeight: fontWeights.regular,
    fontSize: parseSize({
      value: fontBaseSize * fontSizeScales.md,
      from: "px",
      to: "rem",
      withUnits: true,
    }),
    lineHeight: 1.45,
    letterSpacing: "0em",
  },
  paragraph2: {
    fontFamily: "SFPro",
    fontWeight: fontWeights.regular,
    fontSize: parseSize({
      value: fontBaseSize * fontSizeScales.sm,
      from: "px",
      to: "rem",
      withUnits: true,
    }),
    lineHeight: 1.45,
    letterSpacing: "0em",
  },
  paragraph3: {
    fontFamily: "SFPro",
    fontWeight: fontWeights.regular,
    fontSize: parseSize({
      value: fontBaseSize * fontSizeScales.xs,
      from: "px",
      to: "rem",
      withUnits: true,
    }),
    lineHeight: 1.45,
    letterSpacing: "0em",
  },
  button: {
    fontFamily: "SFPro",
    fontWeight: fontWeights.bold,
    fontSize: parseSize({
      value: fontBaseSize * fontSizeScales.md,
      from: "px",
      to: "rem",
      withUnits: true,
    }),
    lineHeight: 1.45,
    letterSpacing: "0em",
  },
};
