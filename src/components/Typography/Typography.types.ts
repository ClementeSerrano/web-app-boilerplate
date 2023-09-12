import {
  WithChildren,
  WithStyle,
} from '../../lib/interfaces/components.interfaces';
import {
  ThemeColorLevel,
  ThemeTypographyKey,
} from '../../lib/interfaces/theme.interfaces';

export type TypographyProps = WithChildren &
  WithStyle & {
    as?: React.ElementType;
    variant?: ThemeTypographyKey;
    color?: ThemeColorLevel;
    href?: string;
    target?: string;
    rel?: string;
  };
