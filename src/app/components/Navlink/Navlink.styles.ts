import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

import {
  getNavlinkActiveBgColor,
  getNavlinkActiveColor,
  getNavlinkFontSize,
  getNavlinkOnHoverBgColor,
  getNavlinkOnHoverColor,
  getNavlinkPadding,
} from './Navlink.helpers';
import { NavlinkContainerProps } from './Navlink.types';

export const NavlinkContainer = styled(NavLink)<NavlinkContainerProps>`
  display: flex;
  align-items: center;
  text-decoration: none;
  color: ${({ theme }) => theme.palette.text.main};
  padding: ${({ theme, container, size }) =>
    getNavlinkPadding({ theme, container, size })};
  border-radius: ${({ theme }) => theme.shape.borderRadius.sm}px;
  font-size: ${({ theme, size }) => getNavlinkFontSize({ theme, size })};
  line-height: 1.4;
  transition: all 0.3s;

  &:hover {
    color: ${({ theme, variant }) =>
      getNavlinkOnHoverColor({ theme, variant })};
    background-color: ${({ theme, variant, container }) =>
      getNavlinkOnHoverBgColor({ theme, variant, container })};
  }

  &:not(:last-child) {
    margin-bottom: ${({ theme }) => theme.spacing.xxs}px;
  }

  &.active {
    color: ${({ theme, variant }) => getNavlinkActiveColor({ theme, variant })};
    background-color: ${({ theme, variant, container }) =>
      getNavlinkActiveBgColor({ theme, variant, container })};
    font-weight: ${({ theme }) => theme.typography.fontWeights.bold};
  }

  @media (max-width: 600px) {
    margin: ${({ theme }) => theme.spacing.xxxs}px 0px;

    &:not(:last-child) {
      margin-right: 0;
    }
  }
`;
