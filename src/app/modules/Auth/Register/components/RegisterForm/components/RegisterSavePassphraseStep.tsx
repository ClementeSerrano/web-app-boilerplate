import { Dispatch } from "react";
import { useTheme } from "styled-components";

import Button from "../../../../../../components/Button/Button";
import Grid from "../../../../../../components/Grid/Grid";
import PassphraseField from "../../../../../../components/PassphraseField/PassphraseField";
import Typography from "../../../../../../components/Typography/Typography";
import { StepperDispatchAction } from "../../../../../../components/Stepper/Stepper.types";

import { RegisterFormValues } from "../RegisterForm.types";
import {
  SavePassphraseNoticeGrid,
  SavePassphraseNoticeText,
} from "../RegisterForm.styles";

export default function RegisterSavePassphraseStep({
  passphrase,
  dispatchActiveStep,
}: Pick<RegisterFormValues, "passphrase"> & {
  dispatchActiveStep: Dispatch<StepperDispatchAction>;
}) {
  const theme = useTheme();

  return (
    <Grid style={{ flex: 1 }}>
      <Typography as="h1" variant="paragraph1">
        Your secret passphrase is:
      </Typography>

      <PassphraseField
        passphrase={passphrase}
        style={{ margin: `${theme.spacing.md}px 0` }}
      />

      <SavePassphraseNoticeGrid>
        <SavePassphraseNoticeText
          variant="paragraph2"
          style={{ marginBottom: theme.spacing.xs }}
        >
          Backup your passphrase securely. Anyone with access to it can take
          your assets.
        </SavePassphraseNoticeText>

        <SavePassphraseNoticeText variant="paragraph2">
          Lost passphrases can't be recovered.
        </SavePassphraseNoticeText>
      </SavePassphraseNoticeGrid>

      <Grid
        direction="row"
        align="center"
        justify="flex-end"
        style={{ marginTop: theme.spacing.md }}
      >
        <Button onClick={() => dispatchActiveStep("next")} style={{ flex: 1 }}>
          Next
        </Button>
      </Grid>
    </Grid>
  );
}
