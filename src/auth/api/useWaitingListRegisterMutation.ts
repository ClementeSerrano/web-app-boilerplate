import { MutationHookOptions, useMutation } from '@apollo/client';

import { gql } from '../../api/interfaces/__generated__/';
import {
  Auth,
  WaitingListRegisterMutationVariables,
} from '../../api/interfaces/__generated__/graphql';
import { useAlerts } from '../../common/hooks/useAlerts';

const WAITING_LIST_REGISTER_MUTATION = gql(/* GraphQL */ `
  mutation WaitingListRegister(
    $email: String!
    $firstname: String
    $lastname: String
  ) {
    waitingListRegister(
      email: $email
      firstname: $firstname
      lastname: $lastname
    ) {
      accessToken
    }
  }
`);

export type WaitingListRegisterMutationResult = { waitingListRegister: Auth };

export function useWaitingListRegisterMutation(
  options?: MutationHookOptions<
    WaitingListRegisterMutationResult,
    WaitingListRegisterMutationVariables
  >,
) {
  const { showSuccessSnackbar, showErrorSnackbar } = useAlerts();

  return useMutation(WAITING_LIST_REGISTER_MUTATION, {
    ...options,
    onCompleted: data => {
      showSuccessSnackbar({
        title: "You're in!",
        message: 'Thanks for joining Relo! Check you email for more details :)',
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
