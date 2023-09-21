import {
  Route,
  Routes as ReactRouterRoutes,
  useLocation,
} from 'react-router-dom';

import { DIALOG_ROUTES, PAGE_ROUTES } from './routes-mapping';
import { ROUTE_PATHS } from './routes.constants';
import Navigation from '../components/Navigator/Navigation';
import Footer from 'components/Footer/Footer';

/**
 * Main routes of the app.
 */
export default function Routes() {
  const location = useLocation();
  const state = location.state as { backgroundLocation?: Location };

  const isDialogRoute = DIALOG_ROUTES.some(
    route => route.path === location.pathname,
  );

  const backgroundLocation =
    state?.backgroundLocation ||
    (isDialogRoute ? { pathname: ROUTE_PATHS.home } : location);

  return (
    <>
      <Navigation />

      <ReactRouterRoutes location={backgroundLocation}>
        {PAGE_ROUTES.map(route => (
          <Route key={route.path} path={route.path} element={route.element} />
        ))}
      </ReactRouterRoutes>

      <Footer />

      {isDialogRoute && (
        <ReactRouterRoutes location={location}>
          {DIALOG_ROUTES.map(route => (
            <Route key={route.path} path={route.path} element={route.element} />
          ))}
        </ReactRouterRoutes>
      )}
    </>
  );
}
