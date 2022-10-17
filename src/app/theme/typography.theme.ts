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
  },
  subtitle1: {
    fontFamily: "SFPro",
    fontWeight: fontWeights.light,
    textTransform: "uppercase",
    fontSize: parseSize({
      value: fontBaseSize * fontSizeScales.md,
      from: "px",
      to: "rem",
      withUnits: true,
    }),
  },
  subtitle2: {
    fontFamily: "SFPro",
    textTransform: "uppercase",
    fontWeight: fontWeights.regular,
    fontSize: parseSize({
      value: fontBaseSize * fontSizeScales.sm,
      from: "px",
      to: "rem",
      withUnits: true,
    }),
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
    // lineHeight: ,
    // letterSpacing: ,
  },
};
