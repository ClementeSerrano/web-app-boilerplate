import React from "react";

import StepperStep from "./components/StepperStep";
import StepperLabel from "./components/StepperLabel";

import { StepperComponent, StepperProps } from "./Stepper.types";
import { StepperContainer } from "./Stepper.styles";

export default function Stepper(props: StepperProps): StepperComponent {
  const stepsCount = React.Children.count(props.children);

  const steps = React.Children.map(props.children, (step, index) => {
    return React.cloneElement(step, {
      index,
      active: index === props.activeStep,
      completed: index < props.activeStep,
      stepsCount,
      style: props.style,
    });
  });

  return (
    <StepperContainer>{steps}</StepperContainer>
  ) as unknown as StepperComponent;
}

Stepper.Step = StepperStep;
Stepper.Label = StepperLabel;
