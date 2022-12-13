import styled, { keyframes } from 'styled-components';
import { lighten } from 'polished';

import {
  TextFieldBarProps,
  TextFieldInputContainerProps,
  TextFieldInputProps,
  TextFieldLabelProps,
} from './TextField.types';

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

export const TextFieldLabel = styled.label<TextFieldLabelProps>`
  font-size: ${({ theme }) => theme.typography.fontSizes.md};
  color: ${({ theme, error }) =>
    error ? theme.colors.red.main : theme.palette.text.main};
  position: absolute;
  pointer-events: none;
  top: ${({ theme }) => theme.spacing.xs}px;
  left: ${({ theme, isLeftAdornment, variant }) =>
    isLeftAdornment
      ? variant === 'standard'
        ? theme.spacing.md
        : theme.spacing.lg
      : variant === 'filled'
      ? theme.spacing.xs
      : 0}px;
  transition: 0.2s ease all;
  -moz-transition: 0.2s ease all;
  -webkit-transition: 0.2s ease all;
`;

export const TextFieldBar = styled.span<TextFieldBarProps>`
  display: ${({ variant }) => (variant === 'filled' ? 'none' : 'block')};
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
    background: ${({ theme, error }) =>
      error ? theme.colors.red.main : theme.palette.primary.main};
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

export const TextFieldInputContainer = styled.div<TextFieldInputContainerProps>`
  position: relative;
  display: flex;
  align-items: center;
  margin-top: ${({ theme, variant, isLabel }) =>
    !isLabel
      ? 0
      : variant === 'filled'
      ? theme.spacing.md
      : theme.spacing.sm}px;
  font-size: ${({ theme }) => theme.typography.fontSizes.md};
  padding: ${({ theme }) => theme.spacing.xs}px
    ${({ theme, variant }) => (variant === 'filled' ? theme.spacing.xs : '0')}px;
  border: ${({ theme, variant, error }) =>
    variant === 'filled'
      ? `1px solid ${
          error ? theme.colors.red.main : theme.palette.background.level2
        }`
      : 'unset'};
  border-bottom: ${({ theme, variant, error }) =>
    variant === 'filled' && !error
      ? 'unset'
      : `${variant === 'filled' ? '1px' : '2px'} solid ${
          error ? theme.colors.red.main : theme.palette.background.level3
        }`};
  background-color: ${({ variant, theme }) =>
    variant === 'filled' ? theme.palette.background.level2 : 'transparent'};
  color: ${({ theme, error }) =>
    error ? theme.colors.red.main : theme.palette.background.level3};
  border-radius: ${({ theme, variant }) =>
    variant === 'filled' ? theme.shape.borderRadius.sm : '0'}px;
  transition: 0.2s ease all;
  ${({ variant, theme }) =>
    variant === 'filled' &&
    `&:hover{ background-color: ${theme.palette.background.level3} }`};

  @media (max-width: 600px) {
    padding: ${({ theme }) => theme.spacing.xxs}px
      ${({ theme, variant }) =>
        variant === 'filled' ? theme.spacing.xxs : '0'}px;
    margin-top: ${({ theme, variant, isLabel }) =>
      !isLabel
        ? 0
        : variant === 'filled'
        ? theme.spacing.xs
        : theme.spacing.xxs}px;
  }
`;

export const TextFieldInput = styled.input<TextFieldInputProps>`
  font-size: ${({ theme }) => theme.typography.fontSizes.md};
  display: block;
  border: none;
  background-color: transparent;
  overflow: hidden;
  text-overflow: ellipsis;
  transition: 0.3s ease all;
  color: ${({ theme, error }) =>
    error ? theme.colors.red.main : theme.palette.text.main};
  width: 100%;
  ::placeholder {
    color: ${({ theme, error }) =>
      lighten(0.4, error ? theme.colors.red.main : theme.palette.text.main)};
  }
  &:focus {
    outline: none;
  }
  &:read-only ~ ${TextFieldLabel} {
    top: -${({ theme, variant }) => (variant === 'filled' ? theme.spacing.md : theme.spacing.sm)}px;
    color: ${({ theme }) => theme.palette.text.main};
    font-size: ${({ theme }) => theme.typography.fontSizes.sm};
  }
  &:focus ~ ${TextFieldLabel}, &:valid ~ ${TextFieldLabel} {
    top: -${({ theme, variant }) => (variant === 'filled' ? theme.spacing.md : theme.spacing.sm)}px;
    left: 0;
    font-size: ${({ theme }) => theme.typography.fontSizes.sm};
  }
  &:focus ~ ${TextFieldBar}::before, &:focus ~ ${TextFieldBar}::after {
    width: 50%;
    &:focus ~ ${TextFieldHighlight} {
      -webkit-animation: inputHighlighter 0.3s ease;
      -moz-animation: inputHighlighter 0.3s ease;
      animation: ${({ theme, error }) =>
          inputHighlighter(
            error ? theme.colors.red.main : theme.palette.text.main,
          )}
        0.3s ease;
    }
  }
`;
