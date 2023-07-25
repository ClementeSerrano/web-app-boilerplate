import React from 'react';

import { CardProps } from './Card.types';
import { CardContainer } from './Card.styles';
import Typography from '../Typography/Typography';

/**
 * Surface that display content and actions on a single topic.
 */
export default function Card({
  children,
  title,
  as,
  onClick,
  ...props
}: CardProps) {
  return (
    <CardContainer {...props} as={onClick ? 'div' : as} onClick={onClick}>
      {title &&
        (typeof title === 'string' ? (
          <Typography as="h1" variant="title3">
            {title}
          </Typography>
        ) : (
          title
        ))}

      {children}
    </CardContainer>
  );
}
