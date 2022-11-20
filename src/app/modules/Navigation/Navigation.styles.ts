import styled from 'styled-components';

import Grid from '../../components/Grid/Grid';

export const TopbarContainer = styled(Grid)`
  position: fixed;
  z-index: 1;
  width: 100%;
  border-bottom: 1px solid ${({ theme }) => theme.palette.background.main};
  display: flex;
  align-items: center;
  justify-content: space-between;
  transition: background-color 0.5s, box-shadow 0.5s;
`;
