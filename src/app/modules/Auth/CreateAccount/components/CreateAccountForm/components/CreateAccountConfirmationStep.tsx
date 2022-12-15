import { FormikProps } from 'formik';
import { Dispatch } from 'react';
import { useTheme } from 'styled-components';

import Button from '../../../../../../components/Button/Button';
import Grid from '../../../../../../components/Grid/Grid';
import { StepperDispatchAction } from '../../../../../../components/Stepper/Stepper.types';
import { CreateAccountFormValues } from '../CreateAccountForm.types';

export default function CreateAccountConfirmationStep({
  form,
  dispatchActiveStep,
}: {
  form: FormikProps<CreateAccountFormValues>;
  dispatchActiveStep: Dispatch<StepperDispatchAction>;
}) {
  const theme = useTheme();

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

        <Button type="submit" style={{ flex: 0.5 }}>
          Add account
        </Button>
      </Grid>
    </Grid>
  );
}
