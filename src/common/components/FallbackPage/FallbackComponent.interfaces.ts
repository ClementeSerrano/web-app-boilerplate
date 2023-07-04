import { CSSProperties, ReactNode } from 'react';

export type FallbackComponentProps = Pick<CSSProperties, 'color'> & {
  type: 'loading' | 'success' | 'error';
  title?: string | ReactNode;
  description?: string | ReactNode;
};
