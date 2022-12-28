import { createContext, useState } from 'react';

import { WithChildren } from '../../../components/components.types';
import { Account } from '../accounts.types';
import { AccountsContextValues } from './AccountsContext.types';

export const AccountsContext = createContext<AccountsContextValues>(
  {} as AccountsContextValues,
);

export function AccountsProvider({ children }: WithChildren) {
  const [accounts, setAccounts] = useState<Account[]>([]);
  const [currentAccount, setCurrentAccount] = useState<Account>();

  return (
    <AccountsContext.Provider
      value={{
        accounts,
        setAccounts,
        currentAccount,
        setCurrentAccount,
      }}
    >
      {children}
    </AccountsContext.Provider>
  );
}

// return {
//   accounts,
//   setAccount,
//   updateAccount,
//   deleteAccount,
//   getAccount,
// };
