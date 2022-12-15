import { Dispatch } from 'react';
import { useTheme } from 'styled-components';

import Button from '../../../../../../components/Button/Button';
import Grid from '../../../../../../components/Grid/Grid';
import PassphraseField from '../../../../../../components/PassphraseField/PassphraseField';
import Typography from '../../../../../../components/Typography/Typography';
import { StepperDispatchAction } from '../../../../../../components/Stepper/Stepper.types';

import { CreateAccountFormValues } from '../CreateAccountForm.types';
import { SavePassphraseNoticeText } from '../CreateAccountForm.styles';

export default function CreateAccountSavePassphraseStep({
  passphrase,
  dispatchActiveStep,
}: Pick<CreateAccountFormValues, 'passphrase'> & {
  dispatchActiveStep: Dispatch<StepperDispatchAction>;
}) {
  const theme = useTheme();

  return (
    <Grid style={{ flex: 1 }}>
      <Typography as="h1" variant="paragraph1">
        Please backup in a secure place your secret passphrase:
      </Typography>

      <PassphraseField
        passphrase={passphrase}
        style={{ margin: `${theme.spacing.md}px 0` }}
      />

      <Grid container bordered variant="level2" size="sm">
        <SavePassphraseNoticeText variant="paragraph2">
          Keep your passphrase safe as it is the only way to access your
          account. Anyone with access to it can take your assets. Lost
          passphrases can't be recovered.
        </SavePassphraseNoticeText>
      </Grid>

      <Grid
        direction="row"
        align="center"
        justify="flex-end"
        style={{ marginTop: theme.spacing.md }}
      >
        <Button onClick={() => dispatchActiveStep('next')} style={{ flex: 1 }}>
          Next
        </Button>
      </Grid>
    </Grid>
  );
}
