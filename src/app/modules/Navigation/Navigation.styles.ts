import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

import Grid from '../../components/Grid/Grid';

export const NavigationTopbarContainer = styled(Grid)`
  position: fixed;
  z-index: 1;
  border-bottom: ${({ theme }) =>
    `1px solid ${theme.palette.background.level3}`};
  width: ${({ theme }) => `calc(100% - ${2 * theme.spacing.sm}px)`};
  padding: ${({ theme }) => theme.spacing.sm}px;
`;

export const NavigationSidebarContainer = styled(Grid)<{
  show: boolean;
}>`
  position: absolute;
  left: 0;
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 50vw;
  max-width: 240px;
  box-shadow: 0px 12px 0px ${({ theme }) => theme.colors.black.main};
  transform: ${({ show }) => (!show ? 'translateX(-100%)' : 'translateX(0)')};
  transition: transform 0.3s ease-out;
  z-index: 100;

  @media (max-width: 600px) {
    min-width: 100px;
    padding: 24px;
  }
`;

export const NavigationBackdropContainer = styled.div<{ show: boolean }>`
  display: ${({ show }) => (show ? 'block' : 'none')};
  position: fixed;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.3);
  z-index: 50;
`;

export const NavigationLink = styled(NavLink)`
  display: flex;
  align-items: center;
  text-decoration: none;
  color: ${({ theme }) => theme.colors.gray.main};
  padding: 8px 16px;
  border-radius: 8px;
  font-size: 16px;
  line-height: 1.4;
  transition: all 0.3s;

  &:hover {
    color: #fff;
    background-color: ${({ theme }) => theme.colors.black.light};
  }

  &:not(:last-child) {
    margin-bottom: 8px;
  }

  @media (max-width: 600px) {
    margin: 4px 0;

    &:not(:last-child) {
      margin-right: 0;
    }
  }
`;
