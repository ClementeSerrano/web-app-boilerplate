import { ButtonHTMLAttributes, ReactNode } from 'react';
import {
  WithChildren,
  WithStyle,
} from '../../interfaces/components.interfaces';

export type CardProps = WithChildren &
  WithStyle & {
    title?: string | ReactNode;
    as?: React.ElementType;
  } & Pick<ButtonHTMLAttributes<any>, 'onClick' | 'disabled'>;
