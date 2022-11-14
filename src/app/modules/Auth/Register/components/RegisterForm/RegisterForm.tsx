import { useFormik } from "formik";
import { Form } from "react-router-dom";
import { useTheme } from "styled-components";

import TextField from "../../../../../components/TextField/TextField";
import Typography from "../../../../../components/Typography/Typography";
import { useStepper } from "../../../../../components/Stepper/Stepper.hooks";
import Stepper from "../../../../../components/Stepper/Stepper";

import { RegisterFormValues } from "./RegisterForm.types";
import {
  getRegisterFieldStyles,
  getRegisterStepperStyles,
  getRegisterTitleStyles,
  RegisterFormSubmitButton,
} from "./RegisterForm.styles";

export default function RegisterForm() {
  const form = useFormik<RegisterFormValues>({
    initialValues: { passphrase: "", password: "", username: "" },
    onSubmit(values) {
      console.log({ values });
    },
  });

  const [activeStep, dispatchActiveStep] = useStepper();

  const theme = useTheme();

  const titleStyles = getRegisterTitleStyles(theme);
  const stepperStyles = getRegisterStepperStyles();
  const fieldStyles = getRegisterFieldStyles(theme);

  const stepsLabels = ["Step 1", "Step 2", "Step 3"];

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

      <TextField
        id="passphrase"
        name="passphrase"
        variant="filled"
        value={form.values.passphrase}
        onChange={form.handleChange}
        label="Passphrase"
        style={fieldStyles}
      />

      <TextField
        id="password"
        name="password"
        variant="filled"
        value={form.values.password}
        onChange={form.handleChange}
        label="Password"
        style={fieldStyles}
      />

      <TextField
        id="username"
        name="username"
        variant="filled"
        value={form.values.username}
        onChange={form.handleChange}
        label="Username"
        style={fieldStyles}
      />

      <RegisterFormSubmitButton type="submit">
        Create account
      </RegisterFormSubmitButton>
    </Form>
  );
}
