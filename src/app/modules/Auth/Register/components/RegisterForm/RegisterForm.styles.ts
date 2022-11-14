import styled, { DefaultTheme } from "styled-components";

import { TextFieldStyle } from "../../../../../components/TextField/TextField.types";
import Button from "../../../../../components/Button/Button";

export const RegisterFormSubmitButton = styled(Button)`
  width: 100%;
  margin-top: ${({ theme }) => theme.spacing.md}px;
`;

export function getRegisterFieldStyles(theme: DefaultTheme): TextFieldStyle {
  return { container: { marginTop: theme.spacing.xxs } };
}
