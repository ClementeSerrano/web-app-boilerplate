import styled from 'styled-components';
import { Link } from 'react-router-dom';

import Grid from '../Grid/Grid';
import { DEVICES_BREAKPOINTS } from '../../contexts/DeviceContext/DeviceContext.constants';
import {
  getGridBgColor,
  getGridMaxSize,
  getGridPadding,
} from '../Grid/Grid.helpers';

export const NavigationTopbarContainer = styled.nav`
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: space-between;
  z-index: 9;
  border-bottom: ${({ theme }) =>
    `1px solid ${theme.palette.background.level3}`};
  width: ${({ theme }) => `calc(100% - ${2 * theme.spacing.sm}px)`};
  padding: ${({ theme }) =>
    getGridPadding({ size: 'sm', container: true, spacing: theme.spacing })};
  width: ${({ theme }) =>
    getGridMaxSize({ maxWidth: true, size: 'sm', spacing: theme.spacing })};
  background-color: ${({ theme }) =>
    getGridBgColor({
      container: true,
      variant: 'level1',
      palette: theme.palette,
    })};
`;

export const NavigationTopbarLogoNavlink = styled(Link)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: ${({ theme }) => `${theme.spacing.xxxs}px ${theme.spacing.xxs}px`};
  border-radius: ${({ theme }) => theme.shape.borderRadius.sm}px;
  transition: all 0.3s;

  &:hover {
    background-color: ${({ theme }) => theme.palette.background.level2};
  }
`;

export const NavigationSidebarContainer = styled(Grid)<{
  show: boolean;
}>`
  position: absolute;
  left: 0;
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 30vw;
  max-width: ${({ theme }) => theme.breakpoints.values.xxs}px;
  box-shadow: 0px 12px 0px ${({ theme }) => theme.colors.black.main};
  transform: ${({ show }) => (!show ? 'translateX(-100%)' : 'translateX(0)')};
  transition: transform 0.3s ease-out;
  z-index: 100;
  border-right: ${({ theme }) =>
    `1px solid ${theme.palette.background.level3}`};

  @media (max-width: ${DEVICES_BREAKPOINTS.phone.max}px) {
    width: 50vw;
    min-width: 100px;
    padding: ${({ theme }) => theme.spacing.md}px;
  }
`;

export const NavigationBackdropContainer = styled.div<{ show: boolean }>`
  display: ${({ show }) => (show ? 'block' : 'none')};
  position: fixed;
  width: 100%;
  height: 100%;
  background: ${({ theme }) => theme.colors.black.main};
  opacity: 0.3;
  z-index: 50;
`;
