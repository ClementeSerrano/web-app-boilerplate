import {
  ApolloClient,
  InMemoryCache,
  from,
  ApolloLink,
  createHttpLink,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { AUTH_TOKEN_KEYS } from 'modules/auth/lib/constants/auth-token-keys';

const httpLink = createHttpLink({
  uri: process.env.REACT_APP_API_URL,
  headers: {
    'Apollo-Require-Preflight': 'true',
  },
});

const authLink = setContext((_, { headers }) => {
  const accessToken = localStorage.getItem(AUTH_TOKEN_KEYS.user);

  return {
    headers: {
      ...headers,
      authorization: accessToken ? `Bearer ${accessToken}` : '',
    },
  };
});

const apolloClient = new ApolloClient({
  cache: new InMemoryCache(),
  link: from([authLink, httpLink as unknown as ApolloLink]),
});

export default apolloClient;
