import { useTheme } from 'styled-components';

import Button from '../../../../../components/Button/Button';
import Grid from '../../../../../components/Grid/Grid';
import IllustratedMessage from '../../../../../components/IllustratedMessage/IllustratedMessage';
import { CreateAccountFormStepProps } from '../CreateAccountForm.types';

export default function CreateAccountConfirmationStep({
  dispatchActiveStep,
}: Pick<CreateAccountFormStepProps, 'dispatchActiveStep'>) {
  const theme = useTheme();

  return (
    <Grid style={{ flex: 1 }}>
      <IllustratedMessage
        illustration="doneCheck"
        title="Nice! Your account is now created"
        body="You can now add your account to Hey by clicking on 'Add account', to be able to be part of our Digital Community!"
        style={{
          container: {
            marginTop: theme.spacing.sm,
            marginBottom: theme.spacing.lg,
          },
        }}
      />

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
