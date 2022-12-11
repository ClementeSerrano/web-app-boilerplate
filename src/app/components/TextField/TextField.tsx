import { CSSProperties } from 'react';
import { useTheme } from 'styled-components';

import { TextFieldProps } from './TextField.types';
import {
  TextFieldContainer,
  TextFieldInputContainer,
  TextFieldInput,
  TextFieldHighlight,
  TextFieldBar,
  TextFieldLabel,
} from './TextField.styles';

export default function TextField({
  id,
  label,
  variant = 'standard',
  type = 'text',
  adornments,
  placeholder: basePlaceholder,
  style,
  colors,
  error,
  ...inputProps
}: TextFieldProps) {
  const theme = useTheme();

  const inputStyles: CSSProperties = {
    margin: `0 ${adornments?.right ? '8px' : '0'} 0 ${
      adornments?.left ? '8px' : '0'
    }`,
    ...style?.input,
  };

  const placeholder = !label ? basePlaceholder : '';

  const baseColor = colors?.base || theme.palette.text.light;

  const highlightColor = colors?.highlight || theme.palette.text.main;

  return (
    <TextFieldContainer style={style?.container}>
      <TextFieldInputContainer
        baseColor={baseColor}
        highlightColor={highlightColor}
        variant={variant}
        error={error}
        isLabel={!!label}
        style={style?.inputContainer}
      >
        {adornments?.left}

        <TextFieldInput
          id={id}
          style={inputStyles}
          baseColor={baseColor}
          highlightColor={highlightColor}
          variant={variant}
          placeholder={placeholder}
          type={type}
          error={error}
          required
          {...inputProps}
        />

        {adornments?.right}

        <TextFieldBar
          variant={variant}
          style={style?.bar}
          highlightColor={colors?.highlight || theme.palette.primary.main}
          error={error}
        />

        <TextFieldLabel
          style={style?.label}
          isLeftAdornment={!!adornments?.left}
          variant={variant}
          htmlFor={id}
          baseColor={colors?.base || theme.palette.text.main}
          error={error}
        >
          {label}
        </TextFieldLabel>
      </TextFieldInputContainer>

      <TextFieldHighlight style={style?.highlight} />
    </TextFieldContainer>
  );
}
