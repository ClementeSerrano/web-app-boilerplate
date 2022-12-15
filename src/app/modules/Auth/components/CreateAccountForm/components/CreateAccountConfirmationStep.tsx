import { useTheme } from 'styled-components';

import Button from '../../../../../components/Button/Button';
import Grid from '../../../../../components/Grid/Grid';
import { CreateAccountFormStepProps } from '../CreateAccountForm.types';

export default function CreateAccountConfirmationStep({
  dispatchActiveStep,
}: Pick<CreateAccountFormStepProps, 'dispatchActiveStep'>) {
  const theme = useTheme();

  return (
    <Grid style={{ flex: 1 }}>
      Congratulations!
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

        <Button type="submit" style={{ flex: 0.5 }}>
          Add account
        </Button>
      </Grid>
    </Grid>
  );
}
