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
  onBack,
  onNext,
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
      />

      <Grid align="center">
        <Button
          onClick={onNext}
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
