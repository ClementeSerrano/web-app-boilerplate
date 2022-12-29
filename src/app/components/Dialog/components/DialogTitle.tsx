import Typography from '../../Typography/Typography';
import { TypographyProps } from '../../Typography/Typography.types';

export default function DialogTitle({ children, ...props }: TypographyProps) {
  return (
    <Typography as="h1" variant="title6" {...props}>
      {children}
    </Typography>
  );
}
