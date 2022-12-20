import { CSSProperties } from 'react';

import { Theme } from '../../theme/theme.types';

export function getIllustratedMessageTitleStyles(theme: Theme): CSSProperties {
  return {
    margin: `${theme.spacing.md}px 0px`,
  };
}

export function getIllustratedMessageBodyStyles(): CSSProperties {
  return {
    textAlign: 'center',
  };
}
