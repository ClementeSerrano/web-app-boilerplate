import { ThemeSizeUnit } from '../../theme/theme.types';
import { WithChildren, WithStyle } from '../components.types';

export type AvatarProps = WithChildren &
  WithStyle & {
    src?: string;
    alt: string;
    size?: ThemeSizeUnit;
    withInitials?: boolean;
    bgColor?: string;
  };
