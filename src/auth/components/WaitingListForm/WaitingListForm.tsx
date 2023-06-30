import { useFormik } from 'formik';

import { useWaitingListRegisterMutation } from '../../api/useWaitingListRegisterMutation';
import TextField from '../../../common/components/TextField/TextField';

import {
  WaitingListFormContainer,
  WaitingListSubmitButton,
} from './WaitingListForm.styles';
import { useTheme } from 'styled-components';

/**
 * Form to join the waiting list of the platform launch.
 */
export default function WaitingListForm() {
  const theme = useTheme();

  const [
    waitingListRegisterMutation,
    { loading: loadingWaitingListRegisterMutation },
  ] = useWaitingListRegisterMutation({
    onCompleted: data => {
      console.log(data);
    },
    onError: error => {
      console.log(error);
    },
  });

  const form = useFormik({
    initialValues: {
      email: '',
      firstname: '',
      lastname: '',
    },
    onSubmit(values) {
      waitingListRegisterMutation({ variables: values });
    },
  });

  return (
    <WaitingListFormContainer onSubmit={form.handleSubmit}>
      <TextField
        id="email"
        name="email"
        value={form.values.email}
        onChange={form.handleChange}
        variant="filled"
        label="Email"
        placeholder="Enter your email address"
        style={{ container: { marginBottom: theme.spacing.sm } }}
      />

      <TextField
        id="firstname"
        name="firstname"
        value={form.values.firstname}
        onChange={form.handleChange}
        variant="filled"
        label="First name"
        placeholder="Enter your first name"
        style={{ container: { marginBottom: theme.spacing.sm } }}
      />

      <TextField
        id="lastname"
        name="lastname"
        value={form.values.lastname}
        onChange={form.handleChange}
        variant="filled"
        label="Last name"
        placeholder="Enter your last name"
        style={{ container: { marginBottom: theme.spacing.sm } }}
      />

      <WaitingListSubmitButton
        type="submit"
        loading={loadingWaitingListRegisterMutation}
      >
        Join the Waitlist
      </WaitingListSubmitButton>
    </WaitingListFormContainer>
  );
}
