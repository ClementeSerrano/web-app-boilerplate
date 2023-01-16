import { Link, useLocation } from 'react-router-dom';

import useCurrentAccount from '../../../Accounts/hooks/useCurrentAccount';
import { useAccounts } from '../../context/AccountsContext.hooks';
import Avatar from '../../../../components/Avatar/Avatar';
import { ROUTE_PATHS } from '../../../../routes/routes.constants';
import { WithStyle } from '../../../../components/components.types';
// import AccountsManager from '../AccountsManager/AccountsManager';

export default function AuthButton({ style, className }: WithStyle) {
  const location = useLocation();

  const [currentAccount] = useCurrentAccount();

  const accounts = useAccounts();

  console.log({ accounts });

  if (currentAccount) {
    // TODO: Make avatar component that opens accounts manager in modal.
    return (
      <Avatar
        alt={currentAccount.metadata.name || 'User avatar'}
        withInitials
      />
    );
  }

  return (
    <>
      <Link
        to={ROUTE_PATHS.addAccount}
        state={{ background: location }}
        style={style}
        className={className}
      >
        Log in
      </Link>
    </>
  );
}
