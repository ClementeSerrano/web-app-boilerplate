import { useTheme } from 'styled-components';
import Switch from '../../../components/Switch/Switch';
import { TopbarContainer } from '../Navigation.styles';

export default function Topbar() {
  const { mode, toggleMode } = useTheme();

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

      <Switch
        id="theme-switcher"
        name="theme-switcher"
        checked={mode === 'dark'}
        onChange={() => toggleMode()}
      />
    </TopbarContainer>
  );
}
