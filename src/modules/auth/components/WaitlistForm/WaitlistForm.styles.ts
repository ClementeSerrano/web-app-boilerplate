import styled from 'styled-components';

import Button from 'components/Button/Button';

export const WaitlistFormContainer = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  justify-content: center;
`;

export const WaitlistSubmitButton = styled(Button)`
  margin-top: ${({ theme }) => theme.spacing.sm}px;
  min-width: 172px;
`;
