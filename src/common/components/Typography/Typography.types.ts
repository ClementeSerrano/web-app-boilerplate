import {
  WithChildren,
  WithStyle,
} from '../../interfaces/components.interfaces';
import { ThemeColorLevel, ThemeTypographyKey } from '../../theme/theme.types';

export type TypographyProps = WithChildren &
  WithStyle & {
    as?: React.ElementType;
    variant?: ThemeTypographyKey;
    color?: ThemeColorLevel;
  };
