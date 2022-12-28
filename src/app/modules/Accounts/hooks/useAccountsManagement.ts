import { useAccounts } from '../context/AccountsContext.hooks';

import {
  AddAccountFunc,
  DeleteAccountFunc,
  GetAccountFunc,
  UpdateAccountMetadataFunc,
} from './useAccountsManagement.types';

export default function useAccountsManagement() {
  const { accounts, setAccounts } = useAccounts();

  const getAccount: GetAccountFunc = address =>
    accounts.find(account => account.metadata.address === address);

  const addAccount: AddAccountFunc = account =>
    setAccounts(prevAccounts => [...prevAccounts, account]);

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
