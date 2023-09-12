import { themeBreakpoints } from './breakpoints.theme';
import { themeColors } from './colors.theme';
import { lightThemePalette, darkThemePalette } from './palette.theme';
import { themeSpacing } from './spacing.theme';
import { themeTypography } from './typography.theme';
import { Theme, ThemeWithMode } from '../interfaces/theme.interfaces';
import { themeShape } from './shape.theme';

const lightTheme: Theme = {
  breakpoints: themeBreakpoints,
  colors: themeColors,
  palette: lightThemePalette,
  spacing: themeSpacing,
  typography: themeTypography,
  shape: themeShape,
};

const darkTheme: Theme = { ...lightTheme, palette: darkThemePalette };

const theme: ThemeWithMode = {
  light: lightTheme,
  dark: darkTheme,
};

export default theme;
