import { SetLocalStorageValueHandler } from '../../../hooks/useLocalStorage';
import { Account } from '../accounts.types';

export type UseCurrentAccountStorageHook = [
  Account | undefined,
  SetLocalStorageValueHandler<Account | undefined>,
];
