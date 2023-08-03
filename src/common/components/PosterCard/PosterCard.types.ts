import {
  WithChildren,
  WithStyle,
} from '../../interfaces/components.interfaces';

export type PosterCardProps = WithChildren<
  WithStyle<{
    gradientFrom?: string;
    gradientTo?: string;
    bgColor?: string;
    bgImg?: string;
    as?: React.ElementType;
  }>
>;
