import { useState } from 'react';
import { ApolloError } from '@apollo/client';

import { useAuthProfileLazyQuery } from '../api/useAuthProfileLazyQuery';
import {
  useWaitlistRegisterMutation,
  WaitlistRegisterMutationOptions,
} from '../api/useWaitlistRegisterMutation';
import { useAuthProfile } from './useAuthProfile';
import {
  UseWaitlistHook,
  UseWaitlistHookProps,
} from './useWaitlistRegister.interface';
import { AUTH_TOKEN_KEYS } from '../constants/auth-token-keys';

export function useWaitlistRegister(
  props?: UseWaitlistHookProps,
): UseWaitlistHook {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<ApolloError>();

  const { setIsAuth, setProfile } = useAuthProfile();

  const [waitlistRegisterMutation] = useWaitlistRegisterMutation({
    onCompleted: data => {
      const accessToken = data.waitingListRegister.accessToken;

      localStorage.setItem(AUTH_TOKEN_KEYS.user, accessToken);

      authProfileLazyQuery();
    },
    onError: e => {
      setError(e);
      setLoading(false);

      props?.onError && props.onError(e);
    },
  });

  const [authProfileLazyQuery] = useAuthProfileLazyQuery({
    onCompleted: data => {
      setProfile(data.profile);
      setIsAuth(true);
      setLoading(false);

      props?.onCompleted && props.onCompleted();
    },
    onError: e => {
      setError(e);
      setLoading(false);

      props?.onError && props.onError(e);
    },
  });

  const mutation = async (args?: WaitlistRegisterMutationOptions) => {
    setLoading(true);
    setError(undefined);

    waitlistRegisterMutation(args);
  };

  return [mutation, { loading, error }];
}
