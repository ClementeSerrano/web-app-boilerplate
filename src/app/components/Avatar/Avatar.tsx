import React, { useState } from 'react';

import { getInitials } from '../../../helpers/app.helpers';
import { getColorFormString } from '../../theme/theme.helpers';

import { AvatarImg, AvatarFallback } from './Avatar.styles';
import { AvatarProps } from './Avatar.types';

/**
 * Avatar component for displaying user profile picture
 * @param props.src - The source of the avatar image
 * @param props.alt - The alternative text for the avatar image
 * @param props.className - A className for custom styling
 * @param props.children - The fallback content to be displayed if the image fails to load
 * @param props.withInitials - Extract the initials of the provided name
 * @param props.bgColor - The background color of the initials container
 * @param props.style - CSS inline styles for custom styling.
 * @param props.className - A className for custom styling.
 * @param props.size - Theme unit size to assign to the Avatar
 */
export default function Avatar({
  src = '',
  alt,
  style,
  className,
  children,
  withInitials = false,
  bgColor,
  size = 'sm',
}: AvatarProps) {
  const [hasError, setHasError] = useState(false);

  const handleError = () => setHasError(true);

  let content = (
    <AvatarImg
      src={src}
      alt={alt}
      size={size}
      style={style}
      className={className}
      onError={handleError}
    />
  );

  if (hasError) {
    if (children) {
      content = <>{children}</>;
    } else if (withInitials) {
      const initials = getInitials(alt);

      const backgroundColor = bgColor || getColorFormString(initials);

      content = (
        <AvatarFallback
          className={className}
          style={{ backgroundColor, ...style }}
          size={size}
        >
          {initials}
        </AvatarFallback>
      );
    } else {
      // TODO: Render icon here instead.

      content = (
        <AvatarFallback style={style} className={className} size={size}>
          {alt.charAt(0)}
        </AvatarFallback>
      );
    }
  }

  return content;
}
