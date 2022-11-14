import { CSSProperties } from "react";
import styled, { DefaultTheme } from "styled-components";

import { TextFieldStyle } from "../../../../../components/TextField/TextField.types";
import Button from "../../../../../components/Button/Button";
import { StepperStyleProps } from "../../../../../components/Stepper/Stepper.types";

export const RegisterFormSubmitButton = styled(Button)`
  width: 100%;
  margin-top: ${({ theme }) => theme.spacing.md}px;
`;

export function getRegisterTitleStyles(theme: DefaultTheme): CSSProperties {
  return { marginBottom: theme.spacing.md };
}

export function getRegisterStepperStyles(): StepperStyleProps {
  return { bar: { height: 6 } };
}

export function getRegisterFieldStyles(theme: DefaultTheme): TextFieldStyle {
  return { container: { marginTop: theme.spacing.xxs } };
}
