import { useContext } from 'react';

import { AuthProfileContext } from 'modules/auth/contexts/AuthProfileProvider';

export function useAuthProfile() {
  return useContext(AuthProfileContext);
}
