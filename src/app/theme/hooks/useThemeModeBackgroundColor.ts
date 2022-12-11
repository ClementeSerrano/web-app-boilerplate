import { useMemo } from 'react';
import { useTheme } from 'styled-components';

import { ValueOf } from '../../../types/general.types';
import { ThemePalette } from '../theme.types';

export function useThemeModeBackgroundColor(
  baseVariant?: keyof ValueOf<Pick<ThemePalette, 'background'>>,
): string {
  const theme = useTheme();

  const variant = useMemo(() => {
    if (baseVariant) return baseVariant;

    switch (theme.mode) {
      case 'dark':
        return 'darker';

      case 'light':
        return 'lighter';

      default:
        return 'main';
    }
  }, [baseVariant, theme.mode]);

  return theme.palette.background[variant];
}
