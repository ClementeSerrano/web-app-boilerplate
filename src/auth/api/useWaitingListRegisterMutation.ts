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
    $preferredInvestmentAmount: Int
  ) {
    waitingListRegister(
      email: $email
      firstname: $firstname
      lastname: $lastname
      preferredInvestmentAmount: $preferredInvestmentAmount
    ) {
      accessToken
    }
  }
`);

export type WaitingListRegisterMutationResult = { waitingListRegister: Auth };

export type WaitingListRegisterMutationOptions = MutationHookOptions<
  WaitingListRegisterMutationResult,
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
