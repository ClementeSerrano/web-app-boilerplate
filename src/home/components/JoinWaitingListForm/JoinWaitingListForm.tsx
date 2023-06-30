import { useFormik } from 'formik';
import { useWaitingListRegisterMutation } from '../../../auth/api/useWaitingListRegisterMutation';

import TextField from '../../../common/components/TextField/TextField';

import {
  JoinWaitingListFormContainer,
  JoinWaitingListSubmitButton,
} from './JoinWaitingListForm.styles';

/**
 * Form to join the waiting list of the platform launch.
 */
export default function JoinWaitingListForm() {
  const [waitingListRegisterMutation] = useWaitingListRegisterMutation({
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
    },
    onSubmit(values) {
      waitingListRegisterMutation({ variables: { email: values.email } });
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

      <JoinWaitingListSubmitButton type="submit">
        Join the Waitlist
      </JoinWaitingListSubmitButton>
    </JoinWaitingListFormContainer>
  );
}
