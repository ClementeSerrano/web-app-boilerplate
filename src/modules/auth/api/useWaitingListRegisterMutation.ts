import { MutationHookOptions, useMutation } from '@apollo/client';
import { gql } from 'api/interfaces/__generated__';

import {
  WaitingListRegisterMutation,
  WaitingListRegisterMutationVariables,
} from 'lib/api/interfaces/__generated__/graphql';
import { useAlerts } from 'lib/hooks/useAlerts';

const WAITING_LIST_REGISTER_MUTATION = gql(/* GraphQL */ `
  mutation WaitingListRegister(
    $email: String!
    $firstname: String
    $lastname: String
    $companyName: String
  ) {
    waitingListRegister(
      email: $email
      firstname: $firstname
      lastname: $lastname
      companyName: $companyName
    ) {
      accessToken
    }
  }
`);

export type WaitingListRegisterMutationOptions = MutationHookOptions<
  WaitingListRegisterMutation,
  WaitingListRegisterMutationVariables
>;

export function useWaitingListRegisterMutation(
  options?: WaitingListRegisterMutationOptions,
) {
  const { showSuccessSnackbar, showErrorSnackbar } = useAlerts();

  return useMutation(WAITING_LIST_REGISTER_MUTATION, {
    ...options,
    onCompleted: data => {
      showSuccessSnackbar({
        title: "You're in!",
        message:
          'Thanks for joining Climeinvest! Check you email for more details :)',
      });

      options?.onCompleted && options.onCompleted(data);
    },
    onError: error => {
      showErrorSnackbar({
        message: 'Please try again.',
      });

      options?.onError && options.onError(error);
    },
  });
}
