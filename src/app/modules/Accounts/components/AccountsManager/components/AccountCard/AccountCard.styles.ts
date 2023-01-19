import styled from 'styled-components';

import Avatar from '../../../../../../components/Avatar/Avatar';
import Grid from '../../../../../../components/Grid/Grid';

export const AccountCardContainer = styled(Grid)`
  &:not(:last-child) {
    border-bottom: 1px solid ${({ theme }) => theme.palette.background.level3};
    padding-bottom: ${({ theme }) => theme.spacing.sm}px;
  }
`;

export const AccountCardAvatar = styled(Avatar)`
  margin-right: ${({ theme }) => theme.spacing.xs}px;
`;
