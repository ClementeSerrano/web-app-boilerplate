import { useTheme } from 'styled-components';
import Button from '../../../../../components/Button/Button';
import Grid from '../../../../../components/Grid/Grid';
import TextField from '../../../../../components/TextField/TextField';
import Typography from '../../../../../components/Typography/Typography';

import { AddAccountPasswordStepProps } from '../AddAccountForm.types';

export default function AddAccountPasswordStep({
  password,
  onPasswordChange,
  confirmPassword,
  onConfirmPasswordChange,
  name,
  onNameChange,
  isLoadingEncryptAccount,
  onBack,
  errorOnEncryptAccount,
}: AddAccountPasswordStepProps) {
  const theme = useTheme();

  return (
    <Grid>
      <Typography as="p" variant="paragraph1" style={{ marginBottom: 16 }}>
        Enter your secret passphrase to add your new account.
      </Typography>

      <TextField
        id="password"
        name="password"
        value={password}
        onChange={onPasswordChange}
        variant="filled"
        label="Password"
        style={{ container: { marginBottom: 16 } }}
      />

      <TextField
        id="confirmPassword"
        name="confirmPassword"
        value={confirmPassword}
        onChange={onConfirmPasswordChange}
        variant="filled"
        label="Confirm password"
        style={{ container: { marginBottom: 16 } }}
      />

      <TextField
        id="name"
        name="name"
        value={name}
        onChange={onNameChange}
        variant="filled"
        label="Account name (optional)"
      />

      <Grid align="center">
        {!!errorOnEncryptAccount && (
          <Typography
            variant="paragraph1"
            style={{
              color: theme.palette.error.main,
              marginTop: theme.spacing.md,
            }}
          >
            An error ocurred when encrypting your account. Please try again.
          </Typography>
        )}

        <Button
          type="submit"
          loading={isLoadingEncryptAccount}
          disabled={!!errorOnEncryptAccount}
          style={{ width: '100%', margin: `${theme.spacing.md}px 0` }}
        >
          Continue
        </Button>

        <Button format="link" onClick={onBack} style={{ width: '100%' }}>
          Go back
        </Button>
      </Grid>
    </Grid>
  );
}
