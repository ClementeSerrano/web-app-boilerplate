import {
  WithChildren,
  WithStyle,
} from '../../lib/interfaces/components.interfaces';

export type PosterCardProps = WithChildren<
  WithStyle<{
    gradientFrom?: string;
    gradientTo?: string;
    bgColor?: string;
    bgImg?: string;
    as?: React.ElementType;
    withBlackMask?: boolean;
  }>
>;
