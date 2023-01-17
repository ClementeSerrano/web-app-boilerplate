import { useFormik } from 'formik';

import Grid from '../../../../components/Grid/Grid';
import Navlink from '../../../../components/Navlink/Navlink';
import Stepper from '../../../../components/Stepper/Stepper';
import { useStepper } from '../../../../components/Stepper/Stepper.hooks';
import Typography from '../../../../components/Typography/Typography';
import { ROUTE_PATHS } from '../../../../routes/routes.constants';
import useAccountsManagement from '../../hooks/useAccountsManagement';
import useCurrentAccount from '../../hooks/useCurrentAccount';
import useEncryptAccount from '../../hooks/useEncryptAccount';
import {
  MOCKED_ACCOUNT_NAME,
  MOCKED_ACCOUNT_PASSWORD,
  MOCKED_PASSPHRASE,
} from '../../mocks/account.mock';
import { getCreateAccountStepperStyles } from '../CreateAccountForm/CreateAccountForm.styles';
import { AddAccountFormValues } from './AddAccountForm.types';
import AddAccountFormStepSwitcher from './components/AddAccountFormStepSwitcher';

/**
 * Form to add a created account to the user device.
 */
export default function AddAccountForm() {
  const [activeStep, dispatchActiveStep] = useStepper(0, 3);
  const { addAccount } = useAccountsManagement();
  const [, setCurrentAccount] = useCurrentAccount();

  const [
    encryptAccount,
    {
      data: encryptAccountData,
      isLoading: isLoadingEncryptAccount,
      error: errorOnEncryptAccount,
    },
  ] = useEncryptAccount({
    onCompleted(data) {
      // Set account on context and local storage.
      addAccount(data);

      setCurrentAccount(data);

      dispatchActiveStep('last');
    },
  });

  console.log({ encryptAccountData });

  const form = useFormik<AddAccountFormValues>({
    initialValues: {
      passphrase: MOCKED_PASSPHRASE,
      password: MOCKED_ACCOUNT_PASSWORD,
      confirmPassword: MOCKED_ACCOUNT_PASSWORD,
      name: MOCKED_ACCOUNT_NAME,
    },
    onSubmit(values) {
      encryptAccount({
        passphrase: values.passphrase,
        password: values.password,
        name: values.name,
      });
    },
  });

  const stepsLabels = ['Enter passphrase', 'Setup password', 'Backup account'];

  const stepperStyles = getCreateAccountStepperStyles();

  return (
    <form onSubmit={form.handleSubmit}>
      <Stepper activeStep={activeStep} style={stepperStyles}>
        {stepsLabels.map((stepLabel, index) => (
          <Stepper.Step key={index}>
            <Stepper.Label>{stepLabel}</Stepper.Label>
          </Stepper.Step>
        ))}
      </Stepper>

      <AddAccountFormStepSwitcher
        form={form}
        activeStep={activeStep}
        dispatchActiveStep={dispatchActiveStep}
        encryptAccountData={encryptAccountData}
        isLoadingEncryptAccount={isLoadingEncryptAccount}
        errorOnEncryptAccount={errorOnEncryptAccount}
      />

      <Grid
        as="footer"
        align="center"
        direction="row"
        justify="center"
        style={{ marginTop: 16 }}
      >
        <Typography as="span" style={{ marginRight: 4 }}>
          You don't have a Hey account yet?
        </Typography>

        <Navlink variant="primary" to={`/${ROUTE_PATHS.createAccount}`}>
          Create one now
        </Navlink>
      </Grid>
    </form>
  );
}
