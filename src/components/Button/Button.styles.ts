import styled from 'styled-components';

import {
  getButtonBgColor,
  getButtonBorder,
  getButtonColor,
  getButtonPadding,
} from './Button.utils';
import { ButtonProps } from './Button.interfaces';
import { ValueOf } from 'lib/interfaces/general.interfaces';

export const ButtonContainer = styled.button.attrs(
  (props: React.ButtonHTMLAttributes<HTMLButtonElement>) => ({
    disabled: props.disabled,
  }),
)<{
  $variant: ValueOf<Pick<ButtonProps, 'variant'>>;
  $format: ValueOf<Pick<ButtonProps, 'format'>>;
  $size: ValueOf<Pick<ButtonProps, 'size'>>;
}>`
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: ${({ theme }) => theme.typography.button.fontFamily};
  font-weight: ${({ theme }) => theme.typography.button.fontWeight};
  font-size: ${({ theme }) => theme.typography.button.fontSize};
  padding: ${({ $format, $size }) =>
    getButtonPadding({ format: $format, size: $size })};
  background-color: ${({ theme, $format, $variant }) =>
    getButtonBgColor({
      variant: $variant,
      format: $format,
      palette: theme.palette,
    })};
  color: ${({ theme, $format, $variant }) =>
    getButtonColor({
      variant: $variant,
      format: $format,
      palette: theme.palette,
    })};
  border: ${({ theme, $format, $variant }) =>
    getButtonBorder({
      variant: $variant,
      format: $format,
      palette: theme.palette,
    })};
  border-radius: 6px;
  transition:
    opacity 0.3s,
    background-color 0.3s;
  text-decoration: none;
  max-width: ${({ theme }) => theme.breakpoints.values.xs}px;

  &:hover {
    cursor: pointer;
    background-color: ${({ theme, $format, $variant }) =>
      getButtonBgColor({
        variant: $variant,
        format: $format,
        palette: theme.palette,
        onHover: true,
      })};

    color: ${({ theme, $format, $variant }) =>
      getButtonColor({
        variant: $variant,
        format: $format,
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
