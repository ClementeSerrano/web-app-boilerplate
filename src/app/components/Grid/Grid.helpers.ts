import { Theme } from "../../theme/theme.types";

import { GridProps } from "./Grid.types";

export function getGridPadding({
  size = "md",
  spacing,
  withUnits = true,
}: Pick<GridProps, "size"> & Pick<Theme, "spacing"> & { withUnits?: boolean }) {
  return withUnits ? `${spacing[size]}px` : spacing[size];
}

export function getGridMaxSize({
  maxHeight,
  maxWidth,
  size = "md",
  spacing,
}: Pick<GridProps, "maxHeight" | "maxWidth" | "size"> &
  Pick<Theme, "spacing">): string {
  if (!maxHeight && !maxWidth) return "unset";

  const extraPadding =
    2 * (getGridPadding({ size, spacing, withUnits: false }) as number);

  if (maxHeight) return `calc(100vh - ${extraPadding}px)`;
  if (maxWidth) return `calc(100vw - ${extraPadding}px)`;

  return "";
}

export function getGridBgColor({
  container,
  format = "main",
  palette,
}: Pick<GridProps, "container" | "format"> & Pick<Theme, "palette">): string {
  if (!container) return "transparent";

  return palette.background[format];
}
