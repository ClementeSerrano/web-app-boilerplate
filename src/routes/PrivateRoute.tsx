import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { WithChildren } from '../common/components/components.types';

import { ROUTE_PATHS } from './routes.constants';

/**
 * Allows to make a route protected, by redirecting the user to the homepage
 * if no account is authenticated.
 * @param children - Route to wrap the auth protection on.
 */
export default function PrivateRoute({ children }: WithChildren) {
  const navigate = useNavigate();

  const authProfile = {};

  useEffect(() => {
    if (!authProfile) {
      navigate(ROUTE_PATHS.home);
    }
  }, [navigate, authProfile]);

  return <>{children}</>;
}
