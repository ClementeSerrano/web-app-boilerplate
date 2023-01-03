import styled from 'styled-components';

import { StepperStyleProps } from '../../../../components/Stepper/Stepper.types';
import Typography from '../../../../components/Typography/Typography';

export function getCreateAccountStepperStyles(): StepperStyleProps {
  return { bar: { height: 6 } };
}

export const SavePassphraseNoticeText = styled(Typography)`
  color: ${({ theme }) => theme.colors.gray.main};
` as typeof Typography;
