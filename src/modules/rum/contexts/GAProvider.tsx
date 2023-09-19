import { createContext, useCallback, useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import ReactGA from 'react-ga4';

import { ROUTE_NAMES, ROUTE_PATHS } from 'routes/routes.constants';

import { GAContextValues, GAProviderProps } from './GAProvider.interfaces';
import { GAEvent } from '../lib/interfaces/ga-event.enum';
import { AuthType } from 'api/interfaces/__generated__/graphql';

export const GAContext = createContext({} as GAContextValues);

export function GAProvider({ enabled = true, children }: GAProviderProps) {
  const [init, setInit] = useState(false);

  const location = useLocation();

  useEffect(() => {
    if (process.env.REACT_APP_GA_MEASUREMENT_ID && enabled) {
      ReactGA.initialize(process.env.REACT_APP_GA_MEASUREMENT_ID);

      ReactGA.send({
        hitType: 'pageview',
        page: ROUTE_PATHS.home,
        title: ROUTE_NAMES.home,
      });

      setInit(true);
    }
  }, [enabled]);

  useEffect(() => {
    if (init) {
      const routePath = location.pathname + location.search;
      const routeName = ROUTE_NAMES[routePath];

      ReactGA.send({
        hitType: 'pageview',
        page: routePath,
        title: routeName,
      });
    }
  }, [init, location]);

  const sendRegisterEvent = useCallback((type: AuthType) => {
    ReactGA.event(GAEvent.register, { method: type });
  }, []);

  const sendCustomEvent = useCallback((event: GAEvent, params?: unknown) => {
    ReactGA.event(event, params);
  }, []);

  return (
    <GAContext.Provider
      value={{ init, setInit, sendRegisterEvent, sendCustomEvent }}
    >
      {children}
    </GAContext.Provider>
  );
}
