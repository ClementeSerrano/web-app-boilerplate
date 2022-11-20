import { CSSProperties } from "react";
import styled, { DefaultTheme } from "styled-components";

import { TextFieldStyle } from "../../../../../components/TextField/TextField.types";
import { StepperStyleProps } from "../../../../../components/Stepper/Stepper.types";
import Typography from "../../../../../components/Typography/Typography";

export function getRegisterTitleStyles(theme: DefaultTheme): CSSProperties {
  return { marginBottom: theme.spacing.md };
}

export function getRegisterStepperStyles(): StepperStyleProps {
  return { bar: { height: 6 } };
}

export function getRegisterFieldStyles(theme: DefaultTheme): TextFieldStyle {
  return { container: { marginTop: theme.spacing.xxs } };
}


export const SavePassphraseNoticeText = styled(Typography)`
  color: ${({ theme }) => theme.colors.gray.main};
` as typeof Typography;
