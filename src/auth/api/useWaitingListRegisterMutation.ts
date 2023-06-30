import { MutationHookOptions, useMutation } from '@apollo/client';

import { gql } from '../../api/interfaces/__generated__/';
import {
  Auth,
  WaitingListRegisterMutationVariables,
} from '../../api/interfaces/__generated__/graphql';

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
  return useMutation(WAITING_LIST_REGISTER_MUTATION, options);
}
