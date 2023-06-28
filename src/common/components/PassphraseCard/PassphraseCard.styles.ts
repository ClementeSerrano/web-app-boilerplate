import styled from 'styled-components';

import Grid from '../Grid/Grid';

export const PassphraseCardContainer = styled(Grid)`
  padding: ${({ theme }) => theme.spacing.sm}px;
  border: 2px solid ${({ theme }) => theme.palette.background.level3};
  border-radius: ${({ theme }) => theme.shape.borderRadius.sm}px;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
`;

export const PassphraseText = styled.code`
  line-height: 2;
  text-align: center;
  color: ${({ theme }) => theme.palette.text.level1};
  font-size: ${({ theme }) => theme.typography.fontSizes.md};
  font-weight: ${({ theme }) => theme.typography.fontWeights.bold};
`;
