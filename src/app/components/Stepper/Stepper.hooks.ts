import { useReducer } from 'react';

import {
  StepperDispatchAction,
  StepperState,
  UseStepperHook,
} from './Stepper.types';

export function useStepper(
  initialState: StepperState | undefined = 0,
  noOfSteps?: number,
): UseStepperHook {
  function reducer(
    state: StepperState,
    action: StepperDispatchAction,
  ): StepperState {
    if ((action === 'first' || action === 'last') && noOfSteps === undefined) {
      throw new Error(
        `Can't set stepper to ${action} without providing the number of steps.`,
      );
    }

    switch (action) {
      case 'next':
        return state + 1;

      case 'prev':
        return state - 1;

      case 'reset':
      case 'first':
        return 0;

      case 'last':
        return (noOfSteps as number) - 1;

      default:
        return 0;
    }
  }

  const [state, dispatch] = useReducer(reducer, initialState);

  return [state, dispatch];
}
