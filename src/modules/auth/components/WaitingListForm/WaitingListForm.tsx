import { useFormik } from 'formik';
import { useTheme } from 'styled-components';

import { useWaitingListRegisterMutation } from '../../api/useWaitingListRegisterMutation';
import TextField from 'components/TextField/TextField';

import {
  WaitingListFormContainer,
  WaitingListSubmitButton,
} from './WaitingListForm.styles';
import {
  WaitingListFormProps,
  WaitingListFormValues,
} from './WaitingListForm.interfaces';

/**
 * Form to join the waiting list of the platform launch.
 */
export default function WaitingListForm({
  onCompleted,
  onError,
}: WaitingListFormProps) {
  const theme = useTheme();

  const [
    waitingListRegisterMutation,
    { loading: loadingWaitingListRegisterMutation },
  ] = useWaitingListRegisterMutation({
    onCompleted: data => onCompleted && onCompleted(data),
    onError: error => onError && onError(error),
  });

  const form = useFormik<WaitingListFormValues>({
    initialValues: {
      email: '',
      firstname: '',
      lastname: '',
      companyName: '',
    },
    onSubmit(values) {
      waitingListRegisterMutation({
        variables: values,
      });
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

      <TextField
        id="companyName"
        name="companyName"
        value={form.values.companyName}
        onChange={form.handleChange}
        variant="filled"
        label="Company"
        placeholder="Enter your company"
        style={{ container: { marginBottom: theme.spacing.sm } }}
      />

      <WaitingListSubmitButton
        type="submit"
        loading={loadingWaitingListRegisterMutation}
      >
        Sign up
      </WaitingListSubmitButton>
    </WaitingListFormContainer>
  );
}
