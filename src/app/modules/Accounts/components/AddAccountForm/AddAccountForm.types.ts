import { Dispatch } from 'react';
import { FormikProps } from 'formik';

import {
  StepperDispatchAction,
  StepperState,
} from '../../../../components/Stepper/Stepper.types';

export type AddAccountFormValues = {
  passphrase: string;
  password: string;
  confirmPassword: string;
};

export type AddAccountFormStepSwitcherProps = {
  form: FormikProps<AddAccountFormValues>;
  activeStep: StepperState;
  dispatchActiveStep: Dispatch<StepperDispatchAction>;
};

export type AddAccountPassphraseStepProps = Pick<
  AddAccountFormValues,
  'passphrase'
> & {
  onPassphraseChange: React.ChangeEventHandler<HTMLInputElement>;
  onBack: () => void;
  onNext: () => void;
};

export type AddAccountPasswordStepProps = Pick<
  AddAccountFormValues,
  'password' | 'confirmPassword'
> & {
  onPasswordChange: React.ChangeEventHandler<HTMLInputElement>;
  onConfirmPasswordChange: React.ChangeEventHandler<HTMLInputElement>;
  onBack: () => void;
  onNext: () => void;
};
