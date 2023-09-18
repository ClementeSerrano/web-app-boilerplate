import { useTheme } from 'styled-components';

import { DialogCloseProps } from '../Dialog.interfaces';
import CloseIcon from 'lib/assets/icons/CloseIcon';
import Button from 'components/Button/Button';

export default function DialogClose({
  className,
  style,
  ...props
}: DialogCloseProps) {
  const theme = useTheme();

  return (
    <Button
      variant="text"
      format="link"
      {...props}
      className={className}
      style={style}
    >
      <CloseIcon color={theme.colors.gray.light} height={12} />
    </Button>
  );
}
