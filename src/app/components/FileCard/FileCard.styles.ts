import styled from 'styled-components';
import Grid from '../Grid/Grid';

export const FileCardContainer = styled(Grid)`
  width: calc(100% - 32px);
  border: 2px solid ${({ theme }) => theme.palette.background.level3};
  border-radius: ${({ theme }) => theme.shape.borderRadius.sm}px;
`;
