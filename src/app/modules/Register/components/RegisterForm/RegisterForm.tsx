import { useFormik } from "formik";
import { Form } from "react-router-dom";

import Button from "../../../../components/Button/Button";
import TextField from "../../../../components/TextField/TextField";
import Typography from "../../../../components/Typography/Typography";

import { RegisterFormValues } from "./RegisterForm.types";

export default function RegisterForm() {
  const form = useFormik<RegisterFormValues>({
    initialValues: { passphrase: "", password: "", username: "" },
    onSubmit(values) {
      console.log({ values });
    },
  });

  console.log({ form });

  return (
    <Form onSubmit={form.handleSubmit}>
      <Typography as="h1" variant="title3" style={{ marginBottom: 16 }}>
        Sign up
      </Typography>

      <TextField
        id="passphrase"
        name="passphrase"
        variant="filled"
        value={form.values.passphrase}
        onChange={form.handleChange}
        label="Passphrase"
      />

      <Button type="submit" style={{ marginTop: 16, width: "100%" }}>
        Create account
      </Button>
    </Form>
  );
}
