import {
  Route,
  Routes as ReactRouterRoutes,
  useLocation,
} from 'react-router-dom';

import { ROUTE_PATHS } from './routes.constants';
import Navigation from '../components/Navigator/Navigation';
import Footer from '../components/Footer/Footer';
import HomePage from '../modules/home/pages/HomePage';

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
        <Route path={ROUTE_PATHS.home} element={<HomePage />} />
      </ReactRouterRoutes>

      <Footer />

      {background && (
        <ReactRouterRoutes>
          {/* Add here modal-based routes */}
        </ReactRouterRoutes>
      )}
    </>
  );
}
