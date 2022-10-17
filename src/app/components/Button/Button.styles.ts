import styled from "styled-components";
import {
  getButtonBgColor,
  getButtonBorder,
  getButtonColor,
  getButtonPadding,
} from "./Button.helpers";

import { ButtonProps } from "./Button.types";

export const ButtonContainer = styled.button.attrs(
  (props: React.ButtonHTMLAttributes<HTMLButtonElement>) => ({
    disabled: props.disabled,
  })
)<ButtonProps>`
  font-family: ${({ theme }) => theme.typography.button.fontFamily};
  font-weight: ${({ theme }) => theme.typography.button.fontWeight};
  font-size: ${({ theme }) => theme.typography.button.fontSize};
  padding: ${({ format, size }) => getButtonPadding({ format, size })};
  background-color: ${({ theme, format, variant }) =>
    getButtonBgColor({ variant, format, palette: theme.palette })};
  color: ${({ theme, format, variant }) =>
    getButtonColor({ variant, format, palette: theme.palette })};
  border: ${({ theme, format, variant }) =>
    getButtonBorder({ variant, format, palette: theme.palette })};
  border-radius: 6px;
  transition: opacity 0.3s, background-color 0.3s;
  text-decoration: none;

  &:hover {
    cursor: pointer;
    background-color: ${({ theme, format, variant }) =>
      getButtonBgColor({
        variant,
        format,
        palette: theme.palette,
        onHover: true,
      })};

    color: ${({ theme, format, variant }) =>
      getButtonColor({
        variant,
        format,
        palette: theme.palette,
        onHover: true,
      })};
  }
  &:active {
    outline: none;
  }
  &:focus {
    outline: none;
  }
  &:disabled,
  &[disabled] {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;
