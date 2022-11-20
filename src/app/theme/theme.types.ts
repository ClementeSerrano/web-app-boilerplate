import { CSSProperties } from "react";
import { WithStyle } from "../components/components.types";

/**
 * Main type definitions
 */
export type ThemeWithMode = Record<ThemeMode, Theme>;

export type Theme = {
  breakpoints: ThemeBreakpoints;
  colors: ThemeColors;
  palette: ThemePalette;
  spacing: ThemeSpacing;
  typography: ThemeTypography;
  shape: ThemeShape;
};

export type ThemeBreakpoints = {
  values: Record<
    Extract<ThemeSizeUnit, "xs" | "sm" | "md" | "lg" | "xl">,
    number
  >;
  unit: "px";
};

export type ThemeColors = Record<ThemeColorKey, ThemeColorVariant>;

export type ThemePalette = Record<ThemePaletteKey, ThemePaletteVariant> & {
  background: Pick<
    ThemeColorVariant,
    "lighter" | "light" | "main" | "dark" | "darker"
  >;
  text: Pick<ThemeColorVariant, "lighter" | "light" | "main" | "dark">;
};

export type ThemeSpacing = Record<ThemeSizeUnit, number>;

export type ThemeTypography = Record<
  ThemeTypographyKey,
  ThemeTypographyProps
> & {
  fontBaseSize: number;
  fontSizeScales: FontSizeScales;
  fontSizes: FontSizes;
  fontWeights: FontWeights;
};

export type ThemeShape = {
  borderRadius: Record<
  ThemeSizeUnit,
    number
  >;
};

export type FontSizeScales = Record<FontSizeScaleVariant, number>;

export type FontSizes = Record<FontSizeScaleVariant, string>;

export type FontWeights = Record<FontWeightVariant, number>;

export type VectorProps = WithStyle &
  Pick<CSSProperties, "color"> & {
    height?: number;
    colors?: Partial<ThemeColorVariant>;
    gradient?: { from: string; to: string };
  };

/**
 * Sub type definitions
 */
export type ThemeMode = "light" | "dark";

export type ThemeSizeUnit =
  | "xxxxxl"
  | "xxxxl"
  | "xxxl"
  | "xxl"
  | "xl"
  | "lg"
  | "md"
  | "sm"
  | "xs"
  | "xxs";

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

export type ThemeColorVariantKey =
  | "superLight"
  | "lighter"
  | "light"
  | "main"
  | "darker"
  | "dark"
  | "superDark";

export type ThemeColorVariant = Record<ThemeColorVariantKey, string>;

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

/**
 * Function type definitions
 */
export type ParseSizeArgs = {
  value: number;
  from: "px" | "rem" | "em";
  to: "px" | "rem" | "em";
  withUnits?: boolean;
};
