import styled from "styled-components";
import { getGridBgColor, getGridPadding } from "./Grid.helpers";

import { GridProps } from "./Grid.types";

export const GridContainer = styled.section<GridProps>`
  display: flex;
  flex-direction: ${({ direction }) => direction};
  align-items: ${({ align }) => align};
  justify-content: ${({ justify }) => justify};
  padding: ${({ size, theme }) =>
    getGridPadding({ size, spacing: theme.spacing })};
  background-color: ${({ container, format, theme }) =>
    getGridBgColor({ container, format, palette: theme.palette })};
`;
