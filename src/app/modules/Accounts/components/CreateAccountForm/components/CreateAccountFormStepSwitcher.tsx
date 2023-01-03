import { CreateAccountFormStepSwitcherProps } from '../CreateAccountForm.types';

import CreateAccountConfirmationStep from './CreateAccountConfirmationStep';
import CreateAccountSavePassphraseStep from './CreateAccountSavePassphraseStep';
import CreateAccountVerifyPassphraseStep from './CreateAccountVerifyPassphraseStep';

export default function CreateAccountFormStepSwitcher({
  passphrase,
  passphraseQuiz,
  activeStep,
  dispatchActiveStep,
}: CreateAccountFormStepSwitcherProps) {
  switch (activeStep) {
    case 0:
      return (
        <CreateAccountSavePassphraseStep
          passphrase={passphrase}
          dispatchActiveStep={dispatchActiveStep}
        />
      );

    case 1:
      return (
        <CreateAccountVerifyPassphraseStep
          passphraseQuiz={passphraseQuiz}
          dispatchActiveStep={dispatchActiveStep}
        />
      );

    case 2:
      return (
        <CreateAccountConfirmationStep
          dispatchActiveStep={dispatchActiveStep}
        />
      );

    default:
      return null;
  }
}
