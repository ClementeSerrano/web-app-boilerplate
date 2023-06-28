import { CSSProperties } from 'react';
import { useTheme } from 'styled-components';

import { useLayout } from '../../contexts/LayoutContext/LayoutContext.hooks';
import { WithChildren } from '../components.types';
import Grid from '../Grid/Grid';
import { getGridPadding } from '../Grid/Grid.helpers';

/**
 * Renders a main section component considering ap layout configs.
 * @param props.children - Content to render inside the section.
 */
export default function SectionContainer({ children }: WithChildren) {
  const theme = useTheme();

  const { navTopbarHeight, footerHeight } = useLayout();

  const padding = getGridPadding({
    size: 'lg',
    withUnits: false,
    spacing: theme.spacing,
    container: true,
  }) as number;

  const styles: CSSProperties = {
    paddingTop: navTopbarHeight,
    minHeight: `calc(100vh - ${navTopbarHeight + footerHeight + padding}px)`,
  };

  return (
    <Grid
      container
      maxWidth
      as="section"
      align="center"
      justify="center"
      size="lg"
      style={styles}
    >
      {children}
    </Grid>
  );
}
