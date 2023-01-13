// import original module declarations
import 'styled-components';

import { Theme, ThemeMode } from './app/theme/theme.types';
import { SetLocalStorageValueHandler } from './app/hooks/useLocalStorage';

// and extend them!
declare module 'styled-components' {
  export interface DefaultTheme extends Theme {
    mode: ThemeMode;
    setMode: SetLocalStorageValueHandler;
    toggleMode: () => void;
  }
}
