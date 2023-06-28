import { useEffect } from 'react';
import {
  ThemeProvider as BaseThemeProvider,
  createGlobalStyle,
} from 'styled-components';

import theme from '../../theme/theme';
import { WithChildren } from '../../components/components.types';
import { ThemeMode } from '../../theme/theme.types';
import useLocalStorage from '../../hooks/useLocalStorage';

const GlobalStyle = createGlobalStyle`  
  h1,h2,h3,h4,h5,h6,p,b,a {
    margin: 0;
  }
`;

export function ThemeProvider({ children }: WithChildren) {
  const [mode, setMode] = useLocalStorage<ThemeMode>('theme', 'light');

  const toggleMode = () => {
    const updatedMode = mode === 'light' ? 'dark' : 'light';

    setMode(updatedMode);
  };

  useEffect(() => {
    const prefersDark =
      window.matchMedia &&
      window.matchMedia('(prefers-color-scheme: dark)').matches;

    if (mode && ['dark', 'light'].includes(mode)) {
      setMode(mode);
    } else if (prefersDark) {
      setMode('dark');
    }
  }, [mode, setMode]);

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
