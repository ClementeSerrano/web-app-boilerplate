import styled from 'styled-components';

import Typography from '../../../../components/Typography/Typography';

export const WaitingListDialogParagraph = styled(Typography)`
  margin-top: ${({ theme }) => theme.spacing.xs}px;
  margin-bottom: ${({ theme }) => theme.spacing.xs}px;
  max-width: ${({ theme }) => theme.breakpoints.values.xs}px;
  text-align: center;
`;
