import { Theme } from 'lib/interfaces/theme.interfaces';
import { GridProps } from './Grid.interfaces';

export function getGridPadding({
  size = 'lg',
  spacing,
  withUnits = true,
  container,
}: Pick<GridProps, 'size' | 'container'> &
  Pick<Theme, 'spacing'> & { withUnits?: boolean }) {
  if (!container) return 0;

  return withUnits ? `${spacing[size]}px` : spacing[size];
}

export function getGridMaxSize({
  maxHeight,
  maxWidth,
  size = 'md',
  spacing,
}: Pick<GridProps, 'maxHeight' | 'maxWidth' | 'size'> &
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
  variant = 'level1',
  palette,
}: Pick<GridProps, 'container' | 'variant'> & Pick<Theme, 'palette'>): string {
  if (!container) return 'transparent';

  return palette.background[variant];
}

export function getGridBorderRadius({
  bordered,
  size = 'md',
  shape,
}: Pick<GridProps, 'bordered' | 'size'> & Pick<Theme, 'shape'>): string {
  if (!bordered) return '0px';

  return `${shape.borderRadius[size]}px`;
}
