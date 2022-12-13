import { CSSProperties } from 'react';

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
  error,
  ...inputProps
}: TextFieldProps) {
  const inputStyles: CSSProperties = {
    margin: `0 ${adornments?.right ? '8px' : '0'} 0 ${
      adornments?.left ? '8px' : '0'
    }`,
    ...style?.input,
  };

  const placeholder = !label ? basePlaceholder : '';

  return (
    <TextFieldContainer style={style?.container}>
      <TextFieldInputContainer
        variant={variant}
        error={error}
        isLabel={!!label}
        style={style?.inputContainer}
      >
        {adornments?.left}

        <TextFieldInput
          id={id}
          style={inputStyles}
          variant={variant}
          placeholder={placeholder}
          type={type}
          error={error}
          required
          {...inputProps}
        />

        {adornments?.right}

        <TextFieldBar variant={variant} style={style?.bar} error={error} />

        <TextFieldLabel
          style={style?.label}
          isLeftAdornment={!!adornments?.left}
          variant={variant}
          htmlFor={id}
          error={error}
        >
          {label}
        </TextFieldLabel>
      </TextFieldInputContainer>

      <TextFieldHighlight style={style?.highlight} />
    </TextFieldContainer>
  );
}
