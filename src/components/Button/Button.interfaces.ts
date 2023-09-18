import { WithStyle } from 'lib/interfaces/components.interfaces';
import {
  ThemeFormat,
  ThemePaletteKey,
  ThemeSizeUnit,
} from 'lib/interfaces/theme.interfaces';

export type ButtonProps = WithStyle &
  React.ButtonHTMLAttributes<HTMLButtonElement> & {
    variant?: Extract<
      ThemePaletteKey,
      'primary' | 'secondary' | 'error' | 'info' | 'text'
    >;
    format?: ThemeFormat | 'link';
    size?: Extract<ThemeSizeUnit, 'sm' | 'md' | 'lg'>;
    loading?: boolean;
    as?: 'button' | 'div' | 'a';
    href?: string;
    target?: string;
  };
