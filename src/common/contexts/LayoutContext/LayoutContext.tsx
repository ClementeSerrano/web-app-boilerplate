import { createContext, useState } from 'react';
import { WithChildren } from '../../interfaces/components.interfaces';

import { LayoutContextValues } from './LayoutContext.types';

export const LayoutContext = createContext({} as LayoutContextValues);

export function LayoutProvider({ children }: WithChildren) {
  const [navTopbarHeight, setNavTopbarHeight] = useState(0);
  const [footerHeight, setFooterHeight] = useState(0);

  return (
    <LayoutContext.Provider
      value={{
        navTopbarHeight,
        setNavTopbarHeight,
        footerHeight,
        setFooterHeight,
      }}
    >
      {children}
    </LayoutContext.Provider>
  );
}
