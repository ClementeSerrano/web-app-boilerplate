import {
  PosterCardBlackMask,
  PosterCardContainer,
  PosterCardChildrenContainer,
} from './PosterCard.styles';
import { PosterCardProps } from './PosterCard.types';

export default function PosterCard({
  as = 'aside',
  children,
  style,
  className,
  bgColor,
  bgImg,
  gradientFrom,
  gradientTo,
}: PosterCardProps) {
  const background =
    bgColor ||
    (bgImg && `url(${bgImg}) center center / cover no-repeat`) ||
    `linear-gradient(${gradientFrom}, ${gradientTo})`;

  return (
    <>
      <PosterCardContainer
        as={as}
        className={className}
        style={{
          ...style,
          background,
        }}
      >
        <PosterCardChildrenContainer>{children}</PosterCardChildrenContainer>

        {bgImg && <PosterCardBlackMask />}
      </PosterCardContainer>
    </>
  );
}
