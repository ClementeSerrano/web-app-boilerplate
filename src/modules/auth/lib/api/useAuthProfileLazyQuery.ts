import { QueryHookOptions, useLazyQuery } from '@apollo/client';
import { gql } from 'api/interfaces/__generated__';
import {
  AuthProfileQuery,
  AuthProfileQueryVariables,
} from 'api/interfaces/__generated__/graphql';

const AUTH_PROFILE_QUERY = gql(/* GraphQL */ `
  query AuthProfile {
    profile {
      _id
      authType
      userId
      username
      email
      firstname
      lastname
      avatar
      preferences
      createdAt
      updatedAt
      oauthId
    }
  }
`);

export type AuthProfileQueryOptions = QueryHookOptions<
  AuthProfileQuery,
  AuthProfileQueryVariables
>;

export function useAuthProfileLazyQuery(options?: AuthProfileQueryOptions) {
  return useLazyQuery(AUTH_PROFILE_QUERY, options);
}
