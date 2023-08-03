import { CSSProperties } from 'react';
import { StateManagerProps } from 'react-select/dist/declarations/src/useStateManager';

export type SelectProps = StateManagerProps & {
  style?: SelectInputStyles;
};

export type SelectInputStyles = {
  menuPortal?: CSSProperties;
  control?: CSSProperties;
  container?: CSSProperties;
  valueContainer?: CSSProperties;
  dropdownIndicator?: CSSProperties;
  indicatorContainer?: CSSProperties;
  indicatorSeparator?: CSSProperties;
  singleValue?: CSSProperties;
  placeholder?: CSSProperties;
  menu?: CSSProperties;
  option?: CSSProperties;
};
