import { useTheme } from 'styled-components';

import Button from '../../../components/Button/Button';
import Grid from '../../../components/Grid/Grid';
import ThemeSwitch from '../../../components/ThemeSwitch/ThemeSwitch';
import { useDevice } from '../../../contexts/DeviceContext/DeviceContext.hooks';
import MenuIcon from '../../../icons/MenuIcon';
import TheArtisanLogo from '../../../icons/TheArtisanLogo';
import { ROUTE_PATHS } from '../../../routes/routes.constants';
import AuthButton from '../../Accounts/components/AuthButton/AuthButton';

import {
  NavigationTopbarContainer,
  NavigationTopbarLogoNavlink,
} from '../Navigation.styles';
import { NavigationTopbarProps } from '../Navigation.types';

export default function NavigationTopbar({
  toggleShowSidebar,
}: NavigationTopbarProps) {
  const theme = useTheme();
  const device = useDevice();

  return (
    <NavigationTopbarContainer
      container
      size="sm"
      maxWidth
      direction="row"
      align="center"
      justify="space-between"
      // TODO: Solve styled-component issue to be able to define
      // this component as a nav element:
      // as="nav"
    >
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
        <AuthButton style={{ marginRight: theme.spacing.sm }} />

        <ThemeSwitch />
      </Grid>
    </NavigationTopbarContainer>
  );
}
