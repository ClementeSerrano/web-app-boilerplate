import { AuthType } from 'api/interfaces/__generated__/graphql';
import { WithChildren } from 'lib/interfaces/components.interfaces';
import { Dispatch, SetStateAction } from 'react';
import { GAEvent } from '../lib/interfaces/ga-event.enum';

export type GAContextValues = {
  init: boolean;
  setInit: Dispatch<SetStateAction<boolean>>;
  sendRegisterEvent: (type: AuthType) => void;
  sendCustomEvent: (event: GAEvent, params?: unknown) => void;
};

export type GAProviderProps = WithChildren & { enabled?: boolean };
