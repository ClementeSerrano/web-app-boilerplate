import {
  WithChildren,
  WithStyle,
} from '../../interfaces/components.interfaces';

import { InformativePillContainer } from './InformativePill.styles';

export default function InformativePill({
  children,
  style,
}: WithChildren & WithStyle) {
  return (
    <InformativePillContainer
      variant="text"
      format="outline"
      size="sm"
      style={style}
    >
      {children}
    </InformativePillContainer>
  );
}
