import styled from 'styled-components';

import Grid from '../Grid/Grid';

export const PassphraseFieldContainer = styled(Grid)`
  padding: ${({ theme }) => theme.spacing.sm}px;
  border: 1px solid ${({ theme }) => theme.palette.background.main};
  border-radius: ${({ theme }) => theme.shape.borderRadius.sm}px;
`;

export const PassphraseText = styled.code`
  line-height: 2;
  text-align: center;
  color: ${({ theme }) => theme.palette.text.light};
  font-size: ${({ theme }) => theme.typography.fontSizes.md};
  font-weight: ${({ theme }) => theme.typography.fontWeights.bold};
`;
