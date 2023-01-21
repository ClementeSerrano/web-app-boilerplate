import { useFormik } from 'formik';

import TextField from '../../../../components/TextField/TextField';

import {
  ComingSoonFormContainer,
  ComingSoonSubmitButton,
} from './ComingSoonForm.styles';

/**
 * Coming soon form to subscribe for updates on the platform.
 */
export default function ComingSoonForm() {
  const form = useFormik({
    initialValues: {
      email: '',
    },
    onSubmit(values) {
      console.log({ values });
    },
  });

  return (
    <ComingSoonFormContainer>
      <TextField
        id="email"
        name="email"
        value={form.values.email}
        onChange={form.handleChange}
        variant="filled"
        label="Email"
        placeholder="Enter your email address"
        style={{ container: { flex: 1 } }}
      />

      <ComingSoonSubmitButton type="submit">Notify me</ComingSoonSubmitButton>
    </ComingSoonFormContainer>
  );
}
