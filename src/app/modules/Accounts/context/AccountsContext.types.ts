import { Account } from '../accounts.types';

export type AccountsContextValues = {
  accounts: Account[];
  setAccounts: React.Dispatch<React.SetStateAction<Account[]>>;
  currentAccount?: Account;
  setCurrentAccount: React.Dispatch<React.SetStateAction<Account | undefined>>;
};
