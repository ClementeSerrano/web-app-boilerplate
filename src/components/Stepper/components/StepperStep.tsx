import React from "react";

import { StepperStepPosition, StepperStepProps } from "../Stepper.types";
import { StepperBar, StepperStepContainer } from "../Stepper.styles";

export default function StepperStep(props: StepperStepProps) {
  const label =
    props.children &&
    React.Children.map(props.children, (child) => {
      return React.cloneElement(child, {
        active: props.active,
        color: props.style && props.style.color,
      });
    });

  let position: StepperStepPosition;

  if (props.index === 0) position = "first";
  else if (props.index === (props.stepsCount || 0) - 1) position = "last";

  return (
    <StepperStepContainer style={props.style} className={props.className}>
      <StepperBar
        active={props.active}
        completed={props.completed}
        position={position}
        color={props.style && props.style.color}
        style={props.style && props.style.bar}
      />

      {label}
    </StepperStepContainer>
  );
}
