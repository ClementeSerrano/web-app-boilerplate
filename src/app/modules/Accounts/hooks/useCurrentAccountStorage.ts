import useLocalStorage from '../../../hooks/useLocalStorage';
import { Account } from '../accounts.types';

import { UseCurrentAccountStorageHook } from './useCurrentAccountStorage.types';

/**
 * Manages user current account on local storage.
 * @returns - Current account stored on local storage and a dispatcher to set it up.
 */
export default function useCurrentAccountStorage(): UseCurrentAccountStorageHook {
  const [currentAccountStorage, setCurrentAccountStorage] = useLocalStorage<
    Account | undefined
  >('currentAccount', undefined);

  return [currentAccountStorage, setCurrentAccountStorage];
}
