import { useTheme } from 'styled-components';
import SunIcon from '../../icons/SunIcon';
import Button from '../Button/Button';

export default function ThemeSwitch() {
  const { mode, toggleMode } = useTheme();

  return (
    <Button variant="text" format="link" onClick={toggleMode}>
      {mode === 'light' ? 'to dark' : <SunIcon height={24} format="fill" />}
    </Button>
  );
}
