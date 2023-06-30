import {
  ThemeFormat,
  ThemePaletteKey,
  ThemeSizeUnit,
} from '../../theme/theme.types';
import { WithStyle } from '../../interfaces/components.interfaces';

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
