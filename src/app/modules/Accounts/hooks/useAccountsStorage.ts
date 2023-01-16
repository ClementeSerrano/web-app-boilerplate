import useLocalStorage from '../../../hooks/useLocalStorage';
import { Account } from '../accounts.types';

import { UseAccountsStorageHook } from './useAccountsStorage.types';

/**
 * Manages user accounts on local storage.
 * @returns - Accounts stored on local storage and a dispatcher to set them up.
 */
export default function useAccountsStorage(): UseAccountsStorageHook {
  const [accountsStorage, setAccountsStorage] = useLocalStorage<Account[]>(
    'accounts',
    [],
  );

  return [accountsStorage, setAccountsStorage];
}
