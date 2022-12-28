import { useAccounts } from '../context/AccountsContext.hooks';

import { UseCurrentAccountHook } from './useCurrentAccount.types';

/**
 * Provides the current user account and a callback to change it.
 */
export default function useCurrentAccount(): UseCurrentAccountHook {
  const { currentAccount, setCurrentAccount } = useAccounts();

  return [currentAccount, setCurrentAccount];
}
