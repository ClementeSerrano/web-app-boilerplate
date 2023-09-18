import React, { ReactNode } from 'react';

import { WithStyle } from 'lib/interfaces/components.interfaces';

import DialogHeader from './components/DialogHeader';
import DialogClose from './components/DialogClose';
import DialogTitle from './components/DialogTitle';
import DialogBody from './components/DialogBody';
import DialogFooter from './components/DialogFooter';
import { ThemeSizeUnit } from 'lib/interfaces/theme.interfaces';

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
  size?: Extract<ThemeSizeUnit, 'sm' | 'md' | 'lg'>;
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
