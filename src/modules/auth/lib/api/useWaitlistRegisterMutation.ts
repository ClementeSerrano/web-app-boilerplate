import { useMutation, MutationHookOptions } from '@apollo/client';
import { gql } from 'api/interfaces/__generated__';
import {
  WaitingListRegisterMutation,
  WaitingListRegisterMutationVariables,
} from 'api/interfaces/__generated__/graphql';

const WAITLIST_REGISTER_MUTATION = gql(/* GraphQL */ `
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

export type WaitlistRegisterMutationOptions = MutationHookOptions<
  WaitingListRegisterMutation,
  WaitingListRegisterMutationVariables
>;

export function useWaitlistRegisterMutation(
  options?: WaitlistRegisterMutationOptions,
) {
  return useMutation(WAITLIST_REGISTER_MUTATION, options);
}
