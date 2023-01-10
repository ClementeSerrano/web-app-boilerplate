import { Dispatch } from 'react';
import { FormikProps } from 'formik';

import {
  StepperDispatchAction,
  StepperState,
} from '../../../../components/Stepper/Stepper.types';
import { Account } from '../../accounts.types';
import { ErrorWithMessage } from '../../../../../types/error.types';

export type AddAccountFormValues = {
  passphrase: string;
  password: string;
  confirmPassword: string;
  name?: string;
};

export type AddAccountFormStepSwitcherProps = {
  form: FormikProps<AddAccountFormValues>;
  activeStep: StepperState;
  dispatchActiveStep: Dispatch<StepperDispatchAction>;
  encryptAccountData?: Account;
  isLoadingEncryptAccount: boolean;
  errorOnEncryptAccount?: ErrorWithMessage;
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
  'name' | 'password' | 'confirmPassword'
> &
  Pick<
    AddAccountFormStepSwitcherProps,
    'isLoadingEncryptAccount' | 'errorOnEncryptAccount'
  > & {
    onPasswordChange: React.ChangeEventHandler<HTMLInputElement>;
    onConfirmPasswordChange: React.ChangeEventHandler<HTMLInputElement>;
    onNameChange: React.ChangeEventHandler<HTMLInputElement>;
    onBack: () => void;
    onNext: () => void;
  };

export type AddAccountBackupStepProps = Pick<
  AddAccountFormStepSwitcherProps,
  'encryptAccountData'
>;
