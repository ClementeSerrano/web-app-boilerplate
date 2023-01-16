import { useNavigate } from 'react-router-dom';

import CreateAccountModal from '../modules/Accounts/sections/CreateAccountModal/CreateAccountModal';

/**
 * Route component for the create account section.
 */
export default function CreateAccountRoute() {
  const navigate = useNavigate();

  // TODO: Handle properly the navigation. When is the first route rendered when mounting
  // the app, it redirects you to the prev browser page.
  return <CreateAccountModal onClose={() => navigate(-1)} />;
}
