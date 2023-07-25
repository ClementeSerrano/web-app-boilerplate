import styled from 'styled-components';
import Typography from '../../../../common/components/Typography/Typography';

export const StartTodayTitle = styled(Typography)`
  text-align: center;
  margin-bottom: ${({ theme }) => theme.spacing.md}px;
  max-width: ${({ theme }) => theme.breakpoints.values.sm}px;
`;

export const StartTodaySubtitle = styled(Typography)`
  text-align: center;
  max-width: ${({ theme }) => theme.breakpoints.values.sm}px;
  margin-bottom: ${({ theme }) => theme.spacing.md}px;
`;
