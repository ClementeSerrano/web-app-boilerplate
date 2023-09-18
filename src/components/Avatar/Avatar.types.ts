import { WithChildren, WithStyle } from 'lib/interfaces/components.interfaces';

export type AvatarProps = WithChildren &
  WithStyle & {
    src?: string;
    alt?: string;
    height?: number;
    withInitials?: boolean;
  };
