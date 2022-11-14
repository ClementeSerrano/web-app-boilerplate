import { CSSProperties, ReactElement, ReactNode } from "react";

import StepperStep from "./components/StepperStep";
import StepperLabel from "./components/StepperLabel";

export type StepperComponent = JSX.Element & {
  Step: typeof StepperStep;
  Label: typeof StepperLabel;
};

export type StepperProps = {
  activeStep: number;
  style?: StepperStyleProps;
  children: ReactElement<StepperStepProps>[];
};

export type StepperStyleProps = {
  color?: string;
  bar?: CSSProperties;
  active?: CSSProperties;
  completed?: CSSProperties;
};

export type StepperStepProps = {
  children?: ReactElement<StepperLabelProps>;
  index?: number;
  active?: boolean;
  completed?: boolean;
  stepsCount?: number;
  style?: StepperStyleProps;
  className?: string;
};

export type StepperBarProps = {
  position: StepperStepPosition;
  active?: boolean;
  completed?: boolean;
  color?: string;
};

export type StepperStepPosition = "first" | "last" | undefined;

export type StepperLabelProps = {
  active?: boolean;
  children?: ReactNode;
  color?: string;
  style?: CSSProperties;
  className?: string;
};
