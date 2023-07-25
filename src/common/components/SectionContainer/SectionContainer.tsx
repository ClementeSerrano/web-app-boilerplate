import { CSSProperties } from 'react';
import { useTheme } from 'styled-components';

import { useLayout } from '../../contexts/LayoutContext/LayoutContext.hooks';
import Grid from '../Grid/Grid';
import { SectionContainerProps } from './SectionContainer.types';

/**
 * Renders a main section component considering ap layout configs.
 */
export default function SectionContainer({
  children,
  variant = 'level1',
  style,
}: SectionContainerProps) {
  const theme = useTheme();

  const { navTopbarHeight } = useLayout();

  const paddingVertical = navTopbarHeight + theme.spacing.xxl;

  const styles: CSSProperties = {
    paddingTop: paddingVertical,
    paddingBottom: paddingVertical,
    ...style,
  };

  return (
    <Grid
      container
      maxWidth
      as="section"
      align="center"
      justify="center"
      size="lg"
      variant={variant}
      style={styles}
    >
      {children}
    </Grid>
  );
}
