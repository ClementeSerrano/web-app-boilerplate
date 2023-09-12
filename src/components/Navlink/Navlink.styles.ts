import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

import { DEVICES_BREAKPOINTS } from '../../contexts/DeviceContext/DeviceContext.constants';

import {
  getNavlinkColor,
  getNavlinkBgColor,
  getNavlinkActiveColor,
  getNavlinkActiveBgColor,
  getNavlinkOnHoverColor,
  getNavlinkOnHoverBgColor,
  getNavlinkPadding,
  getNavlinkFontSize,
} from './Navlink.helpers';
import { NavlinkContainerProps } from './Navlink.types';

export const NavlinkContainer = styled(NavLink)<NavlinkContainerProps>`
  display: flex;
  align-items: center;
  text-decoration: none;
  color: ${({ theme, format, variant }) =>
    getNavlinkColor({ theme, format, variant })};
  background-color: ${({ theme, variant, format }) =>
    getNavlinkBgColor({ theme, variant, format })};
  padding: ${({ theme, format, size }) =>
    getNavlinkPadding({ theme, format, size })};
  border-radius: ${({ theme }) => theme.shape.borderRadius.sm}px;
  font-size: ${({ theme, size }) => getNavlinkFontSize({ theme, size })};
  line-height: 1.4;
  transition: all 0.3s;
  font-weight: ${({ theme }) => theme.typography.fontWeights.bold};

  &:hover {
    color: ${({ theme, format, variant }) =>
      getNavlinkOnHoverColor({ theme, format, variant })};
    background-color: ${({ theme, variant, format }) =>
      getNavlinkOnHoverBgColor({ theme, variant, format })};
  }

  &.active {
    color: ${({ theme, format, variant }) =>
      getNavlinkActiveColor({ theme, format, variant })};
    background-color: ${({ theme, variant, format }) =>
      getNavlinkActiveBgColor({ theme, variant, format })};
  }

  @media (max-width: ${DEVICES_BREAKPOINTS.phone.max}px) {
    margin: 4px 0px;

    &:not(:last-child) {
      margin-right: 0;
    }
  }
`;
