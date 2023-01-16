import {
  Route,
  Routes as ReactRouterRoutes,
  useLocation,
} from 'react-router-dom';

import CreateAccountRoute from './CreateAccountRoute';
import AddAccountRoute from './AddAccountRoute';
import { ROUTE_PATHS } from './routes.constants';
import Navigation from '../modules/Navigation/Navigation';

/**
 * Component where the main routes of the app are specified.
 */
export default function Routes() {
  const location = useLocation();
  const background = location.state && location.state.background;

  return (
    <>
      <Navigation />

      <ReactRouterRoutes location={background || location}>
        <Route path={ROUTE_PATHS.home} element={<div>home...</div>} />

        <Route
          path={ROUTE_PATHS.createAccount}
          element={<CreateAccountRoute />}
        />

        <Route path={ROUTE_PATHS.addAccount} element={<AddAccountRoute />} />
      </ReactRouterRoutes>

      {background && (
        <ReactRouterRoutes>
          <Route
            path={ROUTE_PATHS.createAccount}
            element={<CreateAccountRoute />}
          />

          <Route path={ROUTE_PATHS.addAccount} element={<AddAccountRoute />} />
        </ReactRouterRoutes>
      )}
    </>
  );
}
