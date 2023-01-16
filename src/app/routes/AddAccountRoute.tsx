import { useNavigate } from 'react-router-dom';

import AddAccountModal from '../modules/Accounts/sections/AddAccountModal/AddAccountModal';

/**
 * Route component for the add account section.
 */
export default function AddAccountRoute() {
  const navigate = useNavigate();

  // TODO: Handle properly the navigation. When is the first route rendered when mounting
  // the app, it redirects you to the prev browser page.
  return <AddAccountModal onClose={() => navigate(-1)} />;
}
