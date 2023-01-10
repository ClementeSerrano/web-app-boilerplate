import { ObservableDataState } from '../../../../types/api.types';
import { Account } from '../accounts.types';
import { EncryptAccountArgs } from '../helpers/accounts.helpers.types';

export type UseEncryptAccountHook = [
  UseEncryptAccountHandlerFunc,
  ObservableDataState<Account>,
];

export type UseEncryptAccountHandlerFunc = (
  args: UseEncryptAccountHandlerArgs,
) => Promise<void>;

type UseEncryptAccountHandlerArgs = Pick<
  EncryptAccountArgs,
  'passphrase' | 'password' | 'name'
>;
