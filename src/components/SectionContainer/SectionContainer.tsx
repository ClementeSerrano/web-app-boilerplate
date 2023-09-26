import { CSSProperties } from 'react';
import { useTheme } from 'styled-components';

import { useLayout } from '../../contexts/LayoutContext/LayoutContext.hooks';
import Grid from '../Grid/Grid';
import { SectionSeparator } from './SectionContainer.styles';
import { SectionContainerProps } from './SectionContainer.types';

/**
 * Renders a main section component considering ap layout configs.
 */
export default function SectionContainer({
  children,
  variant = 'level1',
  withSeparator = false,
  style,
  className,
}: SectionContainerProps) {
  const theme = useTheme();

  const { navTopbarHeight } = useLayout();

  const paddingVertical = navTopbarHeight + theme.spacing.xxl;

  const styles: CSSProperties = {
    paddingTop: !withSeparator ? paddingVertical : 0,
    paddingBottom: !withSeparator ? paddingVertical : 0,
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
      className={className}
    >
      {children}

      {withSeparator && <SectionSeparator $paddingVertical={paddingVertical} />}
    </Grid>
  );
}
