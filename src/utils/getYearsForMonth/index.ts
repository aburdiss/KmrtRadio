import { tracks } from '../../Model/Model';

/**
 * @function getYearsForMonth
 * @description Gets all available years in the data model for a passed in
 * month
 * Created 1/8/23
 * @param {string} month The month to find all available years in the data
 * model for.
 * @returns {number[]} An array of all of the years for the passed in month
 *
 * @copyright 2023 Alexander Burdiss
 * @author Alexander Burdiss
 * @since 1/14/23
 * @version 1.0.0
 */
export function getYearsForMonth(month: string) {
  return Object.keys(tracks[month]);
}
