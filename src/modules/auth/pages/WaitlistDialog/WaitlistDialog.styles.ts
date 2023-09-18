import styled from 'styled-components';

import Typography from 'components/Typography/Typography';

export const WaitlistDialogParagraph = styled(Typography)`
  margin-top: ${({ theme }) => theme.spacing.xs}px;
  margin-bottom: ${({ theme }) => theme.spacing.md}px;
  max-width: ${({ theme }) => theme.breakpoints.values.xs}px;
  text-align: center;
`;
