import { Children } from 'react';

import { DialogHeaderProps } from '../Dialog.types';
import { DialogBaseHeader } from '../Dialog.styles';

export default function DialogHeader({
  children,
  style,
  className,
}: DialogHeaderProps) {
  const childrenCount = Children.count(children);

  return (
    <DialogBaseHeader
      childrenCount={childrenCount}
      className={className}
      style={style}
    >
      {children}
    </DialogBaseHeader>
  );
}
