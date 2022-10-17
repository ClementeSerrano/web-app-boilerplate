import { CSSProperties } from "react";

// Main types.
export type ThemeWithMode = Record<ThemeMode, Theme>;

export type Theme = {
  breakpoints: ThemeBreakpoints;
  colors: ThemeColors;
  palette: ThemePalette;
  spacing: ThemeSpacing;
  typography: ThemeTypography;
};

export type ThemeBreakpoints = {
  values: Record<ThemeSizeUnit, number>;
  unit: "px";
};

export type ThemeColors = Record<ThemeColorKey, ThemeColorVariant>;

export type ThemePalette = Record<ThemePaletteKey, ThemePaletteVariant> & {
  background: Pick<
    ThemeColorVariant,
    "lighter" | "light" | "main" | "dark" | "darker"
  >;
  text: Pick<ThemeColorVariant, "light" | "main" | "dark">;
};

export type ThemeSpacing = Record<ThemeSizeUnit, number>;

export type ThemeTypography = Record<
  ThemeTypographyKey,
  ThemeTypographyProps
> & {
  fontBaseSize: number;
  fontSizeScales: Record<string, number>;
  fontWeights: Record<string, number>;
};

export type FontSizeScales = Record<FontSizeScaleVariant, number>;

export type FontWeights = Record<FontWeightVariant, number>;

// Helper types.
export type ThemeMode = "light" | "dark";

export type ThemeSizeUnit = "xs" | "sm" | "md" | "lg" | "xl";

export type ThemeFormat = "fill" | "outline";

export type ThemeColorKey =
  | "blue"
  | "cyan"
  | "black"
  | "gray"
  | "white"
  | "red"
  | "green"
  | "yellow"
  | "orange"
  | "purple";

export type ThemeColorVariant = {
  superLight: string;
  lighter: string;
  light: string;
  main: string;
  darker: string;
  dark: string;
  superDark: string;
};

export type ThemePaletteKey =
  | "primary"
  | "secondary"
  | "error"
  | "warning"
  | "info"
  | "success";

export type ThemePaletteVariant = Pick<
  ThemeColorVariant,
  "light" | "main" | "dark"
> & {
  contrastText: string;
};

export type ThemeTypographyKey =
  | "title1"
  | "title2"
  | "title3"
  | "title4"
  | "title5"
  | "title6"
  | "subtitle1"
  | "subtitle2"
  | "paragraph1"
  | "paragraph2"
  | "paragraph3"
  | "button";

export type ThemeTypographyProps = CSSProperties;

export type FontSizeScaleVariant =
  | "xxxxxl"
  | "xxxxl"
  | "xxxl"
  | "xxl"
  | "xl"
  | "lg"
  | "md"
  | "sm"
  | "xs";

export type FontWeightVariant = "light" | "regular" | "medium" | "bold";

// Function types
export type ParseSizeArgs = {
  value: number;
  from: "px" | "rem" | "em";
  to: "px" | "rem" | "em";
  withUnits?: boolean;
};
