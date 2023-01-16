import DeviceInfo from 'react-native-device-info';

const GOOGLE_PLAY_LINK =
  'https://play.google.com/store/apps/developer?id=Alexander+Burdiss';
const APPLE_STORE_LINK =
  'https://apps.apple.com/us/developer/alexander-burdiss/id1496727055';
const AMAZON_STORE_LINK =
  'https://www.amazon.com/s?i=mobile-apps&rh=p_4%3AAlexander+Burdiss';

/**
 * @function getAppStoreLink
 * @description Gets the appropriate App Store link based on the brand of
 * device that the user has.
 * @returns {string} The appropriate link.
 *
 * @copyright 2023 Alexander Burdiss
 * @author Alexander Burdiss
 * @version 1.0.0
 * @since 1/16/23
 */
export function getAppStoreLink() {
  const brand = DeviceInfo.getBrand();
  if (brand === 'Apple') {
    return APPLE_STORE_LINK;
  }
  if (brand === 'Amazon') {
    return AMAZON_STORE_LINK;
  }
  return GOOGLE_PLAY_LINK;
}
