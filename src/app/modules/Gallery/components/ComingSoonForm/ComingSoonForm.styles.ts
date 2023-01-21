import styled from 'styled-components';
import Button from '../../../../components/Button/Button';
import { DEVICES_BREAKPOINTS } from '../../../../contexts/DeviceContext/DeviceContext.constants';

export const ComingSoonFormContainer = styled.form`
  display: flex;
  align-items: flex-end;
  width: 100%;
  max-width: ${({ theme }) =>
    `${theme.breakpoints.values.sm}${theme.breakpoints.unit}`};
  justify-content: center;
  margin-top: ${({ theme }) => theme.spacing.lg}px;

  @media (max-width: ${DEVICES_BREAKPOINTS.phone.max}px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const ComingSoonSubmitButton = styled(Button)`
  margin-left: ${({ theme }) => theme.spacing.sm}px;

  @media (max-width: ${DEVICES_BREAKPOINTS.phone.max}px) {
    margin-left: 0px;
    margin-top: ${({ theme }) => theme.spacing.sm}px;
    width: 100%;
  }
`;
