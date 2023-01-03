import { Link, useLocation } from 'react-router-dom';

import { WithStyle } from '../../../../components/components.types';
import { ROUTE_PATHS } from '../../../../routes/routes.constants';
import useCurrentAccount from '../../../Accounts/hooks/useCurrentAccount';

export default function AuthButton({ style, className }: WithStyle) {
  const location = useLocation();

  const [currentAccount] = useCurrentAccount();

  if (currentAccount) {
    // TODO: Make avatar component that opens accounts manager in modal.
    return <div>Avatar</div>;
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
