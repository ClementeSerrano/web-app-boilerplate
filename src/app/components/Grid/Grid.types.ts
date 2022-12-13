import { CSSProperties } from 'styled-components';
import { ValueOf } from '../../../types/general.types';
import { ThemePalette, ThemeSizeUnit } from '../../theme/theme.types';

export type GridProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  container?: boolean;
  variant?: keyof ValueOf<Pick<ThemePalette, 'background'>>;
  size?: Extract<ThemeSizeUnit, 'sm' | 'md' | 'lg'>;
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
