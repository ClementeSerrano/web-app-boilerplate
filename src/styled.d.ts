// import original module declarations
import "styled-components";

import { Theme, ThemeMode } from "./app/theme/theme.types";

// and extend them!
declare module "styled-components" {
  export interface DefaultTheme extends Theme {
    mode: ThemeMode;
    setMode: React.Dispatch<React.SetStateAction<ThemeMode>>;
    toggleMode: () => void;
  }
}
