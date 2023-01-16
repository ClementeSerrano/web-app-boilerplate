import { SetLocalStorageValueHandler } from '../../../hooks/useLocalStorage';
import { Account } from '../accounts.types';

export type UseAccountsStorageHook = [
  Account[],
  SetLocalStorageValueHandler<Account[]>,
];
