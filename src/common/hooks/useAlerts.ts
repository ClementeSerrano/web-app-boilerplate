import { useContext } from 'react';

import { AlertsContext } from '../contexts/AlertsContext/AlertsContext';

export function useAlerts() {
  return useContext(AlertsContext);
}
