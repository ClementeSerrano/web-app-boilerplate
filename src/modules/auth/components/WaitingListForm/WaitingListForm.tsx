import { useFormik } from 'formik';
import { useTheme } from 'styled-components';

import { useWaitingListRegisterMutation } from '../../api/useWaitingListRegisterMutation';
import TextField from '../../../../components/TextField/TextField';

import {
  WaitingListFormContainer,
  WaitingListSubmitButton,
} from './WaitingListForm.styles';
import {
  WaitingListFormProps,
  WaitingListFormValues,
} from './WaitingListForm.interfaces';
import Select from '../../../../components/Select/Select';
import Typography from '../../../../components/Typography/Typography';
import { PREFERRED_INVESTMENT_OPTIONS } from './WaitingListForm.constants';

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
    },
    onSubmit({ preferredInvestmentRange, ...values }) {
      waitingListRegisterMutation({
        variables: {
          ...values,
          preferredInvestmentRange: preferredInvestmentRange?.value,
        },
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

      <Typography
        variant="paragraph2"
        style={{ marginBottom: theme.spacing.xxs, width: '100%' }}
      >
        Amount you’d be open to investing
      </Typography>

      <Select
        options={PREFERRED_INVESTMENT_OPTIONS}
        value={form.values.preferredInvestmentRange}
        onChange={value =>
          form.setFieldValue('preferredInvestmentRange', value)
        }
        className="basic-multi-select"
        classNamePrefix="select"
        placeholder="Select amount"
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
