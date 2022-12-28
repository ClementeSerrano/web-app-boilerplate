import { useContext } from 'react';
import { AccountsContext } from './AccountsContext';

/**
 * Context consumer for the accounts module.
 * @returns Values of the accounts context.
 */
export function useAccounts() {
  return useContext(AccountsContext);
}
