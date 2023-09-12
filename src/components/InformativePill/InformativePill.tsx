import { ButtonProps } from 'components/Button/Button.types';
import {
  WithChildren,
  WithStyle,
} from '../../lib/interfaces/components.interfaces';

import { InformativePillContainer } from './InformativePill.styles';

export default function InformativePill({
  children,
  ...props
}: WithChildren & WithStyle & ButtonProps) {
  return (
    <InformativePillContainer
      variant="text"
      format="outline"
      size="sm"
      {...props}
    >
      {children}
    </InformativePillContainer>
  );
}
