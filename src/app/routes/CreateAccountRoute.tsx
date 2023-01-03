import { useNavigate } from 'react-router-dom';

import CreateAccountModal from '../modules/Accounts/sections/CreateAccountModal/CreateAccountModal';

/**
 * Route component for the create account section.
 */
export default function CreateAccountRoute() {
  const navigate = useNavigate();

  return <CreateAccountModal onClose={() => navigate(-1)} />;
}
