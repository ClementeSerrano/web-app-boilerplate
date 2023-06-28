import { useEffect, useLayoutEffect } from 'react';

/**
 * Allows switching between useEffect and useLayoutEffect following the execution environment,
 * since useLayoutEffect is only compatible with browser envs.
 * This allows to execute effect code that could be generated from the server without the Window API.
 */
const useIsomorphicLayoutEffect =
  typeof window !== 'undefined' ? useLayoutEffect : useEffect;

export default useIsomorphicLayoutEffect;
