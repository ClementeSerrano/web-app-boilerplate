import { useRef } from 'react';

import Button from '../../Button/Button';
import Grid from '../../Grid/Grid';
import ThemeSwitch from '../../ThemeSwitch/ThemeSwitch';
import { useDevice } from '../../../contexts/DeviceContext/DeviceContext.hooks';
import { useLayout } from '../../../contexts/LayoutContext/LayoutContext.hooks';
import useElementSize from '../../../hooks/useElementSize';
import MenuIcon from '../../../assets/icons/MenuIcon';
import TheArtisanLogo from '../../../assets/icons/TheArtisanLogo';
import { ROUTE_PATHS } from '../../../../routes/routes.constants';

import {
  NavigationTopbarContainer,
  NavigationTopbarLogoNavlink,
} from '../Navigation.styles';
import { NavigationTopbarProps } from '../Navigation.types';

export default function NavigationTopbar({
  toggleShowSidebar,
}: NavigationTopbarProps) {
  const containerRef = useRef(null);

  const device = useDevice();
  const { setNavTopbarHeight } = useLayout();

  useElementSize(containerRef, {
    onUpdate(size) {
      setNavTopbarHeight(size.height);
    },
  });

  return (
    <NavigationTopbarContainer ref={containerRef}>
      <Button format="link" variant="text" onClick={toggleShowSidebar}>
        <MenuIcon height={24} />
      </Button>

      <NavigationTopbarLogoNavlink to={ROUTE_PATHS.home}>
        <TheArtisanLogo
          variant={device.isPhone ? 'isotype' : 'logo'}
          height={32}
        />
      </NavigationTopbarLogoNavlink>

      <Grid direction="row" align="center" justify="flex-end">
        <ThemeSwitch />
      </Grid>
    </NavigationTopbarContainer>
  );
}
