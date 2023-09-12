import styled from 'styled-components';
import { DEVICES_BREAKPOINTS } from '../../contexts/DeviceContext/DeviceContext.constants';
import {
  getMobileTypographyFontSize,
  getTypographyColor,
} from './Typography.helpers';
import { TypographyProps } from './Typography.types';

export const TypographyContainer = styled.p<
  Required<Pick<TypographyProps, 'variant' | 'color'>>
>`
  display: flex;
  align-items: center;
  font-family: ${({ theme, variant }) => theme.typography[variant].fontFamily};
  font-size: ${({ theme, variant }) => theme.typography[variant].fontSize};
  font-weight: ${({ theme, variant }) => theme.typography[variant].fontWeight};
  line-height: ${({ theme, variant }) => theme.typography[variant].lineHeight};
  letter-spacing: ${({ theme, variant }) =>
    theme.typography[variant].letterSpacing};
  color: ${({ theme, variant, color }) =>
    getTypographyColor({ variant, color, palette: theme.palette })};
  text-decoration: none;

  @media (max-width: ${DEVICES_BREAKPOINTS.phone.max}px) {
    font-size: ${({ theme, variant }) =>
      getMobileTypographyFontSize({ variant, typography: theme.typography })};
  }
`;
