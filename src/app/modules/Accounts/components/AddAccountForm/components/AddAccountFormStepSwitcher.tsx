import { useNavigate } from 'react-router-dom';
import { AddAccountFormStepSwitcherProps } from '../AddAccountForm.types';
import AddAccountBackupStep from './AddAccountBackupStep';
import AddAccountPassphraseStep from './AddAccountPassphraseStep';
import AddAccountPasswordStep from './AddAccountPasswordStep';

/**
 * Renders the corresponding step according to the "activeStep" of
 * the "Add Account" form.
 * @param form - Add account form object.
 * @param activeStep - The active step the user is.
 * @param dispatchActiveStep - Dispatch function for changing the active step.
 */
export default function AddAccountFormStepSwitcher({
  form,
  activeStep,
  dispatchActiveStep,
  encryptAccountData,
  isLoadingEncryptAccount,
  errorOnEncryptAccount,
}: AddAccountFormStepSwitcherProps) {
  const navigate = useNavigate();

  switch (activeStep) {
    case 0:
      return (
        <AddAccountPassphraseStep
          passphrase={form.values.passphrase}
          onPassphraseChange={form.handleChange}
          onBack={() => navigate(-1)}
          onNext={() => dispatchActiveStep('next')}
        />
      );

    case 1:
      return (
        <AddAccountPasswordStep
          password={form.values.password}
          onPasswordChange={form.handleChange}
          confirmPassword={form.values.confirmPassword}
          onConfirmPasswordChange={form.handleChange}
          name={form.values.name}
          onNameChange={form.handleChange}
          onBack={() => dispatchActiveStep('prev')}
          onNext={() => dispatchActiveStep('next')}
          isLoadingEncryptAccount={isLoadingEncryptAccount}
          errorOnEncryptAccount={errorOnEncryptAccount}
        />
      );

    case 2:
      return <AddAccountBackupStep encryptAccountData={encryptAccountData} />;

    default:
      return null;
  }
}
