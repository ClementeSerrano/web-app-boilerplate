import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import useAuth from '../modules/Auth/hooks/useAuth';
import { WithChildren } from '../components/components.types';

export default function PrivateRoute({ children }: WithChildren) {
  const auth = useAuth();

  const navigate = useNavigate();

  useEffect(() => {
    if (!auth?.account) {
      navigate('create-account');
    }
  }, [navigate, auth?.account]);

  return <>{children}</>;
}
