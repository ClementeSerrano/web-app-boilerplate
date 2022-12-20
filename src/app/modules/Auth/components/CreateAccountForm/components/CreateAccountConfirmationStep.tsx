import { useTheme } from 'styled-components';

import Button from '../../../../../components/Button/Button';
import Grid from '../../../../../components/Grid/Grid';
import Typography from '../../../../../components/Typography/Typography';
import { CreateAccountFormStepProps } from '../CreateAccountForm.types';

export default function CreateAccountConfirmationStep({
  dispatchActiveStep,
}: Pick<CreateAccountFormStepProps, 'dispatchActiveStep'>) {
  const theme = useTheme();

  return (
    <Grid style={{ flex: 1 }}>
      <Typography>Congratulations!</Typography>

      <Grid as="footer" align="center">
        <Button
          type="submit"
          style={{ width: '100%', marginBottom: theme.spacing.md }}
        >
          Add account
        </Button>

        <Button
          format="link"
          onClick={() => dispatchActiveStep('prev')}
          style={{ width: '100%' }}
        >
          Back
        </Button>
      </Grid>
    </Grid>
  );
}
