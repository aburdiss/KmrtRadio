import { Platform } from 'react-native';

/**
 * @function isIos
 * @description Returns whether the current platform is an iOS device
 * This is useful for platform specific code that needs updated across the
 * application.
 * Created 7/16/23
 * @returns {boolean} Whether or not the platform is iOS or not
 *
 * @copyright 2023 Alexander Burdiss
 * @since 7/16/23
 * @version 1.0.0
 * @example
 * <>
 *   {isIos() && (
 *     <></>
 *   )}
 * </>
 */
export function isIos() {
  return Platform.OS === 'ios';
}
