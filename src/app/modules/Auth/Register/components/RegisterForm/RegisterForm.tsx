import { useFormik } from "formik";
import { Form } from "react-router-dom";
import { useTheme } from "styled-components";

import Typography from "../../../../../components/Typography/Typography";
import { useStepper } from "../../../../../components/Stepper/Stepper.hooks";
import Stepper from "../../../../../components/Stepper/Stepper";
import { generatePassphrase } from "../../../auth.helpers";

import { RegisterFormValues } from "./RegisterForm.types";
import {
  getRegisterStepperStyles,
  getRegisterTitleStyles,
} from "./RegisterForm.styles";
import RegisterFormStepSwitcher from "./components/RegisterFormStepSwitcher";

export default function RegisterForm() {
  const form = useFormik<RegisterFormValues>({
    initialValues: {
      passphrase: generatePassphrase(),
      password: "",
      username: "",
    },
    onSubmit(values) {
      console.log({ values });
    },
  });

  const [activeStep, dispatchActiveStep] = useStepper();

  const theme = useTheme();

  console.log({ passphrase: form.values.passphrase });

  const titleStyles = getRegisterTitleStyles(theme);
  const stepperStyles = getRegisterStepperStyles();

  const stepsLabels = ["Passphrase", "Verification", "Confirm"];

  return (
    <Form onSubmit={form.handleSubmit}>
      <Typography as="h1" variant="title3" style={titleStyles}>
        Sign up
      </Typography>

      <Stepper activeStep={activeStep} style={stepperStyles}>
        {stepsLabels.map((stepLabel, index) => (
          <Stepper.Step key={index}>
            <Stepper.Label>{stepLabel}</Stepper.Label>
          </Stepper.Step>
        ))}
      </Stepper>

      <RegisterFormStepSwitcher
        form={form}
        activeStep={activeStep}
        dispatchActiveStep={dispatchActiveStep}
      />
    </Form>
  );
}
