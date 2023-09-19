import { useFormik } from 'formik';
import { useTheme } from 'styled-components';

import TextField from 'components/TextField/TextField';

import {
  WaitlistFormContainer,
  WaitlistSubmitButton,
} from './WaitlistForm.styles';
import {
  WaitlistFormProps,
  WaitlistFormValues,
} from './WaitlistForm.interfaces';
import { useWaitlistRegister } from 'modules/auth/lib/hooks/useWaitlistRegister';
import useGA from 'modules/rum/lib/hooks/useGA';
import { AuthType } from 'api/interfaces/__generated__/graphql';

/**
 * Form to join the waiting list of the platform launch.
 */
export default function WaitlistForm({
  onCompleted,
  onError,
}: WaitlistFormProps) {
  const theme = useTheme();

  const [waitlistRegister, { loading: loadingWaitlistRegister }] =
    useWaitlistRegister({
      onCompleted,
      onError,
    });

  const ga = useGA();

  const form = useFormik<WaitlistFormValues>({
    initialValues: {
      email: '',
      firstname: '',
      lastname: '',
      companyName: '',
    },
    onSubmit(values) {
      ga.sendRegisterEvent(AuthType.WaitingList);

      waitlistRegister({
        variables: values,
      });
    },
  });

  return (
    <WaitlistFormContainer onSubmit={form.handleSubmit}>
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

      <WaitlistSubmitButton type="submit" loading={loadingWaitlistRegister}>
        Sign up
      </WaitlistSubmitButton>
    </WaitlistFormContainer>
  );
}
