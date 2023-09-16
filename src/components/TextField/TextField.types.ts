import { CSSProperties, InputHTMLAttributes, ReactNode } from 'react';

export type TextFieldProps = Omit<
  InputHTMLAttributes<HTMLInputElement>,
  'style'
> & {
  as?: string | React.ComponentType<unknown>;
  adornments?: { left?: ReactNode; right?: ReactNode };
  rows?: number;
  error?: boolean;
  label?: string;
  style?: TextFieldStyle;
  variant?: TextFieldVariant;
};

export type TextFieldStyle = {
  container?: CSSProperties;
  input?: CSSProperties;
  inputContainer?: CSSProperties;
  bar?: CSSProperties;
  label?: CSSProperties;
  highlight?: CSSProperties;
};

export type TextFieldLabelProps = {
  isLeftAdornment: boolean;
  variant: TextFieldVariant;
  error?: boolean;
};

export type TextFieldBarProps = {
  variant: TextFieldVariant;
  error?: boolean;
};

export type TextFieldInputContainerProps = {
  variant: TextFieldVariant;
  error?: boolean;
  isLabel: boolean;
};

export type TextFieldInputProps = {
  variant: TextFieldVariant;
  error?: boolean;
};

export type TextFieldVariant = 'standard' | 'filled';
