import { Theme } from "../../theme/theme.types";

import { GridProps } from "./Grid.types";

export function getGridPadding({
  size = "md",
  spacing,
}: Pick<GridProps, "size"> & Pick<Theme, "spacing">): string {
  return `${spacing[size]}px`;
}

export function getGridBgColor({
  container,
  format = "main",
  palette,
}: Pick<GridProps, "container" | "format"> & Pick<Theme, "palette">): string {
  if (!container) return "transparent";

  return palette.background[format];
}
