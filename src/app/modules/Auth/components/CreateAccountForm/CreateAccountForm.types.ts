import { Dispatch } from 'react';
import {
  StepperDispatchAction,
  StepperState,
} from '../../../../components/Stepper/Stepper.types';
import { UsePassphraseQuiz } from '../../hooks/usePassphraseQuiz.types';

export type CreateAccountFormStepSwitcherProps = CreateAccountFormStepProps & {
  passphraseQuiz: UsePassphraseQuiz;
  activeStep: StepperState;
};

export type CreateAccountFormStepProps = {
  passphrase: string;
  dispatchActiveStep: Dispatch<StepperDispatchAction>;
};
