import { useAccounts } from '../context/AccountsContext.hooks';

import {
  AddAccountFunc,
  DeleteAccountFunc,
  GetAccountFunc,
  UpdateAccountMetadataFunc,
  UseAccountsManagementHook,
} from './useAccountsManagement.types';
import useAccountsStorage from './useAccountsStorage';

/**
 * Provides all business logic for CRUD on user accounts context.
 * @returns The accounts state and a set of callbacks to handle searching,
 * adding, updating and deleting an account from the global context.
 */
export default function useAccountsManagement(): UseAccountsManagementHook {
  const { accounts, setAccounts } = useAccounts();
  const { setAccountsStorage } = useAccountsStorage();

  const getAccount: GetAccountFunc = address =>
    accounts.find(account => account.metadata.address === address);

  const addAccount: AddAccountFunc = account => {
    setAccounts(prevAccounts => [...prevAccounts, account]);

    setAccountsStorage(prevAccounts => [...prevAccounts, account]);
  };

  const updateAccountMetadata: UpdateAccountMetadataFunc = (address, data) =>
    setAccounts(prevAccounts =>
      prevAccounts.map(account =>
        account.metadata.address === address
          ? { ...account, ...data }
          : account,
      ),
    );

  const deleteAccount: DeleteAccountFunc = address =>
    setAccounts(prevAccounts =>
      prevAccounts.filter(account => account.metadata.address !== address),
    );

  return {
    accounts,
    addAccount,
    deleteAccount,
    getAccount,
    updateAccountMetadata,
  };
}
