import styled from 'styled-components';
import {
  getGridBgColor,
  getGridBorderRadius,
  getGridMaxSize,
  getGridPadding,
} from './Grid.utils';

import { GridProps } from './Grid.interfaces';
import { ValueOf } from 'lib/interfaces/general.interfaces';

export const GridContainer = styled.section<{
  $size: ValueOf<Pick<GridProps, 'size'>>;
  $container: ValueOf<Pick<GridProps, 'container'>>;
  $direction: ValueOf<Pick<GridProps, 'direction'>>;
  $align: ValueOf<Pick<GridProps, 'align'>>;
  $justify: ValueOf<Pick<GridProps, 'justify'>>;
  $variant: ValueOf<Pick<GridProps, 'variant'>>;
  $fluid: ValueOf<Pick<GridProps, 'fluid'>>;
  $maxHeight: ValueOf<Pick<GridProps, 'maxHeight'>>;
  $maxWidth: ValueOf<Pick<GridProps, 'maxWidth'>>;
  $bordered: ValueOf<Pick<GridProps, 'bordered'>>;
}>`
  display: flex;
  flex: ${({ $fluid }) => ($fluid ? 1 : 'unset')};
  flex-direction: ${({ $direction }) => $direction};
  align-items: ${({ $align }) => $align};
  justify-content: ${({ $justify }) => $justify};
  height: ${({ $maxHeight, $size, theme }) =>
    getGridMaxSize({
      maxHeight: $maxHeight,
      size: $size,
      spacing: theme.spacing,
    })};
  width: ${({ $maxWidth, $size, theme }) =>
    getGridMaxSize({
      maxWidth: $maxWidth,
      size: $size,
      spacing: theme.spacing,
    })};
  padding: ${({ $container, $size, theme }) =>
    getGridPadding({
      container: $container,
      size: $size,
      spacing: theme.spacing,
    })};
  background-color: ${({ $container, $variant, theme }) =>
    getGridBgColor({
      container: $container,
      variant: $variant,
      palette: theme.palette,
    })};
  border-radius: ${({ theme, $bordered, $size }) =>
    getGridBorderRadius({
      bordered: $bordered,
      size: $size,
      shape: theme.shape,
    })};
`;
