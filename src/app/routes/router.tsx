import { createBrowserRouter } from 'react-router-dom';

import RootRoute from './RootRoute';
import ErrorFallbackScreen from '../modules/Errors/ErrorFallbackScreen/ErrorFallbackScreen';
import CreateAccountRoute from './CreateAccountRoute';
import { ROUTE_PATHS } from './routes.constants';

const router = createBrowserRouter([
  {
    element: <RootRoute />,
    path: ROUTE_PATHS.all,
    errorElement: <ErrorFallbackScreen />,
    children: [
      {
        path: ROUTE_PATHS.createAccount,
        element: <CreateAccountRoute />,
        errorElement: <ErrorFallbackScreen />,
      },
    ],
  },
]);

export default router;
