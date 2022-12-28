import { createBrowserRouter } from 'react-router-dom';

import NavigationLayout from './NavigationLayout';
import CreateAccountRoute from './CreateAccountRoute';
import AddAccountRoute from './AddAccountRoute';
import ErrorFallbackScreen from '../modules/Errors/ErrorFallbackScreen/ErrorFallbackScreen';
import { ROUTE_PATHS } from './routes.constants';

const router = createBrowserRouter([
  {
    path: ROUTE_PATHS.home,
    element: <NavigationLayout />,
    errorElement: <ErrorFallbackScreen />,
    children: [
      {
        path: ROUTE_PATHS.addAccount,
        element: <AddAccountRoute />,
        errorElement: <ErrorFallbackScreen />,
      },
      {
        path: ROUTE_PATHS.createAccount,
        element: <CreateAccountRoute />,
        errorElement: <ErrorFallbackScreen />,
      },
    ],
  },
]);

export default router;
