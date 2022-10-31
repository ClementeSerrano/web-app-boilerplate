import { useFormik } from "formik";
import { Form } from "react-router-dom";
import { useTheme } from "styled-components";

import TextField from "../../../../components/TextField/TextField";
import Typography from "../../../../components/Typography/Typography";

import { RegisterFormValues } from "./RegisterForm.types";
import {
  getRegisterFieldStyles,
  RegisterFormSubmitButton,
} from "./RegisterForm.styles";

export default function RegisterForm() {
  const form = useFormik<RegisterFormValues>({
    initialValues: { passphrase: "", password: "", username: "" },
    onSubmit(values) {
      console.log({ values });
    },
  });

  const theme = useTheme();

  const fieldStyles = getRegisterFieldStyles(theme);

  return (
    <Form onSubmit={form.handleSubmit}>
      <Typography as="h1" variant="title3">
        Sign up
      </Typography>

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
