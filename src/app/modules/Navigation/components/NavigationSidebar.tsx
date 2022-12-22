import HomeIcon from '../../../icons/HomeIcon';
import { ROUTE_PATHS } from '../../../routes/routes.constants';
import {
  NavigationLink,
  NavigationSidebarContainer,
} from '../Navigation.styles';

export default function NavigationSidebar({
  show,
  toggleShow,
}: {
  show: boolean;
  toggleShow(): void;
}) {
  return (
    <>
      <NavigationSidebarContainer container variant="level2" show={show}>
        <NavigationLink to={ROUTE_PATHS.home} onClick={toggleShow}>
          <HomeIcon height={20} style={{ marginRight: 8 }} /> Home
        </NavigationLink>

        {/* TODO: Add links coming from the server. */}
      </NavigationSidebarContainer>
    </>
  );
}
