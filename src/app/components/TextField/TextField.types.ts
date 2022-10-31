import { CSSProperties, InputHTMLAttributes, ReactNode } from "react";

export type TextFieldProps = InputHTMLAttributes<HTMLInputElement> & {
  label?: string;
  variant?: TextFieldVariant;
  colors?: { base?: string; highlight?: string };
  adornments?: { left?: ReactNode; right?: ReactNode };
  error?: boolean;
  style?: TextFieldStyle;
};

export type TextFieldStyle = {
  root?: CSSProperties;
  input?: CSSProperties;
  inputContainer?: CSSProperties;
  bar?: CSSProperties;
  label?: CSSProperties;
  highlight?: CSSProperties;
};

export type TextFieldVariant = "standard" | "filled";
