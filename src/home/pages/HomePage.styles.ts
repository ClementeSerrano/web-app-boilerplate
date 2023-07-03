import styled from 'styled-components';

import Button from '../../common/components/Button/Button';

export const HomePageWaitingListButton = styled(Button)`
  display: flex;
  align-items: center;
  margin-top: ${({ theme }) => theme.spacing.md}px;
`;
