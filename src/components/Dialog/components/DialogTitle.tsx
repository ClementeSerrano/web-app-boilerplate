import Typography from 'components/Typography/Typography';
import { TypographyProps } from 'components/Typography/Typography.interfaces';

export default function DialogTitle({ children, ...props }: TypographyProps) {
  return (
    <Typography as="h1" variant="title6" style={{ marginBottom: 0 }} {...props}>
      {children}
    </Typography>
  );
}
