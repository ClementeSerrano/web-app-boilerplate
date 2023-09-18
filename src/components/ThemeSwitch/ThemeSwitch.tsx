import { useTheme } from 'styled-components';

import MoonIcon from 'lib/assets/icons/MoonIcon';
import SunIcon from 'lib/assets/icons/SunIcon';
import Button from 'components/Button/Button';
import { WithStyle } from 'lib/interfaces/components.interfaces';

export default function ThemeSwitch({ style }: WithStyle) {
  const { mode, toggleMode } = useTheme();

  return (
    <Button variant="text" format="link" onClick={toggleMode} style={style}>
      {mode === 'light' ? <MoonIcon height={24} /> : <SunIcon height={24} />}
    </Button>
  );
}
