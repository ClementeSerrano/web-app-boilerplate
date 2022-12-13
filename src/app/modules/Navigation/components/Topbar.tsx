import ThemeSwitch from '../../../components/ThemeSwitch/ThemeSwitch';
import useAuth from '../../Auth/hooks/useAuth';
import { TopbarContainer } from '../Navigation.styles';

export default function Topbar() {
  const auth = useAuth();

  return (
    <TopbarContainer
      container
      size="sm"
      maxWidth
      direction="row"
      align="center"
      justify="space-between"
      isAuth={!!auth}
      // as="nav"
    >
      <div>logo</div>

      <ThemeSwitch />
    </TopbarContainer>
  );
}
