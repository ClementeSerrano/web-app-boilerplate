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

/**
 * Allow users to enter text into a UI. Typically appear in
 * forms and dialogs.
 * @param props - All props that a HTML input element receives (InputHTMLAttributes).
 * Extra props that receive:
 * @param props.adornments - Prefix or suffix components to add at the start or end of
 * the main component. "left" and "right" inputs are optional.
 * @param props.error - Boolean flag that allows to add error styles to the input if an
 * error from outside controller happens (optional).
 * @param props.label - Label to add to the input (optional).
 * @param props.style - Additional styles to add to all internal input components (container,
 * input, inputContainer, bar, label and highlight).
 * @param props.variant - Variant of the input to use ("standard" | "filled").
 * Default is "standard".
 * @example
 * A full example of usage is:
 * ```
 * function Component(){
 *   const [value, setValue] = useState("");
 *
 *   return (
 *     <TextField
 *       id="my-input"
 *       name="my-input"
 *       value={value}
 *       onChange={event => setValue(event.target.value)}
 *       variant="filled"
 *       label="My input"
 *       placeholder="My input placeholder"
 *     />
 *   )
 * }
 * ```
 */
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
