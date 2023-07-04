import { ApolloProvider } from '@apollo/client';

import { WithChildren } from '../common/interfaces/components.interfaces';
import apolloClient from './api.client';

export function APIProvider({ children }: WithChildren) {
  return <ApolloProvider client={apolloClient}>{children}</ApolloProvider>;
}
