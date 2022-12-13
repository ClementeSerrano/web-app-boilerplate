import { useFormik } from 'formik';
import { Form } from 'react-router-dom';
import { useTheme } from 'styled-components';

import Typography from '../../../../../components/Typography/Typography';
import { useStepper } from '../../../../../components/Stepper/Stepper.hooks';
import Stepper from '../../../../../components/Stepper/Stepper';
import { generatePassphrase } from '../../../auth.helpers';

import { CreateAccountFormValues } from './CreateAccountForm.types';
import {
  getCreateAccountStepperStyles,
  getCreateAccountTitleStyles,
} from './CreateAccountForm.styles';
import CreateAccountFormStepSwitcher from './components/CreateAccountFormStepSwitcher';

export default function CreateAccountForm() {
  const form = useFormik<CreateAccountFormValues>({
    initialValues: {
      passphrase: generatePassphrase(),
      password: '',
      username: '',
    },
    onSubmit(values) {
      console.log({ values });
    },
  });

  const [activeStep, dispatchActiveStep] = useStepper();

  const theme = useTheme();

  console.log({ passphrase: form.values.passphrase });

  const titleStyles = getCreateAccountTitleStyles(theme);
  const stepperStyles = getCreateAccountStepperStyles();

  const stepsLabels = ['Passphrase', 'Verification', 'Confirm'];

  return (
    <Form onSubmit={form.handleSubmit}>
      <Typography as="h1" variant="title3" style={titleStyles}>
        Create account
      </Typography>

      <Stepper activeStep={activeStep} style={stepperStyles}>
        {stepsLabels.map((stepLabel, index) => (
          <Stepper.Step key={index}>
            <Stepper.Label>{stepLabel}</Stepper.Label>
          </Stepper.Step>
        ))}
      </Stepper>

      <CreateAccountFormStepSwitcher
        form={form}
        activeStep={activeStep}
        dispatchActiveStep={dispatchActiveStep}
      />
    </Form>
  );
}
