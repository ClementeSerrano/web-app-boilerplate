import { TypographyProps } from "./Typography.types";
import { TypographyContainer } from "./Typography.styles";

export default function Typography({
  children,
  variant = "paragraph1",
  ...props
}: TypographyProps) {
  return (
    <TypographyContainer variant={variant} {...props}>
      {children}
    </TypographyContainer>
  );
}
