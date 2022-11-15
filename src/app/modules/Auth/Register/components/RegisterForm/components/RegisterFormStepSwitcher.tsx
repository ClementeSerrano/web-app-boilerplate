import { FormikProps } from "formik";
import { Dispatch } from "react";
import { useTheme } from "styled-components";
import Button from "../../../../../../components/Button/Button";
import {
  StepperDispatchAction,
  StepperState,
} from "../../../../../../components/Stepper/Stepper.types";
import TextField from "../../../../../../components/TextField/TextField";
import {
  getRegisterFieldStyles,
  RegisterFormSubmitButton,
} from "../RegisterForm.styles";
import { RegisterFormValues } from "../RegisterForm.types";

export default function RegisterFormStepSwitcher({
  form,
  activeStep,
  dispatchActiveStep,
}: {
  form: FormikProps<RegisterFormValues>;
  activeStep: StepperState;
  dispatchActiveStep: Dispatch<StepperDispatchAction>;
}) {
  const theme = useTheme();

  const fieldStyles = getRegisterFieldStyles(theme);

  switch (activeStep) {
    case 0:
      return (
        <>
          <p>Passphrase show and download. Also accept TNC.</p>

          <Button variant="primary" onClick={() => dispatchActiveStep("next")}>
            Continue
          </Button>
        </>
      );

    case 1:
      return (
        <>
          <p>Passphrase verification.</p>
          <Button variant="primary" onClick={() => dispatchActiveStep("next")}>
            Continue
          </Button>
        </>
      );

    case 2:
      return (
        <>
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
        </>
      );

    default:
      return null;
  }
}
