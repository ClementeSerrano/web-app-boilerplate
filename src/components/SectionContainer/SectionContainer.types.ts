import {
  WithChildren,
  WithStyle,
} from '../../lib/interfaces/components.interfaces';
import { ThemeColorLevel } from '../../lib/interfaces/theme.interfaces';

export type SectionContainerProps = WithChildren &
  WithStyle & {
    variant?: ThemeColorLevel;
    withSeparator?: boolean;
  };
