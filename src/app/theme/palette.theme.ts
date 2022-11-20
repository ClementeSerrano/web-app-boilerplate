import { themeColors } from './colors.theme';
import { ThemePalette } from './theme.types';

export const lightThemePalette: ThemePalette = {
  primary: {
    light: themeColors.red.light,
    main: themeColors.red.main,
    dark: themeColors.red.dark,
    contrastText: themeColors.white.main,
  },
  secondary: {
    light: themeColors.cyan.light,
    main: themeColors.cyan.main,
    dark: themeColors.cyan.dark,
    contrastText: themeColors.white.main,
  },
  error: {
    light: themeColors.red.main,
    main: themeColors.red.dark,
    dark: themeColors.red.darker,
    contrastText: themeColors.white.main,
  },
  warning: {
    light: themeColors.yellow.light,
    main: themeColors.yellow.main,
    dark: themeColors.yellow.dark,
    contrastText: themeColors.white.main,
  },
  info: {
    light: themeColors.blue.light,
    main: themeColors.blue.main,
    dark: themeColors.blue.dark,
    contrastText: themeColors.white.main,
  },
  success: {
    light: themeColors.green.light,
    main: themeColors.green.main,
    dark: themeColors.green.dark,
    contrastText: themeColors.white.main,
  },
  background: {
    lighter: themeColors.white.main,
    light: themeColors.gray.superLight,
    main: themeColors.gray.light,
    dark: themeColors.gray.main,
    darker: themeColors.gray.dark,
  },
  text: {
    lighter: themeColors.gray.lighter,
    light: themeColors.gray.main,
    main: themeColors.gray.dark,
    dark: themeColors.gray.darker,
  },
};

export const darkThemePalette: ThemePalette = {
  primary: {
    light: themeColors.red.light,
    main: themeColors.red.main,
    dark: themeColors.red.dark,
    contrastText: themeColors.white.main,
  },
  secondary: {
    light: themeColors.cyan.light,
    main: themeColors.cyan.main,
    dark: themeColors.cyan.dark,
    contrastText: themeColors.white.main,
  },
  error: {
    light: themeColors.red.main,
    main: themeColors.red.dark,
    dark: themeColors.red.darker,
    contrastText: themeColors.white.main,
  },
  warning: {
    light: themeColors.yellow.main,
    main: themeColors.yellow.dark,
    dark: themeColors.yellow.darker,
    contrastText: themeColors.white.main,
  },
  info: {
    light: themeColors.blue.main,
    main: themeColors.blue.dark,
    dark: themeColors.blue.darker,
    contrastText: themeColors.white.main,
  },
  success: {
    light: themeColors.green.main,
    main: themeColors.green.dark,
    dark: themeColors.green.darker,
    contrastText: themeColors.white.main,
  },
  background: {
    lighter: themeColors.gray.light,
    light: themeColors.gray.main,
    main: themeColors.gray.dark,
    dark: themeColors.gray.darker,
    darker: themeColors.black.main,
  },
  text: {
    lighter: themeColors.gray.superLight,
    light: themeColors.gray.lighter,
    main: themeColors.gray.light,
    dark: themeColors.gray.main,
  },
};
