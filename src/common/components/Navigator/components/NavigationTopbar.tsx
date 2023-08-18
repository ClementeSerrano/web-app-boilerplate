import { useRef } from 'react';

import Button from '../../Button/Button';
import Grid from '../../Grid/Grid';
import ThemeSwitch from '../../ThemeSwitch/ThemeSwitch';
import { useDevice } from '../../../contexts/DeviceContext/DeviceContext.hooks';
import { useLayout } from '../../../contexts/LayoutContext/LayoutContext.hooks';
import useElementSize from '../../../hooks/useElementSize';
import MenuIcon from '../../../assets/icons/MenuIcon';
import Logo from '../../../assets/icons/Logo';
import { ROUTE_PATHS } from '../../../../routes/routes.constants';

import {
  NavigationTopbarContainer,
  NavigationTopbarLogoNavlink,
} from '../Navigation.styles';
import { NavigationTopbarProps } from '../Navigation.types';
import { useDialog } from '../../../hooks/useDialog';
import WaitingListDialog from '../../../../auth/components/WaitingListDialog/WaitingListDialog';

export default function NavigationTopbar({
  toggleShowSidebar,
}: NavigationTopbarProps) {
  const containerRef = useRef(null);

  const waitingListDialog = useDialog();

  const device = useDevice();
  const { setNavTopbarHeight } = useLayout();

  useElementSize(containerRef, {
    onUpdate(size) {
      setNavTopbarHeight(size.height);
    },
  });

  return (
    <>
      <NavigationTopbarContainer ref={containerRef}>
        <Button format="link" variant="text" onClick={toggleShowSidebar}>
          <MenuIcon height={24} />
        </Button>

        <NavigationTopbarLogoNavlink to={ROUTE_PATHS.home}>
          <Logo variant={device.isPhone ? 'isotype' : 'logo'} height={32} />
        </NavigationTopbarLogoNavlink>

        <Grid direction="row" align="center" justify="flex-end">
          {!device.isPhone && <ThemeSwitch />}

          <Button
            variant="primary"
            size="sm"
            onClick={() => window.location.href = 'https://app.climeinvest.com'}
            style={{ borderRadius: 50, marginLeft: 16 }}
          >
            Get started
          </Button>
        </Grid>
      </NavigationTopbarContainer>

      {/* {waitingListDialog.show && (
        <WaitingListDialog
          show={waitingListDialog.show}
          handleClose={waitingListDialog.handleClose}
        />
      )} */}
    </>
  );
}
