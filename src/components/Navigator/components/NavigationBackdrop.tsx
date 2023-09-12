import { NavigationBackdropContainer } from '../Navigation.styles';

export function NavigationBackdrop({
  show,
  toggleShowSidebar,
}: {
  show: boolean;
  toggleShowSidebar(): void;
}) {
  return (
    <NavigationBackdropContainer show={show} onClick={toggleShowSidebar} />
  );
}
