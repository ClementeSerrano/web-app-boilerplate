import BaseSelect from 'react-select';
import { useTheme } from 'styled-components';

import { SelectProps } from './Select.types';
import { getSelectInputStyles } from './Select.styles';

export default function Select({ style, ...props }: SelectProps) {
  const theme = useTheme();

  return (
    <BaseSelect
      styles={getSelectInputStyles({ style, theme }) as any}
      {...props}
    />
  );
}
