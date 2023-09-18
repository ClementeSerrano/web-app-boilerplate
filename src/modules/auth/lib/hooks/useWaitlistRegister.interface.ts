import { ApolloError } from '@apollo/client';
import { WaitlistRegisterMutationOptions } from '../api/useWaitlistRegisterMutation';

export type UseWaitlistHook = [
  (args?: WaitlistRegisterMutationOptions) => Promise<void>,
  { loading: boolean; error: ApolloError | undefined },
];

export type UseWaitlistHookProps = {
  onCompleted?: () => void;
  onError?: (error: ApolloError) => void;
};
