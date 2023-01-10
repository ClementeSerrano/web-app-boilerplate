import useLocalStorage from '../../../hooks/useLocalStorage';
import { Account } from '../accounts.types';

export default function useAccountsStorage() {
  const [accountsStorage, setAccountsStorage] = useLocalStorage<Account[]>(
    'accounts',
    [],
  );

  return {
    accountsStorage,
    setAccountsStorage,
  };
}
