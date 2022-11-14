import styled from "styled-components";
import { getGridBgColor, getGridMaxSize, getGridPadding } from "./Grid.helpers";

import { GridProps } from "./Grid.types";

export const GridContainer = styled.section<GridProps>`
  display: flex;
  flex: ${({ fluid }) => (fluid ? 1 : "unset")};
  flex-direction: ${({ direction }) => direction};
  align-items: ${({ align }) => align};
  justify-content: ${({ justify }) => justify};
  height: ${({ maxHeight, size, theme }) =>
    getGridMaxSize({ maxHeight, size, spacing: theme.spacing })};
  width: ${({ maxWidth, size, theme }) =>
    getGridMaxSize({ maxWidth, size, spacing: theme.spacing })};
  padding: ${({ container, size, theme }) =>
    getGridPadding({ container, size, spacing: theme.spacing })};
  background-color: ${({ container, format, theme }) =>
    getGridBgColor({ container, format, palette: theme.palette })};
`;
