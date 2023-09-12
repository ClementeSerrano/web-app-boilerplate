import { DEVICES_BREAKPOINTS } from './DeviceContext.constants';
import { DeviceType } from './DeviceContext.types';

/**
 * Determines the device type based on the window inner width.
 */
export function getDeviceType(): DeviceType {
  const width = window.innerWidth;

  if (width >= DEVICES_BREAKPOINTS.laptop.min) {
    return 'laptop';
  } else if (width >= DEVICES_BREAKPOINTS.tablet.min) {
    return 'tablet';
  } else {
    return 'phone';
  }
}
