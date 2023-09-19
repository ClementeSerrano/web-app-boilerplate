import { useContext } from 'react';

import { GAContext } from '../../contexts/GAProvider';

export default function useGA() {
  return useContext(GAContext);
}
