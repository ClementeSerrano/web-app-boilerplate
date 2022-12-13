import styled from 'styled-components';

import Grid from '../../components/Grid/Grid';

export const TopbarContainer = styled(Grid)<{ isAuth: boolean }>`
  position: fixed;
  z-index: 1;
  border-bottom: 1px solid
    ${({ theme, isAuth }) =>
      isAuth ? theme.palette.background.level3 : 'unset'};
  width: calc(100% - 96px);
  padding: 16px 48px;
`;
