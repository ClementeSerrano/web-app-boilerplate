// import original module declarations
import 'styled-components';

import { Theme, ThemeMode } from './lib/interfaces/theme.interfaces';
import { SetLocalStorageValueHandler } from './lib/hooks/useLocalStorage';

// and extend them!
declare module 'styled-components' {
  export interface DefaultTheme extends Theme {
    mode: ThemeMode;
    setMode: SetLocalStorageValueHandler;
    toggleMode: () => void;
  }
}
