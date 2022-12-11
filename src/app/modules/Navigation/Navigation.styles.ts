import styled from 'styled-components';

import Grid from '../../components/Grid/Grid';

export const TopbarContainer = styled(Grid)`
  position: fixed;
  z-index: 1;
  border-bottom: 1px solid ${({ theme }) => theme.palette.background.main};
  width: calc(100% - 96px);
  padding: 16px 48px;
` as typeof Grid;
