import { useFormik } from 'formik';

import TextField from '../../../common/components/TextField/TextField';

import {
  JoinWaitingListFormContainer,
  ComingSoonSubmitButton,
} from './JoinWaitingListForm.styles';

/**
 * Form to join the waiting list of the platform launch.
 */
export default function JoinWaitingListForm() {
  const form = useFormik({
    initialValues: {
      email: '',
    },
    onSubmit(values) {
      console.log({ values });
    },
  });

  return (
    <JoinWaitingListFormContainer onSubmit={form.handleSubmit}>
      <TextField
        id="email"
        name="email"
        value={form.values.email}
        onChange={form.handleChange}
        variant="filled"
        label="Email"
        placeholder="Enter your email address"
      />

      <ComingSoonSubmitButton type="submit">
        Join the Waitlist
      </ComingSoonSubmitButton>
    </JoinWaitingListFormContainer>
  );
}
