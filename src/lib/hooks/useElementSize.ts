import { RefObject, useCallback, useEffect, useState } from 'react';
import useEventListener from './useEventListener';

type ElementSize = {
  width: number;
  height: number;
};

/**
 * Dynamically recover the width and the height of an HTML element.
 * Dimensions are updated when resizing the window.
 */
export default function useElementSize<T extends HTMLElement = HTMLDivElement>(
  elementRef: RefObject<T>,
  options?: { onUpdate?: (_: ElementSize) => void },
): ElementSize {
  const [size, setSize] = useState<ElementSize>({
    width: 0,
    height: 0,
  });

  const updateSize = useCallback(() => {
    const node = elementRef?.current;

    if (node) {
      const size = {
        width: node.offsetWidth || 0,
        height: node.offsetHeight || 0,
      };

      setSize(size);

      options?.onUpdate && options?.onUpdate(size);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [elementRef]);

  useEffect(() => {
    updateSize();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEventListener('resize', updateSize);

  return size;
}
