import { DeviceType } from './DeviceContext.types';

/**
 * Determines the device type based on the window inner width.
 */
export function getDeviceType(): DeviceType {
  const width = window.innerWidth;

  if (width >= 1024) {
    return 'laptop';
  } else if (width >= 768) {
    return 'tablet';
  } else {
    return 'mobile';
  }
}
