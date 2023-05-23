import { Dimensions } from 'react-native';

/**
 * @function getIsTinyScreen
 * @description Checks whether the screen is tiny by checking it's longest
 * edge's width.
 * Created 5/22/23
 * @returns {boolean} A boolean of whether or not the screen is small.
 * @copyright 2023 Alexander Burdiss
 * @author Alexander Burdiss
 * @since 5/22/23
 * @version 1.0.0
 */
export function getIsTinyScreen() {
  const SMALL_SCREEN_HEIGHT = 600;
  // KMRT Radio always has Portrait orientation
  return Dimensions.get('screen').height < SMALL_SCREEN_HEIGHT;
}
