import { ApolloProvider } from '@apollo/client';

import { WithChildren } from '../common/components/components.types';
import apolloClient from './api.client';

export function APIProvider({ children }: WithChildren) {
  return <ApolloProvider client={apolloClient}>{children}</ApolloProvider>;
}
