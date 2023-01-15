import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

import { DEVICES_BREAKPOINTS } from '../../contexts/DeviceContext/DeviceContext.constants';

import {
  getNavlinkActiveBgColor,
  getNavlinkActiveColor,
  getNavlinkColor,
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
  color: ${({ theme, variant }) => getNavlinkColor({ theme, variant })};
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

  &.active {
    color: ${({ theme, variant }) => getNavlinkActiveColor({ theme, variant })};
    background-color: ${({ theme, variant, container }) =>
      getNavlinkActiveBgColor({ theme, variant, container })};
    font-weight: ${({ theme }) => theme.typography.fontWeights.bold};
  }

  @media (max-width: ${DEVICES_BREAKPOINTS.phone.max}px) {
    margin: 4px 0px;

    &:not(:last-child) {
      margin-right: 0;
    }
  }
`;
