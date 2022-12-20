import styled from 'styled-components';

import Grid from '../../components/Grid/Grid';

export const TopbarContainer = styled(Grid)<{ isAuth: boolean }>`
  position: fixed;
  z-index: 1;
  border-bottom: ${({ theme, isAuth }) =>
    isAuth ? `1px solid ${theme.palette.background.level3}` : 'unset'};
  width: ${({ theme }) => `calc(100% - ${2 * theme.spacing.md}px)`};
  padding: ${({ theme }) => theme.spacing.md}px;
`;
