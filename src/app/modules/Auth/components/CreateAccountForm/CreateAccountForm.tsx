import { useMemo } from 'react';

import { useStepper } from '../../../../components/Stepper/Stepper.hooks';
import Stepper from '../../../../components/Stepper/Stepper';
import { createPassphrase } from '../../helpers/auth.helpers';

import { getCreateAccountStepperStyles } from './CreateAccountForm.styles';
import CreateAccountFormStepSwitcher from './components/CreateAccountFormStepSwitcher';
import { WithStyle } from '../../../../components/components.types';
import usePassphraseQuiz from '../../hooks/usePassphraseQuiz';

export default function CreateAccountForm({ style, className }: WithStyle) {
  const passphrase = useMemo(() => createPassphrase(), []);

  const passphraseQuiz = usePassphraseQuiz(passphrase);

  const [activeStep, dispatchActiveStep] = useStepper();

  const handleSubmit = () => console.log('create account complete...');

  const stepperStyles = getCreateAccountStepperStyles();

  const stepsLabels = ['Passphrase', 'Verification', 'Confirm'];

  return (
    <form onSubmit={handleSubmit} style={style} className={className}>
      <Stepper activeStep={activeStep} style={stepperStyles}>
        {stepsLabels.map((stepLabel, index) => (
          <Stepper.Step key={index}>
            <Stepper.Label>{stepLabel}</Stepper.Label>
          </Stepper.Step>
        ))}
      </Stepper>

      <CreateAccountFormStepSwitcher
        passphrase={passphrase}
        passphraseQuiz={passphraseQuiz}
        activeStep={activeStep}
        dispatchActiveStep={dispatchActiveStep}
      />
    </form>
  );
}
