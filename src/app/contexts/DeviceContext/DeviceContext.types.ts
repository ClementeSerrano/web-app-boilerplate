export type DeviceProviderValues = {
  type: DeviceType;
  isLaptop: boolean;
  isTablet: boolean;
  isPhone: boolean;
};

export type DeviceType = 'laptop' | 'tablet' | 'phone';
