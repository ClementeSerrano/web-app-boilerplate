import { useLocation } from 'react-router-dom';

import useCurrentAccount from '../../../Accounts/hooks/useCurrentAccount';
import Avatar from '../../../../components/Avatar/Avatar';
import { ROUTE_PATHS } from '../../../../routes/routes.constants';
import { WithStyle } from '../../../../components/components.types';
import Navlink from '../../../../components/Navlink/Navlink';

/**
 * Entry point for creating, adding and managing user accounts.
 * @param props.style - CSS inline styles for custom styling.
 * @param props.className - A className for custom styling.
 */
export default function AuthButton({ style, className }: WithStyle) {
  const location = useLocation();

  const [currentAccount] = useCurrentAccount();

  if (currentAccount) {
    return (
      <Navlink
        to={ROUTE_PATHS.accountsManager}
        format="container"
        size="sm"
        state={{ background: location }}
        style={{ padding: 2, borderRadius: '50%', ...style }}
        className={className}
      >
        <Avatar
          alt={currentAccount.metadata.name || 'User avatar'}
          withInitials
        />
      </Navlink>
    );
  }

  return (
    // TODO: Add also create account button next to it.
    <Navlink
      to={ROUTE_PATHS.addAccount}
      format="button"
      variant="primary"
      size="md"
      state={{ background: location }}
      style={style}
      className={className}
    >
      Log in
    </Navlink>
  );
}
