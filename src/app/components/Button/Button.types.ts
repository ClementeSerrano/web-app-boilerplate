import {
  ThemeFormat,
  ThemePaletteKey,
  ThemeSizeUnit,
} from '../../theme/theme.types';

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: Extract<
    ThemePaletteKey,
    'primary' | 'secondary' | 'error' | 'info' | 'text'
  >;
  format?: ThemeFormat | 'link';
  size?: Extract<ThemeSizeUnit, 'sm' | 'md' | 'lg'>;
  style?: React.CSSProperties;
  className?: string;
  loading?: boolean;
  as?: 'button' | 'div' | 'a';
  href?: string;
  target?: string;
};
