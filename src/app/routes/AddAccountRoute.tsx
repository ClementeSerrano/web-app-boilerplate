import { useNavigate } from 'react-router-dom';

import AddAccountModal from '../modules/Accounts/sections/AddAccountModal/AddAccountModal';

/**
 * Route component for the add account section.
 */
export default function AddAccountRoute() {
  const navigate = useNavigate();

  return <AddAccountModal onClose={() => navigate(-1)} />;
}
