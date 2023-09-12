import { CSSProperties } from 'styled-components';
import { ValueOf } from '../../lib/interfaces/general.interfaces';
import {
  ThemePalette,
  ThemeSizeUnit,
} from '../../lib/interfaces/theme.interfaces';

export type GridProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  container?: boolean;
  variant?: keyof ValueOf<Pick<ThemePalette, 'background'>>;
  size?: Extract<ThemeSizeUnit, 'xxs' | 'xs' | 'sm' | 'md' | 'lg'>;
  style?: React.CSSProperties;
  className?: string;
  as?: string | React.ComponentType<any>;
  direction?: 'row' | 'column';
  align?: ValueOf<Pick<CSSProperties, 'alignItems'>>;
  justify?: ValueOf<Pick<CSSProperties, 'justifyContent'>>;
  maxHeight?: boolean;
  maxWidth?: boolean;
  fluid?: boolean;
  bordered?: boolean;
};
