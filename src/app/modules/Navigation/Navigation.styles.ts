import styled from 'styled-components';

import Grid from '../../components/Grid/Grid';

export const TopbarContainer = styled(Grid)`
  position: fixed;
  z-index: 1;
  border-bottom: ${({ theme }) =>
    `1px solid ${theme.palette.background.level3}`};
  width: ${({ theme }) => `calc(100% - ${2 * theme.spacing.sm}px)`};
  padding: ${({ theme }) => theme.spacing.sm}px;
`;
