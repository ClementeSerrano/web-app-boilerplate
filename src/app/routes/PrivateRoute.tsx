import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import useCurrentAccount from '../modules/Accounts/hooks/useCurrentAccount';
import { WithChildren } from '../components/components.types';

import { ROUTE_PATHS } from './routes.constants';

/**
 * Allows to make a route protected, by redirecting the user to the homepage
 * if no account is authenticated.
 * @param children - Route to wrap the auth protection on.
 */
export default function PrivateRoute({ children }: WithChildren) {
  const [currentAccount] = useCurrentAccount();

  const navigate = useNavigate();

  useEffect(() => {
    if (!currentAccount) {
      navigate(ROUTE_PATHS.home);
    }
  }, [navigate, currentAccount]);

  return <>{children}</>;
}
