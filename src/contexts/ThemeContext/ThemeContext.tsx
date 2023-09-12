import {
  ThemeProvider as BaseThemeProvider,
  createGlobalStyle,
} from 'styled-components';

import theme from '../../lib/theme/theme';
import { WithChildren } from '../../lib/interfaces/components.interfaces';
import { ThemeMode } from '../../lib/interfaces/theme.interfaces';
import useLocalStorage from '../../lib/hooks/useLocalStorage';

const GlobalStyle = createGlobalStyle`  
  h1,h2,h3,h4,h5,h6,p,b,a {
    margin: 0;
  }
`;

export function ThemeProvider({ children }: WithChildren) {
  const [mode, setMode] = useLocalStorage<ThemeMode>('theme', 'dark');

  const toggleMode = () => {
    const updatedMode = mode === 'light' ? 'dark' : 'light';

    setMode(updatedMode);
  };

  return (
    <>
      <GlobalStyle />

      <BaseThemeProvider
        theme={{
          ...theme[mode],
          mode,
          setMode,
          toggleMode,
        }}
      >
        {children}
      </BaseThemeProvider>
    </>
  );
}
