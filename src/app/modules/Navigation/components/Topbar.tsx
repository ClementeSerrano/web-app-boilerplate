import ThemeSwitch from '../../../components/ThemeSwitch/ThemeSwitch';
import { TopbarContainer } from '../Navigation.styles';

export default function Topbar() {
  return (
    <TopbarContainer
      container
      size="sm"
      maxWidth
      direction="row"
      align="center"
      justify="space-between"
      // as="nav"
    >
      <div>logo</div>

      <ThemeSwitch />
    </TopbarContainer>
  );
}
