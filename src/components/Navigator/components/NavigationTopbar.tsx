import { useRef } from 'react';
import { useLocation } from 'react-router-dom';
import { useTheme } from 'styled-components';

import { useAuthProfile } from 'modules/auth/lib/hooks/useAuthProfile';
import Grid from 'components/Grid/Grid';
import Avatar from 'components/Avatar/Avatar';
import Button from 'components/Button/Button';
import Navlink from 'components/Navlink/Navlink';
import { useDevice } from 'contexts/DeviceContext/DeviceContext.hooks';
import { useLayout } from 'contexts/LayoutContext/LayoutContext.hooks';
import useElementSize from 'lib/hooks/useElementSize';
import MenuIcon from 'lib/assets/icons/MenuIcon';
import Logo from 'lib/assets/icons/Logo';
import { ROUTE_PATHS } from 'routes/routes.constants';

import { NavigationTopbarProps } from '../Navigation.types';
import {
  NavigationTopbarContainer,
  NavigationTopbarLogoNavlink,
} from '../Navigation.styles';
import ThemeSwitch from 'components/ThemeSwitch/ThemeSwitch';

export default function NavigationTopbar({
  toggleShowSidebar,
}: NavigationTopbarProps) {
  const { profile, isAuth } = useAuthProfile();

  const location = useLocation();

  const containerRef = useRef(null);

  const theme = useTheme();

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
        <Logo variant={device.isPhone ? 'isotype' : 'logo'} height={32} />
      </NavigationTopbarLogoNavlink>

      <Grid direction="row" align="center" justify="flex-end">
        {!device.isPhone && (
          <ThemeSwitch style={{ marginRight: theme.spacing.sm }} />
        )}

        {isAuth ? (
          <Avatar
            withInitials
            src={profile?.avatar as string | undefined}
            alt="userAvatar"
          >
            {profile?.firstname} {profile?.lastname}
          </Avatar>
        ) : (
          <Navlink
            to={ROUTE_PATHS.waitlistRegister}
            format="button"
            state={{ backgroundLocation: location }}
            style={{
              padding: '6px 12px',
              borderRadius: theme.shape.borderRadius.lg,
            }}
          >
            Sign up
          </Navlink>
        )}
      </Grid>
    </NavigationTopbarContainer>
  );
}
