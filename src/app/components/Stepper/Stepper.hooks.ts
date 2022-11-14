import { useReducer } from "react";

import {
  StepperDispatchAction,
  StepperState,
  UseStepperHook,
} from "./Stepper.types";

export function useStepper(
  initialState: StepperState | undefined = 0
): UseStepperHook {
  function reducer(
    state: StepperState,
    action: StepperDispatchAction
  ): StepperState {
    switch (action) {
      case "next":
        return state + 1;

      case "prev":
        return state - 1;

      case "reset":
        return 0;

      default:
        return 0;
    }
  }

  const [state, dispatch] = useReducer(reducer, initialState);

  return [state, dispatch];
}
