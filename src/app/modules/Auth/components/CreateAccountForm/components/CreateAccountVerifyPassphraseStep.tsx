import { useTheme } from 'styled-components';

import Button from '../../../../../components/Button/Button';
import Grid from '../../../../../components/Grid/Grid';

import PassphraseQuiz from './PassphraseQuiz';
import { CreateAccountFormStepSwitcherProps } from '../CreateAccountForm.types';

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
      <PassphraseQuiz quiz={passphraseQuiz} />

      <Grid
        as="footer"
        direction="row"
        align="center"
        justify="flex-end"
        style={{ marginTop: theme.spacing.md }}
      >
        <Button
          format="link"
          onClick={() => dispatchActiveStep('prev')}
          style={{ marginRight: theme.spacing.md }}
        >
          Back
        </Button>

        <Button
          onClick={() => dispatchActiveStep('next')}
          style={{ flex: 0.5 }}
        >
          Next
        </Button>
      </Grid>
    </Grid>
  );
}
