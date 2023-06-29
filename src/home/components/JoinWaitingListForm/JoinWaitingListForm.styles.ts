import styled from 'styled-components';

import Button from '../../../common/components/Button/Button';

export const JoinWaitingListFormContainer = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: ${({ theme }) =>
    `${theme.breakpoints.values.xs}${theme.breakpoints.unit}`};
  justify-content: center;
  margin-top: ${({ theme }) => theme.spacing.lg}px;
`;

export const ComingSoonSubmitButton = styled(Button)`
  margin-top: ${({ theme }) => theme.spacing.sm}px;
  width: 100%;
`;
