import WaitlistDialog from 'modules/auth/pages/WaitlistDialog/WaitlistDialog';
import HomePage from 'modules/home/pages/HomePage';

import { ROUTE_PATHS } from './routes.constants';

export const PAGE_ROUTES = [{ path: ROUTE_PATHS.home, element: <HomePage /> }];

export const DIALOG_ROUTES = [
  { path: ROUTE_PATHS.waitlistRegister, element: <WaitlistDialog /> },
];
