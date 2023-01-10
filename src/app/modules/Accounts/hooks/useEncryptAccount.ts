import { useCallback, useState } from 'react';

import { getErrorWithMessage } from '../../../../helpers/errors.helpers';
import { ObservableDataOptions } from '../../../../types/api.types';
import { ErrorWithMessage } from '../../../../types/error.types';
import { DEFAULT_DERIVATION_PATH } from '../accounts.constants';
import { Account } from '../accounts.types';
import { encryptAccount } from '../helpers/accounts.helpers';

import {
  UseEncryptAccountHandlerFunc,
  UseEncryptAccountHook,
} from './useEncryptAccount.types';

/**
 * Handles an account encryption by providing the encrypt function and the
 * execution state of it (encrypted account data, loading state and error state).
 */
export default function useEncryptAccount(
  options?: ObservableDataOptions<Account>,
): UseEncryptAccountHook {
  const [data, setData] = useState<Account>();
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [error, setError] = useState<ErrorWithMessage>();

  const resetState = useCallback(() => {
    if (data) setData(undefined);
    if (isLoading) setIsLoading(false);
    if (isError) setIsError(false);
    if (error) setError(undefined);
  }, [data, isLoading, isError, error]);

  const handler: UseEncryptAccountHandlerFunc = async ({
    passphrase,
    password,
    name,
  }) => {
    resetState();

    try {
      const _data = await encryptAccount({
        passphrase,
        password,
        name,
        // TODO: Get this values from user settings context.
        enableCustomDerivationPath: false,
        derivationPath: DEFAULT_DERIVATION_PATH,
      });

      setData(_data);
      setIsLoading(false);

      if (options?.onCompleted) options.onCompleted(_data);
    } catch (_error) {
      const errorWithMessage = getErrorWithMessage(_error);

      setError(getErrorWithMessage(errorWithMessage));
      setIsError(true);
      setIsLoading(false);

      if (options?.onError) options.onError(errorWithMessage);
    }
  };

  return [handler, { data, isLoading, isError, error }];
}
