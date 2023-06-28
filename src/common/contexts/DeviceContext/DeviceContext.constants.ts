import { DeviceType } from './DeviceContext.types';

export const DEVICES_BREAKPOINTS: Record<
  DeviceType,
  { min: number; max: number }
> = {
  phone: {
    min: 0,
    max: 767,
  },
  tablet: {
    min: 768,
    max: 1023,
  },
  laptop: {
    min: 1024,
    max: 99999999,
  },
};
