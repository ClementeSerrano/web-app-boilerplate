import styled from "styled-components";
import {
  getMobileTypographyFontSize,
  getTypographyColor,
} from "./Typography.helpers";
import { TypographyProps } from "./Typography.types";

export const TypographyContainer = styled.p<
  Required<Pick<TypographyProps, "variant">>
>`
  font-family: ${({ theme, variant }) => theme.typography[variant].fontFamily};
  font-size: ${({ theme, variant }) => theme.typography[variant].fontSize};
  font-weight: ${({ theme, variant }) => theme.typography[variant].fontWeight};
  line-height: ${({ theme, variant }) => theme.typography[variant].lineHeight};
  letter-spacing: ${({ theme, variant }) =>
    theme.typography[variant].letterSpacing};
  color: ${({ theme, variant }) =>
    getTypographyColor({ variant, mode: theme.mode, palette: theme.palette })};

  @media (max-width: 600px) {
    font-size: ${({ theme, variant }) =>
      getMobileTypographyFontSize({ variant, typography: theme.typography })};
  }
`;
