import React, { ReactNode } from 'react';

import { WithStyle } from '../components.types';

import DialogHeader from './components/DialogHeader';
import DialogClose from './components/DialogClose';
import DialogTitle from './components/DialogTitle';
import DialogBody from './components/DialogBody';
import DialogFooter from './components/DialogFooter';

export type DialogComponent = JSX.Element & {
  Header: typeof DialogHeader;
  Close: typeof DialogClose;
  Title: typeof DialogTitle;
  Body: typeof DialogBody;
  Footer: typeof DialogFooter;
};

export type DialogProps = WithStyle<{
  show: boolean;
  children: ReactNode;
}>;

export type DialogHeaderProps = WithStyle<{ children: ReactNode }>;

export type DialogCloseProps = WithStyle<
  Omit<
    React.DetailedHTMLProps<
      React.ButtonHTMLAttributes<HTMLButtonElement>,
      HTMLButtonElement
    >,
    'ref' | 'style' | 'className'
  >
>;
