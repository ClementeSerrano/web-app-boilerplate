import {
  WithChildren,
  WithStyle,
} from '../../interfaces/components.interfaces';
import { ThemeColorLevel } from '../../theme/theme.types';

export type SectionContainerProps = WithChildren &
  WithStyle & {
    variant?: ThemeColorLevel;
    withSeparator?: boolean;
  };
