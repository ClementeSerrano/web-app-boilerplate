import { getAvatarChildrenProps } from './Avatar.utils';
import { AvatarProps } from './Avatar.types';
import { AvatarFallback, AvatarImg } from './Avatar.styles';

export default function Avatar({
  height = 24,
  withInitials = false,
  ...props
}: AvatarProps) {
  const childrenProps = getAvatarChildrenProps({
    withInitials,
    height,
    ...props,
  });

  const children = props.src ? (
    <AvatarImg {...childrenProps} />
  ) : (
    <AvatarFallback {...childrenProps} />
  );

  return <>{children}</>;
}
