import {
  Route,
  Routes as ReactRouterRoutes,
  useLocation,
} from 'react-router-dom';

import { ROUTE_PATHS } from './routes.constants';
import Navigation from '../components/Navigator/Navigation';
import Footer from 'components/Footer/Footer';
import HomePage from 'modules/home/pages/HomePage';
import WaitlistDialog from 'modules/auth/pages/WaitlistDialog/WaitlistDialog';

/**
 * Component where the main routes of the app are specified.
 */
export default function Routes() {
  const location = useLocation();
  const state = location.state as { backgroundLocation?: Location };

  return (
    <>
      <Navigation />

      <ReactRouterRoutes location={state?.backgroundLocation || location}>
        <Route path={ROUTE_PATHS.home} element={<HomePage />} />
      </ReactRouterRoutes>

      <Footer />

      {state?.backgroundLocation && (
        <ReactRouterRoutes>
          <Route
            path={ROUTE_PATHS.waitlistRegister}
            element={<WaitlistDialog />}
          />
        </ReactRouterRoutes>
      )}
    </>
  );
}
