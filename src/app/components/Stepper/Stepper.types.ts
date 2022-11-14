import { CSSProperties, Dispatch, ReactElement, ReactNode } from "react";

import StepperStep from "./components/StepperStep";
import StepperLabel from "./components/StepperLabel";

// Main typedefs.
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

// Components typedefs.
export type StepperStepProps = {
  children?: ReactElement<StepperLabelProps>;
  index?: number;
  active?: boolean;
  completed?: boolean;
  stepsCount?: number;
  style?: StepperStyleProps;
  className?: string;
};

export type StepperLabelProps = {
  active?: boolean;
  children?: ReactNode;
  color?: string;
  style?: CSSProperties;
  className?: string;
};

export type StepperBarProps = {
  position: StepperStepPosition;
  active?: boolean;
  completed?: boolean;
  color?: string;
};

export type StepperStepPosition = "first" | "last" | undefined;

// Hooks typedefs.
export type StepperState = number;
export type StepperDispatchAction = "next" | "prev" | "reset";
export type UseStepperHook = [StepperState, Dispatch<StepperDispatchAction>];
