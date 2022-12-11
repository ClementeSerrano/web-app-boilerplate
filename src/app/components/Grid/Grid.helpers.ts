import { Theme } from '../../theme/theme.types';

import { GridContainerProps } from './Grid.types';

export function getGridPadding({
  size = 'lg',
  spacing,
  withUnits = true,
  container,
}: Pick<GridContainerProps, 'size' | 'container'> &
  Pick<Theme, 'spacing'> & { withUnits?: boolean }) {
  if (!container) return 0;

  return withUnits ? `${spacing[size]}px` : spacing[size];
}

export function getGridMaxSize({
  maxHeight,
  maxWidth,
  size = 'md',
  spacing,
}: Pick<GridContainerProps, 'maxHeight' | 'maxWidth' | 'size'> &
  Pick<Theme, 'spacing'>): string {
  if (!maxHeight && !maxWidth) return 'unset';

  const extraPadding =
    2 *
    (getGridPadding({
      size,
      spacing,
      withUnits: false,
      container: true,
    }) as number);

  if (maxHeight) return `calc(100vh - ${extraPadding}px)`;
  if (maxWidth) return `calc(100vw - ${extraPadding}px)`;

  return '';
}

export function getGridBgColor({
  container,
  backgroundColor,
}: Pick<GridContainerProps, 'container' | 'backgroundColor'>): string {
  if (!container) return 'transparent';

  return backgroundColor;
}

export function getGridBorderRadius({
  bordered,
  size = 'md',
  shape,
}: Pick<GridContainerProps, 'bordered' | 'size'> &
  Pick<Theme, 'shape'>): string {
  if (!bordered) return '0px';

  return `${shape.borderRadius[size]}px`;
}
