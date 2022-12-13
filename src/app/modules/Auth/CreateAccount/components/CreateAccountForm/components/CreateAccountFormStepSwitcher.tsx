import { FormikProps } from 'formik';
import { Dispatch } from 'react';

import Button from '../../../../../../components/Button/Button';
import {
  StepperDispatchAction,
  StepperState,
} from '../../../../../../components/Stepper/Stepper.types';
import { CreateAccountFormValues } from '../CreateAccountForm.types';

import CreateAccountFormConfirmStep from './CreateAccountConfirmStep';
import CreateAccountPassphraseStep from './CreateAccountSavePassphraseStep';

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
        <CreateAccountPassphraseStep
          passphrase={form.values.passphrase}
          dispatchActiveStep={dispatchActiveStep}
        />
      );

    case 1:
      return (
        <>
          <p>Passphrase verification.</p>
          <Button variant="primary" onClick={() => dispatchActiveStep('next')}>
            Continue
          </Button>
        </>
      );

    case 2:
      return (
        <CreateAccountFormConfirmStep
          form={form}
          dispatchActiveStep={dispatchActiveStep}
        />
      );

    default:
      return null;
  }
}
