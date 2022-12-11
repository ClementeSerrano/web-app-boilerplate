import { CSSProperties, InputHTMLAttributes, ReactNode } from 'react';

export type TextFieldProps = InputHTMLAttributes<HTMLInputElement> & {
  label?: string;
  variant?: TextFieldVariant;
  colors?: { base?: string; highlight?: string };
  adornments?: { left?: ReactNode; right?: ReactNode };
  error?: boolean;
  style?: TextFieldStyle;
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
  baseColor: string;
  isLeftAdornment: boolean;
  variant: TextFieldVariant;
  error?: boolean;
};

export type TextFieldBarProps = {
  highlightColor: string;
  variant: TextFieldVariant;
  error?: boolean;
};

export type TextFieldInputContainerProps = {
  baseColor: string;
  highlightColor: string;
  variant: TextFieldVariant;
  error?: boolean;
  isLabel: boolean;
};

export type TextFieldInputProps = {
  baseColor: string;
  highlightColor: string;
  variant: TextFieldVariant;
  error?: boolean;
};

export type TextFieldVariant = 'standard' | 'filled';
