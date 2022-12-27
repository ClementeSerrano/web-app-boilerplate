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
  width: 30vw;
  max-width: ${({ theme }) => theme.breakpoints.values.xxs}px;
  box-shadow: 0px 12px 0px ${({ theme }) => theme.colors.black.main};
  transform: ${({ show }) => (!show ? 'translateX(-100%)' : 'translateX(0)')};
  transition: transform 0.3s ease-out;
  z-index: 100;

  @media (max-width: 600px) {
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
