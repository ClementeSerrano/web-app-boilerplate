import { useNavigate } from 'react-router-dom';

import AccountsManagerModal from '../modules/Accounts/sections/AccountsManagerModal/AccountsManagerModal';

/**
 * Route component for the accounts manager section.
 */
export default function AccountsManagerRoute() {
  const navigate = useNavigate();

  // TODO: Handle properly the navigation. When is the first route rendered when mounting
  // the app, it redirects you to the prev browser page.
  return <AccountsManagerModal onClose={() => navigate(-1)} />;
}
