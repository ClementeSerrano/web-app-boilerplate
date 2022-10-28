import { useFormik } from "formik";
import { Form } from "react-router-dom";

import Button from "../../../../components/Button/Button";
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
      <Typography as="h1" variant="title3">
        Sign up to Hey
      </Typography>

      <Button type="submit" style={{ width: "100%" }}>
        Create account
      </Button>
    </Form>
  );
}
