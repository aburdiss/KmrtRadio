import { useContext } from 'react';

import {
  kmrt,
  neon,
  summer,
  iceCream,
  jazz,
  jukebox,
  THEMES,
} from '../../Model/themes';
import { AppContext } from '../../Contexts/AppContext';

/**
 * @function useTheme
 * @description A custom hook that allows colors to be referenced directly from
 * the components instead of handling dark mode differently in each component.
 * @returns {Object} A colors object from which theme colors can be referenced
 * directly
 * @author Alexander Burdiss
 * @since 5/12/23
 * @version 1.0.0
 */
export function useTheme() {
  const { state } = useContext(AppContext);

  return (
    {
      [THEMES.KMRT]: kmrt,
      [THEMES.NEON]: neon,
      [THEMES.SUMMER]: summer,
      [THEMES.ICE_CREAM]: iceCream,
      [THEMES.JAZZ]: jazz,
      [THEMES.JUKEBOX]: jukebox,
    }[state?.theme] ?? kmrt
  );
}
