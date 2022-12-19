import { useTheme } from 'styled-components';

import Button from '../../../../../components/Button/Button';
import Grid from '../../../../../components/Grid/Grid';
import Typography from '../../../../../components/Typography/Typography';
import PassphraseCard from '../../../../../components/PassphraseCard/PassphraseCard';

import { SavePassphraseNoticeText } from '../CreateAccountForm.styles';
import { CreateAccountFormStepProps } from '../CreateAccountForm.types';

export default function CreateAccountSavePassphraseStep({
  passphrase,
  dispatchActiveStep,
}: CreateAccountFormStepProps) {
  const theme = useTheme();

  return (
    <Grid style={{ flex: 1 }}>
      <Typography as="p" variant="paragraph1">
        Please backup in a secure place your secret passphrase:
      </Typography>

      <PassphraseCard
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

      <Button
        onClick={() => dispatchActiveStep('next')}
        style={{ flex: 1, marginTop: theme.spacing.md }}
      >
        I wrote it down
      </Button>
    </Grid>
  );
}
