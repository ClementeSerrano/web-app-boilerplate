import { useTheme } from 'styled-components';

import { DialogCloseProps } from '../Dialog.types';
import { DialogBaseCloseButton } from '../Dialog.styles';
import CloseIcon from '../../../icons/CloseIcon';

export default function DialogClose({
  className,
  style,
  ...props
}: DialogCloseProps) {
  const theme = useTheme();

  return (
    <DialogBaseCloseButton
      variant="text"
      format="link"
      {...props}
      className={className}
      style={style}
    >
      <CloseIcon color={theme.colors.gray.light} height={12} />
    </DialogBaseCloseButton>
  );
}
