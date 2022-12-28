import { useContext } from 'react';
import { AccountsContext } from './AccountsContext';

export function useAccounts() {
  return useContext(AccountsContext);
}
