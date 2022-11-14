import { StepperLabelContainer } from "../Stepper.styles";
import { StepperLabelProps } from "../Stepper.types";

export default function StepperLabel(props: StepperLabelProps) {
  return (
    <StepperLabelContainer active={props.active} color={props.color}>
      {props.children}
    </StepperLabelContainer>
  );
}
