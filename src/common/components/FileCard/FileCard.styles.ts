import { lighten } from 'polished';
import styled from 'styled-components';
import Grid from '../Grid/Grid';

export const FileCardContainer = styled(Grid)`
  width: calc(100% - 32px);
  border: 1px solid ${({ theme }) => theme.palette.background.level3};
  border-radius: ${({ theme }) => theme.shape.borderRadius.sm}px;
`;

export const FileCardIconContainer = styled(Grid)`
  border-radius: ${({ theme }) => theme.shape.borderRadius.sm}px;
  background-color: ${({ theme }) => lighten(0.3, theme.palette.primary.main)};
  margin-right: ${({ theme }) => theme.spacing.xs}px;
`;
