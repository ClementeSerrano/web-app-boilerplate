import { useTheme } from 'styled-components';
import Button from '../../../../../components/Button/Button';
import Grid from '../../../../../components/Grid/Grid';
import IllustratedMessage from '../../../../../components/IllustratedMessage/IllustratedMessage';
import { AddAccountBackupStepProps } from '../AddAccountForm.types';

/**
 * @TODO - Handle end on confirm.
 */
export default function AddAccountBackupStep({
  encryptAccountData,
}: AddAccountBackupStepProps) {
  const theme = useTheme();

  console.log({ encryptAccountData });

  return (
    <Grid>
      <IllustratedMessage
        illustration="doneCheck"
        title="Great! Your account is now added"
        body="You can now download your encrypted secret recovery phrase
        and use it to add your account on other devices."
        style={{
          container: {
            marginTop: theme.spacing.sm,
            marginBottom: theme.spacing.lg,
          },
        }}
      />

      <Button
        onClick={() => console.log('blaaa')}
        style={{ width: '100%', marginBottom: theme.spacing.md }}
      >
        Continue
      </Button>
    </Grid>
  );
}
