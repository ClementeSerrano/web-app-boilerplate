import { ApolloError } from '@apollo/client';
import { AuthProfileObjectType } from 'api/interfaces/__generated__/graphql';

export interface AuthProfileContextValues {
  isAuth: boolean;
  setIsAuth: React.Dispatch<React.SetStateAction<boolean>>;
  profile?: AuthProfileObjectType;
  setProfile: React.Dispatch<
    React.SetStateAction<AuthProfileObjectType | undefined>
  >;
  loading: boolean;
  error?: ApolloError;
}
