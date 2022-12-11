import { SwitchProps } from './Switch.types';
import {
  SwitchContainer,
  SwitchInput,
  SwitchLabel,
  SwitchErrorParagraph,
} from './Switch.styles';

export default function Switch({
  id,
  baseColor,
  error,
  style,
  className,
  ...props
}: SwitchProps) {
  return (
    <SwitchContainer style={style?.container} className={className?.root}>
      <SwitchInput
        id={id}
        type="checkbox"
        baseColor={baseColor}
        style={style?.input}
        className={className?.input}
        {...props}
      />

      <SwitchLabel
        htmlFor={id}
        style={style?.label}
        className={className?.label}
      />

      {error && (
        <SwitchErrorParagraph style={style?.error} className={className?.error}>
          {error}
        </SwitchErrorParagraph>
      )}
    </SwitchContainer>
  );
}
