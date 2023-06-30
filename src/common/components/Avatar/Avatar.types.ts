import { ThemeSizeUnit } from '../../theme/theme.types';
import {
  WithChildren,
  WithStyle,
} from '../../interfaces/components.interfaces';

export type AvatarProps = WithChildren &
  WithStyle & {
    src?: string;
    alt: string;
    size?: ThemeSizeUnit;
    withInitials?: boolean;
    bgColor?: string;
  };
