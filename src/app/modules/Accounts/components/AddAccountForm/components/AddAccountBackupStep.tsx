import { useTheme } from 'styled-components';

import Button from '../../../../../components/Button/Button';
import Grid from '../../../../../components/Grid/Grid';
import IllustratedMessage from '../../../../../components/IllustratedMessage/IllustratedMessage';
import { AddAccountBackupStepProps } from '../AddAccountForm.types';
import FileCard from '../../../../../components/FileCard/FileCard';

/**
 * @TODO - Handle end on confirm.
 */
export default function AddAccountBackupStep({
  encryptAccountData,
}: AddAccountBackupStepProps) {
  const theme = useTheme();

  const encryptAccountDownloadableData = JSON.stringify(encryptAccountData);
  const encryptAccountFilename = 'pico.json';

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
            marginBottom: theme.spacing.md,
          },
        }}
      />

      <Grid align="center">
        <FileCard
          fileData={encryptAccountDownloadableData}
          filename={encryptAccountFilename}
          style={{ marginBottom: theme.spacing.md }}
        />

        <Button onClick={() => console.log('blaaa')} style={{ width: '100%' }}>
          Continue
        </Button>
      </Grid>
    </Grid>
  );
}
