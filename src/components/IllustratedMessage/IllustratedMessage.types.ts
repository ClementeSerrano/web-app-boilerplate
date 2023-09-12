import { ReactNode, CSSProperties } from 'react';

import { VectorProps } from '../../lib/interfaces/theme.interfaces';

export type IllustratedMessageProps = {
  illustration?: IllustrationVariant | ReactNode;
  illustrationOptions?: IllustratedMessageOptions;
  title?: string | ReactNode;
  body?: string | ReactNode;
  style?: {
    container?: CSSProperties;
    body?: CSSProperties;
    title?: CSSProperties;
  };
};

export type IllustrationVariant =
  | 'creditCard'
  | 'documents'
  | 'doneCheck'
  | 'emptyCart'
  | 'emptyInbox'
  | 'error'
  | 'images'
  | 'location'
  | 'messages'
  | 'noConnection'
  | 'noSearchResults'
  | 'noTasks'
  | 'users';

export type IllustratedMessageOptions = Pick<
  VectorProps,
  'height' | 'style' | 'className'
>;
