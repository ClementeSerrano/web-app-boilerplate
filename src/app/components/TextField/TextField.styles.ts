import styled, { keyframes } from "styled-components";
import { lighten } from "polished";

import { TextFieldVariant } from "./TextField.types";

function inputHighlighter(highlightColor: string) {
  return keyframes`
  from { background: ${highlightColor}; }
  to 	{ width:0; background:transparent; }
`;
}

export const TextFieldContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  width: 100%;
`;

export const TextFieldLabel = styled.label<{
  baseColor: string;
  isLeftAdornment: boolean;
  variant: TextFieldVariant;
  error?: boolean;
}>`
  font-size: ${({ theme }) => theme.typography.fontSizes.md};
  color: ${({ theme, baseColor, error }) =>
    error ? theme.colors.red.main : baseColor};
  position: absolute;
  pointer-events: none;
  top: ${({ theme }) => theme.spacing.xs}px;
  left: ${({ theme, isLeftAdornment, variant }) =>
    isLeftAdornment
      ? variant === "standard"
        ? theme.spacing.md
        : theme.spacing.lg
      : variant === "filled"
      ? theme.spacing.xs
      : 0}px;
  transition: 0.2s ease all;
  -moz-transition: 0.2s ease all;
  -webkit-transition: 0.2s ease all;
`;

export const TextFieldBar = styled.span<{
  highlightColor: string;
  variant: TextFieldVariant;
  error?: boolean;
}>`
  display: ${({ variant }) => (variant === "filled" ? "none" : "block")};
  position: absolute;
  bottom: -2px;
  width: 100%;
  &::before,
  &::after {
    content: "";
    height: 2px;
    width: 0;
    bottom: 0;
    position: absolute;
    background: ${({ theme, highlightColor, error }) =>
      error ? theme.colors.red.main : highlightColor};
    transition: 0.2s ease all;
    -moz-transition: 0.2s ease all;
    -webkit-transition: 0.2s ease all;
  }
  &::before {
    left: 50%;
  }
  &::after {
    right: 50%;
  }
`;

export const TextFieldHighlight = styled.span`
  position: absolute;
  height: 60%;
  width: 100%;
  top: 25%;
  left: 0;
  pointer-events: none;
  opacity: 0.5;
`;

export const TextFieldInputContainer = styled.div<{
  baseColor: string;
  highlightColor: string;
  variant: TextFieldVariant;
  error?: boolean;
  isLabel: boolean;
}>`
  position: relative;
  display: flex;
  align-items: center;
  margin-top: ${({ theme, variant, isLabel }) =>
    !isLabel
      ? 0
      : variant === "filled"
      ? theme.spacing.md
      : theme.spacing.sm}px;
  font-size: ${({ theme }) => theme.typography.fontSizes.md};
  padding: ${({ theme }) => theme.spacing.xs}px
    ${({ theme, variant }) => (variant === "filled" ? theme.spacing.xs : "0")}px;
  border: ${({ theme, variant, baseColor, error }) =>
    variant === "filled"
      ? `1px solid ${lighten(0.4, error ? theme.colors.red.main : baseColor)}`
      : "unset"};
  border-bottom: ${({ theme, variant, baseColor, error }) =>
    variant === "filled" && !error
      ? "unset"
      : `${variant === "filled" ? "1px" : "2px"} solid ${
          error ? theme.colors.red.main : lighten(0.2, baseColor)
        }`};
  background-color: ${({ variant, baseColor }) =>
    variant === "filled" ? lighten(0.4, baseColor) : "transparent"};
  color: ${({ theme, baseColor, error }) =>
    error ? theme.colors.red.main : baseColor};
  border-radius: ${({ theme, variant }) =>
    variant === "filled" ? theme.shape.borderRadius.md : "0"}px;
  transition: 0.2s ease all;
  ${({ variant, baseColor }) =>
    variant === "filled" &&
    `&:hover{ background-color: ${lighten(0.36, baseColor)} }`};

  @media (max-width: 600px) {
    padding: ${({ theme }) => theme.spacing.xxs}px
      ${({ theme, variant }) =>
        variant === "filled" ? theme.spacing.xxs : "0"}px;
    margin-top: ${({ theme, variant, isLabel }) =>
      !isLabel
        ? 0
        : variant === "filled"
        ? theme.spacing.xs
        : theme.spacing.xxs}px;
  }
`;

export const TextFieldInput = styled.input<{
  baseColor: string;
  highlightColor: string;
  variant: TextFieldVariant;
  error?: boolean;
}>`
  font-size: ${({ theme }) => theme.typography.fontSizes.md};
  display: block;
  border: none;
  background-color: transparent;
  overflow: hidden;
  text-overflow: ellipsis;
  transition: 0.3s ease all;
  color: ${({ theme, baseColor, error }) =>
    error ? theme.colors.red.main : baseColor};
  width: 100%;
  ::placeholder {
    color: ${({ theme, baseColor, error }) =>
      lighten(0.17, error ? theme.colors.red.main : baseColor)};
  }
  &:focus {
    outline: none;
  }
  &:read-only ~ ${TextFieldLabel} {
    top: -${({ theme, variant }) => (variant === "filled" ? theme.spacing.md : theme.spacing.sm)}px;
    color: ${({ highlightColor }) => highlightColor};
    font-size: ${({ theme }) => theme.typography.fontSizes.sm};
  }
  &:focus ~ ${TextFieldLabel}, &:valid ~ ${TextFieldLabel} {
    top: -${({ theme, variant }) => (variant === "filled" ? theme.spacing.md : theme.spacing.sm)}px;
    left: 0;
    color: ${({ theme, highlightColor, error }) =>
      error ? theme.colors.red.main : highlightColor};
    font-size: ${({ theme }) => theme.typography.fontSizes.sm};
  }
  &:focus ~ ${TextFieldBar}::before, &:focus ~ ${TextFieldBar}::after {
    width: 50%;
    &:focus ~ ${TextFieldHighlight} {
      -webkit-animation: inputHighlighter 0.3s ease;
      -moz-animation: inputHighlighter 0.3s ease;
      animation: ${({ theme, highlightColor, error }) =>
          inputHighlighter(error ? theme.colors.red.main : highlightColor)}
        0.3s ease;
    }
  }
`;