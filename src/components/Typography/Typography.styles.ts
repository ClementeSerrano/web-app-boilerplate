import styled from 'styled-components';

import { DEVICES_BREAKPOINTS } from 'contexts/DeviceContext/DeviceContext.constants';
import {
  getMobileTypographyFontSize,
  getTypographyColor,
} from './Typography.utils';
import {
  ThemeColorLevel,
  ThemeTypographyKey,
} from 'lib/interfaces/theme.interfaces';

export const TypographyContainer = styled.p<{
  $variant: ThemeTypographyKey;
  $color: ThemeColorLevel;
  $bold?: boolean;
  $noMargin?: boolean;
}>`
  display: flex;
  align-items: center;
  font-family: ${({ theme, $variant }) =>
    theme.typography[$variant].fontFamily};
  font-size: ${({ theme, $variant }) => theme.typography[$variant].fontSize};
  font-weight: ${({ theme, $variant, $bold }) =>
    $bold
      ? theme.typography.fontWeights.bold
      : theme.typography[$variant].fontWeight};
  line-height: ${({ theme, $variant }) =>
    theme.typography[$variant].lineHeight};
  letter-spacing: ${({ theme, $variant }) =>
    theme.typography[$variant].letterSpacing};
  text-transform: ${({ theme, $variant }) =>
    theme.typography[$variant].textTransform};
  color: ${({ theme, $variant, $color }) =>
    getTypographyColor({
      variant: $variant,
      color: $color,
      palette: theme.palette,
    })};
  text-decoration: none;
  margin-bottom: ${({ theme, $noMargin, $variant }) =>
    $noMargin ? 0 : theme.typography[$variant].marginBottom}px;

  @media (max-width: ${DEVICES_BREAKPOINTS.phone.max}px) {
    font-size: ${({ theme, $variant }) =>
      getMobileTypographyFontSize({
        variant: $variant,
        typography: theme.typography,
      })};
  }
`;
