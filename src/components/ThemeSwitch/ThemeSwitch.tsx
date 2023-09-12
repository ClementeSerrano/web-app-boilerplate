import { useTheme } from 'styled-components';

import MoonIcon from '../../lib/assets/icons/MoonIcon';
import SunIcon from '../../lib/assets/icons/SunIcon';
import Button from '../Button/Button';

export default function ThemeSwitch() {
  const { mode, toggleMode } = useTheme();

  return (
    <Button variant="text" format="link" onClick={toggleMode}>
      {mode === 'light' ? <MoonIcon height={24} /> : <SunIcon height={24} />}
    </Button>
  );
}
