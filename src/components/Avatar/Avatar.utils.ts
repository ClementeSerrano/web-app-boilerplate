import { getColorFormText } from 'lib/utils/get-color-from-text';
import { getTextFromReactChildren } from 'lib/utils/get-text-from-react-children';
import { AvatarProps } from './Avatar.types';

export function getAvatarChildrenProps({
  children,
  withInitials,
  src,
  alt,
  height,
  style,
}: AvatarProps) {
  const childrenText = getTextFromReactChildren(children);

  if (!src && withInitials && !!childrenText) {
    const backgroundColor = getColorFormText(childrenText);

    return {
      style: {
        backgroundColor,
        height,
        width: height,
        ...style,
      },
      children: `${childrenText.split(' ')[0][0]}${
        childrenText.split(' ')[1][0]
      }`,
    };
  }

  return {
    src,
    alt,
    style: {
      height: (height as number) + 16,
      width: (height as number) + 16,
      ...style,
    },
  };
}
