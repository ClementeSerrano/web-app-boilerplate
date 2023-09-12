import { createContext, useState, useEffect, ReactNode, useMemo } from 'react';
import { getDeviceType } from './DeviceContext.helpers';

import { DeviceProviderValues, DeviceType } from './DeviceContext.types';

export const DeviceContext = createContext({} as DeviceProviderValues);

/**
 * Provides an updated state of the current device rendering the app.
 * @param children - Components tree to inject the context to.
 */
export function DeviceProvider({ children }: { children: ReactNode }) {
  const [type, setType] = useState<DeviceType>(getDeviceType());

  const isLaptop = useMemo(() => type === 'laptop', [type]);
  const isTablet = useMemo(() => type === 'tablet', [type]);
  const isPhone = useMemo(() => type === 'phone', [type]);

  useEffect(() => {
    const handleWindowResize = () => setType(getDeviceType());

    window.addEventListener('resize', handleWindowResize);

    return () => window.removeEventListener('resize', handleWindowResize);
  }, []);

  return (
    <DeviceContext.Provider value={{ type, isLaptop, isTablet, isPhone }}>
      {children}
    </DeviceContext.Provider>
  );
}
