import { NavLinkProps } from 'react-router-dom';
import { ThemePaletteKey, ThemeSizeUnit } from '../../theme/theme.types';

export type NavlinkProps = NavLinkProps &
  React.RefAttributes<HTMLAnchorElement> & {
    variant?: Extract<ThemePaletteKey, 'primary' | 'secondary' | 'text'>;
    container?: boolean;
    size?: Extract<ThemeSizeUnit, 'sm' | 'md' | 'lg'>;
  };

export type NavlinkContainerProps = NavLinkProps &
  React.RefAttributes<HTMLAnchorElement> & {
    variant: Extract<ThemePaletteKey, 'primary' | 'secondary' | 'text'>;
    container: boolean;
    size: Extract<ThemeSizeUnit, 'sm' | 'md' | 'lg'>;
  };
