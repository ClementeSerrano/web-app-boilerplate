import { TypographyProps } from './Typography.interfaces';
import { TypographyContainer } from './Typography.styles';

export default function Typography({
  children,
  variant = 'paragraph1',
  color,
  bold,
  noMargin,
  ...props
}: TypographyProps) {
  return (
    <TypographyContainer
      $variant={variant}
      $color={color}
      $bold={bold}
      $noMargin={noMargin}
      {...props}
    >
      {children}
    </TypographyContainer>
  );
}
