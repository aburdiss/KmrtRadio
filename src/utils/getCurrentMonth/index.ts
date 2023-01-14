import { months } from '../../Model/Model';

/**
 * @function getCurrentMonth
 * @description Gets the string value of the current month. This is simple but
 * I found myself repeating this logic all over the app
 * Created 1/8/23
 * @returns {string} The current month in human readable format
 *
 * @copyright 2023 Alexander Burdiss
 * @author Alexander Burdiss
 * @since 1/14/23
 * @version 1.0.0
 */
export function getCurrentMonth() {
  return months[new Date().getMonth()];
}
