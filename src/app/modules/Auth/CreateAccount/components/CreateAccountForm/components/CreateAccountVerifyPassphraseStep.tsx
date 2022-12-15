import { Dispatch } from 'react';
import { useTheme } from 'styled-components';

import { StepperDispatchAction } from '../../../../../../components/Stepper/Stepper.types';
import Button from '../../../../../../components/Button/Button';
import Grid from '../../../../../../components/Grid/Grid';

import { CreateAccountFormValues } from '../CreateAccountForm.types';
import usePassphraseQuiz from '../../../../hooks/usePassphraseQuiz';

export default function CreateAccountVerifyPassphraseStep({
  passphrase,
  dispatchActiveStep,
}: Pick<CreateAccountFormValues, 'passphrase'> & {
  dispatchActiveStep: Dispatch<StepperDispatchAction>;
}) {
  const theme = useTheme();

  const quiz = usePassphraseQuiz(passphrase);

  console.log({ quiz });

  return (
    <Grid style={{ flex: 1 }}>
      Congratulations!
      <Grid
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
