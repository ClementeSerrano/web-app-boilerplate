import { CSSProperties } from 'react';

import { Theme } from '../../lib/interfaces/theme.interfaces';

export function getIllustratedMessageTitleStyles(theme: Theme): CSSProperties {
  return {
    margin: `${theme.spacing.md}px 0px`,
    textAlign: 'center',
  };
}

export function getIllustratedMessageBodyStyles(): CSSProperties {
  return {
    textAlign: 'center',
  };
}
