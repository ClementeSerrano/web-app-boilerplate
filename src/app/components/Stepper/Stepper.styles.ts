import styled from "styled-components";

import { StepperBarProps, StepperLabelProps } from "./Stepper.types";

export const StepperContainer = styled.aside`
  display: flex;
`;

export const StepperStepContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`;

export const StepperBar = styled.div<StepperBarProps>`
  height: 3px;
  background: ${({ theme, color }) =>
    `linear-gradient(to right, ${color || theme.palette.primary.main} 50%, ${
      theme.palette.text.lighter
    } 50%)`};
  background-size: 200% 100%;
  background-position: ${({ active, completed }) =>
    active || completed ? "left bottom" : "right bottom"};
  transition: all 0.3s ease-out;
  ${({ position }) => {
    let styles = "";
    if (position === "first") {
      styles = `
            border-top-left-radius: 5px;
            border-bottom-left-radius: 5px;
          `;
    }
    if (position === "last") {
      styles += `
            border-top-right-radius: 5px;
            border-bottom-right-radius: 5px;
          `;
    }
    return styles;
  }}
`;

export const StepperLabelContainer = styled.p<
  Pick<StepperLabelProps, "active" | "color">
>`
  text-align: center;
  margin: 4px 8px;
  font-size: ${({ theme }) => theme.typography.fontSizes.sm};
  color: ${({ theme, active, color }) =>
    active ? color || theme.palette.primary.main : theme.palette.text.main};
`;
