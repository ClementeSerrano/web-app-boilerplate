import { NavLinkProps } from 'react-router-dom';
import { ThemePaletteKey, ThemeSizeUnit } from '../../theme/theme.types';

export type NavlinkProps = NavLinkProps &
  React.RefAttributes<HTMLAnchorElement> & {
    variant?: NavlinkVariant;
    format?: NavlinkFormat;
    size?: NavlinkSize;
  };

export type NavlinkContainerProps = NavLinkProps &
  React.RefAttributes<HTMLAnchorElement> & {
    variant: NavlinkVariant;
    format: NavlinkFormat;
    size: NavlinkSize;
  };

export type NavlinkFormat = 'text' | 'button' | 'container';

export type NavlinkVariant = Extract<
  ThemePaletteKey,
  'primary' | 'secondary' | 'text'
>;

export type NavlinkSize = Extract<ThemeSizeUnit, 'sm' | 'md' | 'lg'>;
