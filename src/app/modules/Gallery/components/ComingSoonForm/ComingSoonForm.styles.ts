import styled from 'styled-components';
import Button from '../../../../components/Button/Button';
import { DEVICES_BREAKPOINTS } from '../../../../contexts/DeviceContext/DeviceContext.constants';

export const ComingSoonFormContainer = styled.form`
  display: flex;
  align-items: flex-end;
  width: 100%;
  max-width: 420px;
  justify-content: center;
  margin-top: 40px;

  @media (max-width: ${DEVICES_BREAKPOINTS.phone.max}px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const ComingSoonSubmitButton = styled(Button)`
  margin-left: 16px;

  @media (max-width: ${DEVICES_BREAKPOINTS.phone.max}px) {
    margin-left: 0px;
    margin-top: 16px;
    width: 100%;
  }
`;
