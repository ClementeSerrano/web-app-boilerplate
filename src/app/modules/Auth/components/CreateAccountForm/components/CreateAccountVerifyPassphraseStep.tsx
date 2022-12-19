import { useTheme } from 'styled-components';

import Button from '../../../../../components/Button/Button';
import Grid from '../../../../../components/Grid/Grid';

import PassphraseQuiz from './PassphraseQuiz';
import { CreateAccountFormStepSwitcherProps } from '../CreateAccountForm.types';
import Typography from '../../../../../components/Typography/Typography';

export default function CreateAccountVerifyPassphraseStep({
  passphraseQuiz,
  dispatchActiveStep,
}: Pick<
  CreateAccountFormStepSwitcherProps,
  'passphraseQuiz' | 'dispatchActiveStep'
>) {
  const theme = useTheme();

  return (
    <Grid style={{ flex: 1 }}>
      <Typography as="p" variant="paragraph1">
        Verify your passphrase by writing down the missing words:
      </Typography>

      <PassphraseQuiz
        quiz={passphraseQuiz}
        style={{ margin: `${theme.spacing.md}px 0` }}
      />

      <Grid as="footer" align="center">
        <Button
          onClick={() => dispatchActiveStep('next')}
          disabled={!passphraseQuiz.passed}
          style={{ width: '100%', marginBottom: theme.spacing.md }}
        >
          Confirm
        </Button>

        <Button
          format="link"
          onClick={() => dispatchActiveStep('prev')}
          style={{ width: '100%' }}
        >
          Go back
        </Button>
      </Grid>
    </Grid>
  );
}
