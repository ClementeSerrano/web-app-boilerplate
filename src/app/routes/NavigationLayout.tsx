import { Outlet } from 'react-router-dom';

import Navigation from '../modules/Navigation/Navigation';

export default function NavigationLayout() {
  return (
    <>
      <Navigation />

      <Outlet />
    </>
  );
}
