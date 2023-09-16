import styled, { keyframes } from 'styled-components';
import { lighten } from 'polished';

import { DEVICES_BREAKPOINTS } from 'contexts/DeviceContext/DeviceContext.constants';

import {
  TextFieldBarProps,
  TextFieldInputContainerProps,
  TextFieldInputProps,
  TextFieldLabelProps,
} from './TextField.types';
import { ValueOf } from 'lib/interfaces/general.interfaces';

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
  $error: ValueOf<Pick<TextFieldLabelProps, 'error'>>;
}>`
  font-size: ${({ theme }) => theme.typography.fontSizes.sm};
  color: ${({ theme, $error }) =>
    $error ? theme.colors.red.main : theme.palette.text.level1};
  pointer-events: none;
`;

export const TextFieldBar = styled.span<{
  $variant: ValueOf<Pick<TextFieldBarProps, 'variant'>>;
  $error: ValueOf<Pick<TextFieldBarProps, 'error'>>;
}>`
  display: ${({ $variant }) => ($variant === 'filled' ? 'none' : 'block')};
  position: absolute;
  bottom: -2px;
  width: 100%;
  &::before,
  &::after {
    content: '';
    height: 2px;
    width: 0;
    bottom: 0;
    position: absolute;
    background: ${({ theme, $error }) =>
      $error ? theme.colors.red.main : theme.palette.primary.main};
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
  $variant: ValueOf<Pick<TextFieldInputContainerProps, 'variant'>>;
  $isLabel: ValueOf<Pick<TextFieldInputContainerProps, 'isLabel'>>;
  $error: ValueOf<Pick<TextFieldInputContainerProps, 'error'>>;
}>`
  display: flex;
  align-items: center;
  margin-top: ${({ theme }) => theme.spacing.xs}px;
  font-size: ${({ theme }) => theme.typography.fontSizes.md};
  padding: ${({ theme }) => theme.spacing.xs}px
    ${({ theme, $variant }) =>
      $variant === 'filled' ? theme.spacing.xs : '0'}px;
  border: ${({ theme, $variant, $error }) =>
    $variant === 'filled'
      ? `1px solid ${
          $error ? theme.colors.red.main : theme.palette.background.level3
        }`
      : 'unset'};
  border-bottom: ${({ theme, $variant, $error }) =>
    `${$variant === 'filled' ? '1px' : '2px'} solid ${
      $error ? theme.colors.red.main : theme.palette.background.level3
    }`};
  background-color: ${({ $variant, theme }) =>
    $variant === 'filled' ? theme.palette.background.level2 : 'transparent'};
  color: ${({ theme, $error }) =>
    $error ? theme.colors.red.main : theme.palette.background.level3};
  border-radius: ${({ theme, $variant }) =>
    $variant === 'filled' ? theme.shape.borderRadius.sm : '0'}px;
  transition: 0.2s ease all;
  ${({ $variant, theme }) =>
    $variant === 'filled' &&
    `&:hover{ background-color: ${theme.palette.background.level3} }`};

  @media (max-width: ${DEVICES_BREAKPOINTS.phone.max}px) {
    margin-top: ${({ theme, $variant, $isLabel }) =>
      !$isLabel
        ? 0
        : $variant === 'filled'
        ? theme.spacing.xs
        : theme.spacing.xxs}px;
  }
`;

export const TextFieldInput = styled.input<{
  $error: ValueOf<Pick<TextFieldInputProps, 'error'>>;
}>`
  font-size: ${({ theme }) => theme.typography.fontSizes.md};
  font-family: ${({ theme }) => theme.typography.paragraph1.fontFamily};
  display: block;
  border: none;
  background-color: transparent;
  overflow: hidden;
  text-overflow: ellipsis;
  transition: 0.3s ease all;
  color: ${({ theme, $error }) =>
    $error ? theme.colors.red.main : theme.palette.text.level1};
  width: 100%;
  ::placeholder {
    color: ${({ theme, $error }) =>
      lighten(0.4, $error ? theme.colors.red.main : theme.palette.text.level1)};
  }
  &:focus {
    outline: none;
  }
  &:focus ~ ${TextFieldBar}::before, &:focus ~ ${TextFieldBar}::after {
    width: 50%;
    &:focus ~ ${TextFieldHighlight} {
      -webkit-animation: inputHighlighter 0.3s ease;
      -moz-animation: inputHighlighter 0.3s ease;
      animation: ${({ theme, $error }) =>
          inputHighlighter(
            $error ? theme.colors.red.main : theme.palette.text.level1,
          )}
        0.3s ease;
    }
  }
`;
