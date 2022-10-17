import styled from "styled-components";
import { getButtonPadding } from "./Button.helpers";

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
  font-weight: 700;
  border-radius: 6px;
  transition: opacity 0.3s;
  text-decoration: none;

  &:hover {
    cursor: pointer;
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
