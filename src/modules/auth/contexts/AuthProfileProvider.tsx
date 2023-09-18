import { createContext, useEffect, useState } from 'react';

import { AuthProfileContextValues } from './AuthProfileProvider.interfaces';
import { useAuthProfileLazyQuery } from '../lib/api/useAuthProfileLazyQuery';
import { AUTH_TOKEN_KEYS } from '../lib/constants/auth-token-keys';
import { WithChildren } from 'lib/interfaces/components.interfaces';
import { AuthProfileObjectType } from 'api/interfaces/__generated__/graphql';

export const AuthProfileContext = createContext({} as AuthProfileContextValues);

export default function AuthProfileProvider({ children }: WithChildren) {
  const [isAuth, setIsAuth] = useState(false);
  const [profile, setProfile] = useState<AuthProfileObjectType>();

  const [authProfileLazyQuery, { loading, error }] = useAuthProfileLazyQuery({
    onCompleted: data => {
      setProfile(data.profile);
      setIsAuth(true);
    },
  });

  // Find if user is authenticated on mount.
  useEffect(() => {
    const accessToken = localStorage.getItem(AUTH_TOKEN_KEYS.user);

    if (accessToken) {
      authProfileLazyQuery();
    }
  }, [authProfileLazyQuery]);

  return (
    <AuthProfileContext.Provider
      value={{
        isAuth,
        setIsAuth,
        profile,
        setProfile,
        loading,
        error,
      }}
    >
      {children}
    </AuthProfileContext.Provider>
  );
}
