import { ButtonContainer } from './Button.styles';
import { ButtonProps } from './Button.interfaces';

export default function Button({
  children,
  as: Component = 'button',
  variant = 'primary',
  format = 'fill',
  size = 'md',
  loading = false,
  type = 'button',
  ...props
}: ButtonProps) {
  return (
    <ButtonContainer
      as={Component}
      $variant={variant}
      $format={format}
      $size={size}
      type={type}
      {...props}
    >
      {loading ? 'Loading...' : children}
    </ButtonContainer>
  );
}
