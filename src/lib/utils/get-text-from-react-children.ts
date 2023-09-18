import { Children, ReactNode } from 'react';

/**
 * Gets the string nested into the react node (if it is)
 * @param children - React node to process.
 * @returns - The plane string nested into the react node.
 */
export function getTextFromReactChildren(children: ReactNode) {
  let text = '';

  Children.map(children, child => {
    if (typeof child === 'string') {
      text += child;
    }
  });

  return text;
}
