import { FormikProps } from 'formik';
import { Dispatch } from 'react';

import {
  StepperDispatchAction,
  StepperState,
} from '../../../../../../components/Stepper/Stepper.types';
import { CreateAccountFormValues } from '../CreateAccountForm.types';

import CreateAccountConfirmationStep from './CreateAccountConfirmationStep';
import CreateAccountSavePassphraseStep from './CreateAccountSavePassphraseStep';
import CreateAccountVerifyPassphraseStep from './CreateAccountVerifyPassphraseStep';

export default function CreateAccountFormStepSwitcher({
  form,
  activeStep,
  dispatchActiveStep,
}: {
  form: FormikProps<CreateAccountFormValues>;
  activeStep: StepperState;
  dispatchActiveStep: Dispatch<StepperDispatchAction>;
}) {
  switch (activeStep) {
    case 0:
      return (
        <CreateAccountSavePassphraseStep
          passphrase={form.values.passphrase}
          dispatchActiveStep={dispatchActiveStep}
        />
      );

    case 1:
      return (
        <CreateAccountVerifyPassphraseStep
          passphrase={form.values.passphrase}
          dispatchActiveStep={dispatchActiveStep}
        />
      );

    case 2:
      return (
        <CreateAccountConfirmationStep
          form={form}
          dispatchActiveStep={dispatchActiveStep}
        />
      );

    default:
      return null;
  }
}
