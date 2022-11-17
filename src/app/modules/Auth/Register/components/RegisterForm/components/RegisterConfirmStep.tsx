import { FormikProps } from "formik";
import { Dispatch } from "react";
import { useTheme } from "styled-components";
import Button from "../../../../../../components/Button/Button";
import Grid from "../../../../../../components/Grid/Grid";
import { StepperDispatchAction } from "../../../../../../components/Stepper/Stepper.types";
import TextField from "../../../../../../components/TextField/TextField";
import { getRegisterFieldStyles } from "../RegisterForm.styles";
import { RegisterFormValues } from "../RegisterForm.types";

export default function RegisterConfirmStep({
  form,
  dispatchActiveStep,
}: {
  form: FormikProps<RegisterFormValues>;
  dispatchActiveStep: Dispatch<StepperDispatchAction>;
}) {
  const theme = useTheme();

  const fieldStyles = getRegisterFieldStyles(theme);

  return (
    <Grid style={{ flex: 1 }}>
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

      <Grid
        direction="row"
        align="center"
        justify="flex-end"
        style={{ marginTop: theme.spacing.md }}
      >
        <Button
          format="link"
          onClick={() => dispatchActiveStep("prev")}
          style={{ marginRight: theme.spacing.md }}
        >
          Back
        </Button>

        <Button type="submit" style={{ flex: 0.5 }}>
          Create account
        </Button>
      </Grid>
    </Grid>
  );
}
