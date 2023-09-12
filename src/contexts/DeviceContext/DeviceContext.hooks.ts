import { useContext } from 'react';
import { DeviceContext } from './DeviceContext';

export function useDevice() {
  return useContext(DeviceContext);
}
