import Button from '../../../components/Button/Button';
import ThemeSwitch from '../../../components/ThemeSwitch/ThemeSwitch';
import MenuIcon from '../../../icons/MenuIcon';

import { NavigationTopbarContainer } from '../Navigation.styles';
import { NavigationTopbarProps } from '../Navigation.types';

export default function NavigationTopbar({
  toggleShowSidebar,
}: NavigationTopbarProps) {
  return (
    <NavigationTopbarContainer
      container
      size="sm"
      maxWidth
      direction="row"
      align="center"
      justify="space-between"
      // as="nav"
    >
      <Button format="link" variant="text" onClick={toggleShowSidebar}>
        <MenuIcon height={24} />
      </Button>

      <div>logo</div>

      <ThemeSwitch />
    </NavigationTopbarContainer>
  );
}
