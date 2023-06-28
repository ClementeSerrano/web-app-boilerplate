import { useTheme } from 'styled-components';
import Navlink from '../../Navlink/Navlink';
import HomeIcon from '../../../assets/icons/HomeIcon';
import { ROUTE_PATHS } from '../../../../routes/routes.constants';
import { NavigationSidebarContainer } from '../Navigation.styles';

export default function NavigationSidebar({
  show,
  toggleShow,
}: {
  show: boolean;
  toggleShow(): void;
}) {
  const theme = useTheme();

  return (
    <>
      <NavigationSidebarContainer
        container
        size="md"
        variant="level1"
        show={show}
      >
        <Navlink
          variant="primary"
          format="container"
          to={ROUTE_PATHS.home}
          onClick={toggleShow}
        >
          {({ isActive }) => (
            <>
              <HomeIcon
                height={20}
                format={isActive ? 'fill' : 'outline'}
                style={{ marginRight: theme.spacing.sm }}
              />
              Home
            </>
          )}
        </Navlink>

        {/* TODO: Add links coming from the server. */}
      </NavigationSidebarContainer>
    </>
  );
}
