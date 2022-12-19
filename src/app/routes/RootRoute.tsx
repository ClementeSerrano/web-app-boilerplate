import { useEffect } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';

import useAuth from '../modules/Auth/hooks/useAuth';
import Navigation from '../modules/Navigation/Navigation';

export default function RootRoute() {
  const auth = useAuth();

  const navigate = useNavigate();

  useEffect(() => {
    if (!auth?.account) {
      navigate('create-account');
    }
  }, [navigate, auth?.account]);

  return (
    <>
      <Navigation />

      <Outlet />
    </>
  );
}
