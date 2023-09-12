import styled from 'styled-components';

import Button from '../../../../components/Button/Button';
import Typography from '../../../../components/Typography/Typography';

export const HomePageTitle = styled(Typography)`
  text-align: center;
  margin-bottom: ${({ theme }) => theme.spacing.md}px;
  max-width: ${({ theme }) => theme.breakpoints.values.sm}px;
`;

export const HomePageSubtitle = styled(Typography)`
  text-align: center;
  max-width: ${({ theme }) => theme.breakpoints.values.sm}px;
`;

export const HomePageWaitingListButton = styled(Button)`
  display: flex;
  align-items: center;
  margin-top: ${({ theme }) => theme.spacing.md}px;
  margin-bottom: ${({ theme }) => theme.spacing.sm}px;
`;
