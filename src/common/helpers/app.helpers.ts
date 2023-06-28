import { Children, ReactNode } from 'react';

/**
 * Gets the string nested into the react node (if it is)
 * @param children - React node to process.
 * @returns - The plane string nested into the react node.
 */
export function getTextFromReactChildren(children: ReactNode): string {
  let text = '';

  Children.map(children, child => {
    if (typeof child === 'string') {
      text += child;
    }
  });

  return text;
}

/**
 * Returns the initials of a full name
 * @param fullName - The full name of a person
 * @returns - The initials of the full name
 */
export function getInitials(fullName: string): string {
  const names = fullName.split(' ');

  let initials = '';

  if (names.length === 1) {
    initials = names[0].charAt(0);
  } else {
    initials = names[0].charAt(0) + names[names.length - 1].charAt(0);
  }

  return initials;
}
