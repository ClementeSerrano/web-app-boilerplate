import { useTheme } from 'styled-components';
import Button from '../../../../../components/Button/Button';
import Grid from '../../../../../components/Grid/Grid';
import TextField from '../../../../../components/TextField/TextField';
import Typography from '../../../../../components/Typography/Typography';
import { AddAccountPassphraseStepProps } from '../AddAccountForm.types';

export default function AddAccountPassphraseStep({
  passphrase,
  onPassphraseChange,
  onBack,
  onNext,
}: AddAccountPassphraseStepProps) {
  const theme = useTheme();

  return (
    <Grid>
      <Typography as="p" variant="paragraph1" style={{ marginBottom: 16 }}>
        Enter your secret passphrase to add your new account.
      </Typography>

      <TextField
        id="passphrase"
        name="passphrase"
        value={passphrase}
        onChange={onPassphraseChange}
        variant="filled"
        label="Passphrase"
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
