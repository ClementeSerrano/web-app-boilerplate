import { useMemo } from 'react';
import { useNavigate } from 'react-router-dom';

import { useStepper } from '../../../../components/Stepper/Stepper.hooks';
import Stepper from '../../../../components/Stepper/Stepper';
import { createPassphrase } from '../../helpers/accounts.helpers';

import usePassphraseQuiz from '../../hooks/usePassphraseQuiz';
import { WithStyle } from '../../../../components/components.types';
import { ROUTE_PATHS } from '../../../../routes/routes.constants';

import CreateAccountFormStepSwitcher from './components/CreateAccountFormStepSwitcher';
import { getCreateAccountStepperStyles } from './CreateAccountForm.styles';

export default function CreateAccountForm({ style, className }: WithStyle) {
  const navigate = useNavigate();

  const passphrase = useMemo(() => createPassphrase(), []);

  const passphraseQuiz = usePassphraseQuiz(passphrase);

  const [activeStep, dispatchActiveStep] = useStepper();

  const handleSubmit = () => navigate(`/${ROUTE_PATHS.addAccount}`);

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
