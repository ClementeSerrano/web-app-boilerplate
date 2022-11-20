import { Outlet } from 'react-router-dom';
import Navigation from '../modules/Navigation/Navigation';

export default function RootRoute() {
  return (
    <>
      <Navigation />

      <Outlet />
    </>
  );
}
