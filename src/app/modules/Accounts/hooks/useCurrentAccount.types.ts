import { ValueOf } from '../../../../types/general.types';
import { AccountsContextValues } from '../context/AccountsContext.types';

export type UseCurrentAccountHook = [
  ValueOf<Pick<AccountsContextValues, 'currentAccount'>>,
  ValueOf<Pick<AccountsContextValues, 'setCurrentAccount'>>,
];
