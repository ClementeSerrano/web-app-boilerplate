import { FormikProps } from "formik";
import { Dispatch } from "react";

import Button from "../../../../../../components/Button/Button";
import {
  StepperDispatchAction,
  StepperState,
} from "../../../../../../components/Stepper/Stepper.types";
import { RegisterFormValues } from "../RegisterForm.types";

import RegisterFormConfirmStep from "./RegisterConfirmStep";
import RegisterPassphraseStep from "./RegisterSavePassphraseStep";

export default function RegisterFormStepSwitcher({
  form,
  activeStep,
  dispatchActiveStep,
}: {
  form: FormikProps<RegisterFormValues>;
  activeStep: StepperState;
  dispatchActiveStep: Dispatch<StepperDispatchAction>;
}) {
  switch (activeStep) {
    case 0:
      return (
        <RegisterPassphraseStep
          passphrase={form.values.passphrase}
          dispatchActiveStep={dispatchActiveStep}
        />
      );

    case 1:
      return (
        <>
          <p>Passphrase verification.</p>
          <Button variant="primary" onClick={() => dispatchActiveStep("next")}>
            Continue
          </Button>
        </>
      );

    case 2:
      return (
        <RegisterFormConfirmStep
          form={form}
          dispatchActiveStep={dispatchActiveStep}
        />
      );

    default:
      return null;
  }
}
