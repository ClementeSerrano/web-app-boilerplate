import { useFormik } from 'formik';
import Grid from '../../../../components/Grid/Grid';
import Navlink from '../../../../components/Navlink/Navlink';
import Stepper from '../../../../components/Stepper/Stepper';
import { useStepper } from '../../../../components/Stepper/Stepper.hooks';
import Typography from '../../../../components/Typography/Typography';
import { ROUTE_PATHS } from '../../../../routes/routes.constants';
import { getCreateAccountStepperStyles } from '../CreateAccountForm/CreateAccountForm.styles';
import { AddAccountFormValues } from './AddAccountForm.types';
import AddAccountFormStepSwitcher from './components/AddAccountFormStepSwitcher';

// pass: index provide fish bracket blame dismiss one bright squeeze disorder spring black
/**
 * Form to add an account to the Hey ecosystem.
 */
export default function AddAccountForm() {
  const form = useFormik<AddAccountFormValues>({
    initialValues: {
      passphrase: '',
      password: '',
      confirmPassword: '',
    },
    onSubmit(values) {
      console.log({ values });
    },
  });

  const [activeStep, dispatchActiveStep] = useStepper();

  const stepsLabels = ['Enter passphrase', 'Setup password', 'Backup account'];

  const stepperStyles = getCreateAccountStepperStyles();

  console.log({ form });

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

        <Navlink
          variant="primary"
          style={{ fontWeight: 700 }}
          to={`/${ROUTE_PATHS.createAccount}`}
        >
          Create one now
        </Navlink>
      </Grid>
    </form>
  );
}
